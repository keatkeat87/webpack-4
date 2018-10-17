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
 
    // 因为它需要定义全局变量，所以不能再 ts 里面写. 
    let script2 = document.createElement('script') as HTMLScriptElement;
    script2.type = 'text/javascript';
    script2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());    
        gtag('config', '${ googleAnalyticsId }');
    `;
    document.getElementsByTagName('head')[0].appendChild(script2);
  
    // document.querySelectorAll<HTMLElement>('.googleAnalyticsTracking').forEach(elem => {
    //     elem.addEventListener('click', () => {            
    //         let trackEventName = elem.dataset['googleAnalyticsEvent'];
    //     });
    // });   
}