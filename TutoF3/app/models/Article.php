<?php

class Article extends Model
{
  public function __construct()
  {
    parent::__construct("article");
  }

  public function all()
  {
    $this->load();
    return $this->query;
  }

  public function allArticlesAndNote()
  {
    $result = $this->db->exec('(SELECT note.titre as titre, note.texte as texte,note.datetime as date, null as url FROM `note`) UNION ALL( SELECT article.titre as titre, article.resume as texte, article.date as date, article.url as url FROM article where article.status=\'active\') ORDER BY date DESC');
    return $result;
  }
  public function getArticleALaUne(){
    $result = $this->db->exec('(SELECT titre,texte,resume,url,imagealaune FROM article WHERE alaune=true ORDER BY date LIMIT 8)');
    return $result;
  }
  public function getById($id)
  {
    $this->load(array('id=?', $id));
    return $this->query;
  }

  public function getByUrl($url)
  {
    $this->load(array('url=?', $url));
    return $this->query;
  }

  public function getByCategorie($categorie)
  {
    $result = $this->db->exec('( SELECT article.id, article.titre, article.url, article.date, article.idutilisateur, SCat. * 
FROM article
INNER JOIN articlecategoriesouscategorie AS ac ON article.id = ac.idarticle
INNER JOIN categoriesouscategorie AS CsC ON ac.idcategoriesouscategorie = CsC.id
INNER JOIN categorie AS Cat ON Cat.id = '.$categorie.' 
INNER JOIN souscategorie AS SCat ON SCat.id = CsC.idsouscategorie
ORDER BY (
article.id))');
    return $result;
  }

  public function add()
  {
    $this->copyFrom('POST.nom');
    var_dump($this->save());
  }

  public function edit($id)
  {
    $this->load(array('id=?', $id));
    $this->copyFrom('POST');
    $this->update();
  }

  public function delete($id)
  {
    $this->load(array('id=?', $id));
    $this->erase();
  }
}
