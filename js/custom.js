
window.addEventListener('load',init);
function init(){
    document.querySelector("#pdfd").addEventListener("click",doprint);
    document.querySelector('#showchart').addEventListener('click', showChart);
    document.getElementById('mychart').addEventListener('click',DoPrint);
}
function DoPrint(){
    console.log('Do print chart....');
}
function doprint(){
    window.print();
   

}

function showChart() {
    console.log('In Show Chart...');
    H1 = document.querySelector('#ArrayPercen');
    console.log('Array of % in h1 tag = ', H1.innerHTML);
    console.log('Array of % in EJS tag = ', ALLPercentages);
}