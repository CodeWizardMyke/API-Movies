const {Seasons, Episodes} = require ('../database/models');

const api_get_season_controller =  async (req, res) => {
    try {
        const {season_id} = req.headers
        
        const response = await Episodes.findAll({
            where:{season_id:season_id},
            include:{
                model:Seasons,
                as:'seasons',
                required:true
            }
        })
        
        res.send(response)
        
    } catch (error) {
        res.send(error);
    }
};

module.exports = api_get_season_controller;
