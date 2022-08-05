function mmorpgGame(input) {
  let heroesQuantity = input.shift();
  let allHeroes = {};

  for (let i = 0; i < heroesQuantity; i++) {
    let heroData = input.shift();
    let [name, hp, mp] = heroData.split(" ");
    allHeroes[name] = { HP: Number(hp), MP: Number(mp) };
  }

  for (let token of input) {
    if (token === "End") {
      break;
    }
    let [command, hero, firstAction, secondAction] = token.split(" - ");

    switch (command) {
      case "CastSpell":
        let neededMP = Number(firstAction);
        let spellName = secondAction;

        if (allHeroes[hero].MP >= neededMP) {
          allHeroes[hero].MP -= neededMP;
          console.log(
            `${hero} has successfully cast ${spellName} and now has ${allHeroes[hero].MP} MP!`
          );
        } else {
          console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
        break;
      case "TakeDamage":
        let damage = Number(firstAction);
        let attacker = secondAction;
        allHeroes[hero].HP -= damage;
        if (allHeroes[hero].HP > 0) {
          console.log(
            `${hero} was hit for ${damage} HP by ${attacker} and now has ${allHeroes[hero].HP} HP left!`
          );
        } else {
          delete allHeroes[hero];
          console.log(`${hero} has been killed by ${attacker}!`);
        }
        break;
      case "Recharge":
        let rechargeAmount = Number(firstAction);
        let startMana = Number(allHeroes[hero].MP);
        let rechargedAmount = 0;
        for (let i = startMana; i < startMana + rechargeAmount; i++) {
          if (allHeroes[hero].MP >= 200) {
            break;
          }

          allHeroes[hero].MP += 1;
          rechargedAmount += 1;
        }
        console.log(`${hero} recharged for ${rechargedAmount} MP!`);
        break;
      case "Heal":
        let healAmount = Number(firstAction);
        let startHealth = Number(allHeroes[hero].HP);
        let healedAmount = 0;

        for (let i = startHealth; i < startHealth + healAmount; i++) {
          if (allHeroes[hero].HP >= 100) {
            break;
          }
          allHeroes[hero].HP += 1;
          healedAmount += 1;
        }

        console.log(`${hero} healed for ${healedAmount} HP!`);
        break;
      default:
        break;
    }
  }

  let sortedByHp = {};
  Object.keys(allHeroes)
    .sort(function (a, b) {
      let [aName, aInfo] = a;
      let [bName, bInfo] = b;

      let byHpDescending = bInfo.HP - aInfo.HP;
      if (byHpDescending === 0) {
        return aName.localeCompare(bName);
      }
    })

    .forEach(function (key) {
      sortedByHp[key] = allHeroes[key];
    });

  for (let key of Object.keys(sortedByHp)) {
    console.log(`${key}`);
    console.log(`  HP: ${sortedByHp[key].HP}`);
    console.log(`  MP: ${sortedByHp[key].MP}`);
  }
}
mmorpgGame([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log(
  `-------------------------------------------------------------------`
);
mmorpgGame([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
