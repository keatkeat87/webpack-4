
import '../shared/a.scss';
import '../shared/b.scss';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { a } from '../shared/a';
import { b } from '../shared/b';
// console.log(a + 'da');
// console.log(b + 'ta');

import * as $ from 'jquery';
import '@fancyapps/fancybox';
import 'owl.carousel/dist/owl.carousel';
import * as Isotope from 'isotope-layout';
import 'datatables.net.dt';

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

$('#table').DataTable();

