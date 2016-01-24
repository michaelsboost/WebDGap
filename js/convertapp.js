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
    ctx = canvas[0].getContext("2d"),
    executeApp = function(file) {
      $(".chromeappcheck").addClass("hide")

      var reader = new FileReader()
      reader.onload = function(e) {
        // Export as Windows App
        $(".export-as-win-app").on("click", function() {
          JSZipUtils.getBinaryContent("../assets/YourWinApp.zip", function(err, data) {
            if(err) {
              throw err // or handle err
            }

            var zip = new JSZip(data)

            // Your Logo
            var Img16 = c16[0].toDataURL("image/png")
            var Img32 = c32[0].toDataURL("image/png")
            var Img64 = c64[0].toDataURL("image/png")
            var Img128 = canvas[0].toDataURL("image/png")
            zip.file("resources/default_app/icons/16.png", Img16.split('base64,')[1],{base64: true})
            zip.file("resources/default_app/icons/32.png", Img32.split('base64,')[1],{base64: true})
            zip.file("resources/default_app/icons/64.png", Img64.split('base64,')[1],{base64: true})
            zip.file("resources/default_app/icons/128.png", Img128.split('base64,')[1],{base64: true})
            // Files for exported app
            zip.file("resources/default_app/css/style.css", "html, body {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n\niframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}")
            zip.file("resources/default_app/index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\""+ $("[data-action=website]").val() +"\">\n      Your browser does not support the iFrame html elements.\n    </iframe>\n  </body>\n</html>")
            zip.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-id=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n")
            // Export application
            var content = zip.generate({type:"blob"})
            saveAs(content, $("[data-id=sitename]").val().toLowerCase().split(" ").join("-") + "-winsite.zip")
            return false
          })
          return false
        })
        $(".export-as-win32-app").on("click", function() {
          JSZipUtils.getBinaryContent("../assets/YourWin32App.zip", function(err, data) {
            if(err) {
              throw err // or handle err
            }

            var zip = new JSZip(data)

            // Your Logo
            var Img16 = c16[0].toDataURL("image/png")
            var Img32 = c32[0].toDataURL("image/png")
            var Img64 = c64[0].toDataURL("image/png")
            var Img128 = canvas[0].toDataURL("image/png")
            zip.file("app/icons/16.png", Img16.split('base64,')[1],{base64: true})
            zip.file("app/icons/32.png", Img32.split('base64,')[1],{base64: true})
            zip.file("app/icons/64.png", Img64.split('base64,')[1],{base64: true})
            zip.file("app/icons/128.png", Img128.split('base64,')[1],{base64: true})
            // Files for exported app
            zip.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}')
            zip.file("app/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="'+ $("[data-action=website]").val() +'">\n      Your browser does not support the iFrame html elements.\n    </iframe>\n  </body>\n</html>')
            // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n")
            // Export application
            var content = zip.generate({type:"blob"})
            saveAs(content, $("[data-id=sitename]").val().toLowerCase().split(" ").join("-") + "-win32site.zip")
            $(".preloader").addClass("hide")
            return false
          })
        })

        // Export as Mac App
        $(".export-as-mac-app").on("click", function() {
          JSZipUtils.getBinaryContent("../assets/YourMacApp.zip", function(err, data) {
            if(err) {
              throw err // or handle err
            }

            var zip = new JSZip(data)

            // Your Logo
            var Img16 = c16[0].toDataURL("image/png")
            var Img32 = c32[0].toDataURL("image/png")
            var Img64 = c64[0].toDataURL("image/png")
            var Img128 = canvas[0].toDataURL("image/png")
            zip.file("data/content/icons/16.png", Img16.split('base64,')[1],{base64: true})
            zip.file("data/content/icons/32.png", Img32.split('base64,')[1],{base64: true})
            zip.file("data/content/icons/64.png", Img64.split('base64,')[1],{base64: true})
            zip.file("data/content/icons/128.png", Img128.split('base64,')[1],{base64: true})
            // Files for exported app
            zip.file("data/package.json", '{\n  "main"  : "content/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n    "toolbar"    : false\n  }\n}')
            zip.file("data/content/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="'+ $("[data-action=website]").val() +'"></iframe>\n\n    <script src="js/main.js"></script>\n  </body>\n</html>')
            zip.file("data/content/js/main.js", 'document.addEventListener("DOMContentLoaded", function() {\n  // Load library\n  var gui = require("nw.gui");\n\n  // Reference to window\n  var win = gui.Window.get();\n\n  // Create menu container\n  var Menu = new gui.Menu({\n    type: "menubar"\n  });\n\n  //initialize default mac menu\n  Menu.createMacBuiltin("'+ $("[data-id=sitename]").val() +'");\n\n  // Get the root menu from the default mac menu\n  var rootMenu = Menu.items[0].submenu;\n  var windowMenu = Menu.items[2].submenu;\n\n  // Append new item to root menu\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Toggle Fullscreen",\n      key: "F",\n      modifiers: "cmd",\n      click : function () {\n        win.toggleFullscreen();\n      }\n    })\n  );\n\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Reload App",\n      key: "r",\n      modifiers: "cmd",\n      click : function () {\n        win.reload();\n      }\n    })\n  );\n\n  // Remove About Node-Webkit\n  rootMenu.removeAt(0);\n\n  // Append Menu to Window\n  gui.Window.get().menu = Menu;\n});')
            zip.file("run.sh", "open -a /Applications/"+ $("[data-id=sitename]").val() +".app/Contents/data/"+ $("[data-id=sitename]").val().split(" ").join("") +".app")
            // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n")
            // Export application
            var content = zip.generate({type:"blob"})
            saveAs(content, $("[data-id=sitename]").val().toLowerCase().split(" ").join("-") + "-macsite.zip")
            return false
          })
          return false
        })

        // Export as Linux App
        $(".export-as-lin-app").on("click", function() {
          JSZipUtils.getBinaryContent("../assets/YourLinApp.zip", function(err, data) {
            if(err) {
              throw err // or handle err
            }

            var zip = new JSZip()

            // Put all application files in subfolder for shell script
            var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  )
            appName.load(data)

            // Your Logo
            var Img16 = c16[0].toDataURL("image/png")
            var Img32 = c32[0].toDataURL("image/png")
            var Img64 = c64[0].toDataURL("image/png")
            var Img128 = canvas[0].toDataURL("image/png")
            appName.file("resources/default_app/icons/16.png", Img16.split('base64,')[1],{base64: true})
            appName.file("resources/default_app/icons/32.png", Img32.split('base64,')[1],{base64: true})
            appName.file("resources/default_app/icons/64.png", Img64.split('base64,')[1],{base64: true})
            appName.file("resources/default_app/icons/128.png", Img128.split('base64,')[1],{base64: true})
            // Files for exported app
            appName.file("resources/default_app/index.html", '<!DOCTYPE html>\n<html>\n  <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      html, body {\n        height: 100%;\n      }\n      body {\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src="'+ $("[data-action=website]").val() +'"></iframe>\n  </body>\n</html>')
            appName.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-id=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n")
            zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n")
            zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n")
            // Export application
            var content = zip.generate({type:"blob"})
            saveAs(content, $("[data-id=sitename]").val().toLowerCase().split(" ").join("-") + "-linsite.zip")
            return false
          })
          return false
        })
        $(".export-as-lin32-app").on("click", function() {
          JSZipUtils.getBinaryContent("../assets/YourLin32App.zip", function(err, data) {
            if(err) {
              throw err // or handle err
            }

            var zip = new JSZip()

            // Put all application files in subfolder for shell script
            var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  )
            appName.load(data)

            // Your Logo
            var Img16 = c16[0].toDataURL("image/png")
            var Img32 = c32[0].toDataURL("image/png")
            var Img64 = c64[0].toDataURL("image/png")
            var Img128 = canvas[0].toDataURL("image/png")
            appName.file("app/icons/16.png", Img16.split('base64,')[1],{base64: true})
            appName.file("app/icons/32.png", Img32.split('base64,')[1],{base64: true})
            appName.file("app/icons/64.png", Img64.split('base64,')[1],{base64: true})
            appName.file("app/icons/128.png", Img128.split('base64,')[1],{base64: true})
            // Files for exported app
            appName.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}')
            appName.file("app/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n  </body>\n</html>')
            zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n")
            zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n")
            // Export application
            var content = zip.generate({type:"blob"})
            saveAs(content, $("[data-id=sitename]").val().toLowerCase().split(" ").join("-") + "-lin32site.zip")
            $(".preloader").addClass("hide")
            return false
          })
        })

        // Imports for Chrome Exports
        $(".export-for-chrome").on("click", function() {
          $(".pickchromes").toggleClass("hide")
          $("html, body").animate({ scrollTop: $(".pickchromes").offset().top }, "slow")
        })
        $(".reset").on("click", function() {
          $(".resetval").val("")
        })
        $(".chromeapp").on("click", function() {
          $(".chromeappexport").removeClass("hide")
          $(".chromepopexport").addClass("hide")
          $(".dialog").fadeIn()
          $("html, body").animate({ scrollTop: $(".dialog").offset().top }, "slow")
        })
        $(".chromepopup").on("click", function() {
          $(".chromeappexport").addClass("hide")
          $(".chromepopexport").removeClass("hide")
          $(".dialog").fadeIn()
          $("html, body").animate({ scrollTop: $(".dialog").offset().top }, "slow")
        })

        // Export Chrome Application
        $(".chromeappexport").on("click", function() {
          if ( $("[data-value=description]").val() == "" ) {
            alertify.error("Unable to export: Description is blank!")
          } else {
            $(".preloader").removeClass("hide")
            var zip = new JSZip()

            // Your Logo
            var Img16 = c16[0].toDataURL("image/png")
            var Img32 = c32[0].toDataURL("image/png")
            var Img64 = c64[0].toDataURL("image/png")
            var Img128 = canvas[0].toDataURL("image/png")
            zip.file("assets/16.png", Img16.split('base64,')[1],{base64: true})
            zip.file("assets/32.png", Img32.split('base64,')[1],{base64: true})
            zip.file("assets/64.png", Img64.split('base64,')[1],{base64: true})
            zip.file("assets/128.png", Img128.split('base64,')[1],{base64: true})
            // Files for exported app
            zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});")
            zip.file("manifest.json", '{\n  "manifest_version": 2,\n  "name": "'+ $("[data-id=sitename]").val() +'",\n  "short_name": "'+ $("[data-id=sitename]").val() +'",\n  "description": "A native '+ $("[data-id=sitename]").val() +' standalone webview app for your Chrome Browser.",\n  "version": "'+ $("[data-value=version]").val() +'",\n  "minimum_chrome_version": "38",\n  "permissions":[ "webview", "storage", "fileSystem", "unlimitedStorage", "http://*/", "https://*/" ],\n  "icons": {\n    "16": "assets/16.png",\n    "32": "assets/32.png",\n    "64": "assets/64.png",\n    "128": "assets/128.png"\n  },\n\n  "app": {\n    "background": {\n      "scripts": ["background.js"]\n    }\n  }\n}\n')
            zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nwebview {\n  width: 100%;\n  height: 100%;\n}")
            zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <webview src=\""+ $("[data-action=website]").val() +"\">\n      Your Chromebook does not support the WebView html5 element.\n    </webview>\n  </body>\n</html>")
            // Export application
            var content = zip.generate({type:"blob"})
            saveAs(content, $("[data-id=sitename]").val().toLowerCase().split(" ").join("-") + "-chromewebview.zip")
            $(".dialog").fadeOut()
            $(".preloader").addClass("hide")
          }
          return false
        })

        // Export Chrome Popup Extension
        $(".chromepopexport").on("click", function() {
          if ( $("[data-value=description]").val() == "" ) {
            alertify.error("Unable to export: Description is blank!")
          } else {
            $(".preloader").removeClass("hide")
            var zip = new JSZip()
            // Your logo
            var Img16 = c16[0].toDataURL("image/png")
            var Img32 = c32[0].toDataURL("image/png")
            var Img64 = c64[0].toDataURL("image/png")
            var Img128 = canvas[0].toDataURL("image/png")
            zip.file("assets/16.png", Img16.split('base64,')[1],{base64: true})
            zip.file("assets/32.png", Img32.split('base64,')[1],{base64: true})
            zip.file("assets/64.png", Img64.split('base64,')[1],{base64: true})
            zip.file("assets/128.png", Img128.split('base64,')[1],{base64: true})
            // Files for exported app
            zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});")
            zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  min-width: 300px;\n  min-height: 420px;\n}\n\nwebview, iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}")
            zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\""+ $("[data-action=website]").val() +"\">\n      Your version of Chrome does not support the iFrame element.\n    </iframe>\n  </body>\n</html>")
            zip.file("manifest.json", "{\n  \"manifest_version\": 2,\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"short_name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"description\": \""+ $("[data-value=description]").val() +"\",\n  \"version\": \""+ $("[data-value=version]").val() +"\",\n  \"minimum_chrome_version\": \"38\",\n  \"permissions\": [ \"storage\", \"unlimitedStorage\", \"http://*/\", \"https://*/\" ],\n  \"icons\": {\n    \"16\": \"assets/16.png\",\n    \"32\": \"assets/32.png\",\n    \"64\": \"assets/64.png\",\n    \"128\": \"assets/128.png\"\n  },\n\n  \"browser_action\": {\n    \"default_icon\": \"assets/128.png\",\n    \"default_title\": \""+ $("[data-id=sitename]").val() +"\",\n    \"default_popup\": \"index.html\"\n  },\n  \n  \"content_security_policy\": \"script-src 'self' 'unsafe-eval'; object-src 'self'\"\n}")
            // Export application
            var content = zip.generate({type:"blob"})
            saveAs(content, $("[data-id=sitename]").val().toLowerCase().split(" ").join("-") + "-chromeext-webview.zip")
            $(".dialog").fadeOut()
            $(".preloader").addClass("hide")
            return false
          }
        })
        return false
      }
      reader.readAsArrayBuffer(file)
    };

