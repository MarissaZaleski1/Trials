function play(){

    var initialBet = document.getElementById("initialBet").value;
    var Init= document.getElementById("initialBet").value;   
    var bets = [initialBet];
    var money = 0;
    var money = initialBet;
    var rolls = 0;

    if (initialBet <= 0) {
        alert("You need to bet an amount larger than $0.00!")
    }

    else {
        
        do{
            // roll them die!
                        
            rolls++;

            dice = (Math.floor(Math.random() * 6) + 1)+(Math.floor(Math.random() * 6) + 1);

            //Win
                if (dice == 7){
                money = money+4;
                var had = bets[bets.length -1];
                var has = had + 4;
                bets.push(has);
                rolls = rolls++;
                }
             
            //Lose    
                else {
                money--;
                var had = bets[bets.length -1];
                var has = had - 1;
                bets.push(has);
                rolls = rolls++;
                }  
        }
        

        //When they should have stopped playing...

        while(money>0);
        var Max = 0;
    
        Max = Math.max.apply(Math, bets); 
        numRolls = bets.indexOf(Max);

        if(numRolls<1){
            numRolls = 0;
        }
    
        document.getElementById("initial").innerHTML=(Init);
        document.getElementById("rolls").innerHTML=(rolls);
        document.getElementById("Max").innerHTML=(Max);
        document.getElementById("numRolls").innerHTML=(numRolls);

        document.getElementById("buttonChange").innerHTML="Play Again?";
    }
    } 