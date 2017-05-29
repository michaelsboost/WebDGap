// Version: 1.2.6
// WebDGap, copyright (c) by Michael Schwartz and others
// Distributed under an MIT license: https://github.com/mikethedj4/WebDGap/blob/gh-pages/LICENSE

// This is WebDGap (https://mikethedj4.github.io/WebDGap/), Easily create multi-platform desktop apps.
// implemented in JavaScript!

function webdgap(os, YourName, AppImg, url) {
  // Detect if users browser can load and download files in Javascript
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Detect if users browser can download files in Javascript
  } else {
    alert("The File APIs are not fully supported in this browser.");
  }
  
  var endExportMSG = function() {
    console.log("WebDGap built your "+ os +" application");
  };
  
  WebDGapLoadScripts();

  var isAlreadyVisible = document.querySelectorAll("[data-webdgap=container]");

  for (var i=0;i<isAlreadyVisible.length;i++)
    if (isAlreadyVisible[i].innerHTML.length == 0)
      isAlreadyVisible[i].parentNode.removeChild(isAlreadyVisible[i]);

  // Image Container for WebDGap
  var addwebdgap = document.createElement("div");
  addwebdgap.style.display = "none";
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
    // Load images
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
  // Android Icons
  embedImage(AppImg, "96");
  embedImage(AppImg, "72");
  embedImage(AppImg, "48");
  embedImage(AppImg, "36");
  // iOS Icons
  embedImage(AppImg, "72");
  embedImage(AppImg, "144");
  embedImage(AppImg, "57");
  embedImage(AppImg, "114");
  // Win Phone 8 Icon
  embedImage(AppImg, "159");
  embedImage(AppImg, "99");
  // Blackberry Icons
  embedImage(AppImg, "80");

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
        saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-win.zip");
        endExportMSG();
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
        saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-win32.zip");
        endExportMSG();
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
        saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-mac.zip");
        endExportMSG();
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
        endExportMSG();
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
        endExportMSG();
        return false;
      });
    } else if (os === "chrome") {
      var zip = new JSZip();

      // Your Logo
      zip.file("img/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
      zip.file("img/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
      zip.file("img/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
      zip.file("img/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
      zip.file("img/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
      
      // Files for exported app
      zip.file("css/reset.css", "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n	margin: 0;\n	padding: 0;\n	border: 0;\n	font-size: 100%;\n	font: inherit;\n	vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n	display: block;\n}\nbody {\n	line-height: 1;\n}\nol, ul {\n	list-style: none;\n}\nblockquote, q {\n	quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n	content: '';\n	content: none;\n}\ntable {\n	border-collapse: collapse;\n	border-spacing: 0;\n}");
      zip.file("css/style.css", "webview {\n    width: 100vw;\n    height: 100vh;\n}");
      zip.file("html/embed.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>"+ YourName +"</title>\n    <link rel=\"stylesheet\" href=\"../css/reset.css\">\n    <link rel=\"stylesheet\" href=\"../css/style.css\">\n  </head>\n  <body>\n    <webview id=\"webview\" src=\""+ url +"\" partition=\"persist:applicationize\"></webview>\n  </body>\n</html>");
      zip.file("js/background.js", "/**\n * Listens for the app launching then creates the window\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function () {\n    runApp();\n});\n\n/**\n * Listens for the app restarting then re-creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n */\nchrome.app.runtime.onRestarted.addListener(function () {\n    runApp();\n});\n\n/**\n * Creates the window for the application.\n *\n * @see http://developer.chrome.com/apps/app.window.html\n */\nfunction runApp() {\n    // Creat a new Chrome app window\n    chrome.app.window.create('html/embed.html', {\"id\":\"embed\",\"frame\":{\"type\":\"chrome\"},\"innerBounds\":{\"width\":1180,\"height\":900}}, onWindowLoaded());\n}\n\n/**\n * Called before the contentWindow's onload event\n *\n * @see http://developer.chrome.com/apps/app.window.html\n */\nfunction onWindowLoaded(popup) {\n    return function (win) {\n        // On window loaded event\n        win.contentWindow.onload = function () {\n            // Get webview \n            var webview = win.contentWindow.document.getElementById('webview');\n\n            // Sign up for 'permissionrequest' event\n            webview.addEventListener('permissionrequest', function (e) {\n                // Allow all permission requests\n                e.request.allow();\n            });\n\n            // Sign up for 'newwindow' event\n            // Emitted when a target='_blank' link is clicked within the webview\n            webview.addEventListener('newwindow', function (e) {\n                // Popup?\n                if (e.initialWidth > 0 && e.initialHeight > 0) {\n                    // Open it in a popup window with a set width and height\n                    return chrome.app.window.create('html/embed.html', { frame: { type: 'chrome' }, innerBounds: { width: e.initialWidth, height: e.initialHeight } }, onWindowLoaded(e));\n                }\n\n                // Open the link in a new browser tab/window\n                win.contentWindow.open(e.targetUrl);\n            });\n\n            // Is this a popup window?\n            if (popup) {\n                // Override webview source with popup's target URL\n                webview.src = popup.targetUrl;\n            }\n        };\n    };\n}\n");
      zip.file("manifest.json", "{\n   \"app\": {\n      \"background\": {\n         \"pages\": [ \"html/embed.html\" ],\n         \"scripts\": [ \"js/background.js\" ]\n      }\n   },\n   \"description\": \"A shortcut app generated via WebDGap.\",\n   \"icons\": {\n      \"128\": \"img/128.png\",\n      \"16\" : \"img/16.png\",\n      \"32\" : \"img/32.png\",\n      \"64\" : \"img/64.png\"\n   },\n   \"manifest_version\": 2,\n   \"name\": \""+ YourName +"\",\n   \"permissions\": [ \"webview\", \"audioCapture\", \"videoCapture\", \"storage\", \"fileSystem\", \"unlimitedStorage\", \"http://*/\", \"https://*/\" ],\n   \"version\": \"0.1\"\n}\n");

      // Export application
      var content = zip.generate({type:"blob"});
      saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-chrome.zip");
      endExportMSG();
    } else if (os === "chromeext") {
      var zip = new JSZip();

      // Your Logo
      zip.file("assets/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
      zip.file("assets/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
      zip.file("assets/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
      zip.file("assets/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
      zip.file("assets/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
      
      // Files for exported app
      zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});");
      zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  min-width: 300px;\n  min-height: 420px;\n}\n\nwebview, iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}");
      zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ YourName +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\""+ url +"\">\n      Your version of Chrome does not support the iFrame element.\n    </iframe>\n  </body>\n</html>");
      zip.file("manifest.json", "{\n  \"manifest_version\": 2,\n  \"name\": \""+ YourName +"\",\n  \"short_name\": \""+ YourName +"\",\n  \"description\": \"A shortcut app generated via WebDGap.\",\n  \"version\": \"0.1\",\n  \"minimum_chrome_version\": \"38\",\n  \"permissions\": [ \"storage\", \"unlimitedStorage\", \"http://*/\", \"https://*/\" ],\n  \"icons\": {\n    \"16\": \"assets/16.png\",\n    \"32\": \"assets/32.png\",\n    \"64\": \"assets/64.png\",\n    \"128\": \"assets/128.png\"\n  },\n\n  \"browser_action\": {\n    \"default_icon\": \"assets/128.png\",\n    \"default_title\": \""+ YourName +"\",\n    \"default_popup\": \"index.html\"\n  },\n  \n  \"content_security_policy\": \"script-src 'self' 'unsafe-eval'; object-src 'self'\"\n}");

      // Export application
      var content = zip.generate({type:"blob"});
      saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-chromeext.zip");
      endExportMSG();
    } else if (os === "phonegap") {
      var zip = new JSZip();

      // Android Icon
      zip.file("res/icon/android/icon-96-xhdpi.png", document.querySelector("[data-webdgapsize=f96]").src.split('base64,')[1],{base64: true});
      zip.file("res/icon/android/icon-72-hdpi.png", document.querySelector("[data-webdgapsize=f72]").src.split('base64,')[1],{base64: true});
      zip.file("res/icon/android/icon-48-mdpi.png", document.querySelector("[data-webdgapsize=f48]").src.split('base64,')[1],{base64: true});
      zip.file("res/icon/android/icon-36-ldpi.png", document.querySelector("[data-webdgapsize=f36]").src.split('base64,')[1],{base64: true});
      // iOS Icon
      zip.file("res/icon/ios/icon-72.png", document.querySelector("[data-webdgapsize=f72]").src.split('base64,')[1],{base64: true});
      zip.file("res/icon/ios/icon-72-2x.png", document.querySelector("[data-webdgapsize=f144]").src.split('base64,')[1],{base64: true});
      zip.file("res/icon/ios/icon-57.png", document.querySelector("[data-webdgapsize=f57]").src.split('base64,')[1],{base64: true});
      zip.file("res/icon/ios/icon-57-2x.png", document.querySelector("[data-webdgapsize=f114]").src.split('base64,')[1],{base64: true});
      // Win Phone 8 Icon
      zip.file("res/icon/wp8/ApplicationIcon.png", document.querySelector("[data-webdgapsize=f159]").src.split('base64,')[1],{base64: true});
      zip.file("res/icon/wp8/Background.png", document.querySelector("[data-webdgapsize=f99]").src.split('base64,')[1],{base64: true});
      // Blackberry Icon
      zip.file("res/icon/blackberry/icon-80.png", document.querySelector("[data-webdgapsize=f80]").src.split('base64,')[1],{base64: true});
      // WebOS Icon
      zip.file("res/icon/webos/icon-64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
      // Default Icon
      zip.file("assets/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
      
      // Files for exported app
      zip.file("config.xml", "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<widget xmlns = \"http://www.w3.org/ns/widgets\"\n  xmlns:gap   = \"http://phonegap.com/ns/1.0\"\n  id          = \"com.webdgap."+ YourName.replace(/ /g, '').toLowerCase() +"\"\n  version     = \"0.1\"\n  versionCode = \"1\">\n  <name>"+ YourName +"</name>\n  <description>\n    A shortcut app generated via WebDGap.\n  </description>\n  <author email=\"admin@website.com\" href=\""+ url +"\">\n    John Smith\n  </author>\n\n  <content src=\"index.html\" />\n\n  <icon src=\"icon.png\" gap:role=\"default\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"ldpi\" src=\"res/icon/android/icon-36-ldpi.png\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"mdpi\" src=\"res/icon/android/icon-48-mdpi.png\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"hdpi\" src=\"res/icon/android/icon-72-hdpi.png\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"xhdpi\" src=\"res/icon/android/icon-96-xhdpi.png\" />\n  <icon gap:platform=\"android\" src=\"res/icon/android/icon-96-xhdpi.png\" />\n  <icon gap:platform=\"blackberry\" src=\"res/icon/blackberry/icon-80.png\" />\n  <icon gap:platform=\"blackberry\" gap:state=\"hover\" src=\"res/icon/blackberry/icon-80.png\" />\n  <icon gap:platform=\"ios\" height=\"57\" src=\"res/icon/ios/icon-57.png\" width=\"57\" />\n  <icon gap:platform=\"ios\" height=\"72\" src=\"res/icon/ios/icon-72.png\" width=\"72\" />\n  <icon gap:platform=\"ios\" height=\"114\" src=\"res/icon/ios/icon-57-2x.png\" width=\"114\" />\n  <icon gap:platform=\"ios\" height=\"144\" src=\"res/icon/ios/icon-72-2x.png\" width=\"144\" />\n  <icon gap:platform=\"webos\" src=\"res/icon/webos/icon-64.png\" />\n  <icon gap:platform=\"wp8\" src=\"www/res/icon/wp8/ApplicationIcon.png\" />\n  <icon gap:platform=\"wp8\" src=\"www/res/icon/wp8/Background.png\" />\n\n  <preference name=\"permissions\" value=\"none\"/>\n  <preference name=\"orientation\" value=\"default\"/>\n  <preference name=\"target-device\" value=\"universal\"/>\n  <preference name=\"webviewbounce\" value=\"false\"/>\n  <preference name=\"prerendered-icon\" value=\"true\"/>\n  <preference name=\"stay-in-webview\" value=\"false\"/>\n  <preference name=\"ios-statusbarstyle\" value=\"black-opaque\"/>\n\n  <gap:plugin name=\"cordova-plugin-inappbrowser\" source=\"npm\"/>\n  <gap:plugin name=\"cordova-plugin-network-information\" source=\"npm\"/>\n\n  <access origin=\"*\"/>\n  <gap:plugin name=\"cordova-plugin-whitelist\" source=\"npm\"/>\n\n  <preference name=\"phonegap-version\" value=\"cli-6.5.0\" />\n  <preference name=\"android-minSdkVersion\" value=\"7\" />\n  <preference name=\"android-targetSdkVersion\" value=\"19\" />\n\n  <gap:plugin name=\"cordova-plugin-file\" source=\"npm\"/>\n  <gap:plugin name=\"cordova-plugin-file-transfer\" source=\"npm\"/>\n  <preference name=\"AndroidPersistentFileLocation\" value=\"Compatibility\" />\n\n  <allow-intent href=\"http://*/*\"/>\n  <allow-intent href=\"https://*/*\"/>\n  <allow-intent href=\"tel:*\"/>\n  <allow-intent href=\"sms:*\"/>\n  <allow-intent href=\"mailto:*\"/>\n  <allow-intent href=\"geo:*\"/>\n  <allow-intent href=\"tel:*\"/>\n  <allow-intent href=\"sms:*\"/>\n  <allow-intent href=\"mailto:*\"/>\n  <allow-intent href=\"geo:*\"/>\n  <platform name=\"android\">\n    <allow-intent href=\"market:*\"/>\n  </platform>\n  <platform name=\"ios\">\n    <allow-intent href=\"itms:*\"/>\n    <allow-intent href=\"itms-apps:*\"/>\n  </platform>\n</widget>");
      zip.file("www/index.html", "<!-- no content; just redirect user -->\n<script>\n  window.location.href = "+ url +";\n</script>");

      // Export application
      var content = zip.generate({type:"blob"});
      saveAs(content, YourName.replace(/ /g, "-").toLowerCase() + "-pgb.zip");
      endExportMSG();
    } else {
      alert("Oops something went wrong. Maybe wrong argument for operating system? Are you using a valid image url? - https://mikethedj4.github.io/WebDGap/plugin/");
    }
    return false;
  }

  console.log("WebDGap is exporting your "+ os +" application...");
  setTimeout(function() {
    executeApp();
  }, 1000);
  return false;
}
