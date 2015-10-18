/**
 * 
 */


window.onload = function(){
	var logout = document.getElementById("logoutButton");
	logout.onclick = logoutClick;
};

function logoutClick(){
	Parse.User.logOut();
}