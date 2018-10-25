
// import '../shared/a.scss';
// import '../shared/b.scss';
import './home.scss';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'intl-tel-input/build/css/intlTelInput.min.css';
// import { a } from '../shared/a';
// import { b } from '../shared/b';
// console.log(a + 'da');
// console.log(b + 'ta');

import * as $ from 'jquery';
import '@fancyapps/fancybox';
import 'owl.carousel/dist/owl.carousel';
import * as Isotope from 'isotope-layout';
import 'datatables.net';
import 'datatables.net-responsive';
import 'datatables.net-scroller';
import 'datatables.net-select';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils';
import { ajaxForm } from '../modules/form';
import { setupPixel } from '../modules/facebookPixel';
import { setupGA } from '../modules/googleAnalytics';
import { setupAddThis } from '../modules/addThis';
import { setupLiveChat } from '../modules/zopimLiveChat';
import { appConfig } from '../appConfig';
import { setupGoogleMap } from '../modules/googleMap';
import { setupFacebookPage } from '../modules/facebookPage';
import { scrollToTop, slideToggle } from '../modules/dom';

// setupGA(appConfig.googleAnalyticsId);

// var input = document.getElementById('phone') as HTMLInputElement;
// intlTelInput(input,{
//     preferredCountries: ['sg', 'my', 'id'],
//     customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
//         console.log(selectedCountryData)
//         return `+${selectedCountryData.dialCode} ${selectedCountryPlaceholder}`;
//     }
// });



// setupPixel(appConfig.facebookPixelId);
// setupGA(appConfig.googleAnalyticsId);
// setupAddThis(appConfig.addThisId);
// setupLiveChat(appConfig.zopimLiveChatId);
// setupGoogleMap(appConfig.googleMapSetting);
// setupFacebookPage(appConfig.facebookAppId);

// let step1Form = JSON.parse(localStorage.get('step1'));

// ajaxForm({
//     elementId: 'enquiryForm',
//     beforeSend: () => {
//         //TODO
//         console.log('beforeSend');
//     },
//     error: (errorText) => {
//         //TODO
//         console.log(errorText);
//     },
//     processing: () => {
//         //upload percentage
//     },
//     success: () => {
//         //TODO
//     },
//     finally: () => {
//         //TODO : finish all job
//     }
// })

// $('[data-fancybox]').fancybox();

// $('#owl-carousel').owlCarousel({
//     items: 1,
//     loop: true,
//     center: true,
//     dots: true,
//     dotsData: true,
//     autoplay: true,
//     autoplayTimeout: 4000,
//     autoplayHoverPause: true,
//     animateOut: 'fadeOut'
// });

// new Isotope('#masonry', {
//     itemSelector: '.masonry-item',
//     layoutMode: 'masonry'
// });

// let table = $('#table').DataTable({
//     scrollY: '100px',
//     responsive: true,
//     scroller: true,
//     select: true
// });
// setTimeout(() => {
//     table.row(10).scrollTo();
// }, 1000);








