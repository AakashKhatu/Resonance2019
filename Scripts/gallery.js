function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [{
	src: 'Media/prev/1.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/3.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/4.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/5.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/6.jpg',
	w: 800,
	h: 1200
	},
{
	src: 'Media/prev/7.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/8.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/9.jpg',
	w: 800,
	h: 1200
	},
{
	src: 'Media/prev/10.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/11.jpg',
	w: 800,
	h: 1200
	},
{
	src: 'Media/prev/12.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/13.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/14.jpg',
	w: 800,
	h: 1200
	},
{
	src: 'Media/prev/15.jpg',
	w: 800,
	h: 600
	},
{
	src: 'Media/prev/16.jpg',
	w: 800,
	h: 600
	},
{
	src: 'Media/prev/17.jpg',
	w: 800,
	h: 1067
	},
{
	src: 'Media/prev/18.jpg',
	w: 800,
	h: 600
	},
{
	src: 'Media/prev/19.jpg',
	w: 800,
	h: 600
	},
{
	src: 'Media/prev/20.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/21.jpg',
	w: 800,
	h: 1200
	},
{
	src: 'Media/prev/22.jpg',
	w: 800,
	h: 533
	},
{
	src: 'Media/prev/23.jpg',
	w: 800,
	h: 533
	},
  ];
  var options = {
    index: 0
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
document.getElementById('gal').onclick = openPhotoSwipe;
