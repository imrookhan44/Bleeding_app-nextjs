export default function (id, options) {
  const script = document.createElement("script");
  const ops = {
    contain: true,
    groupCells: false,
    imagesLoaded: true,
    freeScroll: true,
    initialIndex: 0,
    prevNextButtons: false,
    autoPlay: 1500,
    ...options,
  };
  script.innerText = `
          new Flickity( '#${id}',${JSON.stringify(ops)} );
      `;
  document.head.appendChild(script);
}
