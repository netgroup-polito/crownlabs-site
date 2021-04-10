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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script defer src="./script.js"></script>
<html lang="en">

<body>
  <div class="row my-4">
    <div class="col-lg-4 col-xs-12 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="videos/1.mp4"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 1</h5>
          <button name='video' id="concept_1" class="btn btn-primary" value="1">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-xs-12 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="videos/2.mp4"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 2</h5>
          <button name='video' id="concept_2" class="btn btn-primary" value="2">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-xs-12 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="videos/3.mp4"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 3</h5>
          <button name='video' id="concept_3" class="btn btn-primary" value="3">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-xs-12 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="videos/4.mp4"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 4</h5>
          <button name='video' id="concept_4" class="btn btn-primary" value="4">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-xs-12 col-md-6 p-2">
      <div class="card text-center">
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="videos/5.mp4"
              type="video/mp4">
          </video>
        </div>
        <div class="card-body">
          <h5 class="card-title">Concept 5</h5>
          <button name='video' id="concept_5" class="btn btn-primary" value="5">Select</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-xs-12 col-md-6 p-2">
      <div class="card text-center h-100">
        <div class="card-body">
          <div class="form-group ">
            <h5><label for="comment">Insert a comment</label></h5>
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