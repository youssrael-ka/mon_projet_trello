/* Id List */
const list = "670ae68b721c55d7740d2ef7";

/* API Key  */
const key = "7fe0db8ecc516841d342a93b33c24f71";

/* Token  */
const token = "ATTAd33180570e0573cd22345c640466a2ede794b52596e64a86e4d9b01a7d286aa9473EEE24";

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