function displayPreview(file) {
  var reader = new FileReader()

  reader.onload = function(e) {
    var img = new Image()
    // var tag = new Image()
    var img16 = new Image()
    var img32 = new Image()
    var img64 = new Image()
    img.src = e.target.result
    // tag.src = e.target.result
    img16.src = e.target.result
    img32.src = e.target.result
    img64.src = e.target.result
    img16.onload = function() {
      // x, y, width, height
      ctx16.drawImage(img16, 0, 0, 16, 16)
    }
    img32.onload = function() {
      // x, y, width, height
      ctx32.drawImage(img32, 0, 0, 32, 32)
    }
    img64.onload = function() {
      // x, y, width, height
      ctx64.drawImage(img64, 0, 0, 64, 64)
    }
    img.onload = function() {
      // x, y, width, height
      ctx.drawImage(img, 0, 0, 128, 128)
    }
    // tag.onload = function() {
    //   var dataUrl = e.target.result
    //   $(".img--avatar").attr("src", dataUrl)
    // }
  }
  $(".img--avatar").addClass("hide")
  $("[data-id=sitename]").attr("disabled", "true")
  reader.readAsDataURL(file)
}

$(document).ready(function() {
  // Detect if users browser can load and download files in Javascript
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Detect if users browser can download files in Javascript
  } else {
    alertify.alert("The File APIs are not fully supported in this browser.")
  }

  // Show error if zip is corrupted
  if (!window.FileReader || !window.ArrayBuffer) {
    $(".error_block").removeClass("hide")
    return
  }

  function printContent(name, binaryContent) {
    var $fileContent = $("<ul>")
    try {
      var $title = $("<h4>", {
        text : name
      })
      $result.append($title)

      var dateBefore = new Date()
      // read the content of the file with JSZip
      var zip = new JSZip(binaryContent)
      var dateAfter = new Date()

      $title.append($("<span>", {
        text:" (parsed in " + (dateAfter - dateBefore) + "ms)"
      }))
      $(".check").removeClass("hide")

      // that, or a good ol' for(var entryName in zip.files)
      $.each(zip.files, function (index, zipEntry) {
        $fileContent.append($("<li class=\"hide\">", {
          text : zipEntry.name
        }))
        // the content is here : zipEntry.asText()
      })
    } catch(e) {
      $fileContent = $("<div>", {
        "class" : "alert alert-danger",
        text : "Error reading " + theFile.name + " : " + e.message
      })
    }
    $result.append($fileContent)
  }

  // Drag and drop image load
  holder.ondragover = function () {
    this.className = "hover"
    return false
  }
  holder.ondragend = function () {
    this.className = ""
    return false
  }
  holder.ondrop = function(e) {
    loader.addClass("hide")
    this.className = ""
    e.preventDefault()
    var file = e.dataTransfer.files[0]
    displayPreview(file)

    if ( $(".convertsite-picked").is(":visible") ) {
      $(".logoisloadedsite, .logoisloadedapp, .loadavatar").addClass("hide")
      $(".logo, .check, .outputname").removeClass("hide")
      $("html, body").animate({ scrollTop: $(".pickbits").offset().top }, "slow")
      executeApp(file)
    } else {
      $(".loadavatar").addClass("hide")
      $(".loadzip, .logo, .outputname, .logoisloadedapp").removeClass("hide")
      $("html, body").animate({ scrollTop: $(".logoisloadedapp").offset().top }, "slow")
    }
  }

  // Show zip loader when image has been loaded
  loader.on("change", function(evt) {
    var file = evt.target.files[0]
    displayPreview(file)

    if ( $(".convertsite-picked").is(":visible") ) {
      $(".logoisloadedsite, .logoisloadedapp, .loadavatar").addClass("hide")
      $(".logo, .check, .outputname").removeClass("hide")
      $("html, body").animate({ scrollTop: $(".pickbits").offset().top }, "slow")
      executeApp(file)
    } else {
      $(".loadavatar").addClass("hide")
      $(".loadzip, .logo, .outputname, .logoisloadedapp").removeClass("hide")
      $("html, body").animate({ scrollTop: $(".logoisloadedapp").offset().top }, "slow")
    }
  })

  // Show contents
  var $result = $(".result")
  loadFiles.on("change", function(evt) {
    if ( ($("#file").val() === "") || ($("[data-id=sitename]").val() === "") ) {
      // Do nothing
    } else {
      $(".check").removeClass("hide")

      // remove content
      $result.html("")
      // show the results
      $(".result_block").removeClass("hide")

      // see http://www.html5rocks.com/en/tutorials/file/dndfiles/

      var files = evt.target.files
      for (var i = 0, f; f = files[i]; i++) {

        var reader = new FileReader()

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            var webAppZipBinary = e.target.result
            printContent(theFile.name, webAppZipBinary)

            // Download as Windows App
            $(".export-as-win-app").on("click", function() {
              JSZipUtils.getBinaryContent("../assets/YourWinApp.zip", function(err, data) {
                if(err) {
                  throw err // or handle err
                }

                var zip = new JSZip()
                zip.load(data)

                // Your Web Application
                zip.folder("resources/default_app/app/").load(webAppZipBinary)

                // Your Logo
                var Img16 = c16[0].toDataURL("image/png")
                var Img32 = c32[0].toDataURL("image/png")
                var Img64 = c64[0].toDataURL("image/png")
                var Img128 = canvas[0].toDataURL("image/png")
                zip.file("resources/default_app/icons/16.png", Img16.split('base64,')[1],{base64: true})
                zip.file("resources/default_app/icons/32.png", Img32.split('base64,')[1],{base64: true})
                zip.file("resources/default_app/icons/64.png", Img64.split('base64,')[1],{base64: true})
                zip.file("resources/default_app/icons/128.png", Img128.split('base64,')[1],{base64: true})

                // For Windows Application
                zip.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-id=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n")
                zip.file("resources/default_app/index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>" + $("[data-id=sitename]").val() + "</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />\n    <style>\n     html, body {\n        height: 100%;\n       margin: 0;\n        padding: 0;\n       overflow: hidden;\n     }\n     iframe {\n        width: 100%;\n        height: 100%;\n       border: 0;\n        overflow: auto;\n     }\n    </style>\n    <script>\n      try {\n        $ = jQuery = module.exports;\n        // If you want module.exports to be empty, uncomment:\n        // module.exports = {};\n      } catch(e) {}\n    </script>\n  </head>\n  <body>\n   <iframe src=\"app/index.html\"></iframe>\n  </body>\n</html>")
                // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n")

                // Export your application
                var content = zip.generate({type:"blob"})
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-win.zip")
                $(".preloader").addClass("hide")
                return false
              })
            })
            $(".export-as-win32-app").on("click", function() {
              JSZipUtils.getBinaryContent("../assets/YourWin32App.zip", function(err, data) {
                if(err) {
                  throw err // or handle err
                }

                var zip = new JSZip()
                zip.load(data)

                // Your Web Application
                zip.folder("app/").load(webAppZipBinary)

                // Your Logo
                var Img16 = c16[0].toDataURL("image/png")
                var Img32 = c32[0].toDataURL("image/png")
                var Img64 = c64[0].toDataURL("image/png")
                var Img128 = canvas[0].toDataURL("image/png")
                zip.file("app/icons/16.png", Img16.split('base64,')[1],{base64: true})
                zip.file("app/icons/32.png", Img32.split('base64,')[1],{base64: true})
                zip.file("app/icons/64.png", Img64.split('base64,')[1],{base64: true})
                zip.file("app/icons/128.png", Img128.split('base64,')[1],{base64: true})

                // For 32bit Windows Application
                zip.file("package.json", '{\n  "main"  : "index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}')
                zip.file("index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n  </body>\n</html>')
                // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n")

                // Export your application
                var content = zip.generate({type:"blob"})
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-win32.zip")
                $(".preloader").addClass("hide")
                return false
              })
            })

            // Download as Linux App
            $(".export-as-lin-app").on("click", function() {
              JSZipUtils.getBinaryContent("../assets/YourLinApp.zip", function(err, data) {
                if(err) {
                  throw err // or handle err
                }

                var zip = new JSZip()
                var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  )
                appName.load(data)

                // Your Web Application
                appName.folder("resources/default_app/app/").load(webAppZipBinary)

                // Your Logo
                var Img16 = c16[0].toDataURL("image/png")
                var Img32 = c32[0].toDataURL("image/png")
                var Img64 = c64[0].toDataURL("image/png")
                var Img128 = canvas[0].toDataURL("image/png")
                appName.file("resources/default_app/icons/16.png", Img16.split('base64,')[1],{base64: true})
                appName.file("resources/default_app/icons/32.png", Img32.split('base64,')[1],{base64: true})
                appName.file("resources/default_app/icons/64.png", Img64.split('base64,')[1],{base64: true})
                appName.file("resources/default_app/icons/128.png", Img128.split('base64,')[1],{base64: true})

                // For 64bit Linux application
                appName.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-id=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n")
                appName.file("resources/default_app/index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>" + $("[data-id=sitename]").val() + "</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />\n    <style>\n     html, body {\n        height: 100%;\n       margin: 0;\n        padding: 0;\n       overflow: hidden;\n     }\n     iframe {\n        width: 100%;\n        height: 100%;\n       border: 0;\n        overflow: auto;\n     }\n    </style>\n    <script>\n      try {\n        $ = jQuery = module.exports;\n        // If you want module.exports to be empty, uncomment:\n        // module.exports = {};\n      } catch(e) {}\n    </script>\n  </head>\n  <body>\n   <iframe src=\"app/index.html\"></iframe>\n  </body>\n</html>")
                zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n")
                // zip.file("source.c", "/*\n  Save this file as main.c and compile it using this command\n  (those are backticks, not single quotes):\n    gcc -Wall -g -o main main.c `pkg-config --cflags --libs gtk+-2.0 webkit-1.0` -export-dynamic\n  \n  Then execute it using:\n  ./main\n  \n  If you can't compile chances are you don't have gcc installed.\n  Install gcc/c with the following terminal command. (This command is for Debian based Linux distros)\n    sudo apt-get install libgtk2.0-dev libgtk2.0-doc libglib2.0-doc\n  \n  WebKit requires libraries to successfully aquire, configure, and compile. You can get libraries by issuing the following command in your terminal:\n    sudo apt-get install subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev\n  \n  Ubuntu Webkit information - https://help.ubuntu.com/community/WebKit\n    sudo apt-get install libwebkitgtk-dev python-webkit-dev python-webkit\n  \n  Required dependencies for this build: (If you installed all the above this is not needed)\n    sudo apt-get install libgtk2.0-dev libgtk2.0-doc libglib2.0-doc subversion gtk-doc-tools autoconf automake libtool libgtk2.0-dev libpango1.0-dev libicu-dev libxslt-dev libsoup2.4-dev libsqlite3-dev gperf bison flex libjpeg62-dev libpng12-dev libxt-dev autotools-dev libgstreamer-plugins-base0.10-dev libenchant-dev libgail-dev libwebkitgtk-dev\n*/\n\n#include <limits.h>\n#include <gtk/gtk.h>\n#include <webkit/webkit.h>\n\nstatic GtkWidget* window;\nstatic WebKitWebView* web_view;\n\nstatic void destroy_cb (GtkWidget* widget, gpointer data) {\n  gtk_main_quit();\n}\n\nstatic GtkWidget* create_browser() {\n  GtkWidget* scrolled_window = gtk_scrolled_window_new (NULL, NULL);\n  gtk_scrolled_window_set_policy (GTK_SCROLLED_WINDOW (scrolled_window), GTK_POLICY_AUTOMATIC, GTK_POLICY_AUTOMATIC);\n\n  web_view = WEBKIT_WEB_VIEW (webkit_web_view_new ());\n  gtk_container_add (GTK_CONTAINER (scrolled_window), GTK_WIDGET (web_view));\n\n  return scrolled_window;\n}\n\nint main (int argc, char* argv[]) {\n  gtk_init (&argc, &argv);\n\n  GtkWidget* vbox = gtk_vbox_new (FALSE, 0);\n  gtk_box_pack_start (GTK_BOX (vbox), create_browser(), TRUE, TRUE, 0);\n\n  GtkWidget* window = gtk_window_new (GTK_WINDOW_TOPLEVEL);\n  gtk_window_set_default_size (GTK_WINDOW (window), 800, 560);\n  gtk_widget_set_name (window, \"" + $('.projectname').val() + "\");\n  /* gtk_window_set_icon_from_file(window, \"app/logo.png\", NULL); */\n  g_signal_connect (G_OBJECT (window), \"destroy\", G_CALLBACK (destroy_cb), NULL);\n  gtk_container_add (GTK_CONTAINER (window), vbox);\n  \n  char uri[PATH_MAX];\n  char cwd[PATH_MAX];\n\n  getcwd(cwd, sizeof(cwd));\n\n  if (argc > 1)\n      snprintf(uri, sizeof(uri), \"%s\", argv[1]);\n  else\n      snprintf(uri, sizeof(uri), \"file://%s/" + $('.projectname').val() + "/app/index.html\", cwd);\n  \n  webkit_web_view_open (web_view, uri);\n\n  gtk_widget_grab_focus (GTK_WIDGET (web_view));\n  gtk_widget_show_all (window);\n  gtk_main ();\n\n  return 0;\n}\n")
                zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n")

                // Export Linux application
                var content = zip.generate({type:"blob"})
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-lin.zip")
                $(".preloader").addClass("hide")
                return false
              })
            })
            $(".export-as-lin32-app").on("click", function() {
              JSZipUtils.getBinaryContent("../assets/YourLin32App.zip", function(err, data) {
                if(err) {
                  throw err // or handle err
                }

                var zip = new JSZip()
                var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  )
                appName.load(data)

                // Your Web Application
                appName.folder("app/").load(webAppZipBinary)

                // Your Logo
                var Img16 = c16[0].toDataURL("image/png")
                var Img32 = c32[0].toDataURL("image/png")
                var Img64 = c64[0].toDataURL("image/png")
                var Img128 = canvas[0].toDataURL("image/png")
                appName.file("app/icons/16.png", Img16.split('base64,')[1],{base64: true})
                appName.file("app/icons/32.png", Img32.split('base64,')[1],{base64: true})
                appName.file("app/icons/64.png", Img64.split('base64,')[1],{base64: true})
                appName.file("app/icons/128.png", Img128.split('base64,')[1],{base64: true})

                // Files for exported app
                appName.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}')

                zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n")
                zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n")

                // Export your application
                var content = zip.generate({type:"blob"})
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-lin32.zip")
                $(".preloader").addClass("hide")
                return false
              })
            })

            // Download as Mac App
            $(".export-as-mac-app").on("click", function() {
              JSZipUtils.getBinaryContent("../assets/YourMacApp.zip", function(err, data) {
                if(err) {
                  throw err // or handle err
                }

                var zip = new JSZip()
                zip.load(data)

                // Your Web Application
                zip.folder("data/content/app").load(webAppZipBinary)

                // Your Logo
                var Img16 = c16[0].toDataURL("image/png")
                var Img32 = c32[0].toDataURL("image/png")
                var Img64 = c64[0].toDataURL("image/png")
                var Img128 = canvas[0].toDataURL("image/png")
                zip.file("data/content/app/icons/16.png", Img16.split('base64,')[1],{base64: true})
                zip.file("data/content/app/icons/32.png", Img32.split('base64,')[1],{base64: true})
                zip.file("data/content/app/icons/64.png", Img64.split('base64,')[1],{base64: true})
                zip.file("data/content/app/icons/128.png", Img128.split('base64,')[1],{base64: true})

                // For Mac Application
                zip.file("data/package.json", '{\n  "main"  : "content/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n    "toolbar"    : false\n  }\n}')
                zip.file("data/content/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n\n    <script src="js/main.js"></script>\n  </body>\n</html>')
                zip.file("data/content/js/main.js", 'document.addEventListener("DOMContentLoaded", function() {\n  // Load library\n  var gui = require("nw.gui");\n\n  // Reference to window\n  var win = gui.Window.get();\n\n  // Create menu container\n  var Menu = new gui.Menu({\n    type: "menubar"\n  });\n\n  //initialize default mac menu\n  Menu.createMacBuiltin("'+ $("[data-id=sitename]").val() +'");\n\n  // Get the root menu from the default mac menu\n  var rootMenu = Menu.items[0].submenu;\n  var windowMenu = Menu.items[2].submenu;\n\n  // Append new item to root menu\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Toggle Fullscreen",\n      key: "F",\n      modifiers: "cmd",\n      click : function () {\n        win.toggleFullscreen();\n      }\n    })\n  );\n\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Reload App",\n      key: "r",\n      modifiers: "cmd",\n      click : function () {\n        win.reload();\n      }\n    })\n  );\n\n  // Remove About Node-Webkit\n  rootMenu.removeAt(0);\n\n  // Append Menu to Window\n  gui.Window.get().menu = Menu;\n});')
                zip.file("run.sh", "open -a /Applications/"+ $("[data-id=sitename]").val().replace(/ /g, "") +".app/Contents/data/"+ $("[data-id=sitename]").val().replace(/ /g, "") +".app")
                // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n")

                // Export your application
                var content = zip.generate({type:"blob"})
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-mac.zip")
                $(".preloader").addClass("hide")
                return false
              })
            })

            // Download for Chrome
            $(".export-for-chrome").on("click", function() {
              $(".pickchromes").toggleClass("hide")
              $("html, body").animate({ scrollTop: $(".pickchromes").offset().top }, "slow")
            })
            $(".reset").on("click", function() {
              $(".resetval").val("")
            })
            $(".chromeapp").on("click", function() {
              $(".chromeappcheck").removeClass("hide")
              $(".chromeappexport").removeClass("hide")
              $(".chromepopexport").addClass("hide")
              $(".dialog").fadeIn()
              $("html, body").animate({ scrollTop: $(".dialog").offset().top }, "slow")
            })
            $(".chromepopup").on("click", function() {
              $(".chromeappcheck").addClass("hide")
              $(".chromeappexport").addClass("hide")
              $(".chromepopexport").removeClass("hide")
              $(".dialog").fadeIn()
              $("html, body").animate({ scrollTop: $(".dialog").offset().top }, "slow")
            })

            // Export Chrome Application
            $(".chromeappexport").on("click", function() {
              if ( $("[data-value=description]").val() == "" ) {
                alertify.error("Unable to export: Description is blank!")
              } else {
                $(".preloader").removeClass("hide")
                var zip = new JSZip()

                // Your Web Application
                zip.folder("app").load(webAppZipBinary)

                // Your Logo
                var Img16 = c16[0].toDataURL("image/png")
                var Img32 = c32[0].toDataURL("image/png")
                var Img64 = c64[0].toDataURL("image/png")
                var Img128 = canvas[0].toDataURL("image/png")
                zip.file("assets/16.png", Img16.split('base64,')[1],{base64: true})
                zip.file("assets/32.png", Img32.split('base64,')[1],{base64: true})
                zip.file("assets/64.png", Img64.split('base64,')[1],{base64: true})
                zip.file("assets/128.png", Img128.split('base64,')[1],{base64: true})

                // For Chrome Application
                zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});")
                zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nwebview, iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}")
                zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\"app/index.html\">\n      Your Chromebook does not support the iFrame html element.\n    </iframe>\n  </body>\n</html>")
                if ( $(".offline-mode").is(":checked") ) {
                  zip.file("manifest.json", '{\n  "manifest_version": 2,\n  "name": "'+ $("[data-id=sitename]").val() +'",\n  "short_name": "'+ $("[data-id=sitename]").val() +'",\n  "description": "'+ $("[data-value=description]").val() +'",\n  "version": "'+ $("[data-value=version]").val() +'",\n  "minimum_chrome_version": "38",\n  "offline_enabled": true,\n  "permissions": [ "storage", "fileSystem", "unlimitedStorage", "http://*/", "https://*/" ],\n  "icons": {\n    "16": "assets/16.png",\n    "32": "assets/32.png",\n    "64": "assets/64.png",\n    "128": "assets/128.png"\n  },\n\n  "app": {\n    "background": {\n      "scripts": ["background.js"]\n    }\n  }\n}\n')
                } else {
                  zip.file("manifest.json", '{\n  "manifest_version": 2,\n  "name": "'+ $("[data-id=sitename]").val() +'",\n  "short_name": "'+ $("[data-id=sitename]").val() +'",\n  "description": "'+ $("[data-value=description]").val() +'",\n  "version": "'+ $("[data-value=version]").val() +'",\n  "minimum_chrome_version": "38",\n  "offline_enabled": false,\n  "permissions": [ "storage", "fileSystem", "unlimitedStorage", "http://*/", "https://*/" ],\n  "icons": {\n    "16": "assets/16.png",\n    "32": "assets/32.png",\n    "64": "assets/64.png",\n    "128": "assets/128.png"\n  },\n\n  "app": {\n    "background": {\n      "scripts": ["background.js"]\n    }\n  }\n}\n')
                }

                // Export Chrome Application
                var content = zip.generate({type:"blob"})
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-chromeapp.zip")
                $(".dialog").fadeOut()
                $(".preloader").addClass("hide")
              }
              return false
            })

            // Export Chrome Popup Extension
            $(".chromepopexport").on("click", function() {
              if ( $("[data-value=description]").val() == "" ) {
                alertify.error("Unable to export: Description is blank!")
              } else {
                $(".preloader").removeClass("hide")
                var zip = new JSZip()

                // Your Web App
                zip.folder("app").load(webAppZipBinary)

                // Your Logo
                var Img16 = c16[0].toDataURL("image/png")
                var Img32 = c32[0].toDataURL("image/png")
                var Img64 = c64[0].toDataURL("image/png")
                var Img128 = canvas[0].toDataURL("image/png")
                zip.file("assets/16.png", Img16.split('base64,')[1],{base64: true})
                zip.file("assets/32.png", Img32.split('base64,')[1],{base64: true})
                zip.file("assets/64.png", Img64.split('base64,')[1],{base64: true})
                zip.file("assets/128.png", Img128.split('base64,')[1],{base64: true})

                // For Chrome Extension
                zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});")
                zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  min-width: 300px;\n  min-height: 420px;\n}\n\nwebview, iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}")
                zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\"app/index.html\">\n      Your Chromebook does not support the iFrame html element.\n    </iframe>\n  </body>\n</html>")
                zip.file("manifest.json", "{\n  \"manifest_version\": 2,\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"short_name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"description\": \""+ $("[data-value=description]").val() +"\",\n  \"version\": \""+ $("[data-value=version]").val() +"\",\n  \"minimum_chrome_version\": \"38\",\n  \"permissions\": [ \"storage\", \"unlimitedStorage\", \"http://*/\", \"https://*/\" ],\n  \"icons\": {\n    \"16\": \"assets/16.png\",\n    \"32\": \"assets/32.png\",\n    \"64\": \"assets/64.png\",\n    \"128\": \"assets/128.png\"\n  },\n\n  \"browser_action\": {\n    \"default_icon\": \"assets/128.png\",\n    \"default_title\": \""+ $("[data-id=sitename]").val() +"\",\n    \"default_popup\": \"index.html\"\n  },\n  \n  \"content_security_policy\": \"script-src 'self' 'unsafe-eval'; object-src 'self'\"\n}")

                // Export Chrome Extension
                var content = zip.generate({type:"blob"})
                saveAs(content, theFile.name.substr(theFile.name.length - theFile.name.length, theFile.name.length - 4) + "-chrome-ext.zip")
                $(".dialog").fadeOut()
                $(".preloader").addClass("hide")
                return false
              }
            })
          }
        })(f);

        // read the file !
        // readAsArrayBuffer and readAsBinaryString both produce valid content for JSZip.
        reader.readAsArrayBuffer(f)
        $(".check").removeClass("hide").addClass("hide")
        setTimeout(function() {
          $("html, body").animate({ scrollTop: $(".pickbits").offset().top }, "slow")
        }, 300)
      }
    }
  })

  // Test Script
  // $("[data-id=convertapp]").click()
  // $("[data-id=convertsite]").click()
  // $("[data-id=sitename]").val("Keylogger").trigger("keyup")
  // AppTest()
  // siteTest()
  return false
})
