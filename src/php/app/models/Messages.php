<?php
class Messages extends Model
{
  public function __construct()
  {
    parent::__construct("messages");
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
}
