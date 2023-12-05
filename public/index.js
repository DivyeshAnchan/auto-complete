// index.js
function initAutoComplete() {
  new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
    types: ['locality'],
    componentRestrictions: { country: 'IN' },
    fields: ['place_id', 'geometry', 'name'],
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initAutoComplete()
})
