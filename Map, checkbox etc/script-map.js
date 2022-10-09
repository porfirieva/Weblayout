ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("firstMap", {
    center: [48.872357, 2.354323],
    zoom: 14,
    controls: [],
  });

  var newPlacemark = new ymaps.Placemark(
    [48.872357, 2.354323],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./img/label.svg",
      iconImageSize: [28, 40],
      iconImageOffset: [-20, -40],
    }
  );
  myMap.geoObjects.add(newPlacemark);
}
