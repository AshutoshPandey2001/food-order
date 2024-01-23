<?php
    class Customer{
        // Connection
        private $conn;
        // Table
        private $db_table = "customers";
        // Columns
        public $id;
        public $food_id;
        public $name;
        public $number;
        public $address;
        public $order_status;
        public $order_date;
        public $lastInsertId;
        
        public function __construct($db){
            $this->conn = $db;
        }

        public function createCustomer(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                    food_id = :food_id,
                    name = :name,
                    phone_number = :number,
                    delivery_address = :address";
                    $stmt = $this->conn->prepare($sqlQuery);
        
             // sanitize
            (int)$this->food_id = htmlspecialchars(strip_tags($this->food_id));
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->number = htmlspecialchars(strip_tags($this->number));
            $this->address = htmlspecialchars(strip_tags($this->address));
        
            $stmt->bindParam(":food_id", $this->food_id);
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":number", $this->number);
            $stmt->bindParam(":address", $this->address);
            if($stmt->execute()){
               return true;
            }
            return false;
        }
        
        public function getCustomers(){
            $sqlQuery = "SELECT * FROM " . $this->db_table . " ORDER BY id desc";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        public function getSingleCustomer(){
            $sqlQuery = "SELECT * FROM ". $this->db_table ." WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1, $this->id);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            return $dataRow;
        }

        public function orderStatus(){

            $sqlQuery = "UPDATE ". $this->db_table ." 
            SET order_status = :order_status WHERE id = :id; ";
    
            $stmt = $this->conn->prepare($sqlQuery);
    
             // sanitize
        // (int)$this->food_id = htmlspecialchars(strip_tags($this->food_id));
        (int)$this->order_status = htmlspecialchars(strip_tags($this->order_status));
        (int)$this->id = htmlspecialchars(strip_tags($this->id));
        
            // $stmt->bindParam(":food_id", $this->food_id);
            $stmt->bindParam(":order_status", $this->order_status);
            $stmt->bindParam(":id", $this->id);

            if($stmt->execute()){
               return true;
            }
            return false;
        }

        function deleteCustomer(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            (int)$this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
    
            if($stmt->execute()){
                return $stmt;
            }
            return false;
        }

        // GET ALL
        public function getSalesOrder(){
            $sqlQuery = "SELECT * FROM " . $this->db_table . " WHERE order_status = 0";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
            return true;
        }
    }
?>