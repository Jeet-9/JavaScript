// maximum

let a= document.getElementById("a1").value
let b= document.getElementById("a2").value
let c= document.getElementById("a3").value

if( a === "" || b === "" || c === ""){

    document.getElementById("ans").innerHTML="enter number"

}else{

    if(a > b){
        if(a > c){
            document.getElementById("ans").innerHTML= a
        }else{
            document.getElementById("ans").innerHTML= c
        }
    }else{
        if(b > c){
            document.getElementById("ans").innerHTML= b
        }else{
            document.getElementById("ans").innerHTML= c
        }
    }
}
