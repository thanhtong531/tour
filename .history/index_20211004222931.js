const notiFi = document.querySelector('.navbar-notifi');
const notiFi2 = document.querySelector('.navbar-notifi-empty');
const iconUser = document.querySelector('.navbar-user');
const iconUserDropdown = document.querySelector('.users');
const userAll = document.querySelectorAll('.user');



notiFi.onclick = function () {
  notiFi2.classList.toggle('open');
};

iconUser.onclick = function () {
  iconUserDropdown.classList.toggle('open');
};

// Ẩn hiện từng thông báo
document.onclick = function (e) {
  if (!e.target.parentNode.classList.contains('navbar-notifi')) {
    notiFi2.classList.remove('open');
  } else {
    iconUserDropdown.classList.remove('open');
  }
};

// User

  userAll.forEach(users =>{

    users.addEventListener('click',function(){
      console.log(Math.random());
    })
  })
