
var Player = function(name){
    this.name = name;
};

Player.prototype.picks = function(pick){
  this.pick = pick;
};

var Game = function(player1, player2){
  this.player1 = player1;
  this.player2 =player2;
  };

Game.prototype.winner = function(){
  if (this.player1.pick === "rock" && this.player2.pick === "scissors"){
    return this.player1;
  }else if(this.player1.pick === "rock" && this.player2.pick === "paper"){
    return this.player2;
  }else if(this.player1.pick === "paper" && this.player2.pick === "scissors"){
    return this.player2;
  }else if(this.player1.pick === "paper" && this.player2.pick === "rock"){
    return this.player1;
  }else if(this.player1.pick === "scissors" && this.player2.pick === "paper"){
    return this.player1;
  }else if(this.player1.pick === "scissors" && this.player2.pick === "rock"){
    return this.player2;
  }else{
    return null;

  }
};



module.exports = {
  Game: Game,
  Player: Player
};

