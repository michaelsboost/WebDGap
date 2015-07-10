var loader = $(".load"),
    c16 = $(".n16"),
    c32 = $(".n32"),
    c64 = $(".n64"),
    canvas = $(".holder"),
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
        $fileContent.append($("<li>", {
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
  
  loader.on("change", function(evt) {
    $(".loadzip").removeClass("hide");
    $(this).addClass("hide");
    
    var file = evt.target.files[0];
    displayPreview(file);
  });
  
  // Show contents
  var $result = $(".result");
  loadFiles.on("change", function(evt) {
    if ( ($("#file").val() === "") || ($(".load").val() === "") ) {
      
    } else {
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
                zip.folder("data/content").load(webAppZipBinary);    
                var Img16 = c16[0].toDataURL("image/png");
                var Img32 = c32[0].toDataURL("image/png");
                var Img64 = c64[0].toDataURL("image/png");
                var Img128 = canvas[0].toDataURL("image/png");
                zip.file("data/content/icons/16.png", Img16.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/32.png", Img32.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/64.png", Img64.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/128.png", Img128.split('base64,')[1],{base64: true});
                
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
                zip.folder("data/content").load(webAppZipBinary);
                var Img16 = c16[0].toDataURL("image/png");
                var Img32 = c32[0].toDataURL("image/png");
                var Img64 = c64[0].toDataURL("image/png");
                var Img128 = canvas[0].toDataURL("image/png");
                zip.file("data/content/icons/16.png", Img16.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/32.png", Img32.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/64.png", Img64.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/128.png", Img128.split('base64,')[1],{base64: true});
                
                // Your Web App
                // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n");
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
                zip.folder("app").load(webAppZipBinary);
                var Img16 = c16[0].toDataURL("image/png");
                var Img32 = c32[0].toDataURL("image/png");
                var Img64 = c64[0].toDataURL("image/png");
                var Img128 = canvas[0].toDataURL("image/png");
                zip.file("data/content/icons/16.png", Img16.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/32.png", Img32.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/64.png", Img64.split('base64,')[1],{base64: true});
                zip.file("data/content/icons/128.png", Img128.split('base64,')[1],{base64: true});
                
                // Your Web App
                zip.file("source.c", "/*\n  Save this file as main.c and compile it using this command\n  (those are backticks, not single quotes):\n    gcc -Wall -g -o main main.c `pkg-config --cflags --libs gtk+-2.0 webkit-1.0` -export-dynamic\n  \n  Then execute it using:\n  ./main\n  \n  If you can't compile chances are you don't have gcc installed.\n  Install gcc/c with the following terminal command. (This command is for Debian based Linux distros)\n    sudo apt-get install libgtk2.0-dev libgtk2.0-doc libglib2.0-doc\n  \n  WebKit requires libraries to successfully aquire, configure, and compile. You can get libraries by issuing the following command in your terminal:\n    sudo apt-get install subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev\n  \n  Ubuntu Webkit information - https://help.ubuntu.com/community/WebKit\n    sudo apt-get install libwebkitgtk-dev python-webkit-dev python-webkit\n  \n  Required dependencies for this build: (If you installed all the above this is not needed)\n    sudo apt-get install libgtk2.0-dev libgtk2.0-doc libglib2.0-doc subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev libwebkitgtk-dev\n*/\n\n#include <limits.h>\n#include <gtk/gtk.h>\n#include <webkit/webkit.h>\n\nstatic GtkWidget* window;\nstatic WebKitWebView* web_view;\n\nstatic void destroy_cb (GtkWidget* widget, gpointer data) {\n  gtk_main_quit();\n}\n\nstatic GtkWidget* create_browser() {\n  GtkWidget* scrolled_window = gtk_scrolled_window_new (NULL, NULL);\n  gtk_scrolled_window_set_policy (GTK_SCROLLED_WINDOW (scrolled_window), GTK_POLICY_AUTOMATIC, GTK_POLICY_AUTOMATIC);\n\n  web_view = WEBKIT_WEB_VIEW (webkit_web_view_new ());\n  gtk_container_add (GTK_CONTAINER (scrolled_window), GTK_WIDGET (web_view));\n\n  return scrolled_window;\n}\n\nint main (int argc, char* argv[]) {\n  gtk_init (&argc, &argv);\n\n  GtkWidget* vbox = gtk_vbox_new (FALSE, 0);\n  gtk_box_pack_start (GTK_BOX (vbox), create_browser(), TRUE, TRUE, 0);\n\n  GtkWidget* window = gtk_window_new (GTK_WINDOW_TOPLEVEL);\n  gtk_window_set_default_size (GTK_WINDOW (window), 800, 560);\n  gtk_widget_set_name (window, \"" + $('.projectname').val() + "\");\n  /* gtk_window_set_icon_from_file(window, \"app/logo.png\", NULL); */\n  g_signal_connect (G_OBJECT (window), \"destroy\", G_CALLBACK (destroy_cb), NULL);\n  gtk_container_add (GTK_CONTAINER (window), vbox);\n  \n  char uri[PATH_MAX];\n  char cwd[PATH_MAX];\n\n  getcwd(cwd, sizeof(cwd));\n\n  if (argc > 1)\n      snprintf(uri, sizeof(uri), \"%s\", argv[1]);\n  else\n      snprintf(uri, sizeof(uri), \"file://%s/" + $('.projectname').val() + "/app/index.html\", cwd);\n  \n  webkit_web_view_open (web_view, uri);\n\n  gtk_widget_grab_focus (GTK_WIDGET (web_view));\n  gtk_widget_show_all (window);\n  gtk_main ();\n\n  return 0;\n}\n");
                zip.file("README", "This application for Linux relies on the following dependencies...\n  sudo apt-get install subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev\n\nIf WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n");
                var content = zip.generate({type:"blob"});
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-lin.zip");
                return false;
              });
            });

          }
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
