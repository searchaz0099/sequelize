import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pustaka = db.define('pustaka',{
    name        : DataTypes.STRING,
    Image       : DataTypes.STRING,
    nomor_seri  : DataTypes.STRING,
    catatan     : DataTypes.STRING,
    url         : DataTypes.STRING
},{
    freezeTableName : true
});

export default Pustaka

(async()=>{
    await db.sync();
})();