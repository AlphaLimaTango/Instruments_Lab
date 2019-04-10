const PubSub = require('../helpers/pub_sub.js')
const instrumentFamilyData = require('../data/instrument_family_data.js')

const InstrumentFamilies = function() {
  // this.instrumentFamilyData = instrumentFamilyData;
};

InstrumentFamilies.prototype.bindEvents = function () {
  console.log("Hello world");
  console.log(instrumentFamilyData);
  PubSub.publish('all-instruments', instrumentFamilyData);

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishIntrumentData(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishIntrumentData = function (instrumentIndex){ const selectedInstrument = this.instrumentFamilyData[instrumentIndex];
  PubSub.publish('selected-instrument-info', selectedInstrument)

};

module.exports = InstrumentFamilies;
