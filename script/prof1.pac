var proxy = "HTTPS gop-ww2.7e14.starter-us-west-2.openshiftapps.com:443";
var direct = "DIRECT;";

function FindProxyForURL(url, host) {
    
            if(host == "android.com"||shExpMatch(host, "*.android.com")){return proxy;}if(host == "gstatic.com"||shExpMatch(host, "*.gstatic.com")||host == "googleusercontent.com"||shExpMatch(host, "*.googleusercontent.com")||host == "gvt2.com"||shExpMatch(host, "*.gvt2.com")||host == "gvt3.com"||shExpMatch(host, "*.gvt3.com")||host == "ggpht.com"||shExpMatch(host, "*.ggpht.com")||host == "googleapis.com"||shExpMatch(host, "*.googleapis.com")||host == "google.com.hk"||shExpMatch(host, "*.google.com.hk")||host == "google.com"||shExpMatch(host, "*.google.com")||host == "gmail.com"||shExpMatch(host, "*.gmail.com")||host == "ggpht.com"||shExpMatch(host, "*.ggpht.com")||host == "chrome.com"||shExpMatch(host, "*.chrome.com")||host == "googleadservices.com"||shExpMatch(host, "*.googleadservices.com")||host == "googleusercontent.com"||shExpMatch(host, "*.googleusercontent.com")||host == "googletagservices.com"||shExpMatch(host, "*.googletagservices.com")||host == "googlesyndication.com"||shExpMatch(host, "*.googlesyndication.com")||host == "google.co.jp"||shExpMatch(host, "*.google.co.jp")||host == "youtube.com"||shExpMatch(host, "*.youtube.com")||host == "ytimg.com"||shExpMatch(host, "*.ytimg.com")||host == "googlevideo.com"||shExpMatch(host, "*.googlevideo.com")||host == "youtu.be"||shExpMatch(host, "*.youtu.be")||host == "chaturbate.com"||shExpMatch(host, "*.chaturbate.com")||host == "highwebmedia.com"||shExpMatch(host, "*.highwebmedia.com")||host == "telegram.org"||shExpMatch(host, "*.telegram.org")||host == "apkpure.com"||shExpMatch(host, "*.apkpure.com")){return proxy;}if(host == "wikipedia.org"||shExpMatch(host, "*.wikipedia.org")){return proxy;}if(host == "dropbox.com"||shExpMatch(host, "*.dropbox.com")){return proxy;}    
        return direct;
    }
