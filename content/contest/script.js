let ActiveSelection="";
let video = document.getElementById('video');
let result = document.getElementById('result');
let vote = document.getElementById('vote');
let terms = document.getElementById('terms');
let email = document.getElementById('email');


video.addEventListener('click', event => {
            if(event.target!=vote && event.target.id.split('_')[0]==='concept'){
                if(ActiveSelection){
                    ActiveSelection.classList.remove('btn-success');
                    ActiveSelection.classList.add('btn-primary');
                    ActiveSelection.innerHTML = "Select";
                }
                event.target.classList.remove('btn-primary');
                event.target.classList.add('btn-success');
                event.target.innerHTML = "Selected";
                ActiveSelection = event.target;
            }
    }
)

vote.addEventListener('click', () => {
    let errorMessage = "Ops! Something went wrong:<br>";
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let error = false;
    if(!ActiveSelection){
        errorMessage += "<li>Select a Concept to vote</li>";
        error = true;
    }
    /* if(!email.value.match(mailformat)){
        errorMessage += "<li>Insert a Valid email</li>";
        error = true;
    }
    if(!terms.checked){
        errorMessage += "<li>Accept our Terms</li>";
        error = true;
    } */
    /* if(error){
        result.innerHTML = `
        <div class="col-12 alert alert-danger" role="alert">
            ${errorMessage}
        </div>
        `
        result.classList.add('show');
    }else{ */
        /** INSERT HERE CALL TO ACTION GOOGLE FORM
         * @parameter to send
         * activeSelection.value    [NUMBER]
         * emaile.value             [EMAIL]
         */
   /*      result.innerHTML = `
        <div class="col-12 alert alert-success" role="alert">
            Well Done! Thank you for your vote
        </div>
        `
        result.classList.add('show');
    } */
    video.style.display="none";
    const text='Thanks to vote, your help will be very usefull';
    video.parentElement.innerHTML=`
    <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Thanks to vote!</h4>
        <hr>
        <p class="mb-0">Your help will be very usefull.</p>
    </div>`
    
})