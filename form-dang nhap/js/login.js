//
let email = localStorage.getItem('email');
let password = localStorage.getItem('password');
let username = localStorage.getItem('username');
// validation form login
const inputUsernameRegister = document.querySelector("input[placeholder='Username']");
const inputEmailRegister = document.querySelector("input[placeholder='Email']");
const inputPasswordRegister = document.querySelector("input[placeholder='Password']");
const btnLoginRegister = document.querySelector("input[type='submit']");
// validation form login

btnLoginRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" || 
    inputPasswordRegister.value === "" ||
    inputEmailRegister.value === ""
    ) {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsernameRegister.value));
    if (
      user.username === inputUsernameRegister.value &&
      user.password === inputPasswordRegister.value &&
      user.email ===  inputEmailRegister.value 
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});

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
});

