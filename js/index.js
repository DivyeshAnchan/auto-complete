function initAutoComplete() {
    const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['locality'],
            componentRestrictions: {'country': ['IN']},
            fields: ['place_id', 'geometry', 'name']
        }
    );
}

function locMessage() {
    const loc = document.getElementById("autocomplete")
    document.getElementById("message").value = loc;
}
