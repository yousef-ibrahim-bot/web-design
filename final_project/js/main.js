let searchInput = document.querySelector(".search-box input");
let searchBox = document.querySelector(".search-box");

if (searchInput && searchBox) {
  searchInput.addEventListener("focus", function () {
    searchBox.classList.add("active");
  });

  searchInput.addEventListener("blur", function () {
    searchBox.classList.remove("active");
  });
}

let accountBtn = document.getElementById("accountBtn");
let accountMenu = document.getElementById("accountMenu");

if (accountBtn && accountMenu) {
  //open account
  accountBtn.addEventListener("click", function (e) {
    accountMenu.classList.toggle("active");
  });
  //close account
  document.addEventListener("click", function (e) {
    if (!accountBtn.contains(e.target) && !accountMenu.contains(e.target)) {
      accountMenu.classList.remove("active");
    }
  });
}
// move to login page
let signInBtn = document.getElementById("signInBtn");
if (signInBtn) {
  signInBtn.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

let loginForm = document.getElementById("loginForm");

if (loginForm) {
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let errorMessage = document.getElementById("errorMessage");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();
    if (!emailRegex.test(emailValue)) {
      errorMessage.innerHTML = "Invalid email format";
      errorMessage.style.color = "red";
      return;
    }

    if (!passwordRegex.test(passwordValue)) {
      errorMessage.innerHTML =
        "Password must contain 8 characters, uppercase, lowercase and number";
      errorMessage.style.color = "red";
      return;
    }
    // when login success move to main index
    errorMessage.innerHTML = "Login Successful";
    errorMessage.style.color = "green";
    setTimeout(function () {
      window.location.href = "index.html";
    }, 1000);
  });
  // eye in pass input
  let togglePassword = document.getElementById("togglePassword");
  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
      }
    });
  }
}
//create account
let createAccountBtn = document.getElementById("createAccountBtn");
if (createAccountBtn) {
  createAccountBtn.addEventListener("click", function () {
    //move to register page
    window.location.href = "register.html";
  });
}

let registerForm = document.getElementById("registerForm");

if (registerForm) {
  let fullName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let terms = document.getElementById("terms");
  let message = document.getElementById("registerMessage");


  let nameRegex = /^[A-Za-z\u0600-\u06FF ]{3,}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    message.innerHTML = "";
    let nameValue = fullName.value.trim();
    if (nameValue === "") {
      message.innerHTML = "Please enter your full name";
      message.style.color = "red";
      fullName.focus();
      return;
    }

    if (!nameRegex.test(nameValue)) {
      message.innerHTML =
        "Name must contain only letters and be at least 3 characters";
      message.style.color = "red";
      fullName.focus();
      return;
    }


    let emailValue = email.value.trim();

    if (emailValue === "") {
      message.innerHTML = "Please enter your email";

      message.style.color = "red";

      email.focus();

      return;
    }

    if (!emailRegex.test(emailValue)) {
      message.innerHTML = "Please enter a valid email";
      message.style.color = "red";
      email.focus();
      return;
    }


    if (password.value.trim() === "") {
      message.innerHTML = "Please enter password";
      message.style.color = "red";
      password.focus();
      return;
    }

    if (!passwordRegex.test(password.value)) {
      message.innerHTML =
        "Password must contain at least 8 characters, uppercase, lowercase and number";
      message.style.color = "red";
      password.focus();
      return;
    }


    if (confirmPassword.value !== password.value) {
      message.innerHTML = "Passwords do not match";
      message.style.color = "red";
      confirmPassword.focus();
      return;
    }


    if (!terms.checked) {
      message.innerHTML = "Please accept Terms of Service";

      message.style.color = "red";

      return;
    }


    message.innerHTML = "Account created successfully";

    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
}
