
module.exports = (sequelize, DataTypes) => {
    let Episodes = sequelize.define('Episodes',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        number:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        release_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        rating:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        season_id:DataTypes.INTEGER,
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,

    },
    {
        tableName:'episodes',
        timestamps:false
    })

    Episodes.associate = models => {
        Episodes.belongsTo(models.Seasons, {
            foreignKey:'season_id',
            as:'seasons'
        })

        Episodes.belongsToMany(models.Actors, {
            foreignKey:'actor_id',
            as:'actor',
            through:models.ActorEpisode
        })
    }

    return Episodes;
}