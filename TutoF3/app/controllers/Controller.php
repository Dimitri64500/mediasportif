<?php

class Controller
{
    protected $f3;
    protected $db;

    function beforeroute()
    {
        if($this->f3->get('SESSION.utilisateur') === null ) {
            $this->f3->reroute('/login');
            exit;
        }
    }

    function afterroute()
    {
        // your code comes here
    }

    function __construct()
    {   
        $f3=Base::instance();
        $this->f3=$f3;

        $db=new DB\SQL(
            $f3->get('devdb'),
            $f3->get('devdbusername'),
            $f3->get('devdbpassword'),
            array( \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION )
        );

        $this->db=$db;
    }
}