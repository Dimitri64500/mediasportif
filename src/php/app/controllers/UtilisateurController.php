<?php
include getcwd().'\app\models\Authentification.php';

class UtilisateurController extends Controller
{
    function beforeroute()
    {
    }

    function authenticate()
    {
      $utilisateur = new Utilisateur();
      $utilisateur->parse_body();

      $f3 = Base::instance();
      $input = $f3->get('INPUT');
      //On récupère le user trouvé
      $utilisateur->getByLogin($input->login);
      //on teste si on a bien récupéré un user
      if ($utilisateur->dry()) {
        $this->f3->reroute('/login');
      }
      if (password_verify($input->password, $utilisateur->motdepasse)) {
        $token = $this->initToken($utilisateur);
        $f3->set('token',$token);
      } else {
        $f3->set('token',null);
      }
    }
  private function initToken($user)
  {
    // Data need in the token
    $for_token = array(
      'id'		     => $user->id,
      'email'		     => $user->email,
      'login'      => $user->login,
    );
    // Return the token
    return Authentification::createToken($for_token);
  }
}
