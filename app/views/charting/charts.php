<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="row">
  <div class="col-md-6 mx-auto">
    <div class="card card-body bg-light mt-5">
      <h2>Users Index</h2>
      <p>
      <?php foreach($data['users'] as $user){
      echo $user->name; 
      } ?></p>
    </div>
  </div>
  
<?php require APPROOT . '/views/inc/footer.php'; ?>