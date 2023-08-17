function Cal(){
var lover1 = document.getElementById('l1').value;
var lover2 = document.getElementById('l2').value;
var percentage = Math.round(Math.random()*100);
document.getElementById('out1').innerHTML = 'Dear ' + 'Mr ' + lover1 + ' and ' + 'Miss ' + lover2 + ' your LOVE Percentage is ' + percentage +'%';

if (percentage <= 49){
    document.getElementById('out2').innerHTML=  'Oh, Sorry! Mr '+ lover1 + ' and ' + 'Miss ' + lover2 +' you are not compatible';
}
else if (percentage >=50 && percentage <=79){
    document.getElementById('out2').innerHTML= ' Congrats!' + ' Mr ' + lover1 + ' and ' +'Miss '+ lover2 +' you are good to be together';
}
else {
    document.getElementById('out2').innerHTML= ' Congratulations!' + ' Mr ' + lover1 + ' and ' + 'Miss ' + lover2 +' you are very much compatible enough to get married.';
}

}