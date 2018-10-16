
import '../shared/a.scss';
import '../shared/b.scss';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import { a } from '../shared/a';
import { b } from '../shared/b';
// console.log(a + 'da');
// console.log(b + 'ta');

import * as $ from 'jquery';
import '@fancyapps/fancybox';
import 'owl.carousel/dist/owl.carousel';
import * as Isotope from 'isotope-layout';
import  'datatables.net';
import 'datatables.net-responsive';
import 'datatables.net-scroller';
import 'datatables.net-select';
import 'jquery-form';

$('[data-fancybox]').fancybox();

$('#owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    center: true,
    dots: true,
    dotsData: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut'
});

new Isotope('#masonry', {
    itemSelector: '.masonry-item',
    layoutMode: 'masonry'
});

let table =  $('#table').DataTable({
    scrollY: '100px',
    responsive: true,
    scroller: true,
    select: true
});
setTimeout(()=>{
    table.row( 10 ).scrollTo();
},1000);

$('.form').ajaxForm({
    success: function (response, textStatus, xhr, form) {
        console.log("in ajaxForm success");
        jQuery('.myFormLoading').hide();
        jQuery('.myFormError').hide();
        jQuery('.myFormSuccess').show();
        jQuery('input,textarea').val('');

        console.log("open gtag")
        //gtag_contactFormSubmitted();
    },
    error: function (xhr, textStatus, errorThrown) {
        jQuery('.myFormLoading').hide();
        jQuery('.myFormError').show();
        console.log("in ajaxForm error");
    },
    complete: function (xhr, textStatus) {
        console.log("in ajaxForm complete");
    },
    beforeSend: function () {
        jQuery('.myFormDefault').hide();
        jQuery('.myFormLoading').show();
        console.log("before send");
    }
});


