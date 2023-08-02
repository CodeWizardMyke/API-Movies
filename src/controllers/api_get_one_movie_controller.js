const { Movies, Genres } = require('../database/models')

const api_get_one_movie_controller = async (req,res) => {
    try {
        if(req.headers.id && req.headers.id > 0 ){
            const {id} = req.headers;

            const movie = await Movies.findOne({
                where:{id:id},
                include:{
                    model:Genres,
                    as:'genres',
                    required:true
                }
            })

            return res.send(movie);
        }else{
            return res.status(401).send('Error-401: Nenhuma chave de busca foi passada para nossa api')
        }
        
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = api_get_one_movie_controller;