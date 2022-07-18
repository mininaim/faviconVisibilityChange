let hidden;
let visibilityChange;
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

const link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}


function handleVisibilityChange() {
    if (document[hidden]) {
        link.href = './src/ico/favicon-red.ico';
        console.log(link.href)

    } else {
        link.href = './src/ico/favicon.ico';
        console.log(link.href)
    }
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);