function webdgap(os, YourName, AppImg, url) {
  document.addEventListener("DOMContentLoaded", function() {
    if (!navigator.onLine) {
      return false;
    }
    
    // Image Container for WebDGap
    var addwebdgap = document.createElement("div");
    // addwebdgap.style.display = "none";
    addwebdgap.setAttribute("data-webdgap", "container");
    document.body.appendChild(addwebdgap);
    var webdgapContainer = document.querySelector("[data-webdgap=container]");
    webdgapContainer.innerHTML = '<div data-webdgapimg="webdgapimgholder"></div>';

    // Load images
    var webdgaporigimg = document.createElement("img");
    webdgaporigimg.setAttribute("data-webdgapimgload", "webdgapimg");
    webdgaporigimg.src = AppImg;
    webdgapContainer.appendChild(webdgaporigimg);
    
    // Load image sizes
    function embedImage(AppImg, size) {
      // Image Container for WebDGap
      var addwebdgap = document.createElement("div");
      // addwebdgap.style.display = "none";
      addwebdgap.setAttribute("data-webdgap", "container");
      document.body.appendChild(addwebdgap);
      var webdgapContainer = document.querySelector("[data-webdgap=container]");
      webdgapContainer.innerHTML = '<div data-webdgapimg="webdgapimgholder"></div>';

      // Load images
      var webdgaporigimg = document.createElement("img");
      webdgaporigimg.setAttribute("data-webdgapimgload", "webdgapimg");
      webdgaporigimg.src = AppImg;
      webdgapContainer.appendChild(webdgaporigimg);

      var webdgap_img = new Image();
      webdgap_img.crossOrigin = "Anonymous";
      webdgap_img.src = AppImg;
      webdgap_img.onload = function() {
        var webdgap_canvas = document.createElement("canvas");
        webdgap_canvas.width = size;
        webdgap_canvas.height = size;
        var webdgap_ctx = webdgap_canvas.getContext("2d");
        webdgap_ctx.clearRect(0, 0, size, size);
        webdgap_ctx.drawImage(this, 0, 0, size, size);
        var webdgap_dataURL = webdgap_canvas.toDataURL("image/png");
        var webdgap_image = document.createElement("img");
        webdgap_image.crossOrigin = "Anonymous";
        webdgap_image.setAttribute("data-webdgapsize", "f" + size);
        webdgap_image.src = webdgap_dataURL;

        // Image Container for WebDGap
        webdgapContainer.appendChild(webdgap_image);
      };
    }
    embedImage(AppImg, "16");
    embedImage(AppImg, "32");
    embedImage(AppImg, "64");
    embedImage(AppImg, "128");

    // Load Scripts
    function WebDGapLoadScripts() {
      var jszipurl      = document.createElement("script");
      var jsziputilsurl = document.createElement("script");
      var filesaverurl  = document.createElement("script");
      jszipurl.type = "text/javascript";
      jszipurl.src = "https://mikethedj4.github.io/WebDGap/dist/jszip.min.js";
      jsziputilsurl.type = "text/javascript";
      jsziputilsurl.src = "https://mikethedj4.github.io/WebDGap/dist/jszip-utils.js";
      filesaverurl.type = "text/javascript";
      filesaverurl.src = "https://mikethedj4.github.io/WebDGap/dist/FileSaver.js";
      document.head.appendChild(jszipurl);
      document.head.appendChild(jsziputilsurl);
      document.head.appendChild(filesaverurl);
    }
    WebDGapLoadScripts();

    // Export Application
    function executeApp() {
      // Detect Chosen Operating System
      if (os === "win") {
        JSZipUtils.getBinaryContent("https://mikethedj4.github.io/WebDGap/assets/YourWinApp.zip", function(err, data) {
          if(err) {
            throw err // or handle err
          }

          var zip = new JSZip(data);

          // Your Logo
          zip.file("resources/default_app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
          zip.file("resources/default_app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
          zip.file("resources/default_app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
          zip.file("resources/default_app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
          zip.file("resources/default_app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
          // Files for exported app
          zip.file("resources/default_app/css/style.css", "html, body {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n\niframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}");
          zip.file("resources/default_app/index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ YourName +"</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\""+ url +"\">\n      Your browser does not support the iFrame html elements.\n    </iframe>\n  </body>\n</html>");
          zip.file("resources/default_app/package.json", "{\n  \"name\": \""+ YourName +"\",\n  \"productName\": \""+ YourName +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n");
          // Export application
          var content = zip.generate({type:"blob"});
          saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-winsite.zip");
          return false;
        });
      } else if (os === "win32") {
        JSZipUtils.getBinaryContent("https://mikethedj4.github.io/WebDGap/assets/YourWin32App.zip", function(err, data) {
          if(err) {
            throw err // or handle err
          }

          var zip = new JSZip(data);

          // Your Logo
          zip.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
          zip.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
          zip.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
          zip.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
          zip.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
          // Files for exported app
          zip.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ YourName +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
          zip.file("app/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ YourName +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="'+ url +'">\n      Your browser does not support the iFrame html elements.\n    </iframe>\n  </body>\n</html>');
          // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n")
          // Export application
          var content = zip.generate({type:"blob"});
          saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-win32site.zip");
          return false;
        });
      } else if (os === "mac") {
        JSZipUtils.getBinaryContent("https://mikethedj4.github.io/WebDGap/assets/YourMacApp.zip", function(err, data) {
          if(err) {
            throw err // or handle err
          }

          var zip = new JSZip(data);

          // Your Logo
          zip.file("data/content/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
          zip.file("data/content/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
          zip.file("data/content/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
          zip.file("data/content/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
          zip.file("data/content/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
          // Files for exported app
          zip.file("data/package.json", '{\n  "main"  : "content/index.html",\n  "name"  : "'+ YourName +'",\n  "window": {\n    "toolbar"    : false\n  }\n}');
          zip.file("data/content/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ YourName +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="'+ url +'"></iframe>\n\n    <script src="js/main.js"></script>\n  </body>\n</html>');
          zip.file("data/content/js/main.js", 'document.addEventListener("DOMContentLoaded", function() {\n  // Load library\n  var gui = require("nw.gui");\n\n  // Reference to window\n  var win = gui.Window.get();\n\n  // Create menu container\n  var Menu = new gui.Menu({\n    type: "menubar"\n  });\n\n  //initialize default mac menu\n  Menu.createMacBuiltin("'+ YourName +'");\n\n  // Get the root menu from the default mac menu\n  var rootMenu = Menu.items[0].submenu;\n  var windowMenu = Menu.items[2].submenu;\n\n  // Append new item to root menu\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Toggle Fullscreen",\n      key: "F",\n      modifiers: "cmd",\n      click : function () {\n        win.toggleFullscreen();\n      }\n    })\n  );\n\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Reload App",\n      key: "r",\n      modifiers: "cmd",\n      click : function () {\n        win.reload();\n      }\n    })\n  );\n\n  // Remove About Node-Webkit\n  rootMenu.removeAt(0);\n\n  // Append Menu to Window\n  gui.Window.get().menu = Menu;\n});');
          zip.file("run.sh", "open -a /Applications/"+ YourName +".app/Contents/data/"+ YourName.replace(/ /g, "") +".app");
          // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n");
          // Export application
          var content = zip.generate({type:"blob"});
          saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-macsite.zip");
          return false;
        });
      } else if (os === "lin") {
        JSZipUtils.getBinaryContent("https://mikethedj4.github.io/WebDGap/assets/YourLinApp.zip", function(err, data) {
          if(err) {
            throw err // or handle err
          }

          var zip = new JSZip();

          // Put all application files in subfolder for shell script
          var appName = zip.folder( YourName.replace(/ /g, "-")  );
          appName.load(data);

          // Your Logo
          appName.file("resources/default_app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
          appName.file("resources/default_app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
          appName.file("resources/default_app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
          appName.file("resources/default_app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
          appName.file("resources/default_app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
          // Files for exported app
          appName.file("resources/default_app/index.html", '<!DOCTYPE html>\n<html>\n  <head>\n    <title>'+ YourName +'</title>\n    <style>\n      html, body {\n        height: 100%;\n      }\n      body {\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src="'+ url +'"></iframe>\n  </body>\n</html>');
          appName.file("resources/default_app/package.json", "{\n  \"name\": \""+ YourName +"\",\n  \"productName\": \""+ YourName +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n");
          zip.file("make.sh", "if [ -d ${HOME}/"+ YourName.replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ YourName.replace(/ /g, "-") +"/"+ YourName.replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ YourName +"\\nPath=${HOME}/"+ YourName.replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ YourName.replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ YourName.replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ YourName.replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ YourName.replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ YourName.replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ YourName.replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\nif [ ! -d ${HOME}/"+ YourName.replace(/ /g, "-") +" ]; then\n  mv "+ YourName.replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ YourName.replace(/ /g, "-") +"/"+ YourName.replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ YourName +"\\nPath=${HOME}/"+ YourName.replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ YourName.replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ YourName.replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ YourName.replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ YourName.replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ YourName.replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ YourName.replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ YourName.replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n");
          zip.file("README.md", "### Instructions\n 1. Extract the `"+ YourName.replace(/ /g, "-") +"-linsite.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ YourName.replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ YourName.replace(/ /g, "-") +"-linsite\n\n 3. This will move the "+ YourName.replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n");
          // Export application
          var content = zip.generate({type:"blob"});
          saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-linsite.zip");
          return false;
        });
      }  else if (os === "lin32") {
        JSZipUtils.getBinaryContent("https://mikethedj4.github.io/WebDGap/assets/YourLin32App.zip", function(err, data) {
          if(err) {
            throw err // or handle err
          }

          var zip = new JSZip();

          // Put all application files in subfolder for shell script
          var appName = zip.folder( YourName.replace(/ /g, "-")  );
          appName.load(data);

          // Your Logo
          appName.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
          appName.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
          appName.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
          appName.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
          appName.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
          // Files for exported app
          appName.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ YourName +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
          appName.file("app/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ YourName +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n  </body>\n</html>');
          zip.file("make.sh", "if [ -d ${HOME}/"+ YourName.replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ YourName.replace(/ /g, "-") +"/"+ YourName.replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ YourName +"\\nPath=${HOME}/"+ YourName.replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ YourName.replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ YourName.replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ YourName.replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ YourName.replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ YourName.replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ YourName.replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\nif [ ! -d ${HOME}/"+ YourName.replace(/ /g, "-") +" ]; then\n  mv "+ YourName.replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ YourName.replace(/ /g, "-") +"/"+ YourName.replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ YourName +"\\nPath=${HOME}/"+ YourName.replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ YourName.replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ YourName.replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ YourName.replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ YourName.replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ YourName.replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ YourName.replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ YourName.replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n");
          zip.file("README.md", "### Instructions\n 1. Extract the `"+ YourName.replace(/ /g, "-") +"-lin32site.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ YourName.replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ YourName.replace(/ /g, "-") +"-lin32site\n\n 3. This will move the "+ YourName.replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n");
          // Export application
          var content = zip.generate({type:"blob"});
          saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-lin32site.zip");
          return false;
        });
      } else if (os === "test") {
        var zip = new JSZip();
        
        // Your Logo
        zip.file("icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
        zip.file("icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
        zip.file("icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
        zip.file("icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
        zip.file("icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

        // Files for exported app
        zip.file("index.html", '<!DOCTYPE html>\n<html>\n  <head>\n    <title>'+ YourName +'</title>\n    <style>\n      html, body {\n        height: 100%;\n      }\n      body {\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src="'+ url +'"></iframe>\n  </body>\n</html>');
        // Export application
        var content = zip.generate({type:"blob"});
        saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-testsite.zip");
      } else {
        alert("WebDGapJS: The operating system you've chosen is not supported. Please review the API from http://webdgap.sf.net/");
      }
    }

    console.log("exporting your application...");
    setTimeout(function() {
      executeApp();
      console.log("application finished exporting");
    }, 1000);
  });
}

webdgap("win", "Bing", "https://mikethedj4.github.io/kodeWeave/editor/apple-touch-icon-iphone.png", "http://bing.com/");
