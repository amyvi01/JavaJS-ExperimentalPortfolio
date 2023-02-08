
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controller');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition() {
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active Class
    allSections.addEventListener('click', (e) => { 
        //e is for event
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');            
        }
    })

    //Toggle between dark and light mode
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click',() => {
        let element = document.body;
        element.classList.toggle('sun-mode');
    });
    /*
      const themeBtn = document.querySelector('.theme-btn');
    themeBtn.onclick = function() {
    document.body.classList.toggle('sun-mode');
    if(document.body.classList.contains('sun-mode')) {
        themeBtn.src = 
    }
   }
    */

}
PageTransition();

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "amyphuongvi01@gmail.com",
        Password : "44EBD3A1F2A2595AC2938D0060F76163D3C8",
        To : 'amyphuongvi01@gmail.com',
        From : 'amyphuongvi01@gmail.com',
        ReplyFrom : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}