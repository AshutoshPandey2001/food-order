<?php
    class Food{
        // Connection
        private $conn;
        // Table
        private $db_table = "testy_food";
        // Columns
        public $id;
        public $admin_id;
        public $name;
        public $price;
        public $short_description;
        public $picture;
        public $timestamp;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }
        // GET ALL
        public function getFoods(){
            
            $sqlQuery = "SELECT * FROM " . $this->db_table . " ORDER BY food_id desc";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
            return true;
        }

        // GET ALL
        public function getFoodsLimit(){
            $sqlQuery = "SELECT * FROM " . $this->db_table . " ORDER BY food_id desc LIMIT 3";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
            return true;
        }
        
        public function createFood(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                    admin_id = :admin_id,
                    name = :name,
                    price = :price,
                    short_description = :short_description,
                    picture = :picture";
                    $stmt = $this->conn->prepare($sqlQuery);
        
             // sanitize
            echo $this->admin_id = htmlspecialchars(strip_tags($this->admin_id));
            echo $this->name = htmlspecialchars(strip_tags($this->name));
            echo $this->price = htmlspecialchars(strip_tags($this->price));
            echo $this->short_description = htmlspecialchars(strip_tags($this->short_description));
            echo $this->picutre = htmlspecialchars(strip_tags($this->picture));
        
            $stmt->bindParam(":admin_id", $this->admin_id);
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":languages", $this->price);
            $stmt->bindParam(":level", $this->short_description);
            $stmt->bindParam(":downloadlink", $this->picture);
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        public function getSingleFood($id){
            $sqlQuery = "SELECT
                        *
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       food_id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1, $id);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            return $dataRow;
        }
        
        // UPDATE
        public function updateFood($id){
            $sqlQuery = "UPDATE ". $this->db_table ." 
            SET admin_id = :admin_id,
                name = :name,
                price = :price,
                short_description = :short_description,
                picture = :picture 
            WHERE food_id = ".$id;
        
            $stmt = $this->conn->prepare($sqlQuery);
    
             // sanitize
            $this->admin_id = htmlspecialchars(strip_tags($this->admin_id));
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->price = htmlspecialchars(strip_tags($this->price));
            $this->short_description = htmlspecialchars(strip_tags($this->short_description));
            $this->picutre = htmlspecialchars(strip_tags($this->picture));
            // $this->id = htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(":admin_id", $this->admin_id);
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":price", $this->price);
            $stmt->bindParam(":short_description", $this->short_description);
            $stmt->bindParam(":picture", $this->picture);
            // $stmt->bindParam(":food_id",$id);
            if($stmt->execute()){
               return true;
            }
            return false;
        }
        // DELETE
        function deleteAllFood(){
            $sqlQuery = "DELETE FROM " . $this->db_table. " ";
            $stmt = $this->conn->prepare($sqlQuery);    
            if($stmt->execute()){
                return $stmt;
            }
            return false;
        }

        // DELETE One Project
        function deleteFood(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE food_id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
            $this->id=htmlspecialchars(strip_tags($this->id));
            $stmt->bindParam(1, $this->id);
            if($stmt->execute()){
                return $stmt;
            }
            return false;
        }

        // GET ALL
        // public function getSalesMoney(){
        //     $sqlQuery = "SELECT * FROM " . $this->db_table . " WHERE food_id = " .$this->id;
        //     $stmt = $this->conn->prepare($sqlQuery);
        //     $stmt->execute();
        //     $rowFood = $stmt->fetch(PDO::FETCH_ASSOC);
        //     $this->price = $rowFood['price'];
        //     return true;
        // }

        public function getSalesMoney(){
            $sqlQuery = "SELECT
                        *
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       food_id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1, $this->id);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->price = $dataRow['price'];   
            return $dataRow;
        }
    }
?>