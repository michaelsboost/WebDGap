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


	// This sets the parent directory of the webdgap folder we will save to
	var saveParentDir = cordova.file.externalRootDirectory != null ?
		cordova.file.externalRootDirectory : cordova.file.externalDataDirectory;

	// Allow changing filename
	fileName = prompt("Enter File Name", defaultFileName);

	var afterGotParentDir = function(dir){
		
		dir.getDirectory('WebDGap', { create: true }, function(dir){
			startSave(dir);
		},
		function(){
			DebugMsg('failed to get webdgap dir');
			handleCallback(onError, 1);
		});
	};


	window.resolveLocalFileSystemURL(saveParentDir, afterGotParentDir,
	function (err) {
		DebugMsg('failed to resolve parent dir');
		handleCallback(onError, 1);
	});
}
