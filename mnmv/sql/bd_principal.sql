-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: 11-Jun-2019 às 19:52
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
  `tipo` char(1) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `academico`
--

INSERT INTO `academico` (`Idacademico`, `nome`, `matricula`, `senha`, `tipo`, `status`) VALUES
(1, 'Thiago José Saquette Fagundes', 1, 'naoseimeunome', '1', 0),
(2, 'Diogo Caron Feld', 5, 'diogo.feld', '1', 0),
(3, 'Carlos Henrique Fernandes', 7, 'eitapega', '1', 0),
(4, 'NIAA', 127, 'admin', '0', 0),
(5, 'Kelly Betio', 10, 'kelly', '2', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `bloco`
--

CREATE TABLE `bloco` (
  `idbloco` int(11) NOT NULL,
  `numero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `bloco`
--

INSERT INTO `bloco` (`idbloco`, `numero`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

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
(37, 3, 14, 1, '2019-05-20 18:05:14', '2019-06-04 16:08:04', 0),
(38, 3, 12, 1, '2019-05-21 12:37:34', '2019-06-04 16:08:22', 0),
(39, 3, 23, 1, '2019-05-21 12:37:34', '2019-06-04 16:08:26', 0),
(40, 3, 17, 1, '2019-05-21 12:37:59', '2019-06-04 16:08:30', 0),
(41, 3, 20, 1, '2019-05-21 12:38:00', '2019-06-04 16:09:01', 0),
(42, 3, 14, 1, '2019-06-04 16:47:06', '2019-06-04 17:06:13', 0),
(43, 3, 23, 1, '2019-06-04 16:47:06', '2019-06-04 17:06:24', 0),
(44, 5, 17, 1, '2019-06-04 16:54:30', '2019-06-04 17:06:37', 0),
(45, 5, 13, 1, '2019-06-04 16:54:30', '2019-06-04 17:06:19', 0),
(46, 5, 12, 1, '2019-06-06 07:40:00', '2019-06-04 17:06:31', 0),
(47, 5, 16, 1, '2019-06-06 07:40:00', '2019-06-04 17:07:23', 0),
(48, 5, 19, 1, '2019-06-06 07:40:00', '2019-06-04 17:06:41', 0),
(49, 3, 14, 1, '2019-06-08 16:47:45', '2019-06-08 16:48:00', 0),
(50, 3, 28, 1, '2019-06-08 16:47:45', '2019-06-10 08:06:36', 0),
(51, 3, 14, 1, '2019-06-11 11:45:16', '2019-06-11 13:25:16', 1),
(52, 3, 23, 1, '2019-06-11 11:45:16', '2019-06-11 13:25:16', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `equipamento`
--

CREATE TABLE `equipamento` (
  `idequipamento` int(11) NOT NULL,
  `numeracao` int(11) NOT NULL,
  `idtipo` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `idbloco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `equipamento`
--

INSERT INTO `equipamento` (`idequipamento`, `numeracao`, `idtipo`, `status`, `idbloco`) VALUES
(12, 52, 1, 0, 2),
(13, 44, 1, 0, 2),
(14, 67, 1, 1, 2),
(15, 14, 2, 0, 2),
(16, 22, 2, 0, 2),
(17, 67, 2, 0, 2),
(18, 32, 3, 0, 2),
(19, 45, 3, 0, 2),
(20, 77, 4, 0, 2),
(23, 33, 2, 1, 2),
(28, 15, 2, 0, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `relatorio`
--

CREATE TABLE `relatorio` (
  `idrelatorio` int(11) NOT NULL,
  `relator` varchar(255) NOT NULL,
  `horario` datetime NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `idemprestimo` int(11) DEFAULT NULL,
  `idequipamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `relatorio`
--

INSERT INTO `relatorio` (`idrelatorio`, `relator`, `horario`, `descricao`, `idemprestimo`, `idequipamento`) VALUES
(1, 'Jeremia', '2019-06-10 08:16:52', '7', 50, 28),
(31, 'JJ', '2019-06-11 13:53:33', 'deu pau', NULL, 20),
(32, 'Jere', '2019-06-11 14:05:59', 'Deu boa esse note', NULL, 13),
(33, 'Jere', '2019-06-11 14:06:19', 'Descobri que foi culpa do diogo', NULL, 28);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sala`
--

CREATE TABLE `sala` (
  `idsala` int(11) NOT NULL,
  `sala` varchar(100) NOT NULL,
  `idbloco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sala`
--

INSERT INTO `sala` (`idsala`, `sala`, `idbloco`) VALUES
(1, 'Jacaranda 3', 2),
(2, 'Araca 3', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo`
--

CREATE TABLE `tipo` (
  `idtipo` int(11) NOT NULL,
  `Descricao` varchar(255) NOT NULL,
  `Sigla` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tipo`
--

INSERT INTO `tipo` (`idtipo`, `Descricao`, `Sigla`) VALUES
(1, 'Notebook', 'N'),
(2, 'Fonte', 'F'),
(3, 'Torre', 'T'),
(4, 'Carrinho', 'C');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academico`
--
ALTER TABLE `academico`
  ADD PRIMARY KEY (`Idacademico`);

--
-- Indexes for table `bloco`
--
ALTER TABLE `bloco`
  ADD PRIMARY KEY (`idbloco`);

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
  ADD KEY `idtipo` (`idtipo`),
  ADD KEY `FK_idbloco` (`idbloco`);

--
-- Indexes for table `relatorio`
--
ALTER TABLE `relatorio`
  ADD PRIMARY KEY (`idrelatorio`),
  ADD KEY `idemprestimo` (`idemprestimo`),
  ADD KEY `idequip` (`idequipamento`);

--
-- Indexes for table `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`idsala`),
  ADD KEY `idbloco` (`idbloco`);

--
-- Indexes for table `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`idtipo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academico`
--
ALTER TABLE `academico`
  MODIFY `Idacademico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bloco`
--
ALTER TABLE `bloco`
  MODIFY `idbloco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `emprestimo`
--
ALTER TABLE `emprestimo`
  MODIFY `idemprestimo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `equipamento`
--
ALTER TABLE `equipamento`
  MODIFY `idequipamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `relatorio`
--
ALTER TABLE `relatorio`
  MODIFY `idrelatorio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `sala`
--
ALTER TABLE `sala`
  MODIFY `idsala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tipo`
--
ALTER TABLE `tipo`
  MODIFY `idtipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  ADD CONSTRAINT `FK_idbloco` FOREIGN KEY (`idbloco`) REFERENCES `bloco` (`idbloco`),
  ADD CONSTRAINT `idtipo` FOREIGN KEY (`idtipo`) REFERENCES `tipo` (`idtipo`) ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `relatorio`
--
ALTER TABLE `relatorio`
  ADD CONSTRAINT `idemprestimo` FOREIGN KEY (`idemprestimo`) REFERENCES `emprestimo` (`idemprestimo`),
  ADD CONSTRAINT `idequip` FOREIGN KEY (`idequipamento`) REFERENCES `equipamento` (`idequipamento`);

--
-- Limitadores para a tabela `sala`
--
ALTER TABLE `sala`
  ADD CONSTRAINT `idbloco` FOREIGN KEY (`idbloco`) REFERENCES `bloco` (`idbloco`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
