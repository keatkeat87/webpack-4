
import * as $ from 'jquery';

declare let fbq : any;
export function setupPixel(facebookPixelId : string) {
    let script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';    
    script.textContent = `
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script','https://connect.facebook.net/en_US/fbevents.js');
    `;
    document.getElementsByTagName('head')[0].appendChild(script);
    fbq('init', facebookPixelId);
    fbq('track', 'PageView');

    $('.facebookPixelTracking').click(function(){
        let trackEventName = $(this).data('facebook-pixel-event');
        fbq('track', trackEventName);
    });
}





