var express = require('express');
var router = express.Router();

const api_get_movies_controller = require('../controllers/api_get_movies_controller')
const api_get_one_movie_controller = require('../controllers/api_get_one_movie_controller');
const api_genres_controller = require('../controllers/api_genres_controller');
const api_movies_by_genre_controller = require('../controllers/api_movies_by_genre_controller');
const api_series_by_genre_controller = require('../controllers/api_series_by_genre_controller');
const api_get_one_serie_controller = require('../controllers/api_get_one_serie_controller');
const api_get_series_controller = require('../controllers/api_get_series_controller');
const api_get_seasons_by_serie_controller = require('../controllers/api_get_season_controller');
const api_get_season_controller = require('../controllers/api_get_season_controller');

/* GET home page. */
router.get('/movie', api_get_one_movie_controller);
router.get('/movies', api_get_movies_controller);

router.get('/genres', api_genres_controller);
router.get('/genres/movies', api_movies_by_genre_controller);
router.get('/genres/sereies', api_series_by_genre_controller);

router.get('/serie', api_get_one_serie_controller);
router.get('/series', api_get_series_controller);

router.get('/serie/seasons', api_get_seasons_by_serie_controller);
router.get('/serie/season', api_get_season_controller);


module.exports = router;
