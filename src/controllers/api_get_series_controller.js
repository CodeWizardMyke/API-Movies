const { Series, Genres} = require ('../database/models');

const api_get_series_controller = async (req, res) => {
    try {

        const response = await Series.findAll({
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

module.exports = api_get_series_controller;