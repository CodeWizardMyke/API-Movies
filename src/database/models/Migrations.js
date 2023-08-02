
module.exports = (sequelize, DataTypes) => {
    let Migrations = sequelize.define('Migrations',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        migration:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        batch:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
    },
    {
        tableName:'migrations',
        timestamps:false
    })

    return Migrations;
}