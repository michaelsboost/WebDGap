PhoneGapRelatedJsLoaded = true;


function DebugMsg(msg) {
	// Comment following line out for released code
	console.log("WebDGap Debug: " + msg);
}

//DebugMsg("start of phonegap-related.js");


function onEnvReady() {

	// This runs once the PhoneGap/Cordova environment is setup	


	// Test Code
	setTimeout(function() {
		/*
		DebugMsg("Running test code");
		if( cordova.platformId === "android" ) {
			var fb = new FileBrowser();
			fb.Show("MyApp.zip", function(fileEntry){

				console.log("FileBrowser- File Selected:");
				console.log(fileEntry);
			},
			function(){
				console.log("FileBrowser- File select canceled");
			});
		}
		*/
	}, 1000);
	
}

document.addEventListener("deviceready", function () {
	//$(function(){   -- theoretically could enable this to only call onEnvReady() after page load complete
	onEnvReady();
	//});
}, false);



// Invokes callback function (if valid)
// Also prevents unwanted exception propogating, returns callback ret val or NULL if exception
function handleCallback(cb, args) {
	if (typeof (cb) === "function") {
		try {
			var args = Array.prototype.slice.call(arguments, 1);
			return cb.apply(this, args);
		}
		catch (ex) {
			DebugMsg("callback function caused an exception");
			return null;
		}
	}
}


// Note: currently designed with big limitations due to leveraging fileBrowser.html lib
//	I found online.  Basically assume any new instance creation of a new FileChooser()
//	invalidates any existing ones.  (it will overwrite important state shared w/ fileBrowser.html)
//
// Public methods & properties:
//	FileBrowser(defaultFolder)   - defaultFolder is optional and expected to be a Cordova directory entry
//	Show(defaultFileName, onFileSelected)  - onFileSelected has one arg of a Cordova file entry
var FileBrowser = function(defaultFolder){

	var _this = this;
	this._onOk = null;
	this._default_fileName = "";
	this.lastFileSelected = null;

	//check if last selected folder was set
    if (typeof defaultFolder !== 'undefined') {
		lastFolderSelected = defaultFolder;
	}

	// Setup needed <a> DOM helper element if not already
	/*  Note:  this wasn't working and for some reason the browseBtn element had to be in the HTML (jquery mobile just adjust it upon loading)

	if( true || $('#browseBtn').length === 0 ){
		// style="display:none"
		var browseLink = $('#browseBtn');//$('<a href="fileBrowser.html" id="browseBtn" data-role="button" data-inline="true" style="position:fixed;z-index:999;">Browse</a>');
		browseLink.click(function(){
			//check if last selected folder was set
			if (typeof lastFolderSelected == 'undefined')
				lastFolderSelected = null;
		});
		//$('body').append(browseLink);
	}
	*/

	//create file chooser dialog parameters
	file_Browser_params = {
		directory_browser: true, //this is file browser. Default is false
		new_file_btn: false,
		new_folder_btn: true, //shoe new folder button. Default is true
		ok_btn: true,
		initial_folder: lastFolderSelected, //initial folder when dialog is displayed
		custom_title: "Choose folder to save your app",
		//callback function when file is selected
		on_cancel_file_select: function() {
			try
			{
				handleCallback(_this._onCancelFileBrowse);
			}
			catch(ex){}
		},
		//callback function when folder is selected
		on_folder_select: function (dirEntry) {
			//don't do anything
		},
		//callback function when OK button is clicked
		on_ok: function (dirEntry) {
			//save the last folder path
			lastFolderSelected = dirEntry;
			try
			{
				handleCallback(_this._onOk, dirEntry);
			}
			catch(ex){}
			return false; //close dialog when any file is selected (tapped)
		}
	};

	this.Show = function(defaultFileName, onOk, onCancelFileBrowse){
		this._onOk = onOk;
		this._onCancelFileBrowse = onCancelFileBrowse;
		this._default_fileName = defaultFileName;
		$('#browseBtn').click();
	};
};

