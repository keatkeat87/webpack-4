// export function loadFacebookPixel(callback?: any) {
//     const existingScript = document.getElementById('facebookPixel');

//     if (!existingScript) {
//         const script = document.createElement('script');
//         script.src = 'https://connect.facebook.net/en_US/fbevents.js';
//         script.id = 'facebookPixel';
//         document.body.appendChild(script);

//         fbq('init', '245685966022668');
//         script.onload = () => {
//             if (callback) callback();
//         };
//     }
//     // if (!document.cookie.match("gtag=admin")) {
//     //     fbq('init', '245685966022668');
//     //     fbq('track', 'PageView');
//     // }
// };

// !function (window, document, script, facebookUrl, n, t, s) {
//     if (window.fbq) return; 
//     n = window.fbq = function () {
//         n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
//     };
//     if (!window._fbq) window._fbq = n; 
//     n.push = n; 
//     n.loaded = !0; 
//     n.version = '2.0';
//     n.queue = []; 
    
//     t = document.createElement(script); 
//     t.async = !0;
//     t.src = facebookUrl; s = document.getElementsByTagName(script)[0];
//     s.parentNode.insertBefore(t, s);
    
// }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '245685966022668');
// fbq('track', 'PageView');


// fbq('track','purchase');





