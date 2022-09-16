-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 16 sep. 2022 à 13:15
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `calculator-9000`
--

-- --------------------------------------------------------

--
-- Structure de la table `calculs`
--

DROP TABLE IF EXISTS `calculs`;
CREATE TABLE IF NOT EXISTS `calculs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `calcul` varchar(255) NOT NULL,
  `result` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `calculs`
--

INSERT INTO `calculs` (`id`, `calcul`, `result`) VALUES
(38, '5.9*10', 59),
(37, '9*9', 81),
(35, '3+6', 9),
(34, '1*89', 89),
(33, '3+5', 8),
(39, '59*900', 53100);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
