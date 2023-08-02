const {Genres, Movies} = require ('../database/models');

const apiGetMoviesForGenres =  async (req, res) => {
    try {
        const {id} = req.headers
        console.log(id)

        const response = await Genres.findAll({
            where:{id:id},
            include:{
                model:Movies,
                as:'movies',
                required:true
            }
        })
        res.send(response)
        
    } catch (error) {
        res.send(error);
    }
};

module.exports = apiGetMoviesForGenres;