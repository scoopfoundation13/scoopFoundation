// From: https://hackernoon.com/measuring-web-performance-its-really-quite-simple-adeda8f7f39e
// David Gilbertson @D__Gilbertson
function logTime(message) {
    // For WebPage Test
    performance.mark(message);

    // For Chrome DevTools > Performance
    console.timeStamp(message);

    // Google Analytics
    /*
    ga("send", {
        "hitType": "timing",
        "timingCategory": "Performance",
        "timingVar": message,
        "timingValue": performance.now()
    })
    */
}

module.exports = {
    "logTime": logTime
}