class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
    
    //add background color
    
    
    //add text to display result of quiz
    
    
    //call the getPlayerInfo function
   
    
    
    
    
    
    
    
    if(allConstestants!==undefined){
      fill("blue");
      textSize(20);
      text("Contestants who answerd correctly are written in green");
      for(var plr in allConstestants){
        if(correctAns===allConstestants[plr].answer){
          fill("green");
        }
        else{
          fill("red");
        }
        display_Answers+=30;
        textSize(20);
        text(allConstestants[plr].name+" : "+allConstestants[plr].answer,250,display_Answers);

      }
    }
    
  }

}
