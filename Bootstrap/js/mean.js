var team1;
var team2;
var showName1;
var showScore1 = document.getElementById( 'showScoreTeam1' );
var showName2  ;
var showScore2= document.getElementById( 'showScoreTeam2' );
var score1 = 0 ;
var score2 = 0 ;
function teamName(){
	team1  =  prompt( "Team One 1:" );
	team2  =  prompt( "Team Two 2:" );
	
	showName1 = document.getElementById( 'showNameTeam1' );
	showName2 = document.getElementById( 'showNameTeam2' );
	showName1.innerHTML = team1;
	showName2.innerHTML = team2;


}

function add1(  ){

		score1++; 
		showScore1.innerHTML = score1;
		return score1;
	
	
}
function sub1(  ){

		score1--; 
		showScore1.innerHTML = score1;
		return score1;
	
	
}
function add2(  ){

		score2++; 
		showScore2.innerHTML = score2;
		return score2;
	
}
function sub2(  ){

		score2--; 
		showScore2.innerHTML = score2;
		return score2;
	

}

function endGame(  ){

var confirm1 = confirm( "Do You Want To End The Game?" );

//if ( confirm1  = true ){
document.getElementById( 'finalResult' ). innerHTML = "Teams " + team1+ ' : '+score1+'.  -   '+ team2 +' : '+ score2+ '.';

//alert( "Score 2: "+ score2 )
//}
}