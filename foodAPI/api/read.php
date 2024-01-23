<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include_once '../config/database.php';
    include_once '../class/admins.php';
    include_once '../class/customers.php';
    include_once '../class/feedbacks.php';
    include_once '../class/foods.php';
    $database = new Database();
    $db = $database->getConnection();

    if($_SERVER['REQUEST_METHOD']=="GET"){
        if(isset($_GET['admin'])){
            $items = new Admin($db);
            $stmt = $items->getAdmins();
            $itemCount = $stmt->rowCount();
            if($itemCount > 0){
                $adminArr = array();
                $adminArr["body"] = array();
                $adminArr["itemCount"] = $itemCount;
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    extract($row);
                    $e = array(
                        "id" => $admin_id,
                        "email" => $email,
                        "password" => $password,
                        "name" => $name,
                        "timestamp" => $timestamp
                    );
                    array_push($adminArr["body"], $e);
                }
                echo json_encode($adminArr);
            }
            else{
                // http_response_code(404);
                echo json_encode(
                    array("message" => "No record found.")
                );
            }
        }else if(isset($_GET['food'])){
            $items = new Food($db);
            $stmt = $items->getFoods();
            $itemCount = $stmt->rowCount();
            if($itemCount > 0){
                $projectArr = array();
                $projectArr["body"] = array();
                $projectArr["itemCount"] = $itemCount;
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    extract($row);
                    array_push($projectArr["body"], $row);
                }
                echo json_encode($projectArr);
            }else {
                echo json_encode(array("message"=>"no record found", "item"=>$itemCount));
            }
        }else if(isset($_GET['foodLimit'])){
            $items = new Food($db);
            $stmt = $items->getFoodsLimit();
            $itemCount = $stmt->rowCount();
            if($itemCount > 0){
                $projectArr = array();
                $projectArr["body"] = array();
                $projectArr["itemCount"] = $itemCount;
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    extract($row);
                    array_push($projectArr["body"], $row);
                }
                echo json_encode($projectArr);
            }else {
                echo json_encode(array("message"=>"no record found", "item"=>$itemCount));
            }
        }else if(isset($_GET['customer'])){
            $items = new Customer($db);
            $stmt = $items->getCustomers();
            $itemCount = $stmt->rowCount();
            if($itemCount > 0){
                $UserArr = array();
                $UserArr["body"] = array();
                $UserArr["itemCount"] = $itemCount;
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    array_push($UserArr['body'], $row);
                }
                echo json_encode($UserArr);    
            }else {
                echo json_encode(array("message"=>"no record found", "item"=>$itemCount));
            }          
        }else if(isset($_GET['feedback'])){
            $items = new Feedback($db);
            $stmt = $items->getFeedbacks();
            $itemCount = $stmt->rowCount();
            if($itemCount > 0){
                $UserArr = array();
                $UserArr["body"] = array();
                $UserArr["itemCount"] = $itemCount;
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    array_push($UserArr['body'], $row);
                }
                echo json_encode($UserArr);    
            }else {
                echo json_encode(array("message"=>"no record found", "item"=>$itemCount));
            }          
        }else if(isset($_GET['getSalesOrder'])){
            $items = new Customer($db);
            $stmt = $items->getSalesOrder();
            $itemCount = $stmt->rowCount();
            if($itemCount > 0){
                $UserArr = array();
                $UserArr["body"] = array();
                $UserArr["itemCount"] = $itemCount;
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    $foodItem = new Food($db);
                    $foodItem->id = (int)$row['food_id'];
                    $foodItem->getSalesMoney();
                    extract($row);
                    $e = array(
                        "id" => $id,
                        "phone_number" => $phone_number,
                        "name" => $name,
                        "delivery_address" => $delivery_address,
                        "order_status" => $order_status,
                        "order_date" => $order_date,
                        "price"=>$foodItem->price
                    );   
                    array_push($UserArr['body'], $e);
                }
                echo json_encode($UserArr);    
            }else {
                echo json_encode(array("message"=>"no record found", "item"=>$itemCount));
            }          
        }
        else {
            echo json_encode(array("message"=>"no request sent by client","status"=>0));
        }
    }else {
        echo json_encode(array("message"=>"no requested method recieved from client","status"=>0));
    }
?>