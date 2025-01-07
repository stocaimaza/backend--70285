//Integramos MercadoPago del lado del cliente

const mp = new MercadoPago("APP_USR-1cfd8a5a-7db4-4a44-a268-9b16141cc8fc", {
    locale: "es-AR"
}); 

document.getElementById("checkout-btn").addEventListener("click", async () => {
    try {
        //Paso los datos del producto: 

        const orderData = {
            title: "Patito", 
            quantity: 1, 
            price: 100
        }

        const response = await fetch("http://localhost:8080/create-preference", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify(orderData) 
        })

        const preference = await response.json(); 
        createCheckoutButton(preference.id); 


    } catch (error) {
        alert("Error fatal, se suspende el verano, tenias tantas carreras para elegir pero te decidiste por la que no tenes talento"); 
    }
})

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks(); 

    //Correccion para evitar qeu se dupliquen los botones: 
    if(window.checkoutButton) window.checkoutButton.unmount(); 
    //Si ya existe el boton, desmontalo. 

    const renderComponent = async () => {
        await bricksBuilder.create("wallet", "wallet-container", {
            initialization: {
                preferenceId: preferenceId
            }
        })
    }
    renderComponent(); 
}