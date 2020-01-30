class SemesterExternal {
    constructor(sn, credit, subjectname, subjectid, subjectcode, subjecttype, subjectkind, examinationdate, subjectexternalm, subjectwholem, subjectinternalM, subjectexternalM) {
        this.sn = sn,
            this.credit = credit;
        this.subjectname = subjectname,
            this.subjectid = subjectid,
            this.subjectcode = subjectcode,
            this.subjectexternalm = subjectexternalm,
            this.subjectinternalM = subjectinternalM;
        this.subjectexternalM = subjectexternalM;
        this.subjectkind = subjectkind;
        this.examinationdate = examinationdate;
        //  this.percentageWM = percentageWM;
        this.subjecttype = subjecttype
        this.subjectwholem = '100'
    }
}
class DatawithDate {
    constructor(date, internal, external, total, examtype, credit) {
        this.data = date;
        this.internal = internal;
        this.external = external;
        this.total = total;
        this.examtype = examtype;
        this.credit = credit;
    }
}
class SemesterBacklog {
    constructor(sn, subjectcode, subjectname, subjectid, subjectkind, datawithdate) {
        this.sn = sn;
        this.subjectcode = subjectcode;
        this.subjectname = subjectname;
        this.subjectkind = subjectkind;
        this.datawithdate = datawithdate;
    }
}

function CalculatePercentage(ExternlaMarksArrayofOneSem) {
    var sumWM = 0,
        i;
    for (i = 0; i < ExternlaMarksArrayofOneSem.length; i++) {
        sumWM = sumWM + parseInt(ExternlaMarksArrayofOneSem[i]);
    }
    return (sumWM / (i + 1)).toString();
}


class SemesterInternalt {
    constructor(sn, subjectname, subjectid, subjectcode, subjectinternalm1, subjectinternalm2, subjectinternalm3, subjectinternalm, subjectwholem) {
        this.sn = sn,
            this.subjectname = subjectname,
            this.subjectid = subjectid,
            this.subjectcode = subjectcode,

            this.subjectinternalm1 = subjectinternalm1,
            this.subjectinternalm2 = subjectinternalm2,
            this.subjectinternalm3 = subjectinternalm3,
            this.subjectinternalm = subjectinternalm,
            this.subjectwholem = '25'
    }

}
class SemesterInternalp {
    constructor(sn, subjectname, subjectid, subjectcode, subjectinternalm1, subjectinternalm2, subjectinternalm3, subjectinternalm, subjectwholem) {
        this.sn = sn,
            this.subjectname = subjectname,
            this.subjectid = subjectid,
            this.subjectcode = subjectcode,

            this.subjectinternalm1 = subjectinternalm1;
        this.subjectinternalm2 = subjectinternalm2;
        this.subjectinternalm3 = subjectinternalm3;
        this.subjectinternalm = subjectinternalm,

            this.subjectwholem = '40'
    }

}
class SemesterExternalt {
    constructor(sn, subjectname, subjectid, subjectcode, subjectexternalm, subjectwholem) {
        this.sn = sn,
            this.subjectname = subjectname,
            this.subjectid = subjectid,
            this.subjectcode = subjectcode,
            this.subjectexternalm = subjectexternalm,
            this.subjectwholem = '75'
    }

}
class SemesterExternalp {
    constructor(sn, subjectname, subjectid, subjectcode, subjectexternalm, subjectwholem) {
        this.sn = sn,
            this.subjectname = subjectname,
            this.subjectid = subjectid,
            this.subjectcode = subjectcode,
            this.subjectexternalm = subjectexternalm,
            this.subjectwholem = '60'
    }

}
class AAA {
    constructor(a1, a2, a3, a4, a5, a6) {
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.a5 = a5;
        this.a6 = a6;
    }
}
class SEMOBJVALUESC {

