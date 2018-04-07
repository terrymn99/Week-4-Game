$(document).ready (function () {

    // Set global variables
    var wins = 0;
    var losses = 0;
    var firstKey = true;
    var userScore = 0;
    var targetScore = Math.floor(Math.random() * ((120-19)+1) + 19);
    var crystal1RandNum = Math.floor(Math.random() * 12)+1;
    var crystal2RandNum = Math.floor(Math.random() * 12)+1;
    var crystal3RandNum = Math.floor(Math.random() * 12)+1;
    var crystal4RandNum = Math.floor(Math.random() * 12)+1;

    // Press enter to begin game
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

        
        //Set .userScore = userScore + Crystal1RandNum (displays in total score)
    function playGame ()  {

        var newTotal1=userScore + crystal1RandNum;
            console.log (newTotal1);
        $(".crystal-1").on("click", function() {
            $(".userScore").html(userScore + crystal1RandNum); 
            
        });

        //Set .userScore = userScore + Crystal2RandNum (displays in total score)
        var newTotal2=userScore + crystal2RandNum;
            console.log (newTotal2);
        $(".crystal-2").on("click", function() {
            $(".userScore").html(userScore + crystal2RandNum); 
        });

         //Set .userScore = userScore + Crystal3RandNum (displays in total score)
         var newTotal3=userScore + crystal3RandNum;
            console.log (newTotal3);
         $(".crystal-3").on("click", function() {
            $(".userScore").html(userScore + crystal3RandNum); 
        });

         //Set .userScore = userScore + Crystal4RandNum (displays in total score)
         var newTotal4=userScore + crystal4RandNum;
            console.log (newTotal4);
         $(".crystal-4").on("click", function() {
            $(".userScore").html(userScore + crystal4RandNum); 
        });
    } //Ends playGame function


        


        //console.log (userScore + crystal1RandNum);
        //console.log (userScore + crystal2RandNum);
        //console.log (userScore + crystal3RandNum);
        //console.log (userScore + crystal4RandNum);
     
        
        

        
    
        //Add each crystal click to user score
      



        

    
    //Begin game 
    

    // Play game
    // Click on any crystal
    


    // Update userScore
    // Check to see if score matches
    // You win!
    // Adjust win total
    // Check to see if score is too high
    // You lose!
    // Adjust loss total




    }) //Ends (document).ready function