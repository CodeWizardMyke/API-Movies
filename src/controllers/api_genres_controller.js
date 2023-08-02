const {Genres} = require ('../database/models');

const apiGenres =  async (req, res) => {
    try {
        const response = await Genres.findAll()
        res.send(response)
        
    } catch (error) {
        res.send(error);
    }
};

module.exports = apiGenres;