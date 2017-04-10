<?php

class MainController extends Controller
{
    function render()
    {
        $this->f3->set('view', 'dashboard.htm');
        $template=new Template;
        echo $template->render('layout.htm');
    }

    function displayArticles()
    {
        $article = new Article($this->db);

        $this->f3->set('articles', $article->all());
        $this->f3->set('view', 'messages.htm');
        $template=new Template;
        echo $template->render('layout.htm');
    }

    function apiArticles()
    {
        $articles = new Article($this->db);
        $data = $articles->all();

        $json = array();

        foreach($data as $row) {
            $item = array();

            foreach($row as $key => $value) {
                $item[$key] = $value;
            }

            array_push($json, $item);
        }

        echo json_encode($json);
    }

    function apiNotes()
    {
        $notes = new Note($this->db);
        $data = $notes->all();

        $json = array();

        foreach($data as $row) {
          $item = array();

          foreach($row as $key => $value) {
            $item[$key] = $value;
          }

          array_push($json, $item);
        }

        echo json_encode($json);
    }
}
