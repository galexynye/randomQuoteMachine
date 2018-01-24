
var quotes = [
	["\"There is nothing noble in being superior to your fellow man: true nobility is being superior to your former self.\"", "-Earnest Hemmingway"],
	["\"I have never let my schooling interfere with my education.\"", "-Mark Twain"],
	["\"The test of a first-rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function.\"", "-F. Scott Fitzgerald"],
	["\"Love all, trust a few, do wrong to none.\"", "-Shakespeare"],
	["\"No one is useless in this world who lightens the burdens of another.\"", "-Charles Dickens"],
	["\"All that we see or seem is but a dream within a dream.\"", "-Edgar Allen Poe"],
	["\"In three words I can sum up everything I've learned about life: it goes on.\"", "-Robert Frost"],
	["\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\"", "-Ralph Waldo Emerson"],
	["\"Go confidently in the direction of your dreams. Live the life you have imagined.\"", "-Henry David Thoreau"],
	["\"The truth is rarely pure and never simple.\"", "-Oscar Wilde"],
];

var colors = ['#00BFA5','#FBC02D','#0091EA','#FF9100','#C246D8','#F44336'];

//no longer using random animations do to jarring effect but here if needed
var theAnimations = ["tada", "fadeIn", "bounce", "wobble", "shake", "flipInX"];

 

function randomQuote(){
    //no longer using random animations do to jarring effect but here if needed
    var theAnimation = Math.floor(Math.random() * theAnimations.length); 
    var quote = Math.floor(Math.random() * quotes.length);  
    var color = Math.floor(Math.random() * colors.length);
			 
	
    $("#quote").addClass("animated  flipInX");
	setTimeout(function(){$("#quote").removeClass("animated flipInX");}, 300);  
    $("#quote").html(quotes[quote][0]);
    $("#author").html(quotes[quote][1])
    $("body").css({"background-color":colors[color], "color":colors[color]});
    $(".twitter-share-button").removeAttr('href')
    $(".twitter-share-button").attr('href',  'https://twitter.com/intent/tweet?text='+ quotes[quote][0]+" "+quotes[quote][1])
}  
 

//jquery 
$( document ).ready(function() {
   randomQuote(); 
	
	$("#btn1").on("click", function(){
		  	randomQuote(); 
			});   
});
 

     