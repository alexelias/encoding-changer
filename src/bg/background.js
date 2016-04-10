// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.webRequest.onHeadersReceived.addListener(function(details){
    for(var i = 0; i < details.responseHeaders.length; ++i)
            if(details.responseHeaders[i].name.toLowerCase() == 'content-type')
	                details.responseHeaders[i].value = 'text/html; charset=iso-2022-jp';
			    return {responseHeaders:details.responseHeaders};
			    }, {urls: ['http://www.itojun.org/*']}, ['blocking', 'responseHeaders']);
