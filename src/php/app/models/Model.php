<?php

/**
 * Created by IntelliJ IDEA.
 * User: Denis
 * Date: 12/04/2017
 * Time: 14:39
 */
class Model extends DB\SQL\Mapper{
  protected $db;
  function __construct($table){

    $this->initializeDatabase();
    parent::__construct($this->db,$table);
  }
  function initializeDatabase(){
    $f3=Base::instance();
    $db = new DB\SQL(
      $f3->get('devdb'),
      $f3->get('devdbusername'),
      $f3->get('devdbpassword'),
      array( \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION )
    );
    $this->db=$db;
  }
  function parse_body(){
    $f3=Base::instance();
    $head=getallheaders();
    switch (true) {
      case (strpos($head['Content-Type'],'application/json')!==false):
        $input=json_decode($f3->get('BODY'));
        break;
      case (strpos($head['Content-Type'],'application/x-www-form-urlencoded;charset=utf-8')!==false):
        parse_str($f3->get('BODY'),$input);
        break;
      default:
        parse_str($f3->get('BODY'),$input);
        break;
    }
    $f3->set('INPUT',$input);
  }
}
