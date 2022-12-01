import Usuario from "../../models/auth/Usuario.js";
import generarJWT from "../../helpers/generarJWT.js";

const agregar = async (req, res) => {
    //evitar usuarios duplicados por el usuarioAcceso
    const { usuarioAcceso } = req.body;
    const existeUsuario = await Usuario.findOne({ usuarioAcceso });

    if (existeUsuario) {
        const error = new Error("Usuario ya existe en la base de datos.");
        return res.status(400).json({ msg: error.message, ok: "NO" });
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, msg: "Documento creado correctamente.", ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const listar = async (req, res) => {
    const usuarios = await Usuario.find().populate('idRol', {
        nombreRol: 1,
        _id: 0
    }).populate('idCiudad', {
        nombreCiudad: 1,
        _id: 0
    });
    res.json(usuarios);
}

const eliminar = async (req, res) => {
    //recibir los parametros por url
    const { id } = req.params;

    //validar si existe el documento por su id
    const usuario = await Usuario.findById(id);

    if (!usuario) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }

    try {
        await usuario.deleteOne();
        res.json({ msg: "Documento eliminado correctamente.", ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const editar = async (req, res) => {
    //recibir los parametros por url
    const { id } = req.params;

    //validar si existe el documento por su id
    const usuario = await Usuario.findById(id);

    if (!usuario) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }

    //recibir los datos desde el formulario
    usuario.idRol = req.body.idRol || usuario.idRol;
    usuario.idCiudad = req.body.idCiudad || usuario.idCiudad;
    usuario.nombresUsuario = req.body.nombresUsuario || usuario.nombresUsuario;
    usuario.apellidosUsuario = req.body.apellidosUsuario || usuario.apellidosUsuario;
    usuario.correoUsuario = req.body.correoUsuario || usuario.correoUsuario;
    usuario.celularUsuario = req.body.celularUsuario || usuario.celularUsuario;
    usuario.direccionUsuario = req.body.direccionUsuario || usuario.direccionUsuario;
    usuario.generoUsuario = req.body.generoUsuario || usuario.generoUsuario;
    usuario.tipoDocumentoUsuario = req.body.tipoDocumentoUsuario || usuario.tipoDocumentoUsuario;
    usuario.documentoUsuario = req.body.documentoUsuario || usuario.documentoUsuario;
    usuario.edadUsuario = req.body.edadUsuario || usuario.edadUsuario;
    usuario.fechaNacimientoUsuario = req.body.fechaNacimientoUsuario || usuario.fechaNacimientoUsuario;
    usuario.usuarioAcceso = req.body.usuarioAcceso || usuario.usuarioAcceso;
    usuario.claveAcceso = req.body.claveAcceso || usuario.claveAcceso;
    usuario.estadoUsuario = req.body.estadoUsuario || usuario.estadoUsuario;

    try {
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, msg: "Documento actualizado correctamente.", ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const listarUno = async (req, res) => {
    //recibir los parametros por url
    const { id } = req.params;

    //validar si existe el documento por su id
    const usuario = await Usuario.findById(id);

    if (!usuario) {
        const error = new Error("Documento no encontrado.");
        return res.status(404).json({ msg: error.message, ok: "NO" });
    }

    res.json(usuario);
}

const autenticar = async (req, res) => {
    const { usuarioAcceso, claveAcceso } = req.body;

    //comprobar si el usuario existe
    const usuario = await Usuario.findOne({ usuarioAcceso });
    if (!usuario) {
        const error = new Error("El usuario no existe.");
        return res.status(404).json({ msg: error.message, ok: "NO_EXISTE" });
    }

    //comprobar si la contraseña es correcta
    if (await usuario.comprobarClave(claveAcceso)) {
        res.json({
            _id: usuario._id,
            nombresUsuario: usuario.nombresUsuario,
            usuarioAcceso: usuario.usuarioAcceso,
            tokenJwt: generarJWT(usuario._id)
        });
    } else {
        const error = new Error("La clave es incorrecta.");
        res.json({ msg: error.message, ok: "CLAVE_INCORRECTA" });
    }
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno,
    autenticar
}