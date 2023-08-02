
module.exports = (sequelize, DataTypes) => {
    const Actors = sequelize.define('Actors',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rating:DataTypes.INTEGER,
        favorite_movie_id:DataTypes.INTEGER,
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,

    },
    {
        tableName:'actors',
        timestamps:false
    })

    Actors.associate = models => {
        Actors.belongsToMany(models.Episodes, {
            foreignKey:'episode_id',
            as:'episodes',
            through:models.ActorEpisode
        })

        Actors.belongsToMany(models.Movies, {
            foreignKey:'movie_id',
            as: 'movies',
            through:models.ActorMovie
        })

        Actors.belongsTo(models.Movies,{
            foreignKey:'favorite_movie_id',
            as:'favoriteMovie'
        })
    }

    return Actors;
}