import config from './config';

// Need to setup GAIDs owned by Scoop Foundation
const GaIds = {
    "dev": {
        "a":"UA-########-#",
        "b":"UA-########-#"
    },
    "qa": {
        "a":"UA-########-#",
        "b":"UA-########-#"
    },
    "prod": {
        "a":"UA-90734086-2",
        "b":"UA-90734086-3"
    }
}
function initialize() {
    var tagId, gaConfig = {'send_page_view': false};
    
    if (window.location.host.match(/^localhost/) !== null) {
        //local!
        tagId = GaIds.prod.a;// <!--- ! Note using PROD !!!!!!!!
        // gaConfig.utm_source = 'dev';
        // gaConfig.utm_medium = 'site';
        // gaConfig.utm_campaign = 'dev-a';
    } else {
        tagId = GaIds.prod.a;
    }
    
    // Attempt to dynamically load script and change the GA Id
    /*
    gaJs = document.createElement("script");
    gaJs.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=" + tagId);
    b = document.getElementsByTagName('body')[0];
    b.appendChild(gaJs);*/
    
    // Cont. Attempt from above. This is the inline script
    /*
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());    
    */
    
    
    gtag('config', tagId, gaConfig);
    
}
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
    "initialize": initialize,
    "mark": mark,
    "page": page
};