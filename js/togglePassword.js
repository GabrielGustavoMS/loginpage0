window.onload = () => {
  const togglePasswordBtn = document.getElementById('togglePassword')
  togglePasswordBtn.addEventListener('click', function () {
    togglePassword(togglePasswordBtn)
  })
}
function togglePassword(togglePasswordBtn) {
  const passwords = document.getElementsByClassName('password')
  // toggle the type attribute

  Array.from(passwords).forEach(password => {
    const type =
      password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', type)
    console.log(type)
  })
  // toggle the icon
  togglePasswordBtn.classList.toggle('fa-eye')
  togglePasswordBtn.classList.toggle('fa-eye-slash')
}
