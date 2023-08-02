const { Series, Genres} = require ('../database/models');

const api_get_one_serie_controller = async (req, res) => {
    try {
        const {id} = req.headers;

        const response = await Series.findAll({
            where:{id:id},
            include:{
                model:Genres,
                as:'genres',
                required:true
            }
        })

        res.send(response);

    } catch (error) {
        res.send(error);
    }
};

module.exports = api_get_one_serie_controller;