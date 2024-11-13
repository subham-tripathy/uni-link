-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 03:04 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dataHarmony`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `registration_number` varchar(50) DEFAULT NULL,
  `company_type` varchar(50) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `registration_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO companies (registration_number, company_type, company_name, registration_date) VALUES
('U47990UP2023PTC191867', 'Private', 'AAAM WELLNESS PRIVATE LIMITED', '2023-11-01'),
('U20223HR2023PTC116179', 'Private', 'AABHYA INKS AND COATINGS PRIVATE LIMITED', '2023-11-01'),
('U77309TN2023PTC164915', 'Private', 'AADHI GLOBAL CORPORATION PRIVATE LIMITED', '2023-11-01'),
('U56102TS2023PTC178652', 'Private', 'ACCIVA KITCHEN PRIVATE LIMITED', '2023-11-01'),
('U43214HR2023PTC116181', 'Private', 'ACT MASTERS PRIVATE LIMITED', '2023-11-01'),
('U85500KA2023PTC180516', 'Private', 'ADVAYA SPORTS PRIVATE LIMITED', '2023-11-01'),
('U46305MP2023OPC068441', 'One Person Company', 'AGREX SUPPLIES (OPC) PRIVATE LIMITED', '2023-11-01'),
('U79900TS2023PTC178639', 'Private', 'AIO HOSPIALITY SOLUTIONS INDIA PRIVATE LIMITED', '2023-11-01'),
('U46497KA2023PTC180519', 'Private', 'AKP DRUGS INDIA PRIVATE LIMITED', '2023-11-01'),
('U85500GJ2023NPL145932', 'Private', 'AL-TURAB EDUCATIONAL FOUNDATION', '2023-11-01'),
('U43221KA2023PTC180525', 'Private', 'ALTITUDE AIR CONDITIONERS PRIVATE LIMITED', '2023-11-01'),
('U43900WB2023PTC265942', 'Private', 'AMEERA CONSTRUCTIVE MINDS PRIVATE LIMITED', '2023-11-01'),
('U35105KA2023PTC180518', 'Private', 'AMPYR RENEWABLE ENERGY RESOURCES TWELVE A PRIVATE LIMITED', '2023-11-01'),
('U68100TS2023PTC178646', 'Private', 'ANSHRA REALTY PRIVATE LIMITED', '2023-11-01'),
('U20223MH2023PTC413146', 'Private', 'ANYD MATERIALS PRIVATE LIMITED', '2023-11-01'),
('U88900WB2023NPL265946', 'Private', 'AROSI FOUNDATION', '2023-11-01'),
('U13912UP2023PTC191866', 'Private', 'ARTFUL TRADE SOURCING PRIVATE LIMITED', '2023-11-01'),
('U33200PB2023PTC059933', 'Private', 'ASIAN CALIBRATION PRIVATE LIMITED', '2023-11-01'),
('U47912KA2023PTC180524', 'Private', 'ASIANWARE HOME PRIVATE LIMITED', '2023-11-01'),
('U47912UP2023OPC191857', 'One Person Company', 'ATHALA RETAIL (OPC) PRIVATE LIMITED', '2023-11-01'),
('U46109RJ2023PTC090908', 'Private', 'ATHARV SOLUTION FINPRO PRIVATE LIMITED', '2023-11-01'),
('U82990PN2023PTC225359', 'Private', 'AUTOCAL ENGINEERS GLOBAL PRIVATE LIMITED', '2023-11-01'),
('U01111UP2023PTC191859', 'Private', 'BABA KAMALPUR FARMERS PRODUCER COMPANY LIMITED', '2023-11-01'),
('U43299AS2023PTC025457', 'Private', 'BAGESWAREE INDUSTRIES PRIVATE LIMITED', '2023-11-01'),
('U01500MH2023PTC413158', 'Private', 'BANAIFARM FARMERS PRODUCER COMPANY LIMITED', '2023-11-01'),
('U85499OD2023NPL044142', 'Private', 'BANGURINGAON DEVELOPMENT FOUNDATION', '2023-11-01'),
('U01611UP2023PTC191861', 'Private', 'BARAMAM AGRO PRODUCER COMPANY LIMITED', '2023-11-01'),
('U64990BR2023PTC065957', 'Private', 'BASA CREDIT PRIVATE LIMITED', '2023-11-01'),
('U52291MH2023PTC413142', 'Private', 'BEYONDEDGE INTERNATIONAL PRIVATE LIMITED', '2023-11-01'),
('U01611UP2023PTC191869', 'Private', 'BHATHAL FOOD PRODUCER COMPANY LIMITED', '2023-11-01'),
('U46209GJ2023PTC145930', 'Private', 'BHOMIYA JI AGRO PRIVATE LIMITED', '2023-11-01'),
('U35202PB2023PTC059932', 'Private', 'BINARY FUELS PRIVATE LIMITED', '2023-11-01'),
('U10202WB2023PTC265947', 'Private', 'BIZOTEC FOOD SERVICES PRIVATE LIMITED', '2023-11-01'),
('U52291KA2023PTC180523', 'Private', 'BLACK EAGLE TRAVELS PRIVATE LIMITED', '2023-11-01'),
('U47912KA2023PTC180527', 'Private', 'BLISSFULBRANDS PRIVATE LIMITED', '2023-11-01'),
('U24105WB2023PTC265939', 'Private', 'BLUE CRESCENT STEEL PRIVATE LIMITED', '2023-11-01'),
('U68100TS2023PTC178650', 'Private', 'BLUE IVY REALTY PRIVATE LIMITED', '2023-11-01'),
('U59111PN2023PTC225355', 'Private', 'BLUE WOLF TV PRIVATE LIMITED', '2023-11-01'),
('U68100PN2023PTC225353', 'Private', 'BRB LANDMARKS PRIVATE LIMITED', '2023-11-01'),
('U43299KL2023PTC084320', 'Private', 'C HOMES INFRASTRUCTURE CONSULTANT AND DEVELOPERS PRIVATE LIMITED', '2023-11-01'),
('U10790TS2023PTC178643', 'Private', 'CHAN CHAN PRIVATE LIMITED', '2023-11-01');

-- --------------------------------------------------------

--
-- Table structure for table `companyregnrequest`
--

CREATE TABLE `companyregnrequest` (
  `CompanyName` text NOT NULL,
  `CompanyId` text NOT NULL,
  `CompanyMail` text NOT NULL,
  `CompanyPassword` text NOT NULL,
  `CompanyCertificate` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `requeststudentaccess`
--

CREATE TABLE `requeststudentaccess` (
  `CompanyId` varchar(50) NOT NULL,
  `StudentRegnNumber` varchar(50) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `roll_no` varchar(20) DEFAULT NULL,
  `regn_no` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `ssc_p` decimal(5,2) DEFAULT NULL,
  `ssc_passing_year` int(11) DEFAULT NULL,
  `ssc_certificate_id` varchar(20) DEFAULT NULL,
  `hsc_p` decimal(5,2) DEFAULT NULL,
  `hsc_passing_year` int(11) DEFAULT NULL,
  `hsc_certificate_id` varchar(20) DEFAULT NULL,
  `degree_p` decimal(5,2) DEFAULT NULL,
  `degree_branch` varchar(50) DEFAULT NULL,
  `degree_yoj` int(11) DEFAULT NULL,
  `degree_yop` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO student (roll_no, regn_no, name, gender, ssc_p, ssc_passing_year, ssc_certificate_id, hsc_p, hsc_passing_year, hsc_certificate_id, degree_p, degree_branch, degree_yoj, degree_yop) VALUES
('18CS001', '18UG101001', 'Aditya Kumar', 'M', 85.00, 2018, 'ABC123', 80.00, 2020, 'XYZ456', 75.00, 'Computer Science', 2018, 2022),
('19EE002', '19UG201002', 'Ananya Singh', 'F', 78.00, 2019, 'PQR789', 82.00, 2021, 'LMN101', 79.00, 'Electrical Engineering', 2019, 2023),
('17ME003', '17UG301003', 'Arjun Patel', 'M', 92.00, 2017, 'DEF234', 88.00, 2019, 'GHI567', 85.00, 'Mechanical Engineering', 2017, 2021),
('18CH004', '18UG401004', 'Ayesha Sharma', 'F', 86.00, 2018, 'JKL890', 89.00, 2020, 'OPQ123', 84.00, 'Chemical Engineering', 2018, 2022),
('19CV005', '19UG501005', 'Deepak Singh', 'M', 79.00, 2019, 'RST456', 81.00, 2021, 'UVW789', 77.00, 'Civil Engineering', 2019, 2023),
('17CS006', '17UG601006', 'Divya Verma', 'F', 94.00, 2017, 'XYZ123', 90.00, 2019, 'ABC456', 87.00, 'Computer Science', 2017, 2021),
('19EE007', '19UG701007', 'Gaurav Gupta', 'M', 81.00, 2019, 'LMN789', 85.00, 2021, 'PQR123', 78.00, 'Electrical Engineering', 2019, 2023),
('18ME008', '18UG801008', 'Kritika Patel', 'F', 88.00, 2018, 'GHI456', 92.00, 2020, 'DEF789', 89.00, 'Mechanical Engineering', 2018, 2022),
('18CH009', '18UG901009', 'Mohit Sharma', 'M', 83.00, 2018, 'OPQ567', 87.00, 2020, 'JKL234', 82.00, 'Chemical Engineering', 2018, 2022),
('17CV010', '17UG001010', 'Neha Yadav', 'F', 91.00, 2017, 'UVW901', 94.00, 2019, 'RST567', 90.00, 'Civil Engineering', 2017, 2021),
('18CS011', '18UG101011', 'Prateek Kumar', 'M', 85.00, 2018, 'ABC234', 80.00, 2020, 'XYZ567', 75.00, 'Computer Science', 2018, 2022),
('19EE012', '19UG201012', 'Rashi Singh', 'F', 88.00, 2019, 'PQR901', 82.00, 2021, 'LMN567', 79.00, 'Electrical Engineering', 2019, 2023),
('19ME013', '19UG301013', 'Rohit Patel', 'M', 75.00, 2020, 'DEF901', 70.00, 2022, 'GHI123', 68.00, 'Mechanical Engineering', 2019, 2023),
('18CH014', '18UG401014', 'Sakshi Verma', 'F', 90.00, 2017, 'JKL901', 92.00, 2019, 'OPQ567', 88.00, 'Chemical Engineering', 2018, 2022),
('18CV015', '18UG501015', 'Sandeep Singh', 'M', 85.00, 2018, 'RST234', 82.00, 2020, 'UVW901', 80.00, 'Civil Engineering', 2018, 2022),
('19CS016', '19UG601016', 'Shreya Gupta', 'F', 78.00, 2019, 'XYZ901', 82.00, 2021, 'ABC567', 79.00, 'Computer Science', 2019, 2023),
('18EE017', '18UG701017', 'Varun Sharma', 'M', 86.00, 2017, 'LMN901', 88.00, 2019, 'PQR567', 84.00, 'Electrical Engineering', 2018, 2022),
('18ME018', '18UG801018', 'Yamini Patel', 'F', 83.00, 2018, 'GHI901', 87.00, 2020, 'DEF567', 82.00, 'Mechanical Engineering', 2018, 2022),
('17CH019', '17UG901019', 'Zubin Kumar', 'M', 91.00, 2017, 'OPQ901', 94.00, 2019, 'JKL567', 90.00, 'Chemical Engineering', 2017, 2021),
('19CV020', '19UG001020', 'Aarti Singh', 'F', 79.00, 2019, 'RST234', 81.00, 2021, 'UVW901', 77.00, 'Civil Engineering', 2019, 2023),
('18CS021', '18UG101021', 'Alok Kumar', 'M', 82.00, 2018, 'ABC901', 79.00, 2020, 'XYZ567', 75.00, 'Computer Science', 2018, 2022),
('19EE022', '19UG201022', 'Anushka Patel', 'F', 88.00, 2017, 'PQR901', 92.00, 2019, 'LMN567', 89.00, 'Electrical Engineering', 2019, 2023),
('21ME023', '21UG301023', 'Dev Sharma', 'M', 76.00, 2019, 'DEF901', 80.00, 2021, 'GHI567', 75.00, 'Mechanical Engineering', 2021, 2025),
('18CH024', '18UG401024', 'Heena Singh', 'F', 89.00, 2018, 'JKL901', 85.00, 2020, 'OPQ567', 82.00, 'Chemical Engineering', 2018, 2022),
('17CV025', '17UG501025', 'Jatin Kumar', 'M', 85.00, 2017, 'RST901', 88.00, 2019, 'UVW567', 84.00, 'Civil Engineering', 2017, 2021),
('20CS026', '20UG601026', 'Kavita Patel', 'F', 77.00, 2018, 'XYZ901', 81.00, 2020, 'ABC567', 79.00, 'Computer Science', 2020, 2024),
('19EE027', '19UG701027', 'Lalit Sharma', 'M', 84.00, 2019, 'LMN901', 86.00, 2021, 'PQR567', 82.00, 'Electrical Engineering', 2019, 2023),
('18ME028', '18UG801028', 'Meera Gupta', 'F', 82.00, 2017, 'GHI901', 88.00, 2019, 'DEF567', 85.00, 'Mechanical Engineering', 2018, 2022),
('17CH029', '17UG901029', 'Naveen Verma', 'M', 90.00, 2018, 'OPQ901', 92.00, 2020, 'JKL567', 89.00, 'Chemical Engineering', 2017, 2021),
('18CV030', '18UG001030', 'Priya Singh', 'F', 78.00, 2019, 'RST901', 82.00, 2021, 'UVW567', 79.00, 'Civil Engineering', 2018, 2022),
('20CS031', '20UG101031', 'Rajeev Kumar', 'M', 83.00, 2018, 'ABC901', 79.00, 2020, 'XYZ567', 75.00, 'Computer Science', 2020, 2024),
('19EE032', '19UG201032', 'Ananya Patel', 'F', 89.00, 2017, 'PQR901', 92.00, 2019, 'LMN567', 89.00, 'Electrical Engineering', 2019, 2023),
('21ME033', '21UG301033', 'Rahul Sharma', 'M', 76.00, 2019, 'DEF901', 80.00, 2021, 'GHI567', 75.00, 'Mechanical Engineering', 2021, 2025),
('18CH034', '18UG401034', 'Meera Singh', 'F', 87.00, 2018, 'JKL901', 83.00, 2020, 'OPQ567', 80.00, 'Chemical Engineering', 2018, 2022),
('17CV035', '17UG501035', 'Arun Kumar', 'M', 85.00, 2017, 'RST901', 88.00, 2019, 'UVW567', 84.00, 'Civil Engineering', 2017, 2021),
('20CS036', '20UG601036', 'Rekha Gupta', 'F', 77.00, 2018, 'XYZ901', 81.00, 2020, 'ABC567', 79.00, 'Computer Science', 2020, 2024),
('19EE037', '19UG701037', 'Akash Kumar', 'M', 84.00, 2019, 'LMN901', 86.00, 2021, 'PQR567', 82.00, 'Electrical Engineering', 2019, 2023),
('18ME038', '18UG801038', 'Mohini Gupta', 'F', 82.00, 2017, 'GHI901', 88.00, 2019, 'DEF567', 85.00, 'Mechanical Engineering', 2018, 2022),
('17CH039', '17UG901039', 'Rajesh Verma', 'M', 90.00, 2018, 'OPQ901', 92.00, 2020, 'JKL567', 89.00, 'Chemical Engineering', 2017, 2021),
('18CV040', '18UG001040', 'Shikha Sharma', 'F', 78.00, 2019, 'RST901', 82.00, 2021, 'UVW567', 79.00, 'Civil Engineering', 2018, 2022);

-- --------------------------------------------------------

--
-- Table structure for table `studentsgpa`
--

CREATE TABLE `studentsgpa` (
  `regno` varchar(20) DEFAULT NULL,
  `sgpa_sem1` decimal(5,2) DEFAULT NULL,
  `sgpa_sem2` decimal(5,2) DEFAULT NULL,
  `sgpa_sem3` decimal(5,2) DEFAULT NULL,
  `sgpa_sem4` decimal(5,2) DEFAULT NULL,
  `sgpa_sem5` decimal(5,2) DEFAULT NULL,
  `sgpa_sem6` decimal(5,2) DEFAULT NULL,
  `sgpa_sem7` decimal(5,2) DEFAULT NULL,
  `sgpa_sem8` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentsgpa`
--

INSERT INTO `studentsgpa` (`regno`, `sgpa_sem1`, `sgpa_sem2`, `sgpa_sem3`, `sgpa_sem4`, `sgpa_sem5`, `sgpa_sem6`, `sgpa_sem7`, `sgpa_sem8`) VALUES
('18UG101001', 8.50, 8.20, 8.70, 9.00, 8.30, 8.80, 8.60, 8.90),
('19UG201002', 8.80, 9.10, 8.50, 8.90, 8.70, 9.20, 8.60, 8.90),
('17UG301003', 9.20, 9.00, 8.80, 8.70, 9.10, 8.50, 9.00, 8.70),
('18UG401004', 8.60, 9.00, 8.70, 8.90, 9.20, 8.80, 8.70, 9.10),
('19UG501005', 8.90, 8.70, 8.60, 9.00, 8.80, 9.10, 8.50, 8.90),
('17UG601006', 9.40, 9.20, 9.10, 9.30, 9.50, 9.00, 9.20, 9.40),
('19UG701007', 8.10, 8.50, 8.30, 8.70, 8.40, 8.80, 8.20, 8.60),
('18UG801008', 8.80, 8.90, 8.70, 9.00, 8.60, 8.90, 8.70, 8.80),
('18UG901009', 8.30, 8.70, 8.40, 8.90, 8.20, 8.50, 8.40, 8.60),
('17UG001010', 9.10, 9.20, 9.00, 9.30, 9.10, 9.00, 9.20, 9.30),
('18UG101011', 8.50, 8.90, 8.70, 8.80, 8.60, 8.90, 8.70, 8.80),
('19UG201012', 8.80, 9.00, 8.50, 8.90, 8.70, 9.10, 8.60, 8.90),
('19UG301013', 7.50, 7.80, 7.30, 7.90, 7.60, 7.80, 7.40, 7.70),
('18UG401014', 9.00, 8.80, 9.20, 9.10, 9.00, 8.90, 9.10, 9.20),
('18UG501015', 8.50, 8.30, 8.80, 8.60, 8.40, 8.70, 8.30, 8.60),
('19UG601016', 7.80, 8.10, 7.90, 8.20, 8.00, 8.30, 7.90, 8.20),
('18UG701017', 8.60, 8.80, 8.70, 8.90, 8.50, 8.80, 8.60, 8.70),
('18UG801018', 8.30, 8.60, 8.50, 8.80, 8.40, 8.70, 8.40, 8.60),
('17UG901019', 9.10, 9.20, 9.00, 9.30, 9.10, 9.00, 9.30, 9.40),
('19UG001020', 7.90, 8.20, 8.10, 8.30, 8.00, 8.40, 8.00, 8.30),
('18UG101021', 8.20, 8.50, 8.30, 8.70, 8.40, 8.60, 8.30, 8.50),
('19UG201022', 8.80, 9.00, 8.50, 8.90, 8.70, 9.10, 8.70, 8.90),
('21UG301023', 7.60, 8.00, 7.70, 8.10, 7.80, 8.20, 7.70, 8.00),
('18UG401024', 8.90, 8.70, 9.00, 8.80, 9.20, 8.60, 9.00, 8.70),
('17UG501025', 8.50, 8.80, 8.70, 8.90, 8.60, 8.80, 8.70, 8.90),
('20UG601026', 7.70, 8.10, 7.90, 8.20, 7.80, 8.30, 7.80, 8.10),
('19UG701027', 8.40, 8.60, 8.30, 8.70, 8.50, 8.80, 8.50, 8.70),
('18UG801028', 8.20, 8.70, 8.40, 8.90, 8.30, 8.60, 8.40, 8.70),
('17UG901029', 9.00, 9.10, 8.90, 9.20, 9.00, 8.80, 9.10, 9.20),
('18UG001030', 7.80, 8.10, 7.90, 8.20, 7.90, 8.30, 7.90, 8.20),
('20UG101031', 8.30, 8.60, 8.50, 8.80, 8.40, 8.70, 8.50, 8.70),
('19UG201032', 8.90, 9.00, 8.50, 8.90, 8.70, 9.10, 8.70, 8.90),
('21UG301033', 7.60, 8.00, 7.70, 8.10, 7.80, 8.20, 7.70, 8.00),
('18UG401034', 8.70, 8.50, 8.80, 8.60, 8.90, 8.40, 8.80, 8.60),
('17UG501035', 8.50, 8.80, 8.70, 8.90, 8.60, 8.80, 8.70, 8.90),
('20UG601036', 7.70, 8.10, 7.90, 8.20, 7.80, 8.30, 7.80, 8.10),
('19UG701037', 8.40, 8.60, 8.30, 8.70, 8.50, 8.80, 8.50, 8.70),
('18UG801038', 8.20, 8.70, 8.40, 8.90, 8.30, 8.60, 8.40, 8.70),
('17UG901039', 9.00, 9.10, 8.90, 9.20, 9.00, 8.80, 9.10, 9.20),
('18UG001040', 7.80, 8.10, 7.90, 8.20, 7.90, 8.30, 7.90, 8.20);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `CompanyId` varchar(40) NOT NULL,
  `CompanyName` varchar(40) NOT NULL,
  `CompanyMail` varchar(40) NOT NULL,
  `CompanyPassword` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`CompanyId`, `CompanyName`, `CompanyMail`, `CompanyPassword`) VALUES
('ADMIN', 'ADMIN', 'ADMIN@ADMIN.COM', 'ADMIN');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
