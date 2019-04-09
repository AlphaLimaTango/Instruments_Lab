const PubSub = require('../helpers/pub_sub.js')

const InfoView = function(container){
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('all-instruments', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InfoView.prototype.render = function (instrument) {
  const info = document.createElement('p');
  info.textContent = `Description: ${instrument.description}, Instruments: ${instrument.instruments}`;
  this.container.innerHTML = '';
  this.container.appendchild(info);
};



module.exports = InfoView;
