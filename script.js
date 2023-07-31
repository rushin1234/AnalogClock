
// var s=0
// var m=0
// var h=0

let sec=document.getElementById('sec')
let min=document.getElementById('min')
let hour=document.getElementById('hour')
setInterval(function(){
    var d=new Date()
    h=d.getHours()
    m=d.getMinutes()
    s=d.getSeconds()
    sec.style.transform= `rotate(${s*6}deg)`
    min.style.transform= `rotate(${m*6}deg)`
    hour.style.transform= `rotate(${h*30+m/2}deg)`
}, 1000);
