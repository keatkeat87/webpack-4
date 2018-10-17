declare global {
    let gtag: (...args: any[]) => void
    interface Window {
        dataLayer: any[]
    }
}

export function setupGA(googleAnalyticsId: string) {
    let script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.getElementsByTagName('head')[0].appendChild(script);

 
    // let script2 = document.createElement('script') as HTMLScriptElement;
    // script2.type = 'text/javascript';
    // script2.textContent = `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());    
    //     gtag('config', '${ googleAnalyticsId }');
    // `;
    // document.getElementsByTagName('head')[0].appendChild(script2);

    
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]){window.dataLayer.push(arguments);}
    gtag('js', new Date());    
    gtag('config', '${ googleAnalyticsId }');


    setTimeout(() => {
        gtag('event', 'aaa', {
            'event_category' : 'bbb',
            'event_label' : 'ccc'
        });
    },5000);

    // document.querySelectorAll<HTMLElement>('.facebookPixelTracking').forEach(elem => {
    //     elem.addEventListener('click', () => {            
    //         let trackEventName = elem.dataset['facebookPixelEvent'];
    //         fbq('track', trackEventName);
    //     });
    // });   
}