//Seleccionamos elementos del DOM
const sendMessageButton = document.getElementById("sendMessage");
const numberInput = document.getElementById("number");
const messageInput = document.getElementById("message");
const statusDiv = document.getElementById("status");

//Evento click en el boton de enviar mensaje: 

sendMessageButton.addEventListener("click", async () => {
    const number = numberInput.value.trim();
    const message = messageInput.value.trim();

    //Validamos: 
    if (!number || !message) {
        statusDiv.textContent = "Por favor, completa todos los campos o moriras de calor";
        statusDiv.style.color = "red";
        return;
    }

    //Enviamos los datos al Backend: 

    try {
        const response = await fetch("http://localhost:8080/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ number, message })
        })

        const result = await response.json();

        if (response.ok) {
            statusDiv.textContent = "Mensaje enviado con éxito, la vida me sonrie";
            statusDiv.style.color = "green";
        } else {
            statusDiv.textContent = result.error || "Ocurrio un error terrible, mortal";
            statusDiv.style.color = "red";
        }
    } catch (error) {
        statusDiv.textContent = "Error al enviar el mensaje " + error.message;
        statusDiv.style.color = "red";
    }

})