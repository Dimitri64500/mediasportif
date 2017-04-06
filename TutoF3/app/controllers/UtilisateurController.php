<?php

class UtilisateurController extends Controller
{   
    function render()
    {

        $template=new Template;
        echo $template->render('login.htm');
    }
 
    function beforeroute()
    {
    }

    function authenticate() 
    {
        $login = $this->f3->get('POST.username');
        $password = $this->f3->get('POST.password');

        $utilisateur = new Utilisateur($this->db);
        $utilisateur->getByLogin($login);

        if($utilisateur->dry()) {
            $this->f3->reroute('/login');
        }
        if(password_verify($password,$utilisateur->motdepasse)) {
            $this->f3->set('SESSION.utilisateur', $utilisateur->login);
            $this->f3->reroute('/');
        } else {
            $this->f3->reroute('/login');
        }
    }
}