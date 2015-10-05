var loader = $(".load"),
    c16 = $(".n16"),
    c32 = $(".n32"),
    c64 = $(".n64"),
    canvas = $(".holder"),
    holder = document.getElementById("imageloader"),
    loadFiles = $("#file, .load"),
    ctx16 = c16[0].getContext("2d"),
    ctx32 = c32[0].getContext("2d"),
    ctx64 = c64[0].getContext("2d"),
    ctx = canvas[0].getContext("2d");

function displayPreview(file) {
  var reader = new FileReader();

  reader.onload = function(e) {
    var img = new Image();
    var img16 = new Image();
    var img32 = new Image();
    var img64 = new Image();
    img.src = e.target.result;
    img16.src = e.target.result;
    img32.src = e.target.result;
    img64.src = e.target.result;
    img16.onload = function() {
      // x, y, width, height
      ctx16.drawImage(img16, 0, 0, 16, 16);
    };
    img32.onload = function() {
      // x, y, width, height
      ctx32.drawImage(img32, 0, 0, 32, 32);
    };
    img64.onload = function() {
      // x, y, width, height
      ctx64.drawImage(img64, 0, 0, 64, 64);
    };
    img.onload = function() {
      // x, y, width, height
      ctx.drawImage(img, 0, 0, 128, 128);
    };
  };
  reader.readAsDataURL(file);
}

