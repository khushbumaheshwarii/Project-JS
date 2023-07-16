// challenge 1
function ageIndays() {
    var birthYear = prompt('what is your birthyear ?');
    var ageINdayss = (2021-birthYear) * 365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are '+ageINdayss+'days');
    h1.setAttribute('id','ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageIndays').remove();
}