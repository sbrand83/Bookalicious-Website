/**
 *  Description: Adds functionality to tabs
 */

window.onload = function(){
	/*var tabs = document.querySelectorAll(".nav nav-tabs a");
	console.log(tabs.length);
	for (var i = 0; i < tabs.length; i++){
		tabs[i].onclick = click;
	}*/
	$('#overview_tab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	$('#features_tab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	$('#reviews_tab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	
	
};

/*function click(){
	e.preventDefault();
	this.tab('show');
}*/