    constructor(semn, Arr) {
        this.semn = semn;
        this.Arr = Arr;
    }
}
var SemesterData = {

}
var CommonDetailStudent = {
    'batch': '',
    'enrollmentnumber': '',
    'name': '',
    'sid': '',
    'schemaid': '',
    'programmecode': '',
    'programmename': '',
    'institutecode': '',
    'institutename': '',
    'instituterollnubmer': '',
    'semester': SemesterData
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomizer(bottom, top) {
    return function () {
        return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
    }
}

function CreateRandom(n, n1, n2, n3) {
    var l1 = [],
        l2 = [],
        l3 = [];
    for (var i = 0; i < n1; i++) {
        l1[i] = i + 1;
        //  l1[i] = Math.floor( getRandomizer(i + 1, n1)());
    }
    for (var i = 0; i < n2; i++) {
        l2[i] = i + 1;
        //  l2[i] = Math.floor(getRandomizer(i + 1, n2)());
    }
    for (var i = 0; i < n3; i++) {
        l3[i] = i + 1;
        //  l3[i] = Math.floor(getRandomizer(i + 1, n3)());
    }
    var ans = [];
    //  console.log(l1, l2, l3);
    for (var i = 0; i < l3.length; i++) {
        //  console.log(`${l1[i]} and`);
        for (var j = 0; j < l2.length; j++) {
            //  console.log(`${l1[i]} and ${l2[j]} and`);
            for (var k = 0; k < l1.length; k++) {
                //  console.log(`${l1[i]} and ${l2[j]} and ${l3[k]}`);
                if (l1[k] + l2[j] + l3[i] == n) {
                    //  console.log(`${l1[i]} and ans ${l2[j]} and ans ${l3[k]}`);
                    ans[0] = l1[k].toString();
                    ans[1] = l2[j].toString();
                    ans[2] = l3[i].toString();
                    break;


                }
            }
        }
    }

    return ans;
}

function CreateRandomNumber(a, b) {
    //  console.log("TYPE = ", a, "INTERNAL = ", b);
    var ans = [];
    if (a == 'PRACTICAL') {
        if (parseInt(b) < 41 && b != 'A') {
            //  console.log("In P = ", parseInt(b));
            //  console.log(CreateRandom(parseInt(b),10,10,20));
            ans = CreateRandom(parseInt(b), 10, 10, 20);
            // for(var i=0;i<ans.length;i++){

            // }
        } else if (b == 'A') {
            ans = ['A', 'A', 'A'];
        }
    }
    if (a == 'THEORY') {
        if (parseInt(b) < 26 && b != 'A') {
            //  console.log("In T = ", parseInt(b));
            //  console.log(CreateRandom(parseInt(b),5,5,10));
            ans = CreateRandom(parseInt(b), 5, 5, 10);
        } else if (b == 'A') {
            ans = ['A', 'A', 'A'];
        }
    }
    return ans;
}
const STUDENTOBJOPERATION={
    FindAllArrays(docs){

        var MainObj = JSON.parse(JSON.stringify(docs));
                    
        var i = 0,
            i1 = 0;
        var ArrayofSemester = [];
        var ArrayofAllSubjects = [];

        for (let [key, value] of Object.entries(MainObj)) {
            if (key == 'enrollmentnumber') {
                CommonDetailStudent.enrollmentnumber = value;

            }
            if (key == 'name') {
                CommonDetailStudent.name = value;

            }
            if (key == 'sid') {
                CommonDetailStudent.sid = value;

            }
            if (key == 'schemaid') {
                CommonDetailStudent.schemaid = value;

            }
            if (key == 'batch') {
                CommonDetailStudent.batch = value;
            }
            if (key == 'classrollnumber') {
                CommonDetailStudent.instituterollnubmer = value;
            }
            if (key == 'institutecode') {
                CommonDetailStudent.institutecode = value;
            }
            if (key == 'institutename') {
                CommonDetailStudent.institutename = value;
            }
            if (key == 'programmecode') {
                CommonDetailStudent.programmecode = value;
            }
            if (key == 'programmename') {
                CommonDetailStudent.programmename = value;
            }
            var p = 1;
            var ArrayofSubjectBacklogs = [];
            if (key == 'semester') {
                var semn = '00';
                var A = [];
                var AA = {};
                var u1 = 0;
                for (var k in value) {
                    semn = k;
                    var u = 1;

                    var semvalue = value[k];
                    var ArrayofSubjectExternal = [];
                    var FilteredArrayofSubjectExternal = [];
                    var ArrayforRegReappear=[];
                    var ArrayofSubjectExternalp = [];
                    var ArrayofSubjectInternalp = [];
                    var ArrayofSubjectExternalt = [];
                    var ArrayofSubjectInternalt = [];

                    for (var k1 in semvalue) {
                        var h=1;
                        var SubjectValue = semvalue[k1];
                        var sum = '0',
                            cr = '0',
                            sint = '',
                            ext = '',
                            sid = '',
                            st = '',
                            scode = k1,
                            sname = '',
                            sn = u,
                            skind = '',
                            ocr = '',
                            examregulardate = '',
                            sin1 = '',
                            sin2 = '',
                            sin3 = '',
                            sin4 = '',
                            sin5 = '';

                        var sin = [];
                        var osj1 = {},
                            osj2 = {},
                            osj3 = {},
                            osj4 = {};
                        for (var k2 in SubjectValue) {
                            if (k2 == 'subjectid') {

                                sid = SubjectValue[k2];

                            }
                            if (k2 == 'subjectname') {
                                sname = SubjectValue[k2];

                            }
                            if (k2 == 'subjecttype') {
                                st = SubjectValue[k2];

                            }
                            if (k2 == 'totalcredit') {

                                cr = SubjectValue[k2];

                            }
                            if (k2 == 'subjectkind') {

                                skind = SubjectValue[k2];

                            }
                            if (k2 == 'internalm1') {
                                sin1 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm2') {
                                sin2 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm3') {
                                sin3 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm4') {
                                sin4 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm5') {
                                sin5 = SubjectValue[k2];

                            }
                            if (k2 == 'markswithdate') {
                                var MARKSWITHDATE = [];
                                // console.log('LENGTH OF DATES = ', Object.keys(SubjectValue[k2]).length);
                                var DateValues = SubjectValue[k2];
                                // console.log('DatesValues = ', DateValues);

                                // console.log('LENGTH OF DATES = ', Object.keys(DateValues).length);

                                for (var k4 in DateValues) {
                                    if (DateValues[k4]['external'] == 'A') {
                                        DateValues[k4]['external'] = '0';
                                    }
                                    if (DateValues[k4]['internalm'] == 'A') {
                                        DateValues[k4]['internalm'] = '0';
                                    }
                                    if (DateValues[k4]['examinationtype'] == 'REGULAR' && (parseInt(DateValues[k4]['internalm'])+parseInt(DateValues[k4]['external']))>39) {

                                        examregulardate = k4;

                                        for (var k3 in DateValues[k4]) {

                                            if (k3 == 'obtainedcredit') {
                                                ocr = DateValues[k4][k3];
                                            }
                                            if (k3 == 'internalm') {

                                                sint = DateValues[k4][k3];
                                                // console.log('Sint = ', sint);
                                            }
                                            if (k3 == 'external') {
                                                if (DateValues[k4][k3] == 'A') {
                                                    ext = '0';
                                                } else {
                                                    ext = DateValues[k4][k3];
                                                }

                                            }
                                        }
                                        if (sint != 'A') {

                                           sum = eval(parseInt(sint) + parseInt(ext)) + '';
  
                                       } else {
  
                                           sum = ext;
  
                                       }
                                        ArrayforRegReappear.push(new SemesterExternal(h++,ocr,sname,sid,k1,st,skind,k4,sum,'100',sint,ext));

                                    } else  {
                                        if (DateValues[k4]['external'] == 'A') {
                                            DateValues[k4]['external'] = '0';
                                        }
                                        if (DateValues[k4]['internalm'] == 'A') {
                                            DateValues[k4]['internalm'] = '0';
                                        }
                                        MARKSWITHDATE.push(new DatawithDate(k4, DateValues[k4]['internalm'], DateValues[k4]['external'], parseInt(DateValues[k4]['internalm']) + parseInt(DateValues[k4]['external']),
                                            DateValues[k4]['examinationtype'], DateValues[k4]['obtainedcredit']));
                                        // console.log(p++, k1, SubjectValue['subjectname'], SubjectValue['subjectid'], k4, DateValues[k4]['examinationtype'], );

                                        ArrayofSubjectBacklogs.push(new SemesterBacklog(p++, k1, SubjectValue['subjectname'], SubjectValue['subjectid'], SubjectValue['subjectkind'],
                                            MARKSWITHDATE));
                                        examregulardate = k4;

                                        for (var k3 in DateValues[k4]) {

                                            if (k3 == 'obtainedcredit') {
                                                ocr = DateValues[k4][k3];
                                            }
                                            if (k3 == 'internalm') {

                                                sint = DateValues[k4][k3];
                                                // console.log('Sint = ', sint);
                                            }
                                            if (k3 == 'external') {
                                                if (DateValues[k4][k3] == 'A') {
                                                    ext = '0';
                                                } else {
                                                    ext = DateValues[k4][k3];
                                                }

                                            }
                                        }



                                        sname = SubjectValue['subjectname'] + ' ' + DateValues[k4]['examinationtype'];
                                        if (sint != 'A') {

                                           sum = eval(parseInt(sint) + parseInt(ext)) + '';
  
                                       } else {
  
                                           sum = ext;
  
                                       }
                                        ArrayforRegReappear.push(new SemesterExternal(h++,ocr,sname,sid,k1,st,skind,k4,sum,'100',sint,ext));

                                    }

                                }


                            }



                        }
                        sin = CreateRandomNumber(st, sint);

                        if (sint != 'A') {

                            sum = eval(parseInt(sint) + parseInt(ext)) + '';

                        } else {

                            sum = ext;

                        }

                        if (st == 'THEORY') {

                            osj1 = new SemesterExternalt(sn, sname, sid, scode, ext, '75');
                            osj2 = new SemesterInternalt(sn, sname, sid, scode, sin[0], sin[1], sin[2], sint, '25');
                            if (sint == 'A') {
                                osj1 = new SemesterExternalt(sn, sname, sid, scode, ext, '100');
                                osj2 = new SemesterInternalt(sn, sname, sid, scode, 'A', 'A', 'A', sint, 'A');

                            }
                        }
                        if (st == 'PRACTICAL') {

                            //  console.log("Array of Random  = ", sin, 'p ', sint);
                            osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '60');
                            osj4 = new SemesterInternalp(sn, sname, sid, scode, sin[0], sin[1], sin[2], sint, '40');
                            if (sint == 'A') {

                                osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '100');
                                osj4 = new SemesterInternalp(sn, sname, sid, scode, 'A', 'A', 'A', sint, 'A');
                            }
                            if (parseInt(ext) > 60) {
                                osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '100');
                            }
                        }
                        if (cr.length > 0 && sname.length > 0 && sid.length > 0 && scode.length > 0 && st.length > 0 && sum.length > 0 && sint.length > 0 && ext.length > 0) {


                        }
                        var onesubjobj = new SemesterExternal(sn, cr, sname, sid, scode, st, skind, examregulardate, sum, '100', sint, ext);

                        ArrayofSubjectExternal[u] = onesubjobj;
                        ArrayofSubjectExternalp[u] = osj3;
                        ArrayofSubjectInternalp[u] = osj4;
                        ArrayofSubjectExternalt[u] = osj1;
                        ArrayofSubjectInternalt[u] = osj2;

                        u++;
                    }

                    console.log('In student Marks details....');
                    for (let i in ArrayofSubjectExternal) {
                        if (ArrayofSubjectExternal[i].subjectname.length > 0) {

                            FilteredArrayofSubjectExternal.push(ArrayofSubjectExternal[i]);
                        }

                    }

                    var aaa = new AAA(FilteredArrayofSubjectExternal, ArrayofSubjectExternalt, ArrayofSubjectExternalp, ArrayofSubjectInternalt, ArrayofSubjectInternalp,ArrayforRegReappear);



                    AA[k] = aaa;

                }

                CommonDetailStudent.semester = AA;

            }
        }
        return CommonDetailStudent;
    },
    ArrayofSubjectBacklogs(docs){
        var MainObj = JSON.parse(JSON.stringify(docs));
                    
        var i = 0,
            i1 = 0;
        var ArrayofSemester = [];
        var ArrayofAllSubjects = [];

        for (let [key, value] of Object.entries(MainObj)) {
            if (key == 'enrollmentnumber') {
                CommonDetailStudent.enrollmentnumber = value;

            }
            if (key == 'name') {
                CommonDetailStudent.name = value;

            }
            if (key == 'sid') {
                CommonDetailStudent.sid = value;

            }
            if (key == 'schemaid') {
                CommonDetailStudent.schemaid = value;

            }
            if (key == 'batch') {
                CommonDetailStudent.batch = value;
            }
            if (key == 'classrollnumber') {
                CommonDetailStudent.instituterollnubmer = value;
            }
            if (key == 'institutecode') {
                CommonDetailStudent.institutecode = value;
            }
            if (key == 'institutename') {
                CommonDetailStudent.institutename = value;
            }
            if (key == 'programmecode') {
                CommonDetailStudent.programmecode = value;
            }
            if (key == 'programmename') {
                CommonDetailStudent.programmename = value;
            }
            var p = 1;
            var ArrayofSubjectBacklogs = [];
            if (key == 'semester') {
                var semn = '00';
                var A = [];
                var AA = {};
                var u1 = 0;
                for (var k in value) {
                    semn = k;
                    var u = 1;

                    var semvalue = value[k];
                    var ArrayofSubjectExternal = [];
                    var FilteredArrayofSubjectExternal = [];
                    var ArrayforRegReappear=[];
                    var ArrayofSubjectExternalp = [];
                    var ArrayofSubjectInternalp = [];
                    var ArrayofSubjectExternalt = [];
                    var ArrayofSubjectInternalt = [];

                    for (var k1 in semvalue) {
                        var h=1;
                        var SubjectValue = semvalue[k1];
                        var sum = '0',
                            cr = '0',
                            sint = '',
                            ext = '',
                            sid = '',
                            st = '',
                            scode = k1,
                            sname = '',
                            sn = u,
                            skind = '',
                            ocr = '',
                            examregulardate = '',
                            sin1 = '',
                            sin2 = '',
                            sin3 = '',
                            sin4 = '',
                            sin5 = '';

                        var sin = [];
                        var osj1 = {},
                            osj2 = {},
                            osj3 = {},
                            osj4 = {};
                        for (var k2 in SubjectValue) {
                            if (k2 == 'subjectid') {

                                sid = SubjectValue[k2];

                            }
                            if (k2 == 'subjectname') {
                                sname = SubjectValue[k2];

                            }
                            if (k2 == 'subjecttype') {
                                st = SubjectValue[k2];

                            }
                            if (k2 == 'totalcredit') {

                                cr = SubjectValue[k2];

                            }
                            if (k2 == 'subjectkind') {

                                skind = SubjectValue[k2];

                            }
                            if (k2 == 'internalm1') {
                                sin1 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm2') {
                                sin2 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm3') {
                                sin3 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm4') {
                                sin4 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm5') {
                                sin5 = SubjectValue[k2];

                            }
                            if (k2 == 'markswithdate') {
                                var MARKSWITHDATE = [];
                                // console.log('LENGTH OF DATES = ', Object.keys(SubjectValue[k2]).length);
                                var DateValues = SubjectValue[k2];
                                // console.log('DatesValues = ', DateValues);

                                // console.log('LENGTH OF DATES = ', Object.keys(DateValues).length);

                                for (var k4 in DateValues) {
                                    if (DateValues[k4]['external'] == 'A') {
                                        DateValues[k4]['external'] = '0';
                                    }
                                    if (DateValues[k4]['internalm'] == 'A') {
                                        DateValues[k4]['internalm'] = '0';
                                    }
                                    if (DateValues[k4]['examinationtype'] == 'REGULAR' && (parseInt(DateValues[k4]['internalm'])+parseInt(DateValues[k4]['external']))>39) {

                                        examregulardate = k4;

                                        for (var k3 in DateValues[k4]) {

                                            if (k3 == 'obtainedcredit') {
                                                ocr = DateValues[k4][k3];
                                            }
                                            if (k3 == 'internalm') {

                                                sint = DateValues[k4][k3];
                                                // console.log('Sint = ', sint);
                                            }
                                            if (k3 == 'external') {
                                                if (DateValues[k4][k3] == 'A') {
                                                    ext = '0';
                                                } else {
                                                    ext = DateValues[k4][k3];
                                                }

                                            }
                                        }
                                        if (sint != 'A') {

                                           sum = eval(parseInt(sint) + parseInt(ext)) + '';
  
                                       } else {
  
                                           sum = ext;
  
                                       }
                                        ArrayforRegReappear.push(new SemesterExternal(h++,ocr,sname,sid,k1,st,skind,k4,sum,'100',sint,ext));

                                    } else {
                                        if (DateValues[k4]['external'] == 'A') {
                                            DateValues[k4]['external'] = '0';
                                        }
                                        if (DateValues[k4]['internalm'] == 'A') {
                                            DateValues[k4]['internalm'] = '0';
                                        }
                                        MARKSWITHDATE.push(new DatawithDate(k4, DateValues[k4]['internalm'], DateValues[k4]['external'], parseInt(DateValues[k4]['internalm']) + parseInt(DateValues[k4]['external']),
                                            DateValues[k4]['examinationtype'], DateValues[k4]['obtainedcredit']));
                                        // console.log(p++, k1, SubjectValue['subjectname'], SubjectValue['subjectid'], k4, DateValues[k4]['examinationtype'], );

                                        ArrayofSubjectBacklogs.push(new SemesterBacklog(p++, k1, SubjectValue['subjectname'], SubjectValue['subjectid'], SubjectValue['subjectkind'],
                                            MARKSWITHDATE));
                                        examregulardate = k4;

                                        for (var k3 in DateValues[k4]) {

                                            if (k3 == 'obtainedcredit') {
                                                ocr = DateValues[k4][k3];
                                            }
                                            if (k3 == 'internalm') {

                                                sint = DateValues[k4][k3];
                                                // console.log('Sint = ', sint);
                                            }
                                            if (k3 == 'external') {
                                                if (DateValues[k4][k3] == 'A') {
                                                    ext = '0';
                                                } else {
                                                    ext = DateValues[k4][k3];
                                                }

                                            }
                                        }



                                        sname = SubjectValue['subjectname'] + ' ' + DateValues[k4]['examinationtype'];
                                        if (sint != 'A') {

                                           sum = eval(parseInt(sint) + parseInt(ext)) + '';
  
                                       } else {
  
                                           sum = ext;
  
                                       }
                                        ArrayforRegReappear.push(new SemesterExternal(h++,ocr,sname,sid,k1,st,skind,k4,sum,'100',sint,ext));
                                                                                    //  (h++,ocr,sname,sid,k1,st,skind,k4,sum,'100',sint,ext))

                                    }

                                }


                            }



                        }
                    
                        u++;
                    }

                
              
                }

               

            }
        }
        return ArrayofSubjectBacklogs;
    },
    FindAggregatePercentageofStudent(docs){

        var MainObj = JSON.parse(JSON.stringify(docs));
                    
        var i = 0,
            i1 = 0;
        var ArrayofSemester = [];
        var ArrayofAllSubjects = [];

        for (let [key, value] of Object.entries(MainObj)) {
            if (key == 'enrollmentnumber') {
                CommonDetailStudent.enrollmentnumber = value;

            }
            if (key == 'name') {
                CommonDetailStudent.name = value;

            }
            if (key == 'sid') {
                CommonDetailStudent.sid = value;

            }
            if (key == 'schemaid') {
                CommonDetailStudent.schemaid = value;

            }
            if (key == 'batch') {
                CommonDetailStudent.batch = value;
            }
            if (key == 'classrollnumber') {
                CommonDetailStudent.instituterollnubmer = value;
            }
            if (key == 'institutecode') {
                CommonDetailStudent.institutecode = value;
            }
            if (key == 'institutename') {
                CommonDetailStudent.institutename = value;
            }
            if (key == 'programmecode') {
                CommonDetailStudent.programmecode = value;
            }
            if (key == 'programmename') {
                CommonDetailStudent.programmename = value;
            }
            var p = 1;
            var ArrayofSubjectBacklogs = [];
            if (key == 'semester') {
                var semn = '00';
                var A = [];
                var AA = {};
                var u1 = 0;
                for (var k in value) {
                    semn = k;
                    var u = 1;

                    var semvalue = value[k];
                    var ArrayofSubjectExternal = [];
                    var FilteredArrayofSubjectExternal = [];
                    var ArrayforRegReappear=[];
                    var ArrayofSubjectExternalp = [];
                    var ArrayofSubjectInternalp = [];
                    var ArrayofSubjectExternalt = [];
                    var ArrayofSubjectInternalt = [];

                    for (var k1 in semvalue) {
                        var h=1;
                        var SubjectValue = semvalue[k1];
                        var sum = '0',
                            cr = '0',
                            sint = '',
                            ext = '',
                            sid = '',
                            st = '',
                            scode = k1,
                            sname = '',
                            sn = u,
                            skind = '',
                            ocr = '',
                            examregulardate = '',
                            sin1 = '',
                            sin2 = '',
                            sin3 = '',
                            sin4 = '',
                            sin5 = '';

                        var sin = [];
                        var osj1 = {},
                            osj2 = {},
                            osj3 = {},
                            osj4 = {};
                        for (var k2 in SubjectValue) {
                            if (k2 == 'subjectid') {

                                sid = SubjectValue[k2];

                            }
                            if (k2 == 'subjectname') {
                                sname = SubjectValue[k2];

                            }
                            if (k2 == 'subjecttype') {
                                st = SubjectValue[k2];

                            }
                            if (k2 == 'totalcredit') {

                                cr = SubjectValue[k2];

                            }
                            if (k2 == 'subjectkind') {

                                skind = SubjectValue[k2];

                            }
                            if (k2 == 'internalm1') {
                                sin1 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm2') {
                                sin2 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm3') {
                                sin3 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm4') {
                                sin4 = SubjectValue[k2];

                            }
                            if (k2 == 'internalm5') {
                                sin5 = SubjectValue[k2];

                            }
                            if (k2 == 'markswithdate') {
                                var MARKSWITHDATE = [];
                                // console.log('LENGTH OF DATES = ', Object.keys(SubjectValue[k2]).length);
                                var DateValues = SubjectValue[k2];
                                // console.log('DatesValues = ', DateValues);

                                // console.log('LENGTH OF DATES = ', Object.keys(DateValues).length);

                                for (var k4 in DateValues) {
                                    if (DateValues[k4]['external'] == 'A') {
                                        DateValues[k4]['external'] = '0';
                                    }
                                    if (DateValues[k4]['internalm'] == 'A') {
                                        DateValues[k4]['internalm'] = '0';
                                    }
                                    if (DateValues[k4]['examinationtype'] == 'REGULAR' && (parseInt(DateValues[k4]['internalm'])+parseInt(DateValues[k4]['external']))>39) {

                                        examregulardate = k4;

                                        for (var k3 in DateValues[k4]) {

                                            if (k3 == 'obtainedcredit') {
                                                ocr = DateValues[k4][k3];
                                            }
                                            if (k3 == 'internalm') {

                                                sint = DateValues[k4][k3];
                                                // console.log('Sint = ', sint);
                                            }
                                            if (k3 == 'external') {
                                                if (DateValues[k4][k3] == 'A') {
                                                    ext = '0';
                                                } else {
                                                    ext = DateValues[k4][k3];
                                                }

                                            }
                                        }
                                        if (sint != 'A') {

                                           sum = eval(parseInt(sint) + parseInt(ext)) + '';
  
                                       } else {
  
                                           sum = ext;
  
                                       }
                                        ArrayforRegReappear.push(new SemesterExternal(h++,ocr,sname,sid,k1,st,skind,k4,sum,'100',sint,ext));

                                    } else   {
                                        if (DateValues[k4]['external'] == 'A') {
                                            DateValues[k4]['external'] = '0';
                                        }
                                        if (DateValues[k4]['internalm'] == 'A') {
                                            DateValues[k4]['internalm'] = '0';
                                        }
                                        MARKSWITHDATE.push(new DatawithDate(k4, DateValues[k4]['internalm'], DateValues[k4]['external'], parseInt(DateValues[k4]['internalm']) + parseInt(DateValues[k4]['external']),
                                            DateValues[k4]['examinationtype'], DateValues[k4]['obtainedcredit']));
                                        // console.log(p++, k1, SubjectValue['subjectname'], SubjectValue['subjectid'], k4, DateValues[k4]['examinationtype'], );

                                        ArrayofSubjectBacklogs.push(new SemesterBacklog(p++, k1, SubjectValue['subjectname'], SubjectValue['subjectid'], SubjectValue['subjectkind'],
                                            MARKSWITHDATE));
                                        examregulardate = k4;

                                        for (var k3 in DateValues[k4]) {

                                            if (k3 == 'obtainedcredit') {
                                                ocr = DateValues[k4][k3];
                                            }
                                            if (k3 == 'internalm') {

                                                sint = DateValues[k4][k3];
                                                // console.log('Sint = ', sint);
                                            }
                                            if (k3 == 'external') {
                                                if (DateValues[k4][k3] == 'A') {
                                                    ext = '0';
                                                } else {
                                                    ext = DateValues[k4][k3];
                                                }

                                            }
                                        }


                                        if(DateValues[k4]['examinationtype']!='REGULAR'){
                                            sname = SubjectValue['subjectname'] + ' ' + DateValues[k4]['examinationtype'];
                                        }
                                        
                                        if (sint != 'A') {

                                           sum = eval(parseInt(sint) + parseInt(ext)) + '';
  
                                       } else {
  
                                           sum = ext;
  
                                       }
                                        ArrayforRegReappear.push(new SemesterExternal(h++,ocr,sname,sid,k1,st,skind,k4,sum,'100',sint,ext));

                                    }

                                }


                            }



                        }
                        sin = CreateRandomNumber(st, sint);

                        if (sint != 'A') {

                            sum = eval(parseInt(sint) + parseInt(ext)) + '';

                        } else {

                            sum = ext;

                        }

                        if (st == 'THEORY') {

                            osj1 = new SemesterExternalt(sn, sname, sid, scode, ext, '75');
                            osj2 = new SemesterInternalt(sn, sname, sid, scode, sin[0], sin[1], sin[2], sint, '25');
                            if (sint == 'A') {
                                osj1 = new SemesterExternalt(sn, sname, sid, scode, ext, '100');
                                osj2 = new SemesterInternalt(sn, sname, sid, scode, 'A', 'A', 'A', sint, 'A');

                            }
                        }
                        if (st == 'PRACTICAL') {

                            //  console.log("Array of Random  = ", sin, 'p ', sint);
                            osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '60');
                            osj4 = new SemesterInternalp(sn, sname, sid, scode, sin[0], sin[1], sin[2], sint, '40');
                            if (sint == 'A') {

                                osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '100');
                                osj4 = new SemesterInternalp(sn, sname, sid, scode, 'A', 'A', 'A', sint, 'A');
                            }
                            if (parseInt(ext) > 60) {
                                osj3 = new SemesterExternalp(sn, sname, sid, scode, ext, '100');
                            }
                        }
                        if (cr.length > 0 && sname.length > 0 && sid.length > 0 && scode.length > 0 && st.length > 0 && sum.length > 0 && sint.length > 0 && ext.length > 0) {


                        }
                        var onesubjobj = new SemesterExternal(sn, cr, sname, sid, scode, st, skind, examregulardate, sum, '100', sint, ext);

                        ArrayofSubjectExternal[u] = onesubjobj;
                        ArrayofSubjectExternalp[u] = osj3;
                        ArrayofSubjectInternalp[u] = osj4;
                        ArrayofSubjectExternalt[u] = osj1;
                        ArrayofSubjectInternalt[u] = osj2;

                        u++;
                    }

                    // console.log('In student Marks details....');
                    for (let i in ArrayofSubjectExternal) {
                        if (ArrayofSubjectExternal[i].subjectname.length > 0) {

                            FilteredArrayofSubjectExternal.push(ArrayofSubjectExternal[i]);
                        }

                    }

                    var aaa = new AAA(FilteredArrayofSubjectExternal, ArrayofSubjectExternalt, ArrayofSubjectExternalp, ArrayofSubjectInternalt, ArrayofSubjectInternalp,ArrayforRegReappear);



                    AA[k] = aaa;

                }

                CommonDetailStudent.semester = AA;
                var PecentageArray=[];
                
                for(var k in CommonDetailStudent.semester){
                    var sumWM =0,sumCredit=0;
                    for(var k1 in CommonDetailStudent.semester[k].a1){
                    sumWM = sumWM+ parseInt(CommonDetailStudent.semester[k].a1[k1].subjectexternalm)
                    sumCredit = sumCredit + parseInt(CommonDetailStudent.semester[k].a1[k1].credit)
                 }
                //  console.log('SUM = ',sumWM);
                PecentageArray.push(Math.abs(sumWM/parseInt(CommonDetailStudent.semester[k].a1[k1].sn)).toString().substring(0,5));
                }



            }
        }
        return PecentageArray;
    }
    
}
module.exports= STUDENTOBJOPERATION;