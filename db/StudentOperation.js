 const STUDENT = require('../db/schema/studentschema');
//  const STUDENTMARKS = require('../models/StudentMarks');
 const STUDENTOPEARTIONDB = require('../models/StudentObjDataCollect');
 const STUDENTRANKOPERATION = require('../models/StudentRanksOperation');
 var InstituteKeysValues = {
     '101': 'AMBEDKAR INSTITUTE OF TECHNOLOGY',
     '208': 'BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY'
 }
 var ProgrammeKeysValues = {
     '027': 'BACHELOR OF TECHNOLOGY (COMPUTER SCIENCE AND ENGINEERING)  |  B.Tech(CSE)  |  B.E(CSE)'
 }
 var BatchKeysValues = {
     '14': '2014',
     '15': '2015',
     '16': '2016',
     '17': '2017',
     '18': '2018'
 }
 var SubjectIDNameCodeKeysValues = {
     '27111': ['ETCS111', 'FUNDAMENTALS OF COMPUTING', 't'],
     '27159': ['ETCS159', 'FUNDAMENTALS OF COMPUTING LAB', 'p']
 }
 var AJAXURL = '';

 function doFETCH() {
     fetch(AJAXURL).then(success, fail);

     function success(response) {
         response.json().then(s, f);

         function s(s) {
             printdata(s);
         }

         function f(e) {
             console.log(`error in success = ${e}`);
         }
     }

     function fail(err) {
         console.log(`error= ${err}`);

     }
 }

 function printdata(data) {
     var Parsedjson = JSON.parse(data);
     var ijson = JSON.stringify(data);

     return json;
 }

 const STUDENTOPERATION = {
    FetchStudentByEnrollmentNumberS(Enrollment, request, response){
        console.log(typeof Enrollment, Enrollment);

        STUDENT.findOne({ 'enrollmentnumber': Enrollment},
            (err, docs) => {
                if (err) {
                    console.log('Something Error Occured...');
                    response.send("<h3>Something Error Occured...</h3>");
                } else {
                    console.log('In Studnt find one data....');
                   console.log(typeof docs);
                 if(docs==null){
                    response.send('Your Enrollment number is not stored in Database');
                 }
                 else{
                    var  StudentDocs = JSON.parse(JSON.stringify(docs));
                        var StudentRank=0,UniversityStudentRank=0;
                        console.log('Studnet Docs  = ',StudentDocs);
                        var CommonDetailStudent = STUDENTOPEARTIONDB.FindAllArrays(StudentDocs);
                        var ArrayofSubjectBacklogs = STUDENTOPEARTIONDB.ArrayofSubjectBacklogs(StudentDocs);
                        var ArrayofPercentages = STUDENTOPEARTIONDB.FindAggregatePercentageofStudent(StudentDocs);
                        console.log('Array of % = ', ArrayofPercentages);
                        var AggregatePercentage = 0;
                        for (var i in ArrayofPercentages) {
                            AggregatePercentage = AggregatePercentage + parseFloat(ArrayofPercentages[i]);
                        }
                        AggregatePercentage = AggregatePercentage / ArrayofPercentages.length; //.toString().substring(0,5)
                        console.log('Aggregate % = ', AggregatePercentage);
                     
                        var NewBAcklogsArray = [];
    
                        console.log('After Unique set.... ');
                        var o = 0;
                        for (var i = 0; i < ArrayofSubjectBacklogs.length; i++) {
                          
                            NewBAcklogsArray.push(ArrayofSubjectBacklogs[i]['subjectcode']);
                        
                        }
                        
                        console.log('AFTER UNIQUE SET');
                        var UNIQUESET = [...new Set(NewBAcklogsArray)];
                        
                        var BACKLOGNEWSET = [];
                        var count = 0;
                        for (var j = 0; j < UNIQUESET.length; j++) {
                            for (var i = 0; i < ArrayofSubjectBacklogs.length; i++) {
                                if (ArrayofSubjectBacklogs[i]['subjectcode'] == UNIQUESET[j]) {
                                   
                                    BACKLOGNEWSET[count++] = ArrayofSubjectBacklogs[i];
                                    break;
                                }
                            }
                        }
                         console.log('AFTER ARRAY UPDATE....', count, UNIQUESET.length);
                         BACKLOGNEWSET.forEach((i)=>console.log(i));
                        var count2 = 0;
                        for (var i = 0; i < BACKLOGNEWSET.length; i++) {
                            for (var j = 0; j < BACKLOGNEWSET[i]['datawithdate'].length; j++) {
                                // console.log();``
                                if (BACKLOGNEWSET[i]['datawithdate'][j]['total'] < 40) {
                                    //  console.log('Total', BACKLOGNEWSET[i]['datawithdate'][j]['total']);
                                    count2++;
                                }
                            }
                        }
                        console.log('Total number of blacklogs...', count2 - (ArrayofSubjectBacklogs.length - BACKLOGNEWSET.length));
                        console.log(CommonDetailStudent);
                        response.render('resultS', {
                            DOCS: CommonDetailStudent,
                            SEMDATA: CommonDetailStudent.semester,
                            SEMBACK: BACKLOGNEWSET,
                            // SRANK:StudentRank,
                            // SCRANK:CollegeDocs.length,
                            // USRANK:UniversityStudentRank,
                            // USTRANK:UniversityDocs.length,
                            BACKLOGS: count2 - (ArrayofSubjectBacklogs.length - BACKLOGNEWSET.length)
                            //  SEMDATA:CommonDetailStudent.semester
                        });
                     
         
                 }
                }
            });
    },
    FetchStudentByEnrollmentNumberT(Enrollment, request, response) {
         console.log(typeof Enrollment, Enrollment);

         STUDENT.findOne({"enrollmentnumber": Enrollment},
             (err, docs) => {
                 if (err) {
                     console.log('Something Error Occured...');
                     response.send("<h3>Something Error Occured...</h3>");
                 }
                 else{
                    //  console.log('In Studnt find one data....');
                    // console.log(typeof docs);
                    // var AllStudentsofDB = [];
                    // for(var k in docs){
                    //     AllStudentsofDB.push(JSON.parse(JSON.stringify(docs[k])));
                    // }
                    // console.log('Total Students Object in DB = ',AllStudentsofDB.length);
                    // var StudentDocs={};
                    // for(var k in AllStudentsofDB){
                    //     if(AllStudentsofDB[k]['enrollmentnumber']==Enrollment){
                    //         console.log("Student data = ",AllStudentsofDB[k]);
                    //         StudentDocs=AllStudentsofDB[k];
                    //         break;
                    //     }
                        
                    // }
                    if(docs==null){
                        response.send('Your Enrollment number is not stored in Database');
               
                    }
                    else{
                        console.log('docs is ',docs);
                        StudentDocs = JSON.parse(JSON.stringify(docs));
                    //     var CollegeDocs = [],UniversityDocs=[];
                    //     for(var k in AllStudentsofDB){
                    //         if(AllStudentsofDB[k]['institutename']==StudentDocs['institutename'] && (AllStudentsofDB[k]['batch']==StudentDocs['batch'] || AllStudentsofDB[k]['batch']==(parseInt(StudentDocs['batch'])+1).toString())){
                    //                  for(var k1 in AllStudentsofDB[k]['semester']){
                    //                      if(k1=='07'){
                    //                          CollegeDocs.push(AllStudentsofDB[k]);
                    //                          break;
                    //                      }
                    //                  }
    
                    //         }
                    //     }
                    //     for(var k in AllStudentsofDB){
                    //         if(AllStudentsofDB[k]['programmename']==StudentDocs['programmename'] && (AllStudentsofDB[k]['batch']==StudentDocs['batch'] || AllStudentsofDB[k]['batch']==(parseInt(StudentDocs['batch'])+1).toString())){
                    //                  for(var k1 in AllStudentsofDB[k]['semester']){
                    //                      if(k1=='07'){
                    //                          UniversityDocs.push(AllStudentsofDB[k]);
                    //                          break;
                    //                      }
                    //                  }
    
                    //         }
                    //     }
                    //     console.log('College docs  = ',CollegeDocs.length,'University Total = ',UniversityDocs.length);
                    //     COLLEGERANKARRAY = STUDENTRANKOPERATION.FindCollegeRank(CollegeDocs);
                    //     UNIVERSITYRANKARRAY = STUDENTRANKOPERATION.FindCollegeRank(UniversityDocs);
                        var StudentRank=0,UniversityStudentRank=0;
                    //     var StudentRankObj =COLLEGERANKARRAY.filter((i)=>{
                    //          return i.enrollmentnumber==StudentDocs['enrollmentnumber'];
                    //     });
                    //     var StudentUniversityRankObj =UNIVERSITYRANKARRAY.filter((i)=>{
                    //         return i.enrollmentnumber==StudentDocs['enrollmentnumber'];
                    //    });
                    //     console.log('Student Rank Array Obj = ',StudentRankObj,'University Obj = ',StudentUniversityRankObj);
                        console.log('Studnet Docs  = ',StudentDocs);
                        // StudentRank = StudentRankObj[0].rank;
                        // UniversityStudentRank = StudentUniversityRankObj[0].rank;
                        console.log('Colleger RANK ',StudentRank,UniversityStudentRank);
                         var CommonDetailStudent = STUDENTOPEARTIONDB.FindAllArrays(StudentDocs);
                         var ArrayofSubjectBacklogs = STUDENTOPEARTIONDB.ArrayofSubjectBacklogs(StudentDocs);
                         var ArrayofPercentages = STUDENTOPEARTIONDB.FindAggregatePercentageofStudent(StudentDocs);
                         // console.log('Regular and Reappear Array...');
                        
                         console.log('Array of % = ', ArrayofPercentages);
                         var AggregatePercentage = 0;
                         for (var i in ArrayofPercentages) {
                             AggregatePercentage = AggregatePercentage + parseFloat(ArrayofPercentages[i]);
                         }
                         AggregatePercentage = AggregatePercentage / ArrayofPercentages.length; //.toString().substring(0,5)
                         console.log('Aggregate % = ', AggregatePercentage);
                      
                         var NewBAcklogsArray = [];
    
                         console.log('After Unique set.... ');
                         var o = 0;
                         for (var i = 0; i < ArrayofSubjectBacklogs.length; i++) {
                           
                             NewBAcklogsArray.push(ArrayofSubjectBacklogs[i]['subjectcode']);
                         
                         }
                         
                         console.log('AFTER UNIQUE SET');
                         var UNIQUESET = [...new Set(NewBAcklogsArray)];
                         
                         var BACKLOGNEWSET = [];
                         var count = 0;
                         for (var j = 0; j < UNIQUESET.length; j++) {
                             for (var i = 0; i < ArrayofSubjectBacklogs.length; i++) {
                                 if (ArrayofSubjectBacklogs[i]['subjectcode'] == UNIQUESET[j]) {
                                    
                                     BACKLOGNEWSET[count++] = ArrayofSubjectBacklogs[i];
                                     break;
                                 }
                             }
                         }
                         //  console.log('AFTER ARRAY UPDATE....', count, UNIQUESET.length);
                         //  BACKLOGNEWSET.forEach((i)=>console.log(i));
                         var count2 = 0;
                         console.log('Data os backlog',BACKLOGNEWSET);
                        //  console.log('Data os backlog',BACKLOGNEWSET[]);
                          
                         for (var i = 0; i < BACKLOGNEWSET.length; i++) {
                             for (var j = 0; j < BACKLOGNEWSET[i]['datawithdate'].length; j++) {
                                console.log('Data os backlog',BACKLOGNEWSET[i]['datawithdate'][j]['total']); 
                                if (BACKLOGNEWSET[i]['datawithdate'][j]['total'] < 40) {
                                    //  console.log(BACKLOGNEWSET[i]['datawithdate'][j]['total']);
                                     //  console.log('Total', BACKLOGNEWSET[i]['datawithdate'][j]['total']);
                                     count2++;
                                 }
                             }
                         }
                         console.log('Total number of blacklogs...',count2, ArrayofSubjectBacklogs.length,BACKLOGNEWSET.length,count2 - (ArrayofSubjectBacklogs.length - BACKLOGNEWSET.length));
                        //  console.log(CommonDetailStudent);
                         response.render('resultT', {
                             DOCS: CommonDetailStudent,
                             SEMDATA: CommonDetailStudent.semester,
                             SEMBACK: BACKLOGNEWSET,
                            //  SRANK:StudentRank,
                            //  SCRANK:CollegeDocs.length,
                            //  USRANK:UniversityStudentRank,
                            //  USTRANK:UniversityDocs.length,
                             BACKLOGS: count2 - (ArrayofSubjectBacklogs.length - BACKLOGNEWSET.length)
                             //  SEMDATA:CommonDetailStudent.semester
                         });
                        //  response.sendFile(__dirname + '/Result.html');
                        //  response.send();     
                    }
                   
                 }
                 
               
             });
     },
     FetchStudentByName(Name, request, response) {
         STUDENT.find({
             'name': Name
         }, (err, docs) => {
             if (err) {
                 console.log('Something Error Occured...');
                 response.send("<h3>Something Error Occured...</h3>");
             } else {
                 console.log("Done", docs);
                 response.send("Student Data  = " + docs);
                 response.write(docs);
             }
         })
     },
     FetchStudent(Enrollment, Name, request, response) {
         console.log(Enrollment, Name)
         console.log(STUDENT.find().collation());
         STUDENT.findOne({
             'enrollmentNumber': Enrollment,
             'name': Name
         }, (err, docs) => {
             if (err) {
                 console.log('Something Error Occured...');
                 response.send("<h3>Something Error Occured...</h3>");
             } else {
                 console.log("Done", docs);
                 response.send("Student Data  = " + docs);
             }
         })
     },
     FetchStudentbyCollege(c, request, response) {
         STUDENT.find({
             'institutename': c,'batch':[2015,2016]
         }, (e, d) => {
             if (e) {
                 console.log('Something Error Occured...');
                 response.send("<h3>Something Error Occured...</h3>");
             } else {
                 console.log("Done", d);
                 return d;
                //  response.send("Student Data  = " + d);
             }
         })
     }

 };
 module.exports = STUDENTOPERATION;