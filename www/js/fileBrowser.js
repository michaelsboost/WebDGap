// This code used to be inside fileBrowser.html , but was annoying that way because
// Chrome debugger wouldn't allow debugging js code changes any way I could find.


var currPath = "";
var currEntry = null;
var bClosingDialogByCallbackRequest = false;



function fbInit()
{
    /////////////////////////////////////////////////////////////////
    // Set defaults for  file_Browser_params
    if (typeof file_Browser_params == 'undefined')
        file_Browser_params = new Object();
        
    if (typeof file_Browser_params.directory_browser != 'boolean')
        file_Browser_params.directory_browser = false;

    if (typeof file_Browser_params.on_folder_select != 'function')
        file_Browser_params.on_folder_select = null;

    if (typeof file_Browser_params.on_file_select != 'function')
        file_Browser_params.on_file_select = null;
        
    if (typeof file_Browser_params.on_ok != 'function')
        file_Browser_params.on_ok = null;
        
    if (typeof file_Browser_params.new_file_btn == 'undefined')
        file_Browser_params.new_file_btn = true;

    if (typeof file_Browser_params.new_folder_btn == 'undefined')
        file_Browser_params.new_folder_btn = true;

    // New features Tom Gibson added:
    if (typeof file_Browser_params.ok_btn == 'undefined')
        file_Browser_params.ok_btn = true;

    if (typeof file_Browser_params.default_fileName == 'undefined')
        file_Browser_params.default_fileName = "untitled.txt";

    if (typeof file_Browser_params.custom_title == 'undefined')
        file_Browser_params.custom_title = null;

    if (typeof file_Browser_params.confirm_selected_file == 'undefined')
        file_Browser_params.confirm_selected_file = false;

    // Automaticaly appends " (filename)" before displaying
    if (typeof file_Browser_params.confirm_selected_file_prompt == 'undefined')
        file_Browser_params.confirm_selected_file_prompt = "Are you sure you want to select this file?";

    if (typeof file_Browser_params.on_cancel_file_browse != 'function')
        file_Browser_params.on_cancel_file_browse = null;

    if (typeof file_Browser_params.del_file_btn == 'undefined')
        file_Browser_params.del_file_btn = false;

    if (typeof file_Browser_params.rename_file_btn == 'undefined')
        file_Browser_params.rename_file_btn = false;


    /////////////////////////////////////////////////////////////////
    // Setup the HTML dialog related stuff

    if (!file_Browser_params.new_file_btn)
        $("#new_file_btn").hide();

    if (!file_Browser_params.new_folder_btn)
        $("#new_dir_btn").hide();

    if (!file_Browser_params.ok_btn)
        $("#file_browser_ok").hide();

    if (typeof(file_Browser_params.custom_title) == 'string') {
        $("#FileBrowserTitleBar").text(file_Browser_params.custom_title);
    }

    
    $("#new_file_btn").click(function(){
        if (currEntry == null)
            return;

        var fileName = prompt("Enter File Name", file_Browser_params.default_fileName);
        if (fileName == null || fileName == '')
            return;
        currEntry.getFile(fileName,{create:false},function(){
            alert("File already exists");
        }, 
        function(){
            currEntry.getFile(fileName,{create:true}, function(){
                //refresh current folder
                fbGetEntries(currEntry);
            }, function(){
                alert("Error creating file " + fileName);
            });
        });
    });
    
    $("#new_dir_btn").click(function(){
        if (currEntry == null)
            return;
        var fileName = prompt("Enter Folder Name","untitled");
        if (fileName == null || fileName == '')
            return;
        currEntry.getDirectory(fileName,{create:false},function(){
            alert("Folder already exists");
        }, 
        function(){
            currEntry.getDirectory(fileName,{create:true}, function(){
                //refresh current folder
                fbGetEntries(currEntry);
            }, function(){
                alert("Error creating file " + fileName);
            });
        });
    });
    
    $("#file_browser_ok").click(function(){
        if (file_Browser_params.on_ok == null)
            return;
        file_Browser_params.on_ok(currEntry);
        bClosingDialogByCallbackRequest = true;
    });
    
    if (typeof file_Browser_params.initial_folder == 'undefined' ||
        file_Browser_params.initial_folder == null)
    {
        file_Browser_params.initial_folder = null;
        fbGetRootAndDisplay();
    } 
    else
    {
        var url = file_Browser_params.initial_folder.nativeURL;
        window.resolveLocalFileSystemURL(url);
        fbGetEntries(file_Browser_params.initial_folder);
    }

    $("#rk_file_dialog").bind("pagehide",function(){
        if( !bClosingDialogByCallbackRequest ) {
            if( file_Browser_params.on_cancel_file_browse != null ) {
                file_Browser_params.on_cancel_file_browse();
            }
        }
    });
}

function fbGetRootAndDisplay()
{
    fbGetRoot(function(dirEntry){
        try {
            fbGetEntries(dirEntry);
        } catch (err)
        {
            fbAlertError(err);
        }
    });
}

function fbGetRoot(onGetRoot)
{
    if (typeof window.requestFileSystem != 'undefined') {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
            if (typeof onGetRoot != 'undefined')
                onGetRoot(fileSystem.root);
        }, function(){
            log("Error accessing local file system");
        });
    }
    
    return null;
}

function fbUpOneLevel()
{
    if (currEntry == null)
        return;
    currEntry.getParent(function(parentArg){
        fbGetEntries(parentArg);
    }, function(error){
        alert("Error getting parent folder");
    })
}

function fbGetEntries(dirEntry)
{
    if (dirEntry == null)
        return;
    
    currPath = dirEntry.fullPath;
    currEntry = dirEntry;
    $("#curr_folder").html(currPath);
    var dirReader = dirEntry.createReader();
    dirReader.readEntries(function(entries){
        fbDisplayEntries(entries);			
    }, function(err){
        if (typeof err.message != 'undefined')
            err = err.message;
        alert(err);	
    });
}

function fbDisplayEntries(entriesArray)
{
    entriesArray.sort(function(a,b){
        var str1 = a.name.toLowerCase();
        var str2 = b.name.toLowerCase();
        if (str1 < str2)
            return -1;
        if (str1 > str2)
            return 1;
        return 0;
    });

    var strD = "D";
    var strF = "F";
    strD = '<img class="EntryTypeIcon" src="imgs/folder.svg" />';
    strF = '<img class="EntryTypeIcon" src="imgs/file.svg" />';
    
    $("#fileBrowser_entries").empty();
    var table = $("<table id='file_entry_table'></table>").appendTo("#fileBrowser_entries");
    
    var row = $("<tr class='file_list_row'>"+strD+"<td>..</td></tr>").appendTo(table);
    $(row).click(function(event){
        fbUpOneLevel();
    });
    
    for (var i in entriesArray)
    {
        var isFolder = entriesArray[i].isDirectory;
        var name = entriesArray[i].name;
        
        if (file_Browser_params.directory_browser && !isFolder)
            continue;
        
        var row = $("<tr class='file_list_row'></tr>").appendTo(table);
        $(row).data("entry", entriesArray[i]);

        var fileFieldExtraContent = null;
        if( !isFolder ) {
            if (file_Browser_params.rename_file_btn === true || 
                file_Browser_params.del_file_btn === true )
            {
                fileFieldExtraContent = $('<span class="file_field_extra"></span>');

                if (file_Browser_params.rename_file_btn === true)
                {
                    var btn = $('<a class="file_rename_btn">R</a>')
                    btn.click(function(event){
                        var entryData = $(this).closest('tr').data("entry");
                        var strNewName = prompt("New file name", entryData.name);
                        if( entryData.name != strNewName ) {              
                            currEntry.getFile(entryData.name,{create:false}, 
                            function(fileEntry){
                                fileEntry.moveTo(currEntry, strNewName, function(){
                                    fbGetEntries(currEntry);
                                },
                                function(){
                                    alert("Failed to rename file");
                                });
                            },
                            function(){
                                alert("Error");
                            });
                        }
                    });
                    fileFieldExtraContent.append(btn);
                }

                if (file_Browser_params.del_file_btn === true)
                {
                    var btn = $('<a class="file_del_btn">X</a>')
                    btn.click(function(event){
                        var entryData = $(this).closest('tr').data("entry");    
                        currEntry.getFile(entryData.name,{create:false}, 
                        function(fileEntry){
                            fileEntry.remove(function(){
                                fbGetEntries(currEntry);
                            },
                            function(){
                                alert("Failed to delete file");
                            });
                        },
                        function(){
                            alert("Error");
                        });
                    });
                    fileFieldExtraContent.append(btn);
                }
            }
        }
        
        $("<td class='file_icon'>" + (isFolder ? strD : strF) + "</td>").appendTo(row);
        var fileField = $("<td class='file_name'>" + name + "</td>");
        if( fileFieldExtraContent != null ) {
            fileField.append(fileFieldExtraContent);
        }
        fileField.appendTo(row);
        $(row).click(function(event){
            var entryData = $(this).data("entry");
            if (entryData.isDirectory) {
                if (file_Browser_params.on_folder_select != null)
                {
                    var ret = file_Browser_params.on_folder_select(entryData);
                    if (ret == false) {
                        bClosingDialogByCallbackRequest = true;
                        $('.ui-dialog').dialog('close');
                        return;
                    }
                }
                fbGetEntries(entryData);
            } else if (file_Browser_params.on_file_select != null)
            {
                var bAbort = false;
                if( file_Browser_params.confirm_selected_file ) {
                    var strPrompt = file_Browser_params.confirm_selected_file_prompt + " " + entryData.name;
                    if( !confirm(strPrompt) ) {
                        bAbort = true;
                    }
                }

                if( !bAbort ) {
                    var ret = file_Browser_params.on_file_select(entryData);
                    if (ret == false) {
                        bClosingDialogByCallbackRequest = true;
                        $('.ui-dialog').dialog('close');
                        return;
                    }
                }
            }
        });
    }
}

function fbAlertError(err){
    if (typeof err.message != 'undefined')
        err = err.message;
    alert(err);
}

