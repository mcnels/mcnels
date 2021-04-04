var timelineBlocks = document.querySelectorAll(".cd-timeline-block");
Array.prototype.forEach.call(timelineBlocks, function (el, i) {
  var waypoint = new Waypoint({
    element: el,
    handler: function handler() {
      el.classList.add('fadeInUp');
    },
    offset: '75%'
  });
});
