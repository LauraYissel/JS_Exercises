const heroes = {
  "Iron Man": {
    realName: "Tony Stark",
    powers: ["strong", "energy"],
    team: "Avengers",
  },
  "American Captain": {
    realName: "Steven Grant",
    powers: ["super strong"],
    team: "Avengers",
  },
  "Spider Man": {
    realName: "Peter Parker",
    powers: [],
    team: "Avengers",
  },
  "Flas-h": {
    realName: "Barry Allen",
    powers: ["super speed"],
    team: "",
  },
  "Super Woman": {
    realName: "",
    powers: [],
    team: "",
  },
};

function showHeroes(aka) {
  if (aka in heroes) {
    console.log("there it is!");
    const info = heroes[aka];

    console.group(info.realName);
    console.group(info.powers);
    console.group(info.team);
  } else {
    console.log("it doesn't exist!");
  }
}

const showInfo = (akas) => {
  akas.forEach((name) => {
    showHeroes(name);
  });
};

showInfo(["Flas-h", "American Captain", "Spider Man", "Super Woman"]);