document.addEventListener("deviceready", function () {

	// Figure out default FileBrowser folder ahead of time since callback method required and
	// possibly aync delay could complicate doing something like new FileChooser().Show();
	
	// cordova.file.externalRootDirectory is null if no external storage present
	var saveDir = cordova.file.externalRootDirectory != null ?
		cordova.file.externalRootDirectory : cordova.file.externalDataDirectory;
	lastFolderSelected = null;
	window.resolveLocalFileSystemURL(saveDir, function (dir) {
		lastFolderSelected = dir;
	},
	function (err) {
		DebugMsg('failed to get resolve saveDir: ' + saveDir);;
	});

}, false);



// function pgSaveFile(...)
//		fileData - blob of data to save
//		defaultFileName - default file name to save to  (file chooser prompt may change)
//		onSuccess(saveFile) - optional event handler called on success
//			args:
//				saveFile - Cordova file entry
//		onError(reason) - optional event handler called on failure
//			args:
//				reason - string (TODO: put known reason strings here)
//		onProgress(byytesWritten, percentDone)  - optional event handler called on onProgress
function pgSaveFile(fileData, defaultFileName, onSuccess, onError, onProgress) {

	// Maximum number of bytes to write with one call to Cordova / Platform
	// Some zips we save are over 100MB and were causing app crashes if passing that size of data in one call
	var maxWriteChunkSize = 5 * 1024 * 1024;

	// State related to request and progress
	var lastWriteChunkSize = 0;
	var totalBytes = fileData.size;
	var bytesWritten = 0;

	var fileName = defaultFileName;

	var startSave = function(file) {

		var afterGotFile = function(entry){
				entry.createWriter(function (writer) {

				var doNextWrite = function(){
					var blobChunkSize = maxWriteChunkSize > (totalBytes - bytesWritten) ? totalBytes - bytesWritten : maxWriteChunkSize;
					var blobChunk = fileData.slice(bytesWritten, bytesWritten + blobChunkSize);

					// Write to the file
					lastWriteChunkSize = blobChunkSize;
					writer.write(blobChunk);
				};

				writer.onwriteend = function (evt) {
					bytesWritten += lastWriteChunkSize;
					var percentDone = Math.trunc( (bytesWritten/totalBytes) * 100 );
					handleCallback(onProgress, bytesWritten, percentDone);

					if (bytesWritten < totalBytes) {
						doNextWrite();
					}
					else {
						DebugMsg('All done saving generated app file.');
						handleCallback(onSuccess, entry);
					}
				};

				writer.onerror = function (e) {
					DebugMsg("Failed file read: " + e.toString());	
					handleCallback(onError, e);
				};

				// Start the file writing sequence
				doNextWrite();

			}, function (error) {
				DebugMsg("Error: Could not create file writer, " + error.code);
				handleCallback(onError, error.code);
			});
		};

		var afterGotDir = function(dir){
			dir.getFile(fileName, { create: bytesWritten == 0 ? true : false, exclusive: false }, function (entry) {
				afterGotFile(entry);

			}, function (error) {
				DebugMsg("Error: Could not getFile, " + error.code);
				handleCallback(onError, error.code);
			});
		};

		if( typeof(file) === "object" && typeof(file.nativeURL) === "string" ) {
			if( !file.isDirectory ){
				// File param is cordova file data entry object returned from dirReader.readEntries()
				var strDirUrl = file.nativeURL;
				strDirUrl = strDirUrl.substring( 0, strDirUrl.lastIndexOf('/')+1 );
				window.resolveLocalFileSystemURL(strDirUrl, function (dir) {
					afterGotDir(dir);
				},
				function (error) {
					DebugMsg("Error: Failed to resolve directory URL from FileBrowser, " + error.code);
					handleCallback(onError, error.code);
				});
			}
			else{
				dir = file;
				afterGotDir(dir);
			}

		}
		else {
			var dir = lastFolderSelected;
			afterGotDir(dir);
		}
	};

	//if( cordova.platformId === "android" ) {
	// I guess this file browser can always show if PhoneGap environment for now (maybe iOS tho will change this to have conditionals)
		var fb = new FileBrowser();
		fb.Show(defaultFileName, function(dirEntry){
			startSave(dirEntry);
		},
		function(){
			handleCallback(onError, 1);
			DebugMsg("File select canceled, pgSaveFile calling error callback");
		});
	/*
	}
	else {
		startSave(defaultFileName);
	}
	*/
}
