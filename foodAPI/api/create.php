<?php
    // this will show error if any error happens
    error_reporting(E_ALL);
    ini_set('display_errors', 1); //hide error for user registered...

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Max-Age: 10000");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // header("Access-Control-Allow-Origin: *");
    // header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    
    include_once '../class/foods.php';
    include_once '../class/admins.php';
    include_once '../class/customers.php';
    include_once '../class/feedbacks.php';


    $database = new Database();
    $db = $database->getConnection();
   
    if(isset($_GET['food'])){
        $item = new Food($db);
        $item->admin_id = $_POST['adminId'];
        $item->name = $_POST['name'];
        $item->short_description = $_POST['description'];
        $item->price = $_POST['price']; 
        $item->picture = "";
        if (isset($_FILES['picture']['name'])) {
            $valid_ext = array('png','jpeg','jpg','gif');
            $ext = strtolower(pathinfo($_FILES['picture']['name'], PATHINFO_EXTENSION));
            $upload_path = __DIR__."/images/food_image".$_FILES['picture']['name'];
            if(in_array($ext,$valid_ext)){  
                if(file_exists($upload_path)){
                    $filename = basename($_FILES['picture']['name'],".".$ext).rand().".".$ext;
                    $upload_path = __DIR__."/images/food_image".$filename;
                    $url = "https://".$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF'])."/images/".$filename;
                }else{
                    $url = "https://".$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF'])."/images/".basename($_FILES["picture"]['name']);
                }
                if(move_uploaded_file($_FILES['picture']['tmp_name'], $upload_path)){
                    // echo json_encode(array("message"=>"file is moved: ".$upload_path));
                    $item->picture = $url;
                    // echo json_encode(array("message"=>"files is exit"));
                    if($item->createFood()){
                        echo json_encode(array("message1"=>"Food Added", "https:"=>$url, "path", "data"=>$url, "status"=>1));
                    } else{
                        echo json_encode(array("message"=>"Food could not added"));
                    }
                }else {
                    echo json_encode(array("message"=>"file could not moved: ".$upload_path));
                }
            }else {
                echo json_encode(array("message"=>"File formate is not correct ", "status"=>0));
            }
        }else {
            echo json_encode(array("message"=>"file does not exits")); 
        }
    }else if(isset($_GET['customer'])){
        $item = new Customer($db);
        $item->food_id =  $_POST['food_id'];
        $item->name = $_POST['name'];;
        $item->number =  $_POST['number'];
        $item->address = $_POST['address'];   
        // echo json_encode(array( "message"=>"User Added", "status"=>$item->food_id));
        if($item->createCustomer()){
            echo json_encode(array( "message"=>"order has been placed", "last_id"=>$db->lastInsertId(), "status"=>"1"));
        }else { 
            echo json_encode(array("message"=>"order could not addd", "status"=>"0"));
        }          
    }else if(isset($_GET['admin'])){
    
        $item = new Admin($db);
        $item->name = $_POST['name'];
        $item->email =  $_POST['email'];
        $item->password = $_POST['password'];
        $item->getSingleAdmin();
        if($item->email==$_POST['email']){
            echo json_encode(array("message"=>"Member Email already exits", "status"=>"2"));
        }else if($item->createAdmin()){
            echo json_encode(array("message"=>"Team member Added", "status"=>"1"));
        }else { 
            echo json_encode(array("message"=>"Team member Could not created", "status"=>"0"));
        }          
        // echo json_encode(array("message"=>"Team member Could not created", "status"=>$_POST['name']));
    }else if(isset($_GET['feedback'])){
        $item = new Feedback($db);
        $item->name =  $_POST['name'];;
        $item->email =  $_POST['email'];;
        $item->number = $_POST['number'];;
        $item->description =  $_POST['feedback'];
        if($item->createFeedback()){
            echo json_encode(array("message1"=>"Feedback added", "status"=>1));
        } else{
            echo json_encode(array("message"=>"Feedback could not be added", "status"=>1));
        }
    }else {
        echo json_encode(array("message"=>"No method sent by client", "status"=>0));
    }
    
?>