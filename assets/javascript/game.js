$(document).ready (function () {

    // Set global variables
    var wins = 0;
    var losses = 0;
    var firstKey = true;
    var userScore = 0;
    var Total1=0;
    var Total2=0;
    var Total3=0;
    var Total4=0;
    var targetScore = Math.floor(Math.random() * ((120-19)+1) + 19);
    var crystal1RandNum = Math.floor(Math.random() * 12)+1;
    var crystal2RandNum = Math.floor(Math.random() * 12)+1;
    var crystal3RandNum = Math.floor(Math.random() * 12)+1;
    var crystal4RandNum = Math.floor(Math.random() * 12)+1;
    

    // Click here to begin game
    $("#gameTag").click(function () {
        buildGame();
        });

        playGame ();

    // Build/Initialize game
    function buildGame() {
        
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
    } //Ends buildGame function

        
        
    function playGame ()  {

        //$(".crystal-1, .crystal-2, .crystal-3, .crystal-4").on("click", function() {
           //Total1=userScore+crystal1RandNum;
            //if (Total1 < targetScore) {
               // playgame ();
            //}
           // else {
               //if (Total1 === targetScore) {
                   //alert ("You Won!!");
                   // buildGame ();
               // }
            //}
        
        //});

        //Get value for crystal 1
        $(".crystal-1").on("click", function() {
               Total1=userScore + crystal1RandNum;
               $(".totalScore").html(Total1+Total2+Total3+Total4);
                console.log (Total1+Total2+Total3+Total4); 
        });

        //Get value for crystal 2
        $(".crystal-2").on("click", function() {
                Total2=userScore + crystal2RandNum;
                $(".totalScore").html(Total1+Total2+Total3+Total4);
                console.log (Total2);
        });

         //Get value for crystal 3
        $(".crystal-3").on("click", function() {
                Total3=userScore + crystal3RandNum;
               $(".totalScore").html(Total1+Total2+Total3+Total4);
                console.log (Total3);
        });

         //Get value for crystal 4
        $(".crystal-4").on("click", function() {
                Total4=userScore + crystal4RandNum;
                $(".totalScore").html(Total1+Total2+Total3+Total4);
                console.log (Total4);
        });
    } //Ends playGame function



    // Update userScore
    // Check to see if score matches
    // You win!
    // Adjust win total
    // Check to see if score is too high
    // You lose!
    // Adjust loss total




     }); //Ends (document).ready function