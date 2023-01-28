// validation form register and register user local storage
const inputUsernameRegister = document.querySelector("input[placeholder='Username']");
const inputEmailRegister = document.querySelector("input[placeholder='Email']");
const inputPasswordRegister = document.querySelector("input[placeholder='Password']");
const btnRegister = document.querySelector("input[type='submit']");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === "" ||
    inputEmailRegister.value === ""
  ){
    alert("Vui Lòng Không Để Trống");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
      email:    inputEmailRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    var data = localStorage.getItem(inputUsernameRegister.value);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
})
document.querySelector('.form-bottom').addEventListener('mouseover', () => {
  document.querySelector('.form-bottom').style.cursor = 'pointer';
});
//
$(document).ready(function(){
  $('#eye1').click(function(){
      $(this).toggleClass('open');
      $(this).children('i').toggleClass('fa-eye-slash fa-eye');
      if($(this).hasClass('open')){
          $(this).prev().attr('type', 'text');
      }else{
          $(this).prev().attr('type', 'password');
      }});
  $('#eye2').click(function(){
      $(this).toggleClass('open');
      $(this).children('i').toggleClass('fa-eye-slash fa-eye');
      if($(this).hasClass('open')){
          $(this).prev().attr('type', 'text');
      }else{
          $(this).prev().attr('type', 'password');
      }});
  $('#eye3').click(function(){
      $(this).toggleClass('open');
      $(this).children('i').toggleClass('fa-eye-slash fa-eye');
      if($(this).hasClass('open')){
          $(this).prev().attr('type', 'text');
      }else{
          $(this).prev().attr('type', 'password');
      }});
  $('#login').click(function(){
  window.location.href = "login.html";
  });
});



