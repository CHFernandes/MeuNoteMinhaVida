-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: 22-Maio-2019 às 13:50
-- Versão do servidor: 10.1.36-MariaDB
-- versão do PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_principal`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `academico`
--

CREATE TABLE `academico` (
  `Idacademico` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `matricula` int(11) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `tipo` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `academico`
--

INSERT INTO `academico` (`Idacademico`, `nome`, `matricula`, `senha`, `tipo`) VALUES
(1, 'Thiago José Saquette Fagundes', 1, 'naoseimeunome', '1'),
(2, 'Diogo Caron Feld', 5, 'diogo.feld', '1'),
(3, 'Carlos Henrique Fernandes', 7, 'eitapega', '1'),
(4, 'NIAA', 127, 'admin', '0'),
(5, 'Kelly Betio', 10, 'kelly', '2');

-- --------------------------------------------------------

--
-- Estrutura da tabela `emprestimo`
--

CREATE TABLE `emprestimo` (
  `idemprestimo` int(11) NOT NULL,
  `idacademico` int(11) NOT NULL,
  `idequipamento` int(11) NOT NULL,
  `idsala` int(11) NOT NULL,
  `datainicio` datetime NOT NULL,
  `datafim` datetime NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `emprestimo`
--

INSERT INTO `emprestimo` (`idemprestimo`, `idacademico`, `idequipamento`, `idsala`, `datainicio`, `datafim`, `status`) VALUES
(33, 3, 14, 1, '2019-05-20 17:24:57', '2019-05-20 17:25:42', 0),
(34, 3, 20, 1, '2019-05-20 17:24:57', '2019-05-20 17:26:09', 0),
(37, 3, 14, 1, '2019-05-20 18:05:14', '2019-05-20 18:55:14', 1),
(38, 3, 12, 1, '2019-05-21 12:37:34', '2019-05-21 13:27:34', 1),
(39, 3, 23, 1, '2019-05-21 12:37:34', '2019-05-21 13:27:34', 1),
(40, 3, 17, 1, '2019-05-21 12:37:59', '2019-05-21 13:27:59', 1),
(41, 3, 20, 1, '2019-05-21 12:38:00', '2019-05-21 13:28:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `equipamento`
--

CREATE TABLE `equipamento` (
  `idequipamento` int(11) NOT NULL,
  `numeracao` int(11) NOT NULL,
  `idtipo` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `equipamento`
--

INSERT INTO `equipamento` (`idequipamento`, `numeracao`, `idtipo`, `status`) VALUES
(12, 52, 1, 1),
(13, 44, 1, 1),
(14, 67, 1, 1),
(15, 14, 2, 1),
(16, 22, 2, 0),
(17, 67, 2, 1),
(18, 32, 3, 0),
(19, 45, 3, 0),
(20, 77, 4, 1),
(23, 33, 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academico`
--
ALTER TABLE `academico`
  ADD PRIMARY KEY (`Idacademico`);

--
-- Indexes for table `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD PRIMARY KEY (`idemprestimo`),
  ADD KEY `FK_idacademico` (`idacademico`),
  ADD KEY `FK_idequipamento` (`idequipamento`),
  ADD KEY `FK_idsala` (`idsala`);

--
-- Indexes for table `equipamento`
--
ALTER TABLE `equipamento`
  ADD PRIMARY KEY (`idequipamento`),
  ADD KEY `idtipo` (`idtipo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academico`
--
ALTER TABLE `academico`
  MODIFY `Idacademico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `emprestimo`
--
ALTER TABLE `emprestimo`
  MODIFY `idemprestimo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `equipamento`
--
ALTER TABLE `equipamento`
  MODIFY `idequipamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD CONSTRAINT `FK_idacademico` FOREIGN KEY (`idacademico`) REFERENCES `academico` (`Idacademico`),
  ADD CONSTRAINT `FK_idequipamento` FOREIGN KEY (`idequipamento`) REFERENCES `equipamento` (`idequipamento`),
  ADD CONSTRAINT `FK_idsala` FOREIGN KEY (`idsala`) REFERENCES `sala` (`idsala`);

--
-- Limitadores para a tabela `equipamento`
--
ALTER TABLE `equipamento`
  ADD CONSTRAINT `idtipo` FOREIGN KEY (`idtipo`) REFERENCES `tipo` (`idtipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
