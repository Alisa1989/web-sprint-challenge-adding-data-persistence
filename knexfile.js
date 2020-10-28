module.exports={
  development:{
      client:"sqlite3",
      useNullAsDefault:true,//need for sqlite
      connection:{
          filename:"./data/projects.db3",
      },
      migration:{
          directory:"./migrations"
      },
      seed:{
          directory:"./seeds"
      },
      //Foreign Key NEEDED FOR SQLITE3
      pool:{
          afterCreate:(conn,done)=>{
              conn.run("PRAGMA foreign_keys=ON",done)
          },
      }
  }
}