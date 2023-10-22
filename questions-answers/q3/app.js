function output() {

     for (var i = 0; i < 100; ++i) {
          // will log the number 100 for 100 times
          setTimeout(function () {
               console.log(i);
          }, 200);
     }

}

output();


function outputIndex() {

     for (var i = 0; i < 100; ++i) {

          // will log the  value of the index  with each scheduled request 
          // as it saves the value of i passed as the argument at each iteration.

          (function (index) {
               setTimeout(function () {
                    console.log(index);
               }, 200);
          })(i);
     }
}

outputIndex();  