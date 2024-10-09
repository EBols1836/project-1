// JavaScript to submit a form 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if(name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Required';
        document.getElementById('formMessage').style.color = 'red';
    } else {
        document.getElementById('formMessage').textContent = 'Thank you ' + name + '!';
        document.getElementById('formMessage').style.color = 'green';
        
    }
});