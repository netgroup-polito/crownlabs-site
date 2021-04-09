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

<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script defer src="./script.js"></script>
<html lang="en">
  <body>
    <div class="row my-4">
      <div name="video" class="col-lg-4 col-xs-12 col-md-6 p-2">
        <div class="card text-center">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1xrV-_KO04MILXq9_n3LyimfI1TiNdg6g" type="video/mp4">
          </video>
          <div class="card-body">
            <h5 class="card-title">Concept 1</h5>
            <button id="concept_1" class="btn btn-primary" value="1">Select</a>
          </div>
        </div>
      </div>
      <div name="video" class="col-lg-4 col-xs-12 col-md-6 p-2">
        <div class="card text-center">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1-uJbvf9E0eRDtXVeZ-iY8aD7NUFGx2HI" type="video/mp4">
          </video>
          <div class="card-body">
            <h5 class="card-title">Concept 2</h5>
            <button id="concept_2" class="btn btn-primary" value="2">Select</a>
          </div>
        </div>
      </div>
      <div name="video" class="col-lg-4 col-xs-12 col-md-6 p-2">
        <div class="card text-center">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1nrjA-zfjn-tp2_50PdletpASQI96Kamg" type="video/mp4">
          </video>
          <div class="card-body">
            <h5 class="card-title">Concept 3</h5>
            <button id="concept_3" class="btn btn-primary" value="3">Select</a>
          </div>
        </div>
      </div>
      <div name="video" class="col-lg-4 col-xs-12 col-md-6 p-2">
        <div class="card text-center">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1_Aihtb5rQPDn4fge4ptKmjYvfpEpANrk" type="video/mp4">
          </video>
          <div class="card-body">
            <h5 class="card-title">Concept 4</h5>
            <button id="concept_4" class="btn btn-primary" value="4">Select</a>
          </div>
        </div>
      </div>
      <div name="video" class="col-lg-4 col-xs-12 col-md-6 p-2">
        <div class="card text-center">
          <video controls="true" class="embed-responsive-item card-img-top">
            <source src="https://drive.google.com/uc?export=download&id=1FHPj6XUentGvgwH_tiyLeil2vcT91ei3" type="video/mp4">
          </video>
          <div class="card-body">
            <h5 class="card-title">Concept 5</h5>
            <button id="concept_5" class="btn btn-primary" value="5">Select</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-xs-12 col-md-6 p-2">
        <form class="col-lg-12 rounded px-3 pt-3 border bg-white" style="min-height:100% !important">
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-10">
              <input type="email" class="form-control form-control flex-fill" id="email" required>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms" required>
                <label class="form-check-label" for="gridCheck1">
                  Terms checkbox
                </label>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col text-center">
              <button id="vote" type="button" class="btn btn-primary">Vote</button>
            </div>
          </div>
          <div id="result" class="row mt-3 px-3 collapse">
          </div>
        </form>
      </div>
    </div>
  </body>
</html>