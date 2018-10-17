
// demo : 
// export as a class = import * as Isotope from 'isotope-layout';  

// declare class Isotope {
//     constructor(selecter: string, options: {
//         itemSelector: string,
//         layoutMode: string
//     })
// }
// declare module Isotope {

// }
// declare module "isotope-layout" {
//     export = Isotope;
// }


declare function ajaxForm(options: {
    clearForm : boolean,
 
    beforeSend : () => void
}, data: undefined, dataType: undefined, onSuccess: (data: any, textStatus: string, jqXHR: object, $form: JQuery) => void): JQuery

interface JQuery {
    ajaxForm: any;
}

interface JQueryStatic {
    ajaxForm: any;
}




