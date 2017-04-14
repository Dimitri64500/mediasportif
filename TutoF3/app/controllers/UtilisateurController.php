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
      $utilisateur = new Utilisateur($this->db);
      $f3 = Base::instance();
      $input = json_decode($f3->get('BODY'));
      $login = $input->username;
      $password = $input->password;
        $utilisateur->getByLogin($login);

        if($utilisateur->dry()) {
            $this->f3->reroute('/login');
        }
        if(password_verify($password,$utilisateur->motdepasse)) {
          var_dump('ok');
            echo "ok";
        } else {
            echo "ko";
        }
    }
}
