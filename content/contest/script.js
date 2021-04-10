let ActiveSelection="";
let videos = document.getElementsByName('video');
let result = document.getElementById('result');
let vote = document.getElementById('vote');
let terms = document.getElementById('terms');
let email = document.getElementById('email');


videos.forEach(video => {
    video.addEventListener('click', event => {
        if(event.target.id.split('_')[0]==='concept'){
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
    })
})

vote.addEventListener('click', () => {
    let errorMessage = "Ops! Something went wrong:<br>";
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let error = false;
    if(!ActiveSelection){
        errorMessage += "<li>Select a Concept to vote</li>";
        error = true;
    }
    
    video.style.display="none";
    const text='Thanks to vote, your help will be very usefull';
    video.parentElement.innerHTML=`
    <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Thanks to vote!</h4>
        <hr>
        <p class="mb-0">Your help will be very usefull.</p>
    </div>`
    
})