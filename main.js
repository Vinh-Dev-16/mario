let check1 = document.querySelector('#checkbox1')
let check2 = document.querySelector('#checkbox2')
let check3 = document.querySelector('#checkbox3')
let rest = document.querySelector('.rest')
check1.onclick = function(){
    if(check1.checked === true){
        check1.disabled = 'true';
    }
}
check2.onclick = function(){
    if(check2.checked === true){
        check2.disabled = 'true';
    }
}
check3.onclick = function(){
    if(check3.checked === true){
        check3.disabled = 'true';
    }

rest.onclick = function(){
    check1.disabled = false;
    check1.checked = false;

    check2.disabled = false;
    check2.checked = false;

    check3.disabled = false;
    check3.checked = false;
}
}