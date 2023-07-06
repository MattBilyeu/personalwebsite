const url = 'https://eofsz4bdce7swu.m.pipedream.net'

const submit = document.querySelector('#submit');

submit.addEventListener('click', ()=> {
    handleSubmit();
})

const handleSubmit = function() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const data = {
        name: name,
        email: email,
        message: message
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result=> {
            console.log(result);
        })
        .catch(error=> {
            console.log('Error:', error)
        });
}

