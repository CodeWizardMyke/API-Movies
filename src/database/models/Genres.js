
module.exports = (sequelize, DataTypes)=>{
    const Genres = sequelize.define('Genres',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ranking:{
            type:DataTypes.INTEGER,
            unique:true,
            allowNull:false
        },
        active:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
    },
    {
        tableName:'genres',
        timestamps:false
    })


    Genres.associate = (models) => {
        Genres.hasMany(models.Movies,{
            as:'movies',
            foreignKey: 'genre_id',
        })

        Genres.hasMany(models.Series, {
            as:'series',
            foreignKey:'genre_id'
        })
        
    }

    return Genres;
};