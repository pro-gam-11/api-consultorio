/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     31/10/2022 8:55:38 p. m.                     */
/*==============================================================*/


/*==============================================================*/
/* Table: agenda_citas                                          */
/*==============================================================*/
create table agenda_citas
(
   id_agenda_cita       bigint not null auto_increment  comment '',
   id_especialidades    bigint not null  comment '',
   id_usuario           bigint not null  comment '',
   fecha_cita           date not null  comment '',
   hora_cita            time not null  comment '',
   tipo_cita            int(1) not null  comment '1.presencial
             2.virtual',
   numero_consultorio   int not null  comment '',
   estado_cita          int(1) not null  comment '1.disponible
             2. asignada
             3.no asistió
             4.cancelada',
   primary key (id_agenda_cita)
);

/*==============================================================*/
/* Table: citas_asignadas                                       */
/*==============================================================*/
create table citas_asignadas
(
   id_cita_asignada     bigint not null auto_increment  comment '',
   id_agenda_cita       bigint not null  comment '',
   id_paciente          bigint not null  comment '',
   primary key (id_cita_asignada)
);

/*==============================================================*/
/* Table: ciudades                                              */
/*==============================================================*/
create table ciudades
(
   id_ciudad            bigint not null auto_increment  comment '',
   nombre_ciudad        varchar(150) not null  comment '',
   primary key (id_ciudad)
);

/*==============================================================*/
/* Table: especialidades                                        */
/*==============================================================*/
create table especialidades
(
   id_especialidades    bigint not null auto_increment  comment '',
   nombre_especialidad  varchar(200) not null  comment '',
   primary key (id_especialidades)
);

/*==============================================================*/
/* Table: roles                                                 */
/*==============================================================*/
create table roles
(
   id_rol               bigint not null auto_increment  comment '',
   nombre_rol           varchar(150) not null  comment '',
   estado_rol           int(1) not null  comment '1.activo
             2.inactivo',
   primary key (id_rol)
);

/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/
create table usuarios
(
   id_usuario           bigint not null auto_increment  comment '',
   id_rol               bigint not null  comment '',
   id_ciudad            bigint  comment '',
   nombres_usuario      varchar(100) not null  comment '',
   apellidos_usuario    varchar(100) not null  comment '',
   correo_usuario       varchar(200) not null  comment '',
   celular_usuario      bigint not null  comment '',
   direccion_usuario    text not null  comment '',
   genero_usuario       int(1) not null  comment '1.masculino
             2.femenino
             3.otro',
   tipodoc_usuario      int(1) not null  comment '1.cedula de ciudadania
             2.tarjeta de identidad
             3.registro civil
             4.cedula de extranjeria
             5.pasaporte
             6.pep',
   documento_usuario    bigint not null  comment '',
   edad_usuario         int not null  comment '',
   fecha_nacimiento_usuario date  comment '',
   usuario_acceso       varchar(150)  comment '',
   clave_acceso         varchar(200)  comment '',
   estado_usuario       int(1) not null  comment '1.activo
             2.inactivo',
   primary key (id_usuario)
);

alter table agenda_citas add constraint fk_agenda_c_reference_especial foreign key (id_especialidades)
      references especialidades (id_especialidades) on delete cascade on update cascade;

alter table agenda_citas add constraint fk_agenda_c_reference_usuarios foreign key (id_usuario)
      references usuarios (id_usuario) on delete cascade on update cascade;

alter table citas_asignadas add constraint fk_citas_as_reference_agenda_c foreign key (id_agenda_cita)
      references agenda_citas (id_agenda_cita) on delete restrict on update restrict;

alter table citas_asignadas add constraint fk_citas_as_reference_usuarios foreign key (id_paciente)
      references usuarios (id_usuario) on delete restrict on update restrict;

alter table usuarios add constraint fk_usuarios_reference_roles foreign key (id_rol)
      references roles (id_rol) on delete cascade on update cascade;

alter table usuarios add constraint fk_usuarios_reference_ciudades foreign key (id_ciudad)
      references ciudades (id_ciudad) on delete restrict on update restrict;

