const {Genres, Series} = require('../database/models');

const api_series_by_genre = async (req, res) => {
    try {
        const {id} = req.headers;

        const response = await Genres.findAll({
            where:{id:id},
            include:{
                model:Series,
                as:'series',
                required:true
            }
        });

        res.send(response);

    } catch (error) {
        res.send(error)
    }
};

module.exports = api_series_by_genre