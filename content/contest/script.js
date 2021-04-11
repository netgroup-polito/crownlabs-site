let ActiveSelection="";
let videos = document.getElementsByName('video');
let result = document.getElementById('result');
let vote = document.getElementById('vote');
let terms = document.getElementById('terms');
let email = document.getElementById('email');
let comment=document.getElementById('comment');

const storage = JSON.parse(localStorage.getItem('userVote'));

selection = (event) => {
    if(ActiveSelection){
        ActiveSelection.classList.remove('btn-success');
        ActiveSelection.classList.add('btn-primary');
        ActiveSelection.innerHTML = "Select";
    }
    event.target.classList.remove('btn-primary');
    event.target.classList.add('btn-success');
    event.target.innerHTML = "Selected";
    ActiveSelection = event.target;
    vote.disabled = false;
    vote.classList.remove('btn-primary');
    vote.classList.add('btn-success');
}

sendVote = async () => {

    // Disable repeated Vote
    vote.disabled = true;
    // Show Wait Alert
    result.innerHTML = `<div class="col-12 alert alert-warning" role="alert">Wait ...</div>`;
    result.classList.add('show');

    // Get vote Date
    const date = new Date();

    // Get the Selected Vote
    const voted = ActiveSelection.value;

    //Get comment
    const comment_text=comment.value;
    
    // Get the User IP
    const userIP = await fetch('https://api64.ipify.org?format=json').then(response => response.json()).then(data => {return data.ip}).catch(()=>'0.0.0.0');

    // POST Vote on Spreadsheet
    let resultVotation = await fetch("https://api.apispreadsheets.com/data/10703/", {
        method: "POST",
        body: JSON.stringify({"data": {"vote":voted,"userIP":userIP,"date":date,"comment":comment_text}})
    })

    // Print the result alert
    if (resultVotation.status === 201) {
        result.innerHTML = `
            <div class="col-12 alert alert-success" role="alert">
                Well Done! Thank you for your vote
            </div>
            `
        // Save vote Obj in localStorage
        const userVote = {
            'submit': true,
            'value': voted,
            'IP': userIP,
            'date': date,
            'comment': comment_text
        }
        localStorage.setItem('userVote', JSON.stringify(userVote));
    }else{
        result.innerHTML = `
            <div class="col-12 alert alert-danger" role="alert">
                Error: ${resultVotation.status}
            </div>
            `
    }

    

    // Disable event listener selection
    videos.forEach(video => {
        video.removeEventListener('click', selection)

    })
}

if (storage){
    result.innerHTML = `
        <div class="col-12 alert alert-danger" role="alert">
            You have already voted!
        </div>
        `
    // Show Result Alert
    result.classList.add('show');

}else{

    videos.forEach(video => {
        video.addEventListener('click', selection)
    });
    
    vote.addEventListener('click', sendVote);
}