<?php
class Article extends Model
{
  public function __construct()
  {
    parent::__construct("article");
  }

  public function allArticlesWithAuthor()
  {
    $result = $this->db->exec('(SELECT a.id, a.titre, a.date, a.status, a.etiquette, u.prenom, u.nom FROM utilisateur u, article a WHERE u.id=a.idutilisateur ORDER BY date DESC)');
    return $result;
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

  public function getArticleALaUne()
  {
    $result = $this->db->exec('(SELECT titre,texte,resume,url,imagealaune FROM article WHERE alaune=true ORDER BY date LIMIT 8)');
    return $result;
  }
  /*
  public function getArticleEtiquette(){
    $result = $this->db->exec('select distinct etiquette from article');
    return $result;
  }*/
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
    $result = $this->db->exec('(SELECT article.id, article.titre, article.url, article.date, article.idutilisateur, SCat.id AS 
idsouscategorie, SCat.nom AS nomsouscategorie, SCat.url AS urlsouscategorie, CsC.idcategorie AS categorie
FROM 		article
INNER JOIN 	articlecategoriesouscategorie 	AS ac 	ON article.id 					= ac.idarticle
INNER JOIN 	categoriesouscategorie 			AS CsC 	ON ac.idcategoriesouscategorie 	= CsC.id
INNER JOIN 	souscategorie 					AS SCat ON SCat.id 						= CsC.idsouscategorie
WHERE CsC.idcategorie = '.$categorie.'
ORDER BY (article.id))');
    return $result;
  }

  public function add()
  {
    $this->copyFrom('POST.nom');
    var_dump($this->save());
  }


  public function addArticle(){
    $f3=Base::instance();
    $this->parse_body();
    $this->copyFrom('INPUT');
    $id = $this->db->lastInsertId();
    $this->save();
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
