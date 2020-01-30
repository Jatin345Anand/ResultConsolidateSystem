const express = require('express');
const Router = express.Router();
const STUDENTOPEARATIONS = require('../db/StudentOperation');
const LOGINREGISTEROPERATIONS = require('../db/loginregisterOperation');
Router.post('/dosearchT',(request,response)=>{
    console.log('Do search...');
    var enrollment = '';
    var name = ''; 
    var college = ''; 
    console.log(request.body);
    var enrollment = request.body.enrollment;
   
    console.log('Enrollment Number = ',enrollment);
    console.log(enrollment.length);
    if(enrollment.length > 0 ){
        if(enrollment.length ==11){
            STUDENTOPEARATIONS.FetchStudentByEnrollmentNumberT(enrollment,request,response);
        }
        else{
            response.send("Please re insert the enrollment number...");
            
        }
      
    }
  
    else{
        response.send('Please fill correct information...');
    }
   
})
Router.post('/loginTS',(request, response)=>{
    var uid = '';
    var name = ''; 
    var pass = ''; 
    console.log(request.body);
    uid = request.body.uid;
    pass = request.body.upass;
    console.log(uid,pass);
    
    typeuser=LOGINREGISTEROPERATIONS.loginOperation(uid,pass,request,response);
    // if(typeuser.length==0){
    //     console.log('Does not exist....');
    // }
    // else{
    //     console.log('Exist!!',typeuser);
    // }
});
Router.post('/registerNCTS',(request, response)=>{
    response.render('registerST');
});

Router.post('/registerCTS',(request, response)=>{
    response.render('loginST');
});
Router.post('/registerTS',(request, response)=>{
    var uid = '';
    var name = ''; 
    var pass = '';
    var type=''; 
    console.log(request.body);
    uid = request.body.uid;
    pass = request.body.upass;
    name = request.body.uname;
    type = request.body.seltype;
    if(type=='1'){
        type = 'student';
    }
    else if(type=='2'){
        type = 'teacher';
    }
    // console.log(uid,pass); 
    LOGINREGISTEROPERATIONS.registerOpearaion(uid,pass,name,type,request,response);
     
})
Router.post('/dosearchS',(request,response)=>{
    console.log('Do search...');
    var enrollment = '';
    var name = ''; 
    var college = ''; 
    console.log(request.body);
    var enrollment = request.body.enrollment;
   
    console.log('Enrollment Number = ',enrollment);
    console.log(enrollment.length);
    if(enrollment.length > 0 ){
        if(enrollment.length ==11){
            STUDENTOPEARATIONS.FetchStudentByEnrollmentNumberS(enrollment,request,response);
        }
        else{
            response.send("Please re insert the enrollment number...");
            
        }
      
    }
    
    else{
        response.send('Please fill correct information...');
    }
   
})
module.exports = Router;