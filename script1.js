let a= document.getElementById("pass");
let b = document.getElementById("power-point");
console.log(a.value);
a.oninput = function(){
    let point =0;
    let value = a.value;
    let width_power= ["1%","25%", "50%","75%","100%" ];
    let color_power= ["red","maroon", "blue","yellow","green"];
    if(value.length>=6){
        let array_test=[/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        array_test.forEach((item) =>{
        if(item.test(value)){
            point+=1;
        }
        });
    }

    b.style.width = width_power[point];
    b.style.backgroundColor=color_power[point];



}