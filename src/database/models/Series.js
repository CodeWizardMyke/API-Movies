
module.exports = (sequelize, DataTypes)=>{
    const Series = sequelize.define('Series',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        },
        title:DataTypes.STRING,
        release_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        end_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        genre_id:DataTypes.INTEGER,
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
    },
    {
        tableName:'series',
        timestamps:false
    })

    Series.associate = models => {
        Series.belongsTo(models.Genres, {
            foreignKey:'genre_id',
            as:'genres'
        })

        Series.hasMany(models.Seasons, {
            foreignKey:'serie_id',
            as: 'seasons'
        })
    }

    return Series;
};