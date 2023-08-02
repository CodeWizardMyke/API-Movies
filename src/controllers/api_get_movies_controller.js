const {Movies, Genres} = require('../database/models')


function apiGetMoviesController (req, res){
    let limit =50;
    let offset =1;

    if(req.headers.size){
        limit = Number(req.headers.size)
    }
    if(req.headers.page){
        offset = Number(req.headers.page)
    }

    Movies.findAndCountAll({ 
        limit,
        offset: limit * (offset - 1),
        include:{
            model:Genres,
            as:'genres',
            required:true
        }
    })
    .then(response =>{
        return res.send(response)
    })
    .catch(error => {
        return res.status(401).send(error)
    })
}

module.exports = apiGetMoviesController