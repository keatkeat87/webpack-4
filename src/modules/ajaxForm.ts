

export function ajaxForm(settings : {
    elementId: string
    beforeSend : () => void
    processing : (percent : string) => void
    success : () => void
    error : () => void
    finally : () => void
}): void {
    let { elementId, error, success , processing } = settings;
    let form = document.getElementById(elementId);
    form.addEventListener('submit', (e : Event) => {
        e.preventDefault();


    });
    return null;
}
