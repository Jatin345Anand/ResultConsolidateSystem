const USER1 = require('../db/schema/loginregisterschema');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const USEROPERAION = {
    DBCreateConnect(obj,req,res) {

        MongoClient.connect(url, (e, d) => {
            if (e) {
                console.log(e);
            } else {
                var dbo = d.db('resultconsolidatesystemdb');
                var USER = dbo.collection('users');
                USER.insertOne(obj, (e, d) => {
                    if (e) {
                        console.log(e);
                    } else {
                        res.render('registerConfirmST');
                    }
                });
            }
        });
    },
    DBReadConnect(obj,req,res) {

        MongoClient.connect(url, (e, d) => {
            if (e) {
                console.log(e);
            } else {
                var dbo = d.db('resultconsolidatesystemdb');
                var USER = dbo.collection('users');
                console.log('Obj of Login ',obj);
                USER1.find({$and:obj}, (e, d) => {
                    if (e) {
                        console.log(e);

                    } else {
                        console.log('d[0] = ', d[0], typeof d[0]);

                        if (d[0]) {
                            console.log('Hi am i here...');
                            var anstype = JSON.parse(JSON.stringify(d[0]))['type'];
                            for (var k in JSON.parse(JSON.stringify(d[0]))) {
                                console.log(k);
                            }
                            // console.log('Anst = ',anstype,JSON.parse(JSON.stringify(d[0]))['type']);
                            if (anstype == 'student') {
                                console.log('in student...');
                                res.render('searchS');
                            } else if (anstype == 'teacher') {
                                console.log('in teahce...');
                                res.render('searchT');
                            }
                        } else {
                            res.render('registerST');

                        }

                    }
                });
            }
        });
    },
    loginOperation(uid, upass, req, res) {
        console.log('In login operation ', uid, upass);
        var anstype = '';
        // USER = this.DBConnect();
        var ArrofObj=[{'userid':uid},{'password':upass}];
        var obj={'userid':uid};
        this.DBReadConnect(ArrofObj,req,res);
        // USER.find({
        //     $and:[{'userid':uid},{'password':upass}]
        // },(e,d)=>{
        //     if(e){
        //         console.log(e);

        //     }
        //     else{
        //         console.log('d[0] = ',d[0],typeof d[0]);

        //         if(d[0]){
        //             console.log('Hi am i here...');
        //             var anstype=JSON.parse(JSON.stringify(d[0]))['type'];
        //             for(var k in JSON.parse(JSON.stringify(d[0]))){
        //                 console.log(k);
        //             }
        //             // console.log('Anst = ',anstype,JSON.parse(JSON.stringify(d[0]))['type']);
        //             if(anstype=='student'){
        //                 console.log('in student...');
        //                 res.render('searchS');
        //             }
        //             else if(anstype=='teacher'){
        //                 console.log('in teahce...');
        //                 res.render('searchT');
        //             }
        //          }
        //         else{
        //             res.render('registerST');

        //         }

        //     }
        // })
        return anstype;
    },
    registerOpearaion(uid, upass, uname, utype, req, res) {
        console.log('in registation...', uid, upass, uname, utype);
        if (uid.length > 0 && upass.length > 0 && uname.length > 0 && utype.length > 0) {
            var obj ={'name' : uname, 'type' : utype, 'userid' : uid, 'password' : upass};
            this.DBCreateConnect(obj,req,res);
            // USER = this.DBConnect();
            //      USER.insertOne({'name' : uname, 'type' : utype, 'userid' : uid, 'password' : upass},
            //      (e,d)=>{
            //          if(e){
            //              console.log(e);
            //          }
            //          else{
            //             res.render('registerConfirmST');
            //          }
            //      });

            //    }

        } else {
            res.render('registerNConfirmST');
        }
    }
}
module.exports = USEROPERAION;