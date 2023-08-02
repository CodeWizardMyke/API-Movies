
module.exports = (sequelize, DataTypes)=>{
    const Seasons = sequelize.define('Seasons',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        },
        title:DataTypes.STRING,
        number:DataTypes.INTEGER,
        release_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        end_date:{
            type:DataTypes.STRING,
            allowNull:false
        },
        serie_id:DataTypes.INTEGER,
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
    },
    {
        tableName:'seasons',
        timestamps:false
    })

    Seasons.associate = models => {
         Seasons.belongsTo(models.Series, {
            foreignKey:'serie_id',
            as:'series'
         })

         Seasons.hasMany(models.Episodes,{
            foreignKey:'season_id',
            as: 'episodes'
         })
    }

    return Seasons;
};