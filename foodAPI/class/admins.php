<?php
    class Admin{
        
        private $conn;
        private $db_table = "admins";
        public $id;
        public $email;
        public $password;
        public $name;
        

        public function __construct($db){
            $this->conn = $db;
        }
        
        public function getAdmins(){
            $sqlQuery = "SELECT * FROM " . $this->db_table . " ORDER BY admin_id desc ";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }
        
        public function createAdmin(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        email = :email,  
                        name = :email,  
                        password = :password";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->password=htmlspecialchars(strip_tags($this->password));
            $this->name=htmlspecialchars(strip_tags($this->name));
        
            
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":password", $this->password);
            $stmt->bindParam(":name", $this->name);

            if($stmt->execute()){
               return true;
            }
            return false;
        }

        
        public function getSingleAdmin(){
            $sqlQuery = "SELECT
                        *
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       email = ?
                    LIMIT 0,1";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1,$this->email);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->email = $dataRow['email'];
            $this->password = $dataRow['password'];
            return $dataRow;
        }

        // login Admin Searching
        public function adminLogin(){
            $sqlQuery = "SELECT * FROM ". $this->db_table ." WHERE  email = ? LIMIT 0,1";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1, $this->email);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            if($dataRow){
                $this->password = $dataRow['password'];
            }
            return $dataRow;
        }
        
        // UPDATE
        public function updateAdmin(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        name = :name, 
                        password = :password,
                        email = :email
                    WHERE 
                        admin_id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
    
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->password=htmlspecialchars(strip_tags($this->password));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":email", $this->name);
            $stmt->bindParam(":password", $this->password);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }
        // DELETE
        function deleteAdmin(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE admin_id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
    
            if($stmt->execute()){
                return $stmt;
            }
            return false;
        }
    }
?>