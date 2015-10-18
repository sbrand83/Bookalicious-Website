/**
 * 
 */
Parse.initialize("d5TlKUU3vmnVgAZH2YfpJSW2TPydiaXwTjl4s67H", "lHEiAss2Q4sbLDUZYwudl87c3lPgc71nRlXhWqd2");
var bookitemList = {};

window.onload = function(){
	var logout = document.getElementById("logoutButton");
	logout.onclick = logoutClick;
	
	var search = document.getElementById("searchButton");
	search.onclick = searchBooks;
	
	var user = Parse.User.current();
	
	var profile_name = document.getElementById("name");
	profile_name.innerHTML = user.get("firstName") + " " + user.get("lastName");
	
	var profile_email = document.getElementById("username");
	profile_email.innerHTML = user.get("username");
	
	var profile_rating = document.getElementById("rating");
	profile_rating.innerHTML = "Your Rating: " + user.get("rating");
};

function logoutClick(){
	Parse.User.logOut();
}

function searchBooks(){
	console.log("search");
	var search = document.getElementById("searchfield");
	var books = Parse.Object.extend("Book");
	var query = new Parse.Query(books);
	
	var filter = document.getElementById("filter");
	query.equalTo("title", search.value);
	query.find({
	  success: function(results) {
	    //alert("Successfully retrieved " + results.length + " books.");
	    // Do something with the returned Parse.Object values
	    var list = document.getElementById("book_list");
	    for (var i = 0; i < results.length; i++) {
	      console.log("Book found");
	      var bookitem = document.createElement("button");
	      var text = document.createTextNode("Title: " + results[i].get("title") + " Subject: " + results[i].get("subject"));
	      bookitem.appendChild(text);
	      bookitem.classList.add("list-group-item");
	      bookitem.type = "button";
	      console.log("Book title: "+ results[i].get("title"));
	      console.log(results[i].id);
	      //bookitemList[results[i].get("title")] = results[i].id;  //saves title of book mapped to object
	      
	      var image = document.createElement("img");
	      image.src = results[i].get("picture");
	      
	      list.appendChild(bookitem);   
	      bookitem.onclick = bookItemClick;
	    }
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

function bookItemClick(){
	console.log("book item click");
	//console.log(bookitemList.getKeys());
	console.log("innerHTML: " +this.innerHTML);
	console.log(bookitemList[this.innerHTML]);
	var bookId = bookitemList[this.innerHTML];//should be object 
	console.log("book object: " + bookitemList[this.innerHTML]);
	//var books = Parse.Object.extend("Book");
	
	//var bookObject = Parse.Object.createWithoutData(book);
	var book = Parse.Object.extend("Book");
	book.createWithoutData(bookId);
	
	//var pointerToBook = new book();
	//pointerToBook.id = bookId;
	
	console.log(book);
	
	var infoPanel = document.getElementById("bookinfo");
	infoPanel.innerHTML = "Title: +" + book.get("title") + " <br />Subject: " + book.get("subject") +
		"<br />Seller: " + book.get("seller");
	
	
}