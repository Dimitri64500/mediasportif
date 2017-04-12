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
}
