-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2022 at 11:27 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food-delivery`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `name`, `email`, `password`, `timestamp`) VALUES
(35, 'katrina kaif', 'katrina@gmail.com', '1234', '2022-04-03 10:31:02'),
(37, 'admin@gmail.com', 'admin@gmail.com', '123', '2022-04-04 20:45:05'),
(38, 'sajid@gmail.com', 'sajid@gmail.com', '123', '2022-04-04 20:46:04');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` text NOT NULL,
  `delivery_address` text NOT NULL,
  `order_status` int(11) NOT NULL DEFAULT 4,
  `display` int(11) NOT NULL DEFAULT 0,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `food_id`, `name`, `phone_number`, `delivery_address`, `order_status`, `display`, `order_date`) VALUES
(1, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 0, 0, '2022-04-03 16:01:54'),
(4, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 3, 0, '2022-04-03 14:14:54'),
(6, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 0, 0, '2022-04-03 16:01:51'),
(7, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 2, 0, '2022-04-03 15:20:53'),
(8, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 0, 0, '2022-04-03 16:30:28'),
(9, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 0, 0, '2022-04-03 16:01:48'),
(10, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:13:07'),
(11, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:13:29'),
(12, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:23:58'),
(14, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:35:42'),
(15, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:37:43'),
(16, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:39:29'),
(17, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:40:03'),
(18, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:45:07'),
(19, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:45:31'),
(20, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 1, 0, '2022-04-04 18:17:18'),
(21, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:53:38'),
(22, 1, 'Rahul Ali', '6205881326', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 17:54:14'),
(23, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 1, 0, '2022-04-04 18:17:14'),
(24, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 3, 0, '2022-04-04 18:17:11'),
(26, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 21:21:20'),
(27, 1, 'Sajdi', '7065221377', 'H.no. 702, gali no. 11, kapshera, new delhi', 4, 0, '2022-04-04 21:22:14');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `admin_id` int(11) DEFAULT 0,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` text NOT NULL,
  `description` text NOT NULL,
  `action` int(11) NOT NULL DEFAULT 0,
  `display` int(11) NOT NULL DEFAULT 0,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `admin_id`, `name`, `email`, `phone_number`, `description`, `action`, `display`, `timestamp`) VALUES
(7, 0, 'katrina kaif', 'katrina@gmail.com', '7065221377', 'Your Foods is delicious, I want to book your food for my upcoming party. ', 0, 0, '2022-04-04 18:16:37');

-- --------------------------------------------------------

--
-- Table structure for table `testy_food`
--

CREATE TABLE `testy_food` (
  `food_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `short_description` text NOT NULL,
  `picture` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testy_food`
--

INSERT INTO `testy_food` (`food_id`, `admin_id`, `name`, `price`, `short_description`, `picture`, `timestamp`) VALUES
(1, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:51:24'),
(2, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(3, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(4, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-04 20:38:47'),
(5, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(6, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-04 20:22:43'),
(7, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(8, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(9, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-04 20:37:40'),
(10, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(11, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(12, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-04 20:37:30'),
(13, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(14, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(15, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-04 20:37:24'),
(16, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(17, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(18, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(20, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(21, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(22, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', '', '2022-04-04 20:30:00'),
(27, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', '', '2022-04-04 20:30:12'),
(29, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(30, 0, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-04 20:36:28'),
(31, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02'),
(32, 0, 'Pizza', 20, 'description', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-04 20:34:14'),
(34, 1, 'Paneer Grilled Sandwich', 200, 'Pan-fried masala paneer.', 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq', '2022-04-02 18:52:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `food_id` (`food_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `testy_food`
--
ALTER TABLE `testy_food`
  ADD PRIMARY KEY (`food_id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `testy_food`
--
ALTER TABLE `testy_food`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `testy_food` (`food_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
