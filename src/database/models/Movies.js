module.exports = (sequelize, DataTypes)=>{
    const Movies = sequelize.define('Movies',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rating:{
            type:DataTypes.INTEGER,
            unique:true,
            allowNull:false
        },
        awards:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        release_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        genre_id:DataTypes.INTEGER,
        length:DataTypes.INTEGER,
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
    },
    {
        tableName:'movies',
        timestamps:false
    })

    Movies.associate = (models) => {
        Movies.belongsTo(models.Genres, {
            foreignKey:'genre_id',
            as:'genres'
        })

        Movies.belongsToMany(models.Actors, {
            foreignKey:'actor_id',
            as:'actors',
            through:models.ActorMovie
        })

        Movies.hasMany(models.Actors,{
            foreignKey:'favorite_movie_id',
            as:'favoriteMovie'
        })
    }

    return Movies;
};