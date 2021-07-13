
var result = document.getElementById("output").innerHTML;
let butt = document.getElementById('button');


function hat(){
  let array = [];
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;


    function prom(a,b){
      let c = parseInt(a);
      let d = parseInt(b);
      let x = c + d;
      array.push(c,d,x);
      for (i = 0; i <=7; i++){
        y = array[array.length - 1] + array[array.length - 2];
        array.push(y);
      }
      document.getElementById("output").innerHTML = array;
      return array;
    }

  return prom(a,b);
}

butt.addEventListener("click", () =>{
  hat();
});


