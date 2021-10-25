
if (document.getElementById('slider-snap')) {
  const snapSlider = document.getElementById('slider-snap');

  noUiSlider.create(snapSlider, {
    range: {
      min: 70,
      max: 120,
    },
    start: [70, 120],
    step: 10,
    connect: true,
  });

  var snapValues = [
    document.getElementById('slider-snap-value-lower'),
    document.getElementById('slider-snap-value-upper')
  ];

  snapSlider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = '$ ' + values[handle].split('.')[0];
  });
}
