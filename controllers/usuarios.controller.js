
const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Get API'
    });
}

const usuariosPost = (req, res = response) => {
    
    const body = req.body;

    res.json({
        msg: 'Post API',
        body
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Put API'
    });
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'Delete API'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}