const url = 'https://eoyn9ycu0q649st.m.pipedream.net'

const submit = document.querySelector('#submit');

submit.addEventListener('click', ()=> {
    handleSubmit();
})

const handleSubmit = function() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
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

