<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods:*");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../config/database.php';
    include_once '../class/foods.php';
    include_once '../class/admins.php';
    include_once '../class/customers.php';
    include_once '../class/feedbacks.php';
    
    $database = new Database();
    $db = $database->getConnection();
    if(isset($_GET['food']) && isset($_GET['food_id'])){
        $item = new Food($db);
        $item->id = htmlspecialchars($_GET['food_id']);
        if($item->deleteFood()){
            echo json_encode("Food data has beendeleted");
        } else{
            echo json_encode("Food data could not be deleted");
        }
    }else if(isset($_GET['feedback']) && $_GET['feedback_id']){
        $item = new Feedback($db);
        $item->id = htmlspecialchars($_GET['feedback_id']);
        if($item->deleteFeedback()){
            echo json_encode(array("message"=>"Feedback has been deleted", "status"=>1));
        } else{
            echo json_encode(array("message"=>"Feedback data could not be deleted", "status"=>0));
        }
    }else if(isset($_GET['customer']) && $_GET['customer_id']){
        $item = new Customer($db);
        $item->id = htmlspecialchars($_GET['customer_id']);
        if($item->deleteCustomer()){
            echo json_encode(array("message"=>"Customer has been deleted", "status"=>1));
        } else{
            echo json_encode(array("message"=>"Customer could not be deleted", "status"=>0));
        }
    }else if(isset($_GET['admin']) && $_GET['admin_id']){
        $item = new Admin($db);
        $item->id = htmlspecialchars($_GET['admin_id']);
        if($item->deleteAdmin()){
            echo json_encode(array("message"=>"Admin has been deleted", "status"=>1));
        } else{
            echo json_encode(array("message"=>"Admin could not be delete", "status"=>0));
        }
    }else {
        echo json_encode(array("message"=>"No any response recieved by client", "status"=>0));
    }
?>