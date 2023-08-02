
module.exports = (sequelize, DataTypes) => {
    let ActorMovie = sequelize.define('ActorMovie',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        actor_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        movie_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,

    },
    {
        tableName:'actor_movie',
        timestamps:false
    })

    return ActorMovie;
}