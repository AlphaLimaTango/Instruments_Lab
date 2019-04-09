const PubSub = require('../helpers/pub_sub.js')
const instrumentFamilyData = require('../data/instrument_family_data.js')

const InstrumentFamilies = function(instrumentFamilyData) {
  this.instrumentFamilyData = instrumentFamilyData;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('all-instruments', this.instrumentFamilyData);

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishIntrumentData(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishIntrumentData = function (instrumentIndex){ const selectedInstrument = this.instrumentFamilyData[instrumentIndex];
  PubSub.publish('selected-instrument-info', selectedInstrument)

};

module.exports = InstrumentFamilies;
