export const loadFacebookPixel = (callback? : any) => {
    const existingScript = document.getElementById('facebookPixel');

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        script.id = 'facebookPixel';
        document.body.appendChild(script);
        //fbq('init', '245685966022668');
        script.onload = () => {
        if (callback) callback();
        };
    }
    // if (!document.cookie.match("gtag=admin")) {
    //     fbq('init', '245685966022668');
    //     fbq('track', 'PageView');
    // }
};



