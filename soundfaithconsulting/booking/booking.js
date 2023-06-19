const bookingSelections = [
    {name: 'First Consultation', image: '../images/ministryConsultantMeeting-small.png'},
    {name: 'Public Relations', image: '../images/ministryPublicRelations-Small.png'},
    {name: 'Literary Agent', image: '../images/christianLiteraryAgentConsultation-Small.png'},
    {name: 'Phil/Theo/Apol Consultation', image: '../images/philosophyTheologyApologeticsConsultation-Small.png'},
    {name: 'Douglas Groothuis', image: '../images/douglasGroothuis-Small.png'},
    {name: 'Chris Gonzales', image: '../images/chrisGonzales-Small.png'},
    {name: 'Tim Stratton', image: '../images/timStratton-Small.png'},
    {name: 'Tim Hsiao', image: '../images/timHsiao-Small.png'},
    {name: 'Artur Asaduriyan', image: '../images/arturAsaduriyan-Small.png'},
    {name: 'Dean Meadows', image: '../images/deanMeadows-Small.png'},
    {name: 'Contact Speaker', image: '../images/speakerContact.png'}
];

const featurePhoto = document.querySelector('#featurePhoto');

const selection = document.querySelector('#select');

selection.addEventListener('change', function() {
    setPhoto(selection.value);
})

const setPhoto = function(name) {
    for(let i = 0; i < bookingSelections.length; i++) {
        if (bookingSelections[i].name === name) {
            selection.value = name;
            featurePhoto.src = bookingSelections[i].image;
        }
    }
}

window.onload = function () {
    if(window.location.hash) {
        var id = window.location.hash.slice(1);
        id = id.replace(/_/g, ' ');
        setPhoto(id);
    } else {
        var first = bookingSelections[0].name;
        setPhoto(first);
    }
}