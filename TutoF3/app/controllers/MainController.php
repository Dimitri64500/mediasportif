<?php

class MainController extends Controller
{
  function apiArticlesNotes(){
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

  function apiArticlesALaUne(){
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
    $articles = new Article($this->db);
    $articles->add();
  }

  function addCategorie()
  {
    $categorie = new Categorie($this->db);
    $categorie->add();
  }

  function apiNotes()
  {
    $notes = new Note($this->db);
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

  function test()
  {

    $formData = json_decode(file_get_contents('php://input'));
    foreach ($formData as $key => $value) {
      $_POST[$key] = $value;
      echo $_POST[$key];
    }
  }

  function apiCategories()
  {
    $categories = new Categorie();
    $data = $categories->all();

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

  function apiSousCategories($f3, $params)
  {
    $id = $params['id'];
    $sousCategories = new SousCategorie();
    $data = $sousCategories->getSousCatById($id);
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

  // API qui va insérer une image à la une dans le dossier "uploads"
  // Renvoi le nom de l'image insérée
  function upload(){
    $uploads_dir = getcwd().'/uploads';
    $extensions = array('.png', '.gif', '.jpg', '.jpeg');
    $tmp_name = $_FILES['myfile']['tmp_name'];
    $name = $_FILES['myfile']['name'];
    $extension = strrchr($_FILES['myfile']['name'], '.');
    $taille = filesize($_FILES['myfile']['tmp_name']);
    $name = preg_replace('/([^.a-z0-9]+)/i', '-', $name);
    if(in_array($extension, $extensions) && $taille<2000000){
      move_uploaded_file($tmp_name, "$uploads_dir/$name");
      echo $name;
    }
    else
      echo "fail";
  }
}
