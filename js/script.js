
const offcanvas = document.querySelector('.js-offcanvas')
const colorCanva = document.querySelector('.heade-js')
const exitCanva = document.querySelector('.exit')

function addCanvas() {
    document.querySelector('.js-offcanvas').classList.add('canvas-active')
   
}

function exitCanvas() {
    offcanvas.classList.remove('canvas-active')
    
}

window.addEventListener('scroll',  ()=> {
    if (window.scrollY > 0) {
        colorCanva.classList.add('canvas-color')

   
    }
    if (window.scrollY == 0) {
        colorCanva.classList.remove('canvas-color')
    }
  

})

function emailjsValid() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('3oqTYKzgKx5zeyP4V');
}

emailjsValid()



function sendEmail() {
    document.querySelector('.form').addEventListener('submit', function(e) {
        e.preventDefault();

        // this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_jgkj0my', 'template_7v6s6ez', this)
            .then(function(text) {
                alert('Your message has been sent!');
            }, function(error) {
                alert('ocorreu um erro inesperado! tente novamente mais tarde.');
            });
    }
)};

window.onload = sendEmail();