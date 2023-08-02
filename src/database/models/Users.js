
module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define('Users',{
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
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        remember_token:DataTypes.STRING,
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
    },
    {
        tableName:'users',
        timestamps:false
    })

    return Users;
};