
module.exports = (sequelize, DataTypes) => {
    let ActorEpisode = sequelize.define('ActorEpisode',{
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
        episode_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,

    },
    {
        tableName:'actor_episode',
        timestamps:false
    })


    return ActorEpisode;
}