const mysql = require('mysql2');
// const constants = require('./constants');
var sql = require('sql-query'),
sqlQuery = sql.Query();



const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const tableName = "controller_data";
module.exports = {
    saveData: function(data){
        var sqlInsert = sqlQuery.insert();
        let SQL = sqlInsert
          .into(tableName)
          .set(data)
          .build();
        console.log(SQL);
        const results = conn.query(SQL)
      },

      getAll: async function () {
        var sqlSelect = sqlQuery.select();
        let SQL = sqlSelect
        .from(tableName)
        .build();
        console.log(SQL);
        const results = await conn.promise().query(SQL)  
        console.log(results[0]);
        return results[0];
  
      },
  
  };