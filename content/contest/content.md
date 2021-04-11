+++
fragment = "content"
#disabled = true
date = "2021-04-08"
weight = 100
#background = ""
#title = "Dashboard Concept"
#subtitle = ""
+++

# Vote the new Dashboard concept
<br/>

#### 🎉 GOOD NEWS 🎉

CrownLabs is getting a new UI!

We're currently in the process of redesigning the **main dashboard** for CrownLabs since, as you told us through [this survey](https://forms.gle/ktZjrvtW5BzpoHia7), the old one used to look a little bit too overwhelming with tons of buttons and _not-well-placed_ functionalities. *And we all agreed with you!*

This is why we've designed some **concepts** showing how the new dashboard will look. These concepts have been developed keeping in mind **all your suggestions and requests**, while trying to give CrownLabs a more appealing look and feel.

Since CrownLabs is a platform *made by students for the students* we're here to ask your opinion.<br/>
Please vote down here by selecting the design that you think would fit best for CrownLabs and, if you'd like, leave a comment down below letting us know what you think about it!

<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script defer src="./script.js"></script>
<html lang="en">

<body>
  <div class="row my-4">
    <div class="col-lg-4 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1BC9LX2RDDH-hpjRB039GdT5uTX7WNNhN"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 1</h5>
          <button name='video' id="concept_1" class="btn btn-primary" value="1">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1-uJbvf9E0eRDtXVeZ-iY8aD7NUFGx2HI"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 2</h5>
          <button name='video' id="concept_2" class="btn btn-primary" value="2">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1x1k3UBoNmqPFTVCU8XD7bM9f6VTYQUNK"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 3</h5>
          <button name='video' id="concept_3" class="btn btn-primary" value="3">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1_Aihtb5rQPDn4fge4ptKmjYvfpEpANrk"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 4</h5>
          <button name='video' id="concept_4" class="btn btn-primary" value="4">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1FHPj6XUentGvgwH_tiyLeil2vcT91ei3"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 5</h5>
          <button name='video' id="concept_5" class="btn btn-primary" value="5">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 p-2">
      <div class="card text-center h-100">
        <div class="card-body">
          <div class="form-group ">
            <label for="comment">Tell us what you liked!</label>
            <p>(optional)</p>
            <textarea class="form-control " style="height: 100px;" name="" id="comment" rows="3"></textarea>
          </div>
          <div class="row mb-3">
            <div class="col text-center">
              <button id="vote" type="button" class="btn btn-primary" disabled>Vote</button>
            </div>
          </div>
          <div id="result" class="row mt-3 px-3 collapse">
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>