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
    echo json_encode($json);  }

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

  function apiArticle($dummyparam, $params)
  {
    $article = new Article();
    // echo $params['URL'];
    $data = $article->getByUrl($params['URL']);

    $json = array();
    foreach ($data as $row) {
      $item = array();

      foreach ($row as $key => $value) {
        $item[$key] = $value;
      }

      array_push($json, $item);
    }
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
    foreach($data as $row) {
      $item = array();

      foreach($row as $key => $value) {
        $item[$key] = $value;
      }

      array_push($json, $item);
    }
    echo json_encode($json);
  }
  function apiSousCategories($f3,$params)
  {
    $id = $params['id'];
    $sousCategories = new SousCategorie();
    echo "avant";
    $data = $sousCategories->getSousCatById($id);
    echo "apres";
    $json = array();
    foreach($data as $row) {
      $item = array();

      foreach($row as $key => $value) {
        $item[$key] = $value;
        echo $item[$key];
      }

      array_push($json, $item);
    }
    echo json_encode($json);
  }

  function upload(){
    $uploads_dir = '/uploads';
    $tmp_name = $_FILES['file_contents']['tmp_name'];
    $name = $_FILES['file_contents']['name'];
    move_uploaded_file($tmp_name, "$uploads_dir/$name");
  }
}
