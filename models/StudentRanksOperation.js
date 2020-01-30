const STUDENTOPERATIONDB = require('../models/StudentObjDataCollect');
class StudentRank{
    constructor(name,enrollmentnumber,sn,rank,college,branch,percentage){
        this.name= name;
        this.enrollmentnumber = enrollmentnumber;
        this.sn =  sn;
        this.rank = rank;
        this.college = college;
        this.branch = branch;
        this.percentage = percentage;
    }
}
const StudentRankOperation={
    FindCollegeRank(docs){
    var name='';
    var sn=0;
    var rank =0;
    var percentage = 0;
    var enrollmentnumber ='';
    var CollegeRankObjArray=[];
    var college = '';
    var branch = '';
    for(var k in docs){
       percentage = this.FindAggregatePercentage(STUDENTOPERATIONDB.FindAggregatePercentageofStudent(docs[k]));
       name = docs[k]['name'];
       enrollmentnumber = docs[k]['enrollmentnumber'];
       sn = k;
       college = docs[k]['institutename'];
       branch = docs[k]['programmename'];
       CollegeRankObjArray.push(new StudentRank(name,enrollmentnumber,sn,rank,college,branch,percentage));
    }
    // console.log('Your College Rank Array = ',CollegeRankObjArray);
    var Sorted =CollegeRankObjArray.sort((i1,i2)=>{return i2.percentage-i1.percentage});
    // console.log('Your College Rank Array = ',Sorted);
    var rank =1;
    var FinalArray=[];
    for(var k in Sorted){
       FinalArray.push(new StudentRank(Sorted[k]['name'],Sorted[k]['enrollmentnumber'],Sorted[k]['sn'],rank++,Sorted[k]['college'],Sorted[k]['branch'],Sorted[k]['percentage']));
    }
    // console.log('Final Array = ',FinalArray);
    return FinalArray;    
    }
    ,
    FindAggregatePercentage(ArrayofPercentages){
        var AggregatePercentage = 0;
        for (var i in ArrayofPercentages) {
            AggregatePercentage = AggregatePercentage + parseFloat(ArrayofPercentages[i]);
        }
        AggregatePercentage = parseFloat((AggregatePercentage / ArrayofPercentages.length).toString().substring(0,5));
        return AggregatePercentage;
    }
}
module.exports = StudentRankOperation;
