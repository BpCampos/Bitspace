const Sequelize = require('sequelize');
const sequelize = new Sequelize(
   
    'process.env.DB_NAME',              //database
    'process.env.DB_USER',              //user
   'process.env.DB_PASS',               //password
   {
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
   }
);
//consulta sql de todas as categorias cadastradas
const category = sequelize.query(
    'select * from category',
    {
        type:sequelize.QueryTypes.SELECT
    }
)
.then((result)=>{
    console.log(result);
    return result
})
.catch((error) => console.log(error));