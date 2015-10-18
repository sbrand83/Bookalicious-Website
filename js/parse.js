Parse.initialize("d5TlKUU3vmnVgAZH2YfpJSW2TPydiaXwTjl4s67H", "lHEiAss2Q4sbLDUZYwudl87c3lPgc71nRlXhWqd2");

window.onload = function () {

    var loginLogoutButton = document.getElementById("loginLogoutButton");
    var registerModalButton = document.getElementById("registerModalButton");
    var registerButton = document.getElementById("registerButton");
    var username = document.getElementById("logEmail");
    var password = document.getElementById("logPassword");

    loginLogoutButton.onclick = loginLogoutClick;
    registerModalButton.onclick = registerClick;

    if (Parse.User.current()) {
        console.log("Successfully logged in");
        loginLogoutButton.innerHTML = "Logout";
        registerButton.disabled = true;
        username.value = "";
        password.value = "";
        username.style.display = "none";
        password.style.display = "none";
    }

};

function loginLogoutClick() {
    console.log("login/logout button clicked");

    var buttonText = document.getElementById("loginLogoutButton");
    var regButton = document.getElementById("registerButton");
    var username = document.getElementById("logEmail");
    var password = document.getElementById("logPassword");

    console.log(buttonText.innerHTML);

    if (buttonText.innerHTML == "Login") {

        Parse.User.logIn(username.value, password.value, {
            success: function (user) {
                console.log("Successfully logged in");
                buttonText.innerHTML = "Logout";
                regButton.disabled = true;
                username.value = "";
                password.value = "";
                console.log(username.style.display);
                username.style.display = "none";
                password.style.display = "none";
            },
            error: function (user, error) {
                if(error.code == 101) {
                    alert("Error, your username and/or password is incorrect.");
                } else {
                    alert("An error has occured");   
                }
                console.log("Failed the log in");
            }
        });
    } else {
        Parse.User.logOut();
        buttonText.innerHTML = "Login";
        regButton.disabled = false;
        username.style.display = "inline-block";
        password.style.display = "inline-block";
    }
}

function registerClick() {
    console.log("register button clicked");

    var user = new Parse.User();
    
    var registerAlert = document.getElementById("registerAlert");
    
    var buttonText = document.getElementById("loginLogoutButton");
    var regButton = document.getElementById("registerButton");
    var username = document.getElementById("logEmail");
    var password = document.getElementById("logPassword");

    var regEmail = document.getElementById("regEmail").value;
    var regPassword = document.getElementById("regPassword").value;
    var regFirstName = document.getElementById("regFirstName").value;
    var regLastName = document.getElementById("regLastName").value;

    user.set("username", regEmail);
    user.set("password", regPassword);
    user.set("firstName", regFirstName);
    user.set("lastName", regLastName);
    user.set("email", regEmail);

    user.signUp(null, {
        success: function (user) {
            registerAlert.style.visibility = "visible";
            buttonText.innerHTML = "Logout";
                regButton.disabled = true;
                username.value = "";
                password.value = "";
                username.style.display = "none";
                password.style.display = "none";
        },
        error: function (user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}