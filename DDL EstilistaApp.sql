/* Detail Application service */
CREATE TABLE `detail_application_service` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` double(8,2) NOT NULL,
  `application_id` bigint(20) unsigned NOT NULL,
  `id_Servicioproducto` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `detail_application_service_application_id_foreign` (`application_id`),
  KEY `detail_application_service_id_servicioproducto_foreign` (`id_Servicioproducto`),
  CONSTRAINT `detail_application_service_application_id_foreign` FOREIGN KEY (`application_id`) REFERENCES `applications` (`id`) ON DELETE CASCADE,
  CONSTRAINT `detail_application_service_id_servicioproducto_foreign` FOREIGN KEY (`id_Servicioproducto`) REFERENCES `inventories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Detail Shopping */
CREATE TABLE `detail_shoppings` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` bigint(20) NOT NULL,
  `precio` decimal(9,0) NOT NULL,
  `iva` double(8,2) unsigned NOT NULL,
  `compra_id` bigint(20) unsigned NOT NULL,
  `servicioproducto_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `detail_shoppings_compra_id_foreign` (`compra_id`),
  KEY `detail_shoppings_servicioproducto_id_foreign` (`servicioproducto_id`),
  CONSTRAINT `detail_shoppings_compra_id_foreign` FOREIGN KEY (`compra_id`) REFERENCES `shoppings` (`id`) ON DELETE CASCADE,
  CONSTRAINT `detail_shoppings_servicioproducto_id_foreign` FOREIGN KEY (`servicioproducto_id`) REFERENCES `inventories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Modulo Vs Role */
CREATE TABLE `modulo_vs_role` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `idModulo` bigint(20) unsigned NOT NULL,
  `idRol` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modulo_vs_role_idmodulo_foreign` (`idModulo`),
  KEY `modulo_vs_role_idrol_foreign` (`idRol`),
  CONSTRAINT `modulo_vs_role_idmodulo_foreign` FOREIGN KEY (`idModulo`) REFERENCES `modulos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `modulo_vs_role_idrol_foreign` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Stylist Permissions */
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metodo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `identico` tinyint(1) DEFAULT NULL,
  `idModulo` bigint(20) unsigned NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permissions_idmodulo_foreign` (`idModulo`),
  CONSTRAINT `permissions_idmodulo_foreign` FOREIGN KEY (`idModulo`) REFERENCES `modulos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Role vs permisos */
CREATE TABLE `role_vs_permisos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `idRol` bigint(20) unsigned NOT NULL,
  `idPermiso` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role_vs_permisos_idrol_foreign` (`idRol`),
  KEY `role_vs_permisos_idpermiso_foreign` (`idPermiso`),
  CONSTRAINT `role_vs_permisos_idpermiso_foreign` FOREIGN KEY (`idPermiso`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_vs_permisos_idrol_foreign` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=175 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Sales */
CREATE TABLE `sales` (
  `idventa` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `fechaservicio` date NOT NULL,
  `idestadoservicio` bigint(20) unsigned NOT NULL,
  `idusuario` bigint(20) unsigned NOT NULL,
  `idservicioproducto` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idventa`),
  KEY `sales_idestadoservicio_foreign` (`idestadoservicio`),
  KEY `sales_idusuario_foreign` (`idusuario`),
  CONSTRAINT `sales_idestadoservicio_foreign` FOREIGN KEY (`idestadoservicio`) REFERENCES `servicestatus` (`idestadoservicio`) ON UPDATE CASCADE,
  CONSTRAINT `sales_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Shopping */
CREATE TABLE `shoppings` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `precioTotal` double(8,2) NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `numerofactura` decimal(8,2) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `proveedor_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shoppings_proveedor_id_foreign` (`proveedor_id`),
  CONSTRAINT `shoppings_proveedor_id_foreign` FOREIGN KEY (`proveedor_id`) REFERENCES `providers` (`idproveedor`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci