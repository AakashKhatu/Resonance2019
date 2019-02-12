function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [{
      src: 'https://placekitten.com/600/400',
      w: 600,
      h: 400
    },
    {
      src: 'https://placekitten.com/1200/900',
      w: 1200,
      h: 900
    },
    {
      src: 'https://placekitten.com/800/600',
      w: 800,
      h: 600
    },
    {
      src: 'https://placekitten.com/800/400',
      w: 800,
      h: 400
    },
  ];
  var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
document.getElementById('gal').onclick = openPhotoSwipe;