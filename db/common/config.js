const dbConfig = {
    // dbURL:"mongodb://jatinanand345:jatin#123@ds357955.mlab.com:57955/evaluationsystemdb"
    // mongodb://mydbname:pa$s;w@rd@mongodb0.example.com:27017/admin
    // dbURL:"mongodb://localhost:27017/evaluationsystemdb?poolSize=5"
    dbURL:"mongodb://maruti:maruti23@ds343217.mlab.com:43217/webipudb"
    // dbURL:"mongodb://localhost:27017/resultconsolidatesystemdb?poolSize=5"
    // dbURL:"mongodb://localhost:27017/mlabmongodbcrud?poolSize=5"
}
// mongoimport -h ds343217.mlab.com:43217 -d webipudb -c nstudents -u maruti -p maruti123 --file jandb.json
// mongodump -h ds343217.mlab.com:43217 -d webipudb -u maruti -p maruti123 -o jandb
// mongoimport -h ds012345.mlab.com:56789 -d dbname -c collectionname -u dbuser -p dbpassword --file filename.json
module.exports = dbConfig;