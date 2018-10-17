declare global {
    interface Window { dataLayer: any[]; }
}

export function setupGA(googleAnalyticsId : string) {
    let script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';  
    script.async = true;  
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.getElementsByTagName('head')[0].appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-120219823-1');

    document.querySelectorAll<HTMLElement>('.facebookPixelTracking').forEach(elem => {
        elem.addEventListener('click', () => {            
            let trackEventName = elem.dataset['facebookPixelEvent'];
            fbq('track', trackEventName);
        });
    });   
}