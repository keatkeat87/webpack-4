export function loadFacebookPixel(callback?: any) {
    const existingScript = document.getElementById('facebookPixel');

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        script.id = 'facebookPixel';
        document.body.appendChild(script);

        fbq('init', '245685966022668');
        script.onload = () => {
            if (callback) callback();
        };
    }
    // if (!document.cookie.match("gtag=admin")) {
    //     fbq('init', '245685966022668');
    //     fbq('track', 'PageView');
    // }
};

!function (window, document, script, facebookUrl, fbq, element, firstElement) {
    if (window.fbq) return; 
    fbq = window.fbq = function () {
        fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments)
    };
    if (!window._fbq) window._fbq = fbq; 
    fbq.push = fbq; 
    fbq.loaded = !0; 
    fbq.version = '2.0';
    fbq.queue = []; 
    
    element = document.createElement(script); 
    element.async = !0;
    element.src = facebookUrl; 
    firstElement = document.getElementsByTagName(script)[0];
    firstElement.parentNode.insertBefore(element, firstElement)
    
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '245685966022668');
fbq('track', 'PageView');



