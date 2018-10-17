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
    gtag('config', '${ googleAnalyticsId }', {
        'custom_map': {
            'dimension1': 'userIsAdmin',
            'dimension2': 'scrolled'
        }
    });

    // document.querySelectorAll<HTMLElement>('.googleAnalyticsTracking').forEach(elem => {
    //     elem.addEventListener('click', () => {            
    //         let trackEventName = elem.dataset['googleAnalyticsEvent'];
    //     });
    // });   
}