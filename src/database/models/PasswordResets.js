module.exports = (sequelize, DataTypes)=>{
    const PasswordResets = sequelize.define('PasswordResets',{
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true,
        },
        token:{
            type:DataTypes.INTEGER,
            unique:true,
            allowNull:false,
        },
        created_at:{
            type:DataTypes.DATE,
            primaryKey: false,
        }
    },
    {
        tableName:'password_resets',
        timestamps:false
    })

    return PasswordResets;
};