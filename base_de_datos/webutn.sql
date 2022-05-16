-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-05-2022 a las 15:26:28
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
  `img_id` char(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Doná sangre de forma segura - Es rápido e indoloro.', 'Próximas campañas voluntarias de donación de sangre con turnos programados. También en hospitales.', 'Próximas campañas de donación voluntaria de sangre, abiertas a la comunidad planificadas por la Red de Medicina Transfusional: \r\n\r\n- Domingo 3 de abril	Proyecto Damos (Juventud) en Fund. Hillel, O\'Higgins 1560	10.00 a 15.30 hs.\r\n\r\n-Martes 5 de abril	Escuela Prof. J. Weitzman, Varela 850	8.00 a 15.00 hs.	BA Salud y Comunidad Escuela Weitzman\r\n\r\n-Viernes 8 de abril	Hall Central de la Facultad de Ciencias Médicas (UBA), Paraguay 2155	9.30 a 15.00 hs.	BA Salud, Extensión Universitaria, UBA en Acción, UBA Medicina y CECIM', NULL),
(2, 'Sangre de forma segura - Es rápido e indoloro.', 'Próximas campañas voluntarias de donación de sangre con turnos programados. También en hospitales.', 'Próximas campañas de donación voluntaria de sangre, abiertas a la comunidad planificadas por la Red de Medicina Transfusional: \r\n\r\n- Domingo 3 de abril	Proyecto Damos (Juventud) en Fund. Hillel, O\'Higgins 1560	10.00 a 15.30 hs.\r\n\r\n-Martes 5 de abril	Escuela Prof. J. Weitzman, Varela 850	8.00 a 15.00 hs.	BA Salud y Comunidad Escuela Weitzman\r\n\r\n-Viernes 8 de abril	Hall Central de la Facultad de Ciencias Médicas (UBA), Paraguay 2155	9.30 a 15.00 hs.	BA Salud, Extensión Universitaria, UBA en Acción, UBA Medicina y CECIM', ''),
(3, 'Posta de Donacion 31/08', 'Ubicación: Facultad de Economía', 'El próximo 31 de Agosto, estaremos realizando una colecta de sangre, en el Hall principal de la Facultad de Economía; Ubicada en la calle Av. Cordoba 2122, CABA.\r\nSi quieren acercarse, solo basta venir con DNI, ser mayor de 18 años; y haber desayuno.', 'srukbl7palx3kwqcob8k'),
(6, 'Posta de Donacion 15/08', 'Ubicación: Facultad de Medicina', 'El proximo 15 de Agosto, estaremos realizando una colecta de sangre, en el Hall principal de la Facultado de Medicina; Ubicada en la calle Paraguay 2155, CABA.\r\nSi quieren acercarse, solo basta venir con DNI, ser mayor de 18 años; y haber desayuno.', 'nmaabqx4wngbwigkee63'),
(8, 'Solicitud de donantes para el 24/07', 'Ubicación: Hospital Garrahan', 'El proximo 24 de julio, estamos realizando un llamado para la obtención de dadores de sangre, para reabastecer el banco.', 'rtsdcvkj5b7ynahfiabn');

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usuario`, `password`) VALUES
(1, 'ezequiel', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'florencia', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'eze', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
