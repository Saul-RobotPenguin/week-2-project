function fight() {
  let monster = prompt(
    "Give me the name of the villian that you wish to fight??"
  );
  let hero = prompt("And what's your name??");
  //huh
  let villianHealth = 50;
  let heroHealth = 50;

  while (heroHealth > 1 || villianHealth > 1) {
    if (villianHealth < 1 && heroHealth < 1) {
      alert("Its a draw");
      break;
    } else if (villianHealth <= 0) {
      alert(hero + " hwins!");
      break;
    } else if (heroHealth <= 0) {
      alert(monster + " vwins!");
      break;
    } else {
      alert("hero" + heroHealth);
      alert("villian " + villianHealth);
      heroHealth;
      villianHealth;
    }
    let heroRollDice = Math.floor(Math.random() * 20 + 1);

    if (heroRollDice === 1 || heroRollDice === 2) {
      heroHealth = heroHealth - 5;
      alert(hero + " just accidentally stabbed themselves for 5 damage");
    } else if (heroRollDice >= 3 && heroRollDice <= 10) {
      //I don't think this is neccasary but just in case
      villianHealth = villianHealth - 0;
      alert(hero + " missed their target and did 0 damage");
    } else if (heroRollDice >= 11 && heroRollDice <= 18) {
      villianHealth = villianHealth - 10;
      alert(hero + " hit " + monster + " and did 10 damage!");
    } else if (heroRollDice >= 19 && heroRollDice <= 20) {
      villianHealth = villianHealth - 20;
      alert(
        hero + " did a crtical hit and dealt 20 damage to " + monster + "!"
      );
    } else {
      alert("You did an error somewhere along the line with hero, fix it Saul");
    }

    let villianRollDice = Math.floor(Math.random() * 20 + 1);

    if (villianRollDice === 1 || villianRollDice === 2) {
      villianHealth = villianHealth - 5;
      alert(monster + " just accidentally stabbed themselves for 5 damage");
    } else if (villianRollDice >= 3 && villianRollDice <= 10) {
      //I don't think this is neccasary but just in case
      heroHealth = heroHealth - 0;
      alert(monster + " missed their target and did 0 damage");
    } else if (villianRollDice >= 11 && villianRollDice <= 18) {
      heroHealth = heroHealth - 10;
      alert(monster + " hit " + hero + " and did 10 damage!");
    } else if (villianRollDice >= 19 && villianRollDice <= 20) {
      heroHealth = heroHealth - 20;
      alert(
        monster + " did a crtical hit and dealt 20 damage to " + hero + "!"
      );
    } else {
      alert(
        "You did an error somewhere along the line with villian, fix it Saul"
      );
    }
  }
}
fight();

// Continue the battle until one of the fighters' health has been reduced to zero. When this happens,
// use string interpolation to declare the winner and loser by name.
