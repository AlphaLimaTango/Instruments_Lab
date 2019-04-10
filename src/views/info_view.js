const PubSub = require('../helpers/pub_sub.js')

const InfoView = function(container){
  this.container = container;
  console.log(this.container);
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('all-instruments', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InfoView.prototype.render = function (instrument) {
  const info = document.createElement('p');
  eachInstrument = instrument.forEach( () => {
    new Instrument ----------------------------------
  });
  info.textContent = `Description: ${instrument.description}, Instruments: ${instrument.instruments}`;
  console.log(instrument);
  this.container.innerHTML = '';
  // console.log(info);
  this.container.appendchild(info);

};




module.exports = InfoView;