$(document).ready(function() {
  $(".dialog-bg").hide();
  
  $(window).on("load resize", function() {
    // Landscape
    // if ( $(window).width() > $(window).height() ) {
    //   $(".head").attr("style", "background-size: 100% auto");
    //   // Portrait
    // } else if ( $(window).width() < $(window).height() ) {
    //   $(".head").attr("style", "background-size: auto 100%;");
    // }
    
    if ( $(window).width() > 670 ) {
      $("#imageloader").attr("class", "").css("margin", "20px 10em");
    } else {
      $("#imageloader").attr("class", "fill").attr("style", "");
    }
  });
  
  // Detect if users browser can load and download files in Javascript
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Detect if users browser can download files in Javascript
  } else {
    alert("The File APIs are not fully supported in this browser.");
  }
  
  // Trigger Load File
  $(".loadzip").on("click", function() {
    $("#file").trigger("click");
  });
  
  // Show error if zip is corrupted
  if (!window.FileReader || !window.ArrayBuffer) {
    $(".error_block").removeClass("hide");
    return;
  }

  function printContent(name, binaryContent) {
    var $fileContent = $("<ul>");
    try {
      var $title = $("<h4>", {
        text : name
      });
      $result.append($title);

      var dateBefore = new Date();
      // read the content of the file with JSZip
      var zip = new JSZip(binaryContent);
      var dateAfter = new Date();

      $title.append($("<span>", {
        text:" (parsed in " + (dateAfter - dateBefore) + "ms)"
      }));
      $(".check").removeClass("hide");

      // that, or a good ol' for(var entryName in zip.files)
      $.each(zip.files, function (index, zipEntry) {
        $fileContent.append($("<li class=\"hide\">", {
          text : zipEntry.name
        }));
        // the content is here : zipEntry.asText()
      });
    } catch(e) {
      $fileContent = $("<div>", {
        "class" : "alert alert-danger",
        text : "Error reading " + theFile.name + " : " + e.message
      });
    }
    $result.append($fileContent);
  }
  
  $(".call").click(function() {
    loader.trigger("click");
  });

  // Drag and drop image load
  holder.ondragover = function () {
    this.className = "hover";
    return false;
  };
  holder.ondragend = function () {
    this.className = "";
    return false;
  };
  holder.ondrop = function(e) {
    $(".loadzip, .logo").removeClass("hide");
    loader.addClass("hide");
    this.className = "";
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    displayPreview(file);
  };

  loader.on("change", function(evt) {
    $(".loadzip, .logo").removeClass("hide");
    
    var file = evt.target.files[0];
    displayPreview(file);
  });
  
  $("[data-action=sitename]").on("keyup", function() {
    if ( $(this).val() === "" ) {
      $(".checkimageloader").addClass("hide");
    } else {
      $(".checkimageloader").removeClass("hide");
    }
  });
  
  // Show contents
  var $result = $(".result");
  loadFiles.on("change", function(evt) {
    // if ( ($("#file").val() === "") || ($(".load").val() === "") || ($("[data-action=sitename]").val() === "") ) {
    if ( ($("#file").val() === "") || ($("[data-action=sitename]").val() === "") ) {
      
    } else {
      $(".check").removeClass("hide");
      
      // remove content
      $result.html("");
      // be sure to show the results
      $(".result_block").removeClass("hide");

      // see http://www.html5rocks.com/en/tutorials/file/dndfiles/

      var files = evt.target.files;
      for (var i = 0, f; f = files[i]; i++) {

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            var webAppZipBinary = e.target.result;
            printContent(theFile.name, webAppZipBinary);
            
            // Download as Windows App
            $(".export-as-win-app").on("click", function() {
              JSZipUtils.getBinaryContent("YourWinApp.zip", function(err, data) {
                if(err) {
                  throw err; // or handle err
                }
                
                var zip = new JSZip();
                zip.load(data);
                zip.folder("resources/default_app/app/").load(webAppZipBinary);    
                var Img16 = c16[0].toDataURL("image/png");
                var Img32 = c32[0].toDataURL("image/png");
                var Img64 = c64[0].toDataURL("image/png");
                var Img128 = canvas[0].toDataURL("image/png");
                zip.file("resources/default_app/icons/16.png", Img16.split('base64,')[1],{base64: true});
                zip.file("resources/default_app/icons/32.png", Img32.split('base64,')[1],{base64: true});
                zip.file("resources/default_app/icons/64.png", Img64.split('base64,')[1],{base64: true});
                zip.file("resources/default_app/icons/128.png", Img128.split('base64,')[1],{base64: true});
                zip.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-action=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-action=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n");

                zip.file("resources/default_app/index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>" + $("[data-action=sitename]").val() + "</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />\n    <style>\n     html, body {\n        height: 100%;\n       margin: 0;\n        padding: 0;\n       overflow: hidden;\n     }\n     iframe {\n        width: 100%;\n        height: 100%;\n       border: 0;\n        overflow: auto;\n     }\n    </style>\n    <script>\n      try {\n        $ = jQuery = module.exports;\n        // If you want module.exports to be empty, uncomment:\n        // module.exports = {};\n      } catch(e) {}\n    </script>\n  </head>\n  <body>\n   <iframe src=\"app/index.html\"></iframe>\n  </body>\n</html>");
                
                // Your Web App
                // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n");
                var content = zip.generate({type:"blob"});
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-win.zip");
                return false;
              });
            });
            
            // Download as Mac App
            $(".export-as-mac-app").on("click", function() {
              JSZipUtils.getBinaryContent("YourMacApp.zip", function(err, data) {
                if(err) {
                  throw err; // or handle err
                }
                
                var zip = new JSZip();
                zip.load(data);
                zip.folder("data/content/app").load(webAppZipBinary);
                var Img16 = c16[0].toDataURL("image/png");
                var Img32 = c32[0].toDataURL("image/png");
                var Img64 = c64[0].toDataURL("image/png");
                var Img128 = canvas[0].toDataURL("image/png");
                zip.file("data/content/app/icons/16.png", Img16.split('base64,')[1],{base64: true});
                zip.file("data/content/app/icons/32.png", Img32.split('base64,')[1],{base64: true});
                zip.file("data/content/app/icons/64.png", Img64.split('base64,')[1],{base64: true});
                zip.file("data/content/app/icons/128.png", Img128.split('base64,')[1],{base64: true});
                
                zip.file("data/package.json", '{\n  "main"  : "content/index.html",\n  "name"  : "'+ $("[data-action=sitename]").val() +'",\n  "window": {\n    "toolbar"    : false\n  }\n}');
                zip.file("data/content/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-action=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n\n    <script src="js/main.js"></script>\n  </body>\n</html>');
                // zip.file("data/content/js/main.js", 'document.addEventListener("DOMContentLoaded", function() {\n  // Load library\n  var gui = require("nw.gui");\n\n  // Reference to window\n  var win = gui.Window.get();\n\n  window.addEventListener("keydown", function(e) {\n  // Reload App (CMD+R)\n    if ( e.metaKey && e.keyCode == 82 ) {\n      location.reload(true);\n    }\n  //   else \n  // // Hide Mac App (CMD+W)\n  //   if ( e.metaKey && e.keyCode == 87 ) {\n  //     win.hide();\n  //   }\n    // else\n  // Toggle fullscreen window (CTRL+CMD+F)\n    // if ( e.shiftKey && e.metaKey && e.keyCode == 70 ) {\n      // win.toggleFullscreen();\n    // }\n  });\n\n  // Close buttons hides app\n  // var hidden = false;\n  // gui.App.on("reopen", function(){\n  //   hidden = false;\n  //   win.show();\n  // })\n\n  // win.on("close", function(){\n  //   if (hidden == true) {\n  //     gui.App.quit();\n  //   } else {\n  //     win.hide();\n  //     hidden = true;\n  //   }\n  // });\n\n  // Create menu container\n  var Menu = new gui.Menu({\n    type: "menubar"\n  });\n\n  //initialize default mac menu\n  Menu.createMacBuiltin("'+ $("[data-action=sitename]").val() +'");\n\n  // Get the root menu from the default mac menu\n  var rootMenu = Menu.items[2].submenu;\n\n  // Append new item to root menu\n  rootMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Toggle Fullscreen",\n      key: "F",\n      modifiers: "cmd",\n      click : function () {\n        win.toggleFullscreen();\n      }\n    })\n  );\n\n  rootMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Reload App",\n      key: "R",\n      modifiers: "shift-cmd",\n      click : function () {\n        location.reload(true);\n      }\n    })\n  );\n\n  // Append Menu to Window\n  gui.Window.get().menu = Menu;\n});');
                zip.file("data/content/js/main.js", 'document.addEventListener("DOMContentLoaded", function() {\n  // Load library\n  var gui = require("nw.gui");\n\n  // Reference to window\n  var win = gui.Window.get();\n\n  // Create menu container\n  var Menu = new gui.Menu({\n    type: "menubar"\n  });\n\n  //initialize default mac menu\n  Menu.createMacBuiltin("'+ $("[data-action=sitename]").val() +'");\n\n  // Get the root menu from the default mac menu\n  var rootMenu = Menu.items[0].submenu;\n  var windowMenu = Menu.items[2].submenu;\n\n  // Append new item to root menu\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Toggle Fullscreen",\n      key: "F",\n      modifiers: "cmd",\n      click : function () {\n        win.toggleFullscreen();\n      }\n    })\n  );\n\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Reload App",\n      key: "r",\n      modifiers: "cmd",\n      click : function () {\n        win.reload();\n      }\n    })\n  );\n\n  // Remove About Node-Webkit\n  rootMenu.removeAt(0);\n\n  // Append Menu to Window\n  gui.Window.get().menu = Menu;\n});');
                zip.file("run.sh", "open -a /Applications/"+ $("[data-action=sitename]").val().replace(/ /g, "") +".app/Contents/data/"+ $("[data-action=sitename]").val().replace(/ /g, "") +".app");
                
                zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n");
                var content = zip.generate({type:"blob"});
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-mac.zip");
                return false;
              });
            });
            
            // Download as Linux App
            $(".export-as-lin-app").on("click", function() {
              JSZipUtils.getBinaryContent("YourLinApp.zip", function(err, data) {
                if(err) {
                  throw err; // or handle err
                }
                
                var zip = new JSZip();
                zip.load(data);
                zip.folder("resources/default_app/").load(webAppZipBinary);
                var Img16 = c16[0].toDataURL("image/png");
                var Img32 = c32[0].toDataURL("image/png");
                var Img64 = c64[0].toDataURL("image/png");
                var Img128 = canvas[0].toDataURL("image/png");
                zip.file("resources/default_app/icons/16.png", Img16.split('base64,')[1],{base64: true});
                zip.file("resources/default_app/icons/32.png", Img32.split('base64,')[1],{base64: true});
                zip.file("resources/default_app/icons/64.png", Img64.split('base64,')[1],{base64: true});
                zip.file("resources/default_app/icons/128.png", Img128.split('base64,')[1],{base64: true});
                zip.file($("[data-action=sitename]").val().split(" ").join("-") +".desktop", "[Desktop Entry]\nName="+ $("[data-action=sitename]").val() +"\nPath=/home/kodeweave/"+ $("[data-action=sitename]").val().split(" ").join("-") +"\nActions=sudo;\nExec=./"+ $("[data-action=sitename]").val().split(" ").join("-") +"/electron\nIcon=/home/kodeweave/"+ $("[data-action=sitename]").val().split(" ").join("-") +"/resources/default_app/icons/128.png\nTerminal=true\nType=Application\nStartupNotify=true\n\n");
                zip.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-action=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-action=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n");
                
                // Your Web App
                // zip.file("source.c", "/*\n  Save this file as main.c and compile it using this command\n  (those are backticks, not single quotes):\n    gcc -Wall -g -o main main.c `pkg-config --cflags --libs gtk+-2.0 webkit-1.0` -export-dynamic\n  \n  Then execute it using:\n  ./main\n  \n  If you can't compile chances are you don't have gcc installed.\n  Install gcc/c with the following terminal command. (This command is for Debian based Linux distros)\n    sudo apt-get install libgtk2.0-dev libgtk2.0-doc libglib2.0-doc\n  \n  WebKit requires libraries to successfully aquire, configure, and compile. You can get libraries by issuing the following command in your terminal:\n    sudo apt-get install subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev\n  \n  Ubuntu Webkit information - https://help.ubuntu.com/community/WebKit\n    sudo apt-get install libwebkitgtk-dev python-webkit-dev python-webkit\n  \n  Required dependencies for this build: (If you installed all the above this is not needed)\n    sudo apt-get install libgtk2.0-dev libgtk2.0-doc libglib2.0-doc subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev libwebkitgtk-dev\n*/\n\n#include <limits.h>\n#include <gtk/gtk.h>\n#include <webkit/webkit.h>\n\nstatic GtkWidget* window;\nstatic WebKitWebView* web_view;\n\nstatic void destroy_cb (GtkWidget* widget, gpointer data) {\n  gtk_main_quit();\n}\n\nstatic GtkWidget* create_browser() {\n  GtkWidget* scrolled_window = gtk_scrolled_window_new (NULL, NULL);\n  gtk_scrolled_window_set_policy (GTK_SCROLLED_WINDOW (scrolled_window), GTK_POLICY_AUTOMATIC, GTK_POLICY_AUTOMATIC);\n\n  web_view = WEBKIT_WEB_VIEW (webkit_web_view_new ());\n  gtk_container_add (GTK_CONTAINER (scrolled_window), GTK_WIDGET (web_view));\n\n  return scrolled_window;\n}\n\nint main (int argc, char* argv[]) {\n  gtk_init (&argc, &argv);\n\n  GtkWidget* vbox = gtk_vbox_new (FALSE, 0);\n  gtk_box_pack_start (GTK_BOX (vbox), create_browser(), TRUE, TRUE, 0);\n\n  GtkWidget* window = gtk_window_new (GTK_WINDOW_TOPLEVEL);\n  gtk_window_set_default_size (GTK_WINDOW (window), 800, 560);\n  gtk_widget_set_name (window, \"" + $('.projectname').val() + "\");\n  /* gtk_window_set_icon_from_file(window, \"app/logo.png\", NULL); */\n  g_signal_connect (G_OBJECT (window), \"destroy\", G_CALLBACK (destroy_cb), NULL);\n  gtk_container_add (GTK_CONTAINER (window), vbox);\n  \n  char uri[PATH_MAX];\n  char cwd[PATH_MAX];\n\n  getcwd(cwd, sizeof(cwd));\n\n  if (argc > 1)\n      snprintf(uri, sizeof(uri), \"%s\", argv[1]);\n  else\n      snprintf(uri, sizeof(uri), \"file://%s/" + $('.projectname').val() + "/app/index.html\", cwd);\n  \n  webkit_web_view_open (web_view, uri);\n\n  gtk_widget_grab_focus (GTK_WIDGET (web_view));\n  gtk_widget_show_all (window);\n  gtk_main ();\n\n  return 0;\n}\n");
                // zip.file("README", "This application for Linux relies on the following dependencies...\n  sudo apt-get install subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev\n\nIf WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n");
                var content = zip.generate({type:"blob"});
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-lin.zip");
                return false;
              });
            });
            
            // Download as Chrome App
            $(".export-as-chrome-app").on("click", function() {
              $(".dialog-bg").fadeIn();
            });
            $(".cancel").on("click", function() {
              $(".dialog-bg").fadeOut();
            });
            
            $(".confirm").on("click", function() {
              var zip = new JSZip();
              zip.folder("app").load(webAppZipBinary);
              var Img16 = c16[0].toDataURL("image/png");
              var Img32 = c32[0].toDataURL("image/png");
              var Img64 = c64[0].toDataURL("image/png");
              var Img128 = canvas[0].toDataURL("image/png");
              zip.file("assets/16.png", Img16.split('base64,')[1],{base64: true});
              zip.file("assets/32.png", Img32.split('base64,')[1],{base64: true});
              zip.file("assets/64.png", Img64.split('base64,')[1],{base64: true});
              zip.file("assets/128.png", Img128.split('base64,')[1],{base64: true});
              
              zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});");
              zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nwebview, iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}");
              zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $(".name").val() +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\"app/index.html\">\n      Your Chromebook does not support the iFrame html element.\n    </iframe>\n  </body>\n</html>");
              
              if ( $(".offline-mode").is(":checked") ) {
                zip.file("manifest.json", '{\n  "manifest_version": 2,\n  "name": "'+ $("[data-action=sitename]").val() +'",\n  "short_name": "'+ $("[data-action=sitename]").val() +'",\n  "description": "'+ $(".descr").val() +'",\n  "version": "1.0",\n  "minimum_chrome_version": "38",\n  "offline_enabled": true,\n  "permissions": [ "storage", "fileSystem", "unlimitedStorage", "http://*/", "https://*/" ],\n  "icons": {\n    "16": "assets/16.png",\n    "32": "assets/32.png",\n    "64": "assets/64.png",\n    "128": "assets/128.png"\n  },\n\n  "app": {\n    "background": {\n      "scripts": ["background.js"]\n    }\n  }\n}\n');
              } else {
                zip.file("manifest.json", '{\n  "manifest_version": 2,\n  "name": "'+ $("[data-action=sitename]").val() +'",\n  "short_name": "'+ $("[data-action=sitename]").val() +'",\n  "description": "'+ $(".descr").val() +'",\n  "version": "1.0",\n  "minimum_chrome_version": "38",\n  "offline_enabled": false,\n  "permissions": [ "storage", "fileSystem", "unlimitedStorage", "http://*/", "https://*/" ],\n  "icons": {\n    "16": "assets/16.png",\n    "32": "assets/32.png",\n    "64": "assets/64.png",\n    "128": "assets/128.png"\n  },\n\n  "app": {\n    "background": {\n      "scripts": ["background.js"]\n    }\n  }\n}\n');
              }
              
              // Your Web App
              var content = zip.generate({type:"blob"});
              saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-chrome.zip");
              $(".dialog-bg").fadeOut();
              return false;
            });

          };
        })(f);

        // read the file !
        // readAsArrayBuffer and readAsBinaryString both produce valid content for JSZip.
        reader.readAsArrayBuffer(f);
        $(".check").removeClass("hide").addClass("hide");
        // reader.readAsBinaryString(f);
      }
    }
  });
  return false;
});
