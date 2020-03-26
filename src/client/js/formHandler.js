function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    Client.validateUrl(url)

    console.log(":::Calling the external API:::");
    fetch('http://localhost:8000/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.message + '<br>'
    });

    let results = document.getElementById('results')

    fetch('http://localhost:8000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: url
        })
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
         results.innerHTML += 'Title: '+ res.title +'<br>';
        results.innerHTML += 'Text: '+ res.article +'<br>';
    })
}

export { handleSubmit }

