export function setupAddThis(addThisId : string) {
    let script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';    
    script.src = `//s7.addthis.com/js/300/addthis_widget.js#pubid=${addThisId}`;
    document.getElementsByTagName('body')[0].appendChild(script);
}





