$('document').ready(function () {
	$("#GIFParty").hide();

	var showGIFs = function () {
		$("#GIFParty").show();
	};
// variables
	// var searchTerm = $('this').attr("userQuery");
	var userInput;
	var queryURL = 'https://crossorigin.me/http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=dc6zaTOxFJmzC';

	 $('.fixed-action-btn').openFAB();
	 $('.fixed-action-btn').closeFAB();
// functions
//launches the api call with the search term entered
var apiCall =   function(){
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=dc6zaTOxFJmzC';

		$.ajax({
			url: queryURL,
			method: 'GET',

// api call closing brackets
}
)
			.done(function(response){
			console.log("success");
			console.log(response);
      		console.log("queryUrl: " + queryURL)
			// for loop to retrieve 10 gifs
			for(i=0; i<10; i++){

				// invite GIFs to the partttyyyy
				var attendingGIFs = '<br><img class="go" src=' + response.data[i].images.fixed_height.url + '>'
				var rating = '<p class="rating">This GIF is rated: ' + response.data[i].rating + '</p>'
				var ratedGIFs = $(rating).append(attendingGIFs);
				$('#GIFParty').prepend(ratedGIFs);

			}

			
// closing brackets for .done
}
)
			.fail(function(jqXHR, textStatus, errorThrown){
			console.log("error");
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
      		console.log("queryUrl: " + queryURL)

// closing brackets for .fail
}
)
			.always(function(){
			console.log("complete");

// closing brackets for .always
}
);
};


// events
  $('input').keydown(function(e) {
  	console.log("handler for keydown called");
  	userInput = $(':input').val().trim();
   	console.log(userInput);
		
// closing bracket for if the enter key is NOT hit
// }


// else argument for if the enter key IS hit
    if(e.keyCode === 13) {
      // do whatever you want with the value
      console.log("enter key is recognized");
      e.preventDefault();
      console.log("userInput: " + userInput);;
      // ajax call
      userInput = $(':input').val().trim();
      apiCall();
      showGIFs();
     $("#searchField").html(" ");



// closing bracket for else the enter key IS hit
}


// closing brackets for input on keydown function
}
);
  	$("#doggo").on('click', function() {
  		userInput = "doggo";
  		apiCall();
  		showGIFs();
  		console.log("blue click event fired");
  	});

  	$("#insect").on('click', function() {
  		userInput = "insect";
  		apiCall();
  		showGIFs();
  		console.log("green click event fired");
  	});

  	$("#present").on('click', function() {
  		userInput = "present";
  		apiCall();
  		showGIFs();
  		console.log("yello click event fired");
  	});

  	$("#wrenches").on('click', function() {
  		userInput = "wrenches";
  		apiCall();
  		showGIFs();
  		console.log("little red click event fired");
  	});

// this doesn't work -- any help is appreciated
$(".go").on('click', function () {
		console.log("go click yes");
		$("200.gif").text("200_s.gif");
		$(".go").replaceWith(".stop");
	});

$(".stop").on('click', function () {
		console.log("stop click yes");
		$("200_s.gif").text("200.gif");
		$(".stop").replaceWith(".go");
	});



// closing brackets for document ready function
});





