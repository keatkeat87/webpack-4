

export function ajaxForm(settings: {
    elementId: string
    beforeSend: () => void
    success: (responseText : string) => void
    error: (responseText : string) => void
    finally: () => void
    processing?: (percent: number) => void
}): void {
    settings.processing = settings.processing || function(){};
    let { elementId, error, success, processing } = settings;
    let form = document.getElementById(elementId);
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        let formElement = e.target as HTMLFormElement;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {         
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(xhr.responseText);
                }
                else {
                    console.error({
                        status : xhr.status,
                        responseText : xhr.responseText
                    });
                    error(xhr.responseText);
                }
                settings.finally();
            }
        });
        xhr.onprogress = function (event) {
            processing(+Math.round(event.loaded / event.total * 100).toFixed(0));
        };
        xhr.open("POST", formElement.action, true);
        xhr.send(new FormData(formElement));
    });
    return null;
}
