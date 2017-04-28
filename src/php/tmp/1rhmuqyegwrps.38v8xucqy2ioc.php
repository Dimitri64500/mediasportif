        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Articles de la BDD</h1>

          <?php foreach (($articles?:[]) as $article): ?>
              <p><?= $article['id'] ?> <?= $article['titre'] ?></p>
            <p><?= $article['texte'] ?></p>
          <?php endforeach; ?>

        </div>
