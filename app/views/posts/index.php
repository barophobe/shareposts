<?php require APPROOT . '/views/inc/header.php'; ?>
  <?php flash('post_message'); ?>
  <div class="row mb-3">

    <div class="chartMenu">
        <p>Chart JS 3.6.0</p>
    </div>
    <div class="chartCard">
      <div class="chartBox">
        <canvas id="myChart"></canvas>
      </div>
    </div>

    <div class="col-md-6">
    <h1 class="posterish">Posts</h1>
    </div>
    <div class="col-md-6">
      <a class="btn btn-primary pull-right" href="<?php echo URLROOT; ?>/posts/add"><i class="fa fa-pencil" aria-hidden="true"></i> Add Post</a>
    </div>
  </div>
  <?php foreach($data['posts'] as $post) : ?>
    <div class="card card-body mb-3">
      <h4 class="card-title"><?php echo $post->title; ?></h4>
      <div class="bg-light p-2 mb-3">
        Written by <?php echo $post->name; ?> on <?php echo $post->created_at; ?>
      </div>
      <p class="card-text"><?php echo $post->body; ?></p>
      <a class="btn btn-dark" href="<?php echo URLROOT; ?>/posts/show/<?php echo $post->postId; ?>">More</a>
    </div>
  <?php endforeach; ?>
<?php require APPROOT . '/views/inc/footer.php'; ?>