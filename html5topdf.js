#!/usr/bin/env node;

const HTML5ToPDF = require('html5-to-pdf');
const path = require("path");

const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "public/pages/", "Result.html"),
    outputPath: path.join(__dirname, "pdfs", "output.pdf"),
    // templatePath: path.join(__dirname, "node_modules/materialize-css/dist/css/", ""),
    include: [
        
    //   path.join(__dirname, "assets", "basic.css"),
    //   path.join(__dirname, "assets", "custom-margin.css")
    ]
  });

  await html5ToPDF.start().catch(err => console.error(err));
  await html5ToPDF.build().catch(err => console.error(err));
  await html5ToPDF.close().catch(err => console.error(err));
  console.log("DONE");
  process.exit(0);
};

try {
  run();
} catch (error) {
  console.error(error);
}

// const HTML5toPDF = require('html5-to-pdf');
// const path = require('path');

// // const run = async()=>{
// //     // inputpath : 
// // }
// var inputpath  = path.join(__dirname,'public/pages/','Result.html');
// var Outputpath  = path.join(__dirname,'pdfs','Result.pdf');
// var Include1 = path.join(__dirname,'node_modules/materialize-css/dist/js/','materialize.min.js');
// var Include2 = path.join(__dirname,'node_modules/materialize-css/dist/css/','materialize.min.css');
// var Include3  = path.join(__dirname,'public/css/','Result.css');
// var Include4 = 'https://fonts.googleapis.com/css?family=Comfortaa';
// var TemplatePath = path.join(__dirname,'templates','basic');
// console.log(inputpath,Outputpath);
// console.log(Include1);
// console.log(Include2);
// const run = async () => {
//     const html5ToPDF = new HTML5toPDF({
//       inputPath: inputpath,
//       outputPath:  Outputpath,
//       templatePath: TemplatePath,
//       include: [
//         Include1,Include2,Include3,Include4
//       ],
//     })
   
//     await html5ToPDF.start()
//     await html5ToPDF.build()
//     await html5ToPDF.close()
//     console.log("DONE")
//     process.exit(0)
//   }
   
   
//   // Use the function in an existing promise chain
// //   Promise.resolve( 'something' )
// //   .then( result => {
// //     return doSomething( result )
// //   } )
// //   .then( result => {
// //     // Because async functions are promises under the hood we can treat the run function as a promise
// //     return run()
// //   } )
// //   .catch( handleErrors )
   
//   // Usage in try/catch block
//   function handleErrors(){
//       console.log('Something error !!!');
//   }
//   try {
//     run()
//   } catch (error) {
//    console.log('Something Error occured..');
//     // console.error(error)
//   }


