window.addEventListener('load', init);
var AllPercentage = [];

function init() {
    console.log('Do print...');
    H1 = document.querySelector('#ArrayPercen');
    H12 = document.getElementById('GenPErcen');
    H13 = document.getElementById('ArraySem');
    H14 = document.getElementById('ArraySemTotalNumberSubject');
    H15=document.getElementById('aggregatepersen');
    H1.style.display = 'none';
    H13.style.display = 'none';
    H14.style.display = 'none';
    H15.style.display = 'none';
   
    AllPercentage.push(H12.innerHTML);
    document.querySelector("#pdfd").addEventListener("click", doprint);
    document.querySelector('#showchart').addEventListener('click', showChart);
    document.getElementById('myChart').addEventListener('click', DoPrint);
    document.getElementById('dotoggle').addEventListener('click',DohideShow);
    APERCEN = document.getElementById('apercen');
}
function DohideShow(){
    console.log('in hide show...');
}

function DoPrint() {
    console.log('Do print chart....');
}

function doprint() {
    window.print();


}

function showChart() {
    console.log('In Show Chart...');
    var s = H1.innerHTML;
    s = s.trim();
    console.log(H1.innerHTML, ' %% ', H1.innerHTML.length);
    const IndexsofCommas = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == ',') {
            IndexsofCommas.push(i);
        }
    }
    const ArrayofPErcentage = [];
    const SemNames = [];
    // SemNames.push('Sem'+())
    ArrayofPErcentage.push(parseFloat(s.substring(0, IndexsofCommas[0])));
    for (let i = 0; i < IndexsofCommas.length; i++) {

        ArrayofPErcentage.push(parseFloat(s.substring(IndexsofCommas[i] + 1, IndexsofCommas[i + 1])));
        console.log(s.substring(IndexsofCommas[i] + 1, IndexsofCommas[i + 1]), i, IndexsofCommas[i] + 1, IndexsofCommas[i + 1]);
    }
    var s1 = H13.innerHTML;
    s1 = s1.trim();
    const IndexsofCommas1 = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) == ',') {
            IndexsofCommas1.push(i);
        }
    }
    console.log('Arrays of % = ', ArrayofPErcentage, 'All Sem names = ', s1, IndexsofCommas1);
    const ArrayofSemName = [];
    // const SemNames=[];
    // SemNames.push('Sem'+())
    ArrayofSemName.push('Semester ' + (s1.substring(0, IndexsofCommas1[0])));
    for (let i = 0; i < IndexsofCommas1.length; i++) {

        ArrayofSemName.push('Semester ' + (s1.substring(IndexsofCommas1[i] + 1, IndexsofCommas1[i + 1])));
        // console.log(s.substring(IndexsofCommas[i] + 1, IndexsofCommas[i + 1]), i, IndexsofCommas[i] + 1, IndexsofCommas[i + 1]);
    }
    var APER=0 ,c1=0;
    for(var i=0;i<ArrayofPErcentage.length;i++){
        APER =APER+ArrayofPErcentage[i];
        c1++;
    }
    console.log('Aggregate % = ',APER,c1);
    APERCEN.innerHTML = (APER/c1).toString().substring(0,5); 
    console.log('Array of Sem Name ', ArrayofSemName);
    H15.style.display = 'block';
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ArrayofSemName,
            datasets: [{
                    label: 'Semester Percentage Rank',
                    data: ArrayofPErcentage,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }

            ]
        },
        options: {
            // scales: {
            //                 yAxes: [{
            //                     ticks: {
            //                         beginAtZero: true
            //                     }
            //                 }]
            //             }
        }
    });
    var ctx = document.getElementById('mypieChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ArrayofSemName,
            datasets: [{
                    label: 'Semester Percentage Rank',
                    data: ArrayofPErcentage,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('mydoughnutChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ArrayofSemName,
            datasets: [{
                    label: 'Semester Percentage Rank',
                    data: ArrayofPErcentage,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('myradarChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ArrayofSemName,
            datasets: [{
                    label: 'Semester Percentage Rank',
                    data: ArrayofPErcentage,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('mypolarChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ArrayofSemName,
            datasets: [{
                    label: 'Semester Percentage Rank',
                    data: ArrayofPErcentage,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('myHoriChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ArrayofSemName,
            datasets: [{
                    label: 'Semester Percentage Rank',
                    data: ArrayofPErcentage,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }

            ]
        },
        options: {}
    });
}