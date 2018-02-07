# WebDGap
### Easily create websites as multi-platform desktop apps!

## By [Michael Schwartz](http://mikethedj4.github.io/)

**Table of Contents**

1. [Introduction](#intro)
2. [Overview](#overview)
   1. [Summary](#summary)
3. [File structure](#filestructure)
4. [Workflow](#workflow)
   1. [User loads WebDGap](#userloadsapp)
   2. [Operating Systems](#os)
   3. [PhoneGap](#phonegap)
   4. [Exportation](#exportation)
   5. [Internationalization](#internationalization)
   6. [WINE](#wine)
5. [Community adoption & publicity](#collabnshares)

## 1. <a name="intro">Introduction</a>

WebDGap is a multi-platform free/open source application that enables users to export any website or HTML/CSS/JavaScript application as a desktop/chrome/phonegap application. 

While similar applications existed before WebDGap, WebDGap offered a few significant competitive advantages that enabled it to take a cut of the pie and gain a loyal following of a couple hundred visitors per day. 

## 2. <a name="overview">Overview</a>

Below is a screenshot of WebDGap's initial screen:

![webdgap screenshot](https://a.fsdn.com/con/app/proj/webdgap/screenshots/webdgap.png/1)

WebDGap is designed to be easy and simple! So simple in fact my 8 year old nephew converted Google as a desktop app.

So you're exporting a website like [Ecosia](https://www.ecosia.org/) as a desktop app for Linux. The process is simple...

- Application name
- Website's URL
- Application's Image
- Export desktop application 

### 2.1 <a name="summary">Summary</a>

WebDGap’s architecture is unique in the sense that it has no database of its own and a very minimal backend. The server just serves static files, since all the application logic is client-side. This was done for cost-effectiveness and stability but it proved to have several advantages (and also imposed a few limitations). It offers a smoother user experience than its competitors and attempts to bridge the gap between desktop development making it less robust and easier for web developers to make desktop applications regardless of what operating system's being used. Another positive side effect of this architecture is that it inspires more confidence.

## 3. <a name="filestructure">File structure</a>

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /app  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> index.html  

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /assets  
- houses most of the main website's libraries/images (which we will skip for now and only show the necessary files for the application)  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> loadlogo-rounded.png  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> loadlogo-rounded.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> loadlogo.png  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> loadlogo.psd  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> loadlogo.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> loadlogo.xcf  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> YourLin32App.zip - precompiled linux 32bit/i832 app  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> YourLinApp.zip - precompiled linux app  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> YourMacApp.zip - precompiled mac app  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> YourWin32App.zip - precompiled windows 32bit app  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> YourWinApp.zip - precompiled windows app  

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /css  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> flag-icon.css - css library to show flags for multiple language support  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> jquery.smartbanner.css - library to show via homepage that app is available on google play  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> style.css  

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> favicon.ico    

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /imgs  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> app.png  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> file.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> file.png  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> folder.png  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> icon.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> logo.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> playvideo.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> preloader.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> screenshot.png  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> sitelogo.svg  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> webdgap-logo.png  

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> index.html - The main WebDGap interface  

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /js    

- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> index.js - javascript for handling various languages for main website  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> jquery.smartbanner.js - library to show via homepage that app is available on google play  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> keys.js - hotkeys for the desktop application  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> webdgap.js - webdgap's javascript application architecture  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> webdgapjs.js - a portable version of webdgap for exporting websites as desktop applications  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> webdgapjs.min.js - a minified and portable version of webdgap for exporting websites as desktop applications  

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /libraries    
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /alertifyjs  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /fancybox  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /font-awesome  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /jquery  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /jszip  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /polyui  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /prefixfree  

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> LICENSE - MIT

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /plugin  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/folder.png" height="17"> /assets - necessary library/styles for the website's ui  
- <img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> index.html

<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> README.md  
<img src="https://cdn.rawgit.com/mikethedj4/WebDGap/gh-pages/imgs/file.svg" height="17"> thesis.md  

## 4. <a name="workflow">Workflow</a>

To sum up and illustrate the way WebDGap works, below is what happens behind the scenes for a typical workflow, like the following example sequence of steps:

- User loads WebDGap
- Operating Systems
- PhoneGap
- Exportation
- WINE

Here's a list of the few libraries and frameworks WebDGap uses in order to run properly: 

* [jQuery](http://jquery.com/)
* [node-webkit](http://nwjs.io/) - run web apps as desktop apps
* [JSZip](https://stuk.github.io/jszip/) - package zip files in javascript
* [Poly UI Kit](https://github.com/Guilh/Poly) - Used for the application's user interface
* [AlertifyJS](http://alertifyjs.com/) - For the awesome and stylish alert notification dialogs

### 4.1 <a name="userloadsapp">User loads WebDGap</a>

User is first asked to export either a website or an app (aka compressed web app's source code as a desktop/chrome/phonegap app). When the user chooses what he/she wants to do WebDGap then makes the necessary visual changes to correspond with the users command to execute that action.

    $("[data-id=convertapp], [data-id=convertsite]").on("click", function() {
      if ( $(this).attr("data-id").toLowerCase() === "convertapp" ) {
        document.querySelector(".maindesc").textContent = mainDesc;
        $("[data-id=appspace]").removeClass("hide");
        $(".export-for-pgb").addClass("export-pgbapp");
        $(".export-as-win32-app, .export-as-win-app, .export-as-mac-app, .export-as-lin32-app, .export-as-lin-app").addClass("exportedwebapp");
      } else if ( $(this).attr("data-id").toLowerCase() === "convertsite" ) {
        document.querySelector(".maindesc").textContent = mainSiteDesc;
        $("[data-id=webspace]").removeClass("hide");
        $(".outputname").addClass("convertsite-picked");
        $("[data-id=sitename]").addClass("convertsite-chosen");
        $(".logoisloadedapp, [data-listen=site]").addClass("hide");
        document.querySelector(".export-for-pgb").href = "https://gonative.io/";
        document.querySelector(".export-for-pgb").target = "_blank";
        $(".export-as-win32-app, .export-as-win-app, .export-as-mac-app, .export-as-lin32-app, .export-as-lin-app").addClass("exportedwebsite");
      }

      $("[data-id=sitename]").focus();
      $("body").removeClass("noscroll");
      $(".wholedialog").fadeOut();
    });

To make the exportation process more seamless and user friendly. Whenever a user completes a step and a scroll is necessary. WebDGap scrolls the user to the next available step using JQuery's [animate](http://api.jquery.com/animate/) method.

    document.querySelector(".export64").onclick = function() {
      $(".64bit").removeClass("hide");
      $(".32bit").addClass("hide");
      $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
    };

### 4.2 <a name="os">Operating Systems</a>

I was looking for an all around solution for awhile on running a web app as a desktop app. I tried everything from TideSDK (deprecated), [AppJS](https://github.com/appjs/appjs) (deprecated), [Appcelerator Titanium](https://en.wikipedia.org/wiki/Appcelerator_Titanium), native code in [VB.NET](https://www.visualstudio.com/), XCode, Python, C++, [Electron](https://electron.atom.io/), [node-webkit](https://nwjs.io/), etc: Basically you name it I've tried it.

The main premise was I wanted to make sure your app supported the usage of [Node.js](https://nodejs.org/en/) in addition I also wanted to make sure all apps you export work with both 64bit and 32bit processors. [Electron](https://electron.atom.io/) is great but it's only for 64bit processors. So I decided to go with [NW.js](https://nwjs.io/). Another benefit is this requires little to no change necessary in order to run your website or web app as a desktop app!

### 4.3 <a name="phonegap">PhoneGap</a>

Mobile phones and tablets have revolutionized the way we interact with out day to day lives, thus it would be a poor decision to not integrate some kind of mobile exportation. WebDGap makes the process simple. You can export your web app as a [PhoneGap Build](https://build.phonegap.com/) application and use the [PhoneGap Build](https://build.phonegap.com/) service to create your web app as a mobile application.

WebDGap was also [released for Android](https://play.google.com/store/apps/details?id=com.michael.webdgap) as well without any backend code needed!

### 4.4 <a name="exportation">Exportation</a>

After I decided what framework I was going to use to run the desktop app I then needed to figure out how I am going to merge your web app's code with the desktop app. Now because there's no server being used there's some drawbacks. Main drawback is there's no frontend API for compiling web apps as desktop applications. Thus I decided to use [JSZip](https://stuk.github.io/jszip/) to handle the zip packaging. I take a precompiled version of [NW.js](https://nwjs.io/) and merge your web app's code into the desktop app and then export the new merged randition. Thus converting a website or your web application as a desktop app. Simple I know :)

    var executeApp  = function(file) {
      $(".chromeappcheck").addClass("hide");

      var reader = new FileReader();
      reader.onload = function(e) {
        // Export as Windows App
        $(".export-as-win-app").on("click", function() {
          JSZipUtils.getBinaryContent("../assets/YourWinApp.zip", function(err, data) {
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
            zip.file("resources/default_app/index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\""+ $("[data-action=website]").val() +"\">\n      Your browser does not support the iFrame html elements.\n    </iframe>\n  </body>\n</html>");
            zip.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-id=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n");
            // Export application
            var content = zip.generate({type:"blob"});
            saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-winsite.zip");
            $(".preloader").remove();
            return false;
          });
          return false;
        });
        return false;
      }
      reader.readAsArrayBuffer(file);
    };

If you're converting a website it all starts when you load in your image...

    function displayPreview(file) {
      var reader = new FileReader();

      reader.onload = function(e) {
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
        webdgaporigimg.src = e.target.result;
        webdgapContainer.appendChild(webdgaporigimg);

        // Load image sizes  
        function embedImage(size) {
          // Load images
          var webdgap_img = new Image();
          webdgap_img.src = e.target.result;
          webdgap_img.onload = function() {
            var webdgap_canvas = document.createElement("canvas");
            webdgap_canvas.width = size;
            webdgap_canvas.height = size;
            var webdgap_ctx = webdgap_canvas.getContext("2d");
            webdgap_ctx.clearRect(0, 0, size, size);
            webdgap_ctx.drawImage(this, 0, 0, size, size);
            var webdgap_dataURL = webdgap_canvas.toDataURL("image/png");
            var webdgap_image = document.createElement("img");
            webdgap_image.setAttribute("data-webdgapsize", "f" + size);
            webdgap_image.src = webdgap_dataURL;

            // Image Container for WebDGap
            webdgapContainer.appendChild(webdgap_image);
          };
        }
        embedImage("16");
        embedImage("32");
        embedImage("64");
        embedImage("128");

        var img = new Image();
        img.src = e.target.result;
        img.onload = function() {
          // x, y, width, height
          ctx.clearRect(0, 0, 128, 128);
          ctx.drawImage(img, 0, 0, 128, 128);
        }
      }
      $(".img--avatar").addClass("hide");
      $("[data-id=sitename]").attr("disabled", "true");
      reader.readAsDataURL(file);
    }

If you're converting an HTML/CSS/JS app; then it proceeds with exporting your compressed zip file;

    var $result = $(".result");
    loadFiles.on("change", function(evt) {
      if ( (!document.getElementById("file").value) || (!document.querySelector("[data-id=sitename]").value) ) {
        // Do nothing
      } else {
        $(".check").removeClass("hide");

        // remove content
        $result.empty();
        // show the results
        $(".result_block").removeClass("hide");

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
                JSZipUtils.getBinaryContent("../assets/YourWinApp.zip", function(err, data) {
                  if(err) {
                    throw err // or handle err
                  }

                  var zip = new JSZip();
                  zip.load(data);

                  // Your Web Application
                  zip.folder("app/").load(webAppZipBinary);

                  // Your Logo
                  zip.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // For 32bit Windows Application
                  zip.file("package.json", '{\n  "main"  : "index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
                  zip.file("index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n  </body>\n</html>');
                  // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC\n\n");

                  // Export your application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-win.zip");
                  $(".preloader").remove();
                  return false;
                });
              });
            }
          })(f);

          // read the file !
          // readAsArrayBuffer and readAsBinaryString both produce valid content for JSZip.
          reader.readAsArrayBuffer(f);
          $(".check").removeClass("hide").addClass("hide");
          setTimeout(function() {
            $("html, body").animate({ scrollTop: $(".pickbits").offset().top }, "slow");
          }, 300);
        }
      }
    });

With Android it's the same correlation upon exportation it's just done a little differently;

    function isPhoneGapEnv() {
      // Alternate check to consider instead:
      //  document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1
      return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/) ? true : false;
    }

    // Uncomment next line to disable new PhoneGap related code
    //DisableInjectingPhoneGapCode = true;
    var phoneGapJsFiles = ['cordova.js', 'js/phonegap-related.min.js'];

    // If debugging, may have uncommented tags in index.html to load PhoneGap files so visible to Chrome
    // In that case, auto skip loading PhoneGap related JS files here
    if( typeof(PhoneGapRelatedJsLoaded) === "boolean" && PhoneGapRelatedJsLoaded ) {
      DisableInjectingPhoneGapCode = true;
    } else {
      DisableInjectingPhoneGapCode = false;
    }

    // If currently running via PhoneGap, load related js code
    if( !DisableInjectingPhoneGapCode ) {
      (function(){
        if ( isPhoneGapEnv() ) {
          // Load PhoneGap specific javascript files
          if( !DisableInjectingPhoneGapCode )
          var $head = $("head");
          phoneGapJsFiles.forEach(function (jsFile) {
            try // put here in case of exception due to conflict like if js file already added via html file
            {
              var s = document.createElement("script");
              s.type = "text/javascript";
              s.src = jsFile;
              $head.append(s);
            }
            catch(ex){
            }
          });
        }
      })();
    }

    function saveFile(content, fileName, onDone) {
      try {
        if( typeof(pgSaveFile) === "function" ) {
          // Assume PhoneGap environment where we use pgSaveFile() underlying function
          return pgSaveFile(content, fileName, function(fileEntry) {
            alert('File saved to: '+fileEntry.fullPath);
            if( typeof(onDone) === "function" ) onDone(true);
          },
          function(reason) {
            if( typeof(onDone) === "function" ) onDone(false);
            alert('File Save Aborted');
          });
        } else {
          saveAs(content, fileName);
          if( typeof(onDone) === "function" ) onDone(true);
        }
      } catch(ex) {
        if( typeof(onDone) === "function" ) onDone(false);
      }
    }

### 4.5 <a name="internationalization">Internationalization</a>

WebDGap was originally built in English. However to make the process more user friendly and reach a broader audience. We integrated the use for what some call Internationalization or Localization. Which is just a fancy term for a multilingual application.

To correlate for the use of multiple languages WebDGap uses JSON format for words and phrases and a hash which runs the language and is triggered via a select element/dropdown.

Here's a simple example...

    var language = {
      eng: {
        appTitle: "hello world",
        appdescrip: "lorem",
        setflag: "assets/flags/4x3/usa.svg",
        hello: "HELLO",
      },
      es: {
        appTitle: "hola mundo",
        appdescrip: "lorem ispum",
        setflag: "assets/flags/4x3/es.svg",
        hello: "HOLA"
      }
    };

    if (window.location.hash) {
      if (location.hash.substring(1) === "eng") {
        // remove all hash tags and reload page to default text
        window.location.href = window.location.toString().split(/\?|#/)[0];
      }
      else if (location.hash.substring(1) === "es") {
        setflag = language.es.setflag;
        appTitle = language.es.appTitle;
        appdescrip = language.es.appdescrip;
        hello = language.es.hello;
      }
    }

Now the words and phrases are inside of a variable which makes displaying the content very easy.  

    $("[data-language=setflag]").attr('src', setflag);
    document.title = appTitle;
    $("meta[name-description]").attr('content', appdescrip);
    $("[data-language=ldwnload]").text(hello);

    $('[data-callLang]').on('click', function() {
      //change flag to selected language
      $("[data-language=setflag]").attr('src', $(this).find('img').attr('src'));
      
      if ($(this).attr('data-callLang') === "eng") {
        window.location.href = window.location.toString().split(/\?|#/)[0];
        return false;
      }
      
      window.location.hash = $(this).attr('data-callLang')
      location.reload(true);
    });

### 4.6 <a name="wine">WINE</a>

Lastly, there's a Windows application called [Resource Hacker](http://angusj.com/resourcehacker/). This application allows you to change the Windows application's .exe icon along with it's metadata. Except it's a Windows application. So in order to run Windows apps on Mac and Linux operating systems you would use an application called [WINE](https://www.winehq.org/).

[WINE](https://www.winehq.org/) (originally an acronym for "Wine Is Not an Emulator") is a compatibility layer capable of running Windows applications on several POSIX-compliant operating systems, such as Linux, macOS, & BSD. Instead of simulating internal Windows logic like a virtual machine or emulator, Wine translates Windows API calls into POSIX calls on-the-fly, eliminating the performance and memory penalties of other methods and allowing you to cleanly integrate Windows applications into your desktop. [source](https://www.winehq.org/)

Remember! [WINE](https://www.winehq.org/) will make it possible for Mac and Linux users to run [Resource Hacker](http://angusj.com/resourcehacker/) which will allow you to change the Windows application's .exe icon along with it's metadata.

## 5. <a name="collabnshares">Community adoption & publicity</a>

WebDGap originally launched in June 1st, 2015 via [Sourceforge](https://sourceforge.net/projects/webdgap/) since then has moved to Github for community collaboration. Remember team work makes the dream work!

Sites talking about WebDGap:  
- [Windows Report](http://windowsreport.com/run-website-as-desktop-app/)  
- [Web Designer Depot](https://www.webdesignerdepot.com/2017/06/5-essential-open-source-tools-for-web-designers/)  
- [Nova Solutions](https://novasolutionsmiami.com/web-design/5-open-source-tools-that-simplify-website-design/)  
- [TekZoom](http://www.tekzoom.com.br/webdgap-crie-aplicativos-para-windows-linux-e-os-x-gratis/)  
- [Bubble](https://forum.bubble.is/t/bubble-based-chrome-extension-get-current-url/10622/20)  
- [StackOverflow](https://stackoverflow.com/questions/19075208/html5-game-to-native-app/29959025#29959025)  
- [Quora](https://www.quora.com/Whats-the-best-programming-language-for-applications-and-GUIs)  
- [Construct 3 Forum](https://www.scirra.com/forum/quot-exported-games-won-t-work-until-you-upload-them-quot-with-nw-js_t194218)  
- [InfotonicsMedia](http://www.infotonicsmedia.com/mobile-technologies)  
