/* Id List */
const list = "";

/* API Key  */
const key = "";

/* Token  */
const token = "";

document.getElementById("send").addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameCard").value;
    const description = document.getElementById("descCard").value;
    const email = document.getElementById("emailCard").value;
    const dateOfBirth = document.getElementById("dobCard").value;

    const fullDescription = `Description: ${description}\nEmail: ${email}\nDate of Birth: ${dateOfBirth}`;

    fetch(`https://api.trello.com/1/cards?idList=${list}&key=${key}&token=${token}&name=${name}&desc=${encodeURIComponent(fullDescription)}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
    })
    .then(response => {
        return response.ok ? response.json() : Promise.reject('Erreur lors de la création de la carte');
    })
    .then(data => {
        const message = document.getElementById("data");
        message.innerText = 'Carte créée avec succès !';
        message.className = 'success';
        message.style.display = 'block';
    })
    .catch(err => {
        const message = document.getElementById("data");
        message.innerText = err;
        message.className = 'error';
        message.style.display = 'block';
    });

    document.getElementById("nameCard").value = "";
    document.getElementById("descCard").value = "";
    document.getElementById("emailCard").value = "";
    document.getElementById("dobCard").value = "";
});
