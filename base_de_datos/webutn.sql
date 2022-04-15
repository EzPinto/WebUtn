-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-04-2022 a las 22:21:31
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `webutn`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Doná sangre de forma segura - Es rápido e indoloro.', 'Próximas campañas voluntarias de donación de sangre con turnos programados. También en hospitales.', 'Próximas campañas de donación voluntaria de sangre, abiertas a la comunidad planificadas por la Red de Medicina Transfusional: \r\n\r\n- Domingo 3 de abril	Proyecto Damos (Juventud) en Fund. Hillel, O\'Higgins 1560	10.00 a 15.30 hs.\r\n\r\n-Martes 5 de abril	Escuela Prof. J. Weitzman, Varela 850	8.00 a 15.00 hs.	BA Salud y Comunidad Escuela Weitzman\r\n\r\n-Viernes 8 de abril	Hall Central de la Facultad de Ciencias Médicas (UBA), Paraguay 2155	9.30 a 15.00 hs.	BA Salud, Extensión Universitaria, UBA en Acción, UBA Medicina y CECIM'),
(2, 'Sangre de forma segura - Es rápido e indoloro.', 'Próximas campañas voluntarias de donación de sangre con turnos programados. También en hospitales.', 'Próximas campañas de donación voluntaria de sangre, abiertas a la comunidad planificadas por la Red de Medicina Transfusional: \r\n\r\n- Domingo 3 de abril	Proyecto Damos (Juventud) en Fund. Hillel, O\'Higgins 1560	10.00 a 15.30 hs.\r\n\r\n-Martes 5 de abril	Escuela Prof. J. Weitzman, Varela 850	8.00 a 15.00 hs.	BA Salud y Comunidad Escuela Weitzman\r\n\r\n-Viernes 8 de abril	Hall Central de la Facultad de Ciencias Médicas (UBA), Paraguay 2155	9.30 a 15.00 hs.	BA Salud, Extensión Universitaria, UBA en Acción, UBA Medicina y CECIM'),
(3, 'Borrarme', 'asd', '12312'),
(4, 'asdasd', 'asdasdas', 'asdasdas'),
(5, '5', 'asdadsa', 'asdasasdasdaasd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usuario`, `password`) VALUES
(1, 'ezequiel', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'florencia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
