const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
    "*://*.truepush.com/*",
    "*://.youtube.com/pagead/*",
    "*://.youtube.com/api/stats/ads/*",
    "*://.youtube.com/oembed/*",
    "*://.youtube.com/ptracking*",
    "*://.youtube.com/generate*",
    "*://.googlevideo.com/generate*",
    "*://.youtube.com/youtubei/*",
    "*://gy.eveckstuns.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)


/*
    "*://gy.eveckstuns.com/*" - For moviesda external site opening
*/