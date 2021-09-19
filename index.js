
const notiFi = document.querySelector('.navbar-notifi');
const notiFi2 = document.querySelector('.navbar-notifi-empty');
const iconUser = document.querySelector('.navbar-user');
const iconUserDropdown = document.querySelector('.users');


function myFuncNotifi(){

    notiFi.onclick = function (){
        notiFi2.classList.toggle('open');
    }
}

function myUser(){
    iconUser.onclick = function(){
        iconUserDropdown.classList.toggle('open');
    }
}



