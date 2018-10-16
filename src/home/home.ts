
import '../shared/a.scss';
import '../shared/b.scss';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import { a } from '../shared/a';
import { b } from '../shared/b';
// console.log(a + 'da');
// console.log(b + 'ta');

import * as $ from 'jquery';
import '@fancyapps/fancybox';
import 'owl.carousel/dist/owl.carousel';
import 'isotope-layout';

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

$('#masonry').isotope({
    itemSelector: '.masonry-item',
    layoutMode: 'masonry'
});