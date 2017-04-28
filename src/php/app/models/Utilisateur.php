<?php

class Utilisateur extends Model
{
  public function __construct()
  {
    parent::__construct("utilisateur");
  }

  public function all()
  {
    $this->load();
    return $this->query;
  }

  public function getById($id)
  {
    $this->load(array('id=?', $id));
    return $this->query;
  }

  public function getByLogin($login)
  {
    $this->load(array('login=?', $login));
  }

  public function add()
  {
    $this->parse_body();
    $this->copyfrom('INPUT');
    $this->save();
  }

  public function edit($id)
  {
    $this->load(array('id=?', $id));
    $this->parse_body();
    $this->copyfrom('INPUT');
    $this->update();
  }

  public function delete($id)
  {
    $this->load(array('id=?', $id));
    $this->erase();
  }
}
