document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_ifgp6uf', 'template_inu9oa4', this)
        .then(() => {
            alert('Message sent!');
            this.reset();
        }, (error) => {
            console.error(error);
            alert('Oops, something went wrong.');
        });
});