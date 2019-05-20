-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: 20-Maio-2019 às 14:56
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
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `academico`
--

INSERT INTO `academico` (`Idacademico`, `nome`, `matricula`, `senha`) VALUES
(1, 'Thiago José Saquette Fagundes', 1, 'naoseimeunome'),
(2, 'Diogo Caron Feld', 5, 'diogo.feld'),
(3, 'Carlos Henrique Fernandes', 7, 'eitapega'),
(4, 'NIAA', 127, 'admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `emprestimo`
--

CREATE TABLE `emprestimo` (
  `idemprestimo` int(11) NOT NULL,
  `idacademico` int(11) NOT NULL,
  `idequipamento` int(11) NOT NULL,
  `datainicio` datetime NOT NULL,
  `datafim` datetime NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `emprestimo`
--

INSERT INTO `emprestimo` (`idemprestimo`, `idacademico`, `idequipamento`, `datainicio`, `datafim`, `status`) VALUES
(28, 3, 13, '2019-05-20 09:30:04', '2019-05-20 09:50:10', 0),
(29, 3, 18, '2019-05-20 09:51:25', '2019-05-20 10:41:25', 1),
(30, 3, 13, '2019-05-20 09:51:25', '2019-05-20 10:41:25', 1);

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
(12, 52, 1, 0),
(13, 44, 1, 1),
(14, 67, 1, 0),
(15, 14, 2, 0),
(16, 22, 2, 0),
(17, 67, 2, 0),
(18, 32, 3, 1),
(19, 45, 3, 0),
(20, 77, 4, 0),
(23, 33, 2, 0);

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
  ADD KEY `FK_idequipamento` (`idequipamento`);

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
  MODIFY `Idacademico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `emprestimo`
--
ALTER TABLE `emprestimo`
  MODIFY `idemprestimo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

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
  ADD CONSTRAINT `FK_idequipamento` FOREIGN KEY (`idequipamento`) REFERENCES `equipamento` (`idequipamento`);

--
-- Limitadores para a tabela `equipamento`
--
ALTER TABLE `equipamento`
  ADD CONSTRAINT `idtipo` FOREIGN KEY (`idtipo`) REFERENCES `tipo` (`idtipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
