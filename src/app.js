const SelectView = require('./views/select_view.js')
const InfoView = require('./views/info_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-type-info');
  const instrumentDisplay = new InfoView(infoDiv);
  instrumentDisplay.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
