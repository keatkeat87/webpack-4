export function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

export function slideToggle(element : HTMLElement) {
    const clientHeight = element.clientHeight;
    element.style.height = clientHeight + 'px';
    setTimeout(() =>{
        element.classList.toggle('hidden');
    })
}







