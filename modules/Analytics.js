import config from './config'
function page(path) {
    console.log('page', path);
    if (window.gtag === undefined) {
        return;
    }

    // Send to our internal
    // https://medium.freecodecamp.org/save-your-analytics-from-content-blockers-7ee08c6ec7ee
    
    
    // Google Analytics
    // page_path: string
    // The path portion of location. This value must start with a slash (/) character.
    gtag('config', config.GA_TRACKING_ID, {
        'page_path': path
    });
}

// From: https://hackernoon.com/measuring-web-performance-its-really-quite-simple-adeda8f7f39e
// David Gilbertson @D__Gilbertson
function mark(message) {
    console.log('mark', message);
    // For WebPage Test
    performance.mark(message);

    // For Chrome DevTools > Performance
    console.timeStamp(message);
}



module.exports = {
    "mark": mark,
    "page": page
};