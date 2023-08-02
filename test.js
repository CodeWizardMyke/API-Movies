const {ActorEpisode, ActorMovie, Actors, Genres, Migrations, Movies, PasswordResets, Seasons, Series, Users, sequelize, Episodes} = require('./src/database/models')


function testSeriesAssociateSeasons () {
  Series.findAll({
    include:{
      model:Seasons,
      as:'seasons'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testSeriesAssociateSeasons()

function testSeasonAssociateSeries () {
  Seasons.findAll({
    include:{
      model:Series,
      as:'series'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testSeasonAssociateSeries()

function testSeasonAssociateEpisodes () {
  Seasons.findAll({
    include:{
      model:Episodes,
      as:'episodes'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testSeasonAssociateEpisodes()

function testEpisodesAssociateSesasons () {
  Episodes.findAll({
    include:{
      model:Seasons,
      as:'seasons'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testEpisodesAssociateSesasons()

function testEpisodesAssociateActorEpisode () {
  Episodes.findAll({
    include:{
      model:ActorEpisode,
      as:'actorEpisode'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testEpisodesAssociateActorEpisode()

// associação de muitos para muitos
function testAssociateEpisodesForActors () {
  Episodes.findAll({
    include:{
      model:Actors,
      as:'actor'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testAssociateEpisodesForActors()

function testAssociateActorsForEpisodes () {
  Actors.findAll({
    include:{
      model:Episodes,
      as:'episodes'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testAssociateActorsForEpisodes()

//associate muitos para muitos entre movies e atores
function testAssociateMoviesForActors () {
  Movies.findAll({
    include:{
      model:Actors,
      as:'actors'
    }
  })
  .then(d => console.log(d))
  .catch( err => console.log(err))
}

//testAssociateMoviesForActors()


async function testAssociateActorsForMovies() {
  let data = await Actors.findAll({
    include:{
      model:Movies,
      as:'movies',
      required:true
    }
  })

  console.log(data)
}

testAssociateActorsForMovies()