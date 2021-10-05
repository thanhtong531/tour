const notiFi = document.querySelector('.navbar-notifi');
const notiFi2 = document.querySelector('.navbar-notifi-empty');
const iconUser = document.querySelector('.navbar-user');
const iconUserDropdown = document.querySelector('.users');
const userAll = document.querySelectorAll('.user');
const modal = document.querySelector('.modal');
const modalLogin = document.querySelector('.modal-login');
const modalRegister = document.querySelector('.modal-register');
const fRegister = document.querySelector('.f-register');
const fLogin = document.querySelector('.f-login');

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

      users.onclick = function () {
        modal.classList.add('open');
        if(this.firstElementChild.matches('.form-login')){
          modalLogin.classList.add('open');
          modalRegister.classList.remove('open');
            if(fRegister){
            fRegister.onclick = function(e){
              modalRegister.classList.add('open');
              modalLogin.classList.remove('open');
            }
            }
          
           
            
        }else{
          modalLogin.classList.remove('open');
          modalRegister.classList.add('open');

          if(fLogin){
            fLogin.onclick = function(){
              // modalLogin.classList.remove('open');
              // modalRegister.classList.add('open');
            }
            }
        }

      }
   
  })

  // Bỏ class modal khi user click ra ngoài
  document.body.onclick = function(e){
    // Nếu trùng với class modal thì nó noá bỏ class
    if(e.target.matches(".modal")){
        modal.classList.remove('open')
       
    }
}




