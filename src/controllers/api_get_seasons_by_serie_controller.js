const {Seasons, Series} = require ('../database/models');

const api_get_seasons_by_serie_controller =  async (req, res) => {
    try {
        const {serie_id} = req.headers
        
        const response = await Seasons.findAll({
            where:{serie_id:serie_id},
            include:{
                model:Series,
                as:'series',
                required:true
            }
        })
        
        res.send(response)
        
    } catch (error) {
        res.send(error);
    }
};

module.exports = api_get_seasons_by_serie_controller;
