<?php

class MainController extends Controller
{

  function apiArticlesWithAuthor()
  {
    $articles = new Article();
    $data = $articles->allArticlesWithAuthor();

    $json = array();
    foreach ($data as $row) {
      $item = array();
      $user = array();

      foreach ($row as $key => $value) {
        if ($key == 'nom' || $key == 'prenom') {
          $user[$key] = $value;
        } else
          if ($key == 'date') {
            $item[$key] = $value;
          } else
            $item[$key] = $value;
      }
      $user['nomcomplet'] = $user['prenom'] . ' ' . $user['nom'];
      $item['user'] = $user;
      array_push($json, $item);
    }
    echo json_encode($json);
  }

  function apiArticlesNotes()
  {
    $articles = new Article();
    $data = $articles->allArticlesAndNote();
    $json = array();
    foreach ($data as $row) {
      $item = array();
      foreach ($row as $key => $value) {
        $item[$key] = $value;
      }
      array_push($json, $item);
    }
    echo json_encode($json);
  }

  function apiArticlesALaUne()
  {
    $articles = new Article();
    $data = $articles->getArticleALaUne();
    $json = array();
    foreach ($data as $row) {
      $item = array();
      foreach ($row as $key => $value) {
        $item[$key] = $value;
      }
      array_push($json, $item);
    }
    echo json_encode($json);
  }

  /*
    function apiArticlesEtiquettes(){
      $articles = new Article();
      $data = $articles->getArticleEtiquette();
      $json = array();
      foreach ($data as $row) {
        $item = array();
        foreach ($row as $key => $value) {
          $item[$key] = $value;
        }
        array_push($json, $item);
      }
      echo json_encode($json);
    }
  */
  function apiArticles()
  {
    $articles = new Article();
    $data = $articles->all();

    $json = array();
    foreach ($data as $row) {
      $item = array();

      foreach ($row as $key => $value) {
        $item[$key] = $value;
      }

      array_push($json, $item);
    }
    echo json_encode($json);
  }

  function apiArticle($f3, $params)
  {
    $article = new Article();
    $article->getByUrl($params['URL']);

    echo json_encode($article->cast());
  }

  function addArticles()
  {
    $articles = new Article();
    $articles->add();
  }

  function addCategorie()
  {
    $categorie = new Categorie();
    $categorie->add();
  }

  function apiNotes()
  {
    $notes = new Note();
    $data = $notes->all();

    $json = array();

    foreach ($data as $row) {
      $item = array();

      foreach ($row as $key => $value) {
        $item[$key] = $value;
      }

      array_push($json, $item);
    }

    echo json_encode($json);
  }

  function apiUser($f3, $params)
  {
    $user = new Utilisateur();
    $user->getById($params['id']);
    echo json_encode($user->cast());
  }

  function apiArticleByCategorie($f3, $categorie)
  {
    $articles = new Article();
    $data = $articles->getByCategorie($categorie['categorie']);
    $jsonArticle = array();
    $jsonSCat = array();
    $item = array();
    $item2 = array();
    $idArticle = 0;
    foreach ($data as $row) {
      if ($idArticle !== $row['id']) {
        if ($idArticle !== 0) {
          $item['sousCategorie'] = $jsonSCat;
          array_push($jsonArticle, $item);
          $jsonSCat = array();
        }
        $item = array();
        $item2 = array();
        $item['id'] = $row['id'];
        $item['titre'] = $row['titre'];
        $item['url'] = $row['url'];
        $item['date'] = $row['date'];
        $idArticle = $row['id'];
      }
      $item2['idsouscategorie'] = $row['idsouscategorie'];
      $item2['nomsouscategorie'] = $row['nomsouscategorie'];
      $item2['urlsouscategorie'] = $row['urlsouscategorie'];
      array_push($jsonSCat, $item2);
    }
    $item['sousCategorie'] = $jsonSCat;
    array_push($jsonArticle, $item);
    echo json_encode($jsonArticle);
  }

  function test()
  {
    $formData = json_decode(file_get_contents('php://input'));
    foreach ($formData as $key => $value) {
      echo $key;
      if ($key == 'souscategorie')
        echo $value;
    }
  }

  function ajouterArticle()
  {
    $categoriesouscategorie = array();
    $formData = json_decode(file_get_contents('php://input'));
    foreach ($formData as $key => $value) {
      if ($key == 'souscategorie') {
        $categoriesouscategorie = $value;
      }
    }
    $article = new Article();
    $article->addArticle();
    $idarticle = $article->get('_id');
    $articlecategoriesouscategorie = new ArticleCategorieSousCategorie();
    $result = $articlecategoriesouscategorie->addACSC($idarticle,$categoriesouscategorie);
    echo $idarticle . $result;
  }

  function apiCategories()
  {
    $categories = new Categorie();
    $data = $categories->allCategAndScateg();
    $jsonCat = array();
    $jsonSCat = array();
    $item = array();
    $item2 = array();
    $idCat = 0;
    foreach ($data as $row) {
      if ($idCat !== $row['idcategorie']) {
        if ($idCat !== 0) {
          $item['sousCategorie'] = $jsonSCat;
          array_push($jsonCat, $item);
          $jsonSCat = array();
        }
        $item = array();
        $item2 = array();
        $item['idcategorie'] = $row['idcategorie'];
        $item['nomcategorie'] = $row['nomcategorie'];
        $item['urlcategorie'] = $row['urlcategorie'];
        $idCat = $row['idcategorie'];
      }
      $item2['idsouscategorie'] = $row['idsouscategorie'];
      $item2['nomsouscategorie'] = $row['nomsouscategorie'];
      $item2['urlsouscategorie'] = $row['urlsouscategorie'];
      $item2['idCatSousCat'] = $row['idCatSousCat'];
      array_push($jsonSCat, $item2);
    }
    $item['sousCategorie'] = $jsonSCat;
    array_push($jsonCat, $item);
    echo json_encode($jsonCat);
  }

  // API qui va insérer une image à la une dans le dossier "uploads"
  // Renvoi le nom de l'image insérée
  function upload()
  {
    $uploads_dir = getcwd() . '/uploads';
    $extensions = array('.png', '.gif', '.jpg', '.jpeg');
    $tmp_name = $_FILES['myfile']['tmp_name'];
    $name = $_FILES['myfile']['name'];
    $extension = strrchr($_FILES['myfile']['name'], '.');
    $taille = filesize($_FILES['myfile']['tmp_name']);
    $name = preg_replace('/([^.a-z0-9]+)/i', '-', $name);
    if (in_array($extension, $extensions) && $taille < 2000000) {
      move_uploaded_file($tmp_name, "$uploads_dir/$name");
      echo $name;
    } else
      echo "fail";
  }
}
