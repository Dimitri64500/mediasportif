<?php
class Categorie extends Model
{
  public function __construct()
  {
    parent::__construct("categorie");
  }

  public function all()
  {
    $this->load();
    return $this->query;
  }

  public function getById($id)
  {
    $this->load(array('id=?',$id));
    return $this->query;
  }

  public function add()
  {
    $this->parse_body();
    $this->copyfrom('INPUT');
    $this->save();
  }

  public function edit($id)
  {
    $this->load(array('id=?',$id));
    $this->parse_body();
    $this->copyfrom('INPUT');
    $this->update();
  }

  public function delete($id)
  {
    $this->load(array('id=?',$id));
    $this->erase();
  }
  public function allCategAndScateg()
  {
    return $this->db->exec('select ct.id as idcategorie, sc.id as idsouscategorie, ct.nom as nomcategorie, sc.nom as nomsouscategorie,ct.url as urlcategorie, sc.url as urlsouscategorie from souscategorie sc, categorie ct, categoriesouscategorie cat where cat.idcategorie = ct.id and cat.idsouscategorie = sc.id ORDER BY `ct`.`id` ASC');
  }
}
