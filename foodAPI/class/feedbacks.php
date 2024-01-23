<?php
    class Feedback{
        // Connection
        private $conn;
        // Table
        private $db_table = "feedback";

        // Columns
        public $id;
        public $name;
        public $email;
        public $number;
        public $description;
        public $action;
        public $admin_id;
        public $timestamp;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        public function getFeedbacks(){
            $sqlQuery = "SELECT * FROM " . $this->db_table . " ORDER BY feedback_id desc";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }


        public function createFeedback(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                    name = :name,
                    email = :email,
                    phone_number = :number,
                    description = :description";
                    $stmt = $this->conn->prepare($sqlQuery);
        
             // sanitize
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->number = htmlspecialchars(strip_tags($this->number));
        
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":number", $this->number);
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        public function updateAction(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        action = :action, 
                        action_by = :admin_id, 
                    WHERE 
                        feedback_id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
    
            $this->action=htmlspecialchars(strip_tags($this->action));
            (int)$this->admin_id=htmlspecialchars(strip_tags($this->admin_id));
            (int)$this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":email", $this->action);
            $stmt->bindParam(":password", $this->admin_id);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }
        
        // DELETE
        function deleteFeedback(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE feedback_id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
        (int)$this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
    
            if($stmt->execute()){
                return $stmt;
            }
            return false;
        }
    }
?>