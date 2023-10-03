

//CODE FOR INPUT SEARCH
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const linkList = document.getElementById('linkList').getElementsByTagName('a');


searchButton.addEventListener('click', function () {
    debugger;
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < linkList.length; i++) {
        const linkText = linkList[i].innerHTML.toLowerCase();
        const listItem = linkList[i].parentNode; //Get the <li> element wrapping the link

            if (linkText.includes(searchTerm)) {
                // linkText[i].getAttribute('href')
                window.location.replace(linkList[i].getAttribute('href'));
               return; 
            }
            // if(!linkText.includes(searchTerm)) {
            //     window.alert('search not found');
            // }     
    }
});








//CODE FOR FORM VALIDATION
const form = document.getElementById('form');
            const Name = document.getElementById('name');
            const email = document.getElementById('email');
            const comment = document.getElementById('comment');


            //console.log(form, Name, email);


            form.addEventListener('submit', (e) => {
                e.preventDefault();

                //console.log(e.defaultPrevented); // for checking.

                checkinputs();
            });


            function checkinputs() {
                const NameValue = Name.value.trim();
                const emailValue = email.value.trim();





                const errorArraymsg = ['Please enter a name', 'Please enter your email address'];


                if (NameValue === '') {

                    // show error message
                    invalidInput(Name, errorArraymsg[0]);
                } else {

                    //add success message
                    ValidInput(Name);
                }

                if (emailValue === '') {

                    // show error message
                    invalidInput(email, errorArraymsg[1]);

                } else {

                    // add success message
                    ValidInput(email);
                }



                //show a success message

                if (NameValue && emailValue) {


                    alert('We have received your response!👍');
                }
            }


            function invalidInput(input, message) {
                const control = input.parentElement;
                const small = control.querySelector('small');


                //add error message inside the small element
                small.innerHTML = message;

                //add error class
                control.classList += ' error';


                console.log(control);
            }



            function ValidInput(input) {
                const control = input.parentElement;
                control.classList += 'success';

            }