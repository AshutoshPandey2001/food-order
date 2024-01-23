<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    error_reporting(E_ALL);
    ini_set('display_errors', 1); //hide error for user registered...

    include_once '../config/database.php';
    include_once '../class/admins.php';
    // include_once '../class/feebacks.php';
    include_once '../class/foods.php';
    include_once '../class/customers.php';
    
    $database = new Database();
    $db = $database->getConnection();

    if(isset($_GET['adminLogin'])){
        $item = new Admin($db);
        $item->email = $_POST['email'];
        if($item->adminLogin()){
            if($item->password == htmlspecialchars($_POST['password'])){
                echo json_encode(array("message"=>"login credentials is found", "status"=>1));
            }else{
                echo json_encode(array("message"=>"login credentials is not found", "status"=>0));
            }
        }
        else {
            echo json_encode(array("message"=>"Email does not exits", "status"=>2, "data"=>$_POST['email'] ));
        }
    }else if(isset($_GET['admin'])){
        $item = new Admin($db);
        $item->email = $_GET['email'];
        if($item->getSingleAdmin()){
            echo json_encode(array("body"=>$item->getSingleAdmin(), "status"=>1));
        }else{
            echo json_encode(array("message"=>"admin could not found", "status"=>0));
        }
    }else if(isset($_GET['food']) && $_GET['id']){
        $item = new Food($db);
        $item->id = isset($_GET['id']);
        if($item->getSingleFood($_GET['id'])){
            echo json_encode(array("body"=>$item->getSingleFood($item->id), "message"=>"food data fetched", "status"=>1));
        }else {
            echo json_encode(array("message"=>"could not get food data", "status"=>0));
        }
    }else if(isset($_GET['customer'])){
        $item = new Customer($db);
        $item->id = $_GET['id'];
        $row = $item->getSingleCustomer();
        if($item->getSingleCustomer()){
            $foodItem = new Food($db);
            $foodItem->id = $row['food_id'];
            echo json_encode(array("body"=>$item->getSingleCustomer(), "food"=>$foodItem->getSingleFood($item->id), "message"=>"customer data fetched", "status"=>1));
        }else {
            echo json_encode(array("message"=>"no record found or unable to found", "status"=>0));
        }
    }else {
        echo json_encode(array("message"=>"No any request method send by client"));
    }

?>