const { dbuser, dbpwd } = process.env;
console.log(process.env.dbuser);
console.log(process.env.dbpwd);
//console.log(process.env);
//below conction string iscoming from MogoDB cloud server https://cloud.mongodb.com/v2/6714dd3be44ef733c386864f#/overview?connectCluster=Cluster0
export const connectionString =
  "mongodb+srv://birjeshyadav:Jaimatadi007@cluster0.74zaf.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";

//   export const connectionString ="mongodb+srv://birjeshyadav:<db_password>@cluster0.74zaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   "mongodb+srv://" +
//   username +
//   ":" +
//   password +
//   "@cluster0.74zaf.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";
