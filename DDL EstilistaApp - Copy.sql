/* Aplications */
CREATE TABLE `applications` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `fechasolicitud` datetime DEFAULT NULL,
  `fechaservicio` datetime NOT NULL,
  `total` decimal(9,0) NOT NULL,
  `modalidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idestadoservicio` bigint(20) unsigned NOT NULL,
  `idusuario` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `applications_idestadoservicio_foreign` (`idestadoservicio`),
  KEY `applications_idusuario_foreign` (`idusuario`),
  CONSTRAINT `applications_idestadoservicio_foreign` FOREIGN KEY (`idestadoservicio`) REFERENCES `servicestatus` (`idestadoservicio`) ON DELETE CASCADE,
  CONSTRAINT `applications_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Calendar */
CREATE TABLE `calendars` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `inventory_id` bigint(20) unsigned NOT NULL,
  `day` date NOT NULL,
  `start` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `calendars_user_id_foreign` (`user_id`),
  KEY `calendars_inventory_id_foreign` (`inventory_id`),
  CONSTRAINT `calendars_inventory_id_foreign` FOREIGN KEY (`inventory_id`) REFERENCES `inventories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `calendars_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Categories */
CREATE TABLE `categories` (
  `idcategoria` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

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

/* Failed Jobs */
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Inventories */
CREATE TABLE `inventories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` decimal(9,0) NOT NULL,
  `cantidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `idcategoria` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inventories_nombre_unique` (`nombre`),
  KEY `inventories_idcategoria_foreign` (`idcategoria`),
  CONSTRAINT `inventories_idcategoria_foreign` FOREIGN KEY (`idcategoria`) REFERENCES `categories` (`idcategoria`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Migrations */
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

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

/* Modulos */
CREATE TABLE `modulos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `module_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `padre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fondo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Passworl resets */
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

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

/* Personal acces tokens */
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

/* Providers */
CREATE TABLE `providers` (
  `idproveedor` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `proveedor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personacontacto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idproveedor`),
  UNIQUE KEY `providers_correo_unique` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

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

/* Roles */
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

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

/* Servicestatus */
CREATE TABLE `servicestatus` (
  `idestadoservicio` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `estadoservicio` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idestadoservicio`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

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

/* Users */
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direction` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idRol` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_idrol_foreign` (`idRol`),
  CONSTRAINT `users_idrol_foreign` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci