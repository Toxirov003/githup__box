"use strict"
function first (collback){
    setTimeout(()=>{ 
        console.log(1)
        collback()
    },2000)
}

const second = function(){
    console.log(2)
}
first(second)    