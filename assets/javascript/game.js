$(document).ready (function () {

    // Set variables
    var wins = 0;
    var losses = 0;
    var crystalRandNum = Math.floor(Math.random() * 12)+1;
    var userScore = 0;
    var targetScore = Math.floor(Math.random() * 119)+1;
    var firstKey = true;

    // Build Game Structure
    function buildgame() {
        $(".directionsA").text("You will be give a random number to begin the game.");
        $(".directionsB").text("There are 4 crystals below. Clicking on a crystal will add a specific amount to your total score.");
        $(".directionsC").text("You win the game by exactly matching your total score to the random number.");
        $(".directionsD").text("You lose the game if your total score goes above the random number.");
        $(".directionsE").text("The value of each crystal is hidden from you until you click on it.");
        $(".directionsF").text("Each time when the game starts, the game will change the values of each crystal.");
        $(".randomBanner").text("Random Number");
        $(".winBanner").text("Win Total");
        $(".loseBanner").text("Loss Total");
        $(".randomNumber").html(targetScore);
        $(".winTotal").html(wins);
        $(".loseTotal").html(losses);
        $(".scoreBanner").text("Your total score is:");
        $(".userScore").html(userScore);
    }
    




    // Press enter to begin game
    $("#gameTag").click(function () {
        buildgame();
    });
    //Begin game 
    



    // Build new game


    // Generate target score random number
    // Generate hidden random numbers for each crystal
    // Reset user score to 0

    // Play game
    // Click on any crystal
    // Update userScore
    // Check to see if score matches
    // You win!
    // Adjust win total
    // Check to see if score is too high
    // You lose!
    // Adjust loss total




})