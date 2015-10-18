/**
 *  Description: Adds functionality to tabs
 */

window.onload = function(){
	/*var tabs = document.querySelectorAll(".nav nav-tabs a");
	console.log(tabs.length);
	for (var i = 0; i < tabs.length; i++){
		tabs[i].onclick = click;
	}*/
	$('#textbooks_tab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	$('#messages_tab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	$('#postBooks_tab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	$('#profile_tab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	
};

/*function click(){
	e.preventDefault();
	this.tab('show');
}*/