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

    public function getById($id)
    {
        $this->load(array('id=?',$id));
        return $this->query;
    }

    public function add()
    {
        $this->copyFrom('POST.nom');
      var_dump($this->save());
    }

    public function edit($id)
    {
        $this->load(array('id=?',$id));
        $this->copyFrom('POST');
        $this->update();
    }

    public function delete($id)
    {
        $this->load(array('id=?',$id));
        $this->erase();
    }
}
