<?php

class MainController extends Controller
{
    function render() 
    {
        $this->f3->set('view', 'dashboard.htm');
        $template=new Template;
        echo $template->render('layout.htm');
    }

    function displayMessages()
    {
        $messages = new Messages($this->db);
        
        $this->f3->set('messages', $messages->all());
        $this->f3->set('view', 'messages.htm');
        $template=new Template;
        echo $template->render('layout.htm');        
    }

    function apiMessages() 
    {
        $messages = new Messages($this->db);
        $data = $messages->all();
        
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