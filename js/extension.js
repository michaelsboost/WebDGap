chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
  var tabTitle   = tabs[0].title;
  var favIconUrl = tabs[0].favIconUrl;
  var url        = tabs[0].url;
  $("#appname").val(tabTitle);
  $("#appimg").val(favIconUrl);
  $("#appurl").val(url);
});

$("[data-action=download]").click(function() {
  webdgap(osexport.value, appname.value, appimg.value, appurl.value);
});