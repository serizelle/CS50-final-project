"use strict";

const footerYearEl = document.querySelector(".footer__year");
let today = new Date();
let year = today.getFullYear();
footerYearEl.textContent = year;

function valueConversion(traits) {
  let convertedValuesForSum = {
    sumFamily: 0,
    sumRomance: 0,
    sumFortune: 0,
    sumPopularity: 0,
    sumPleasure: 0,
    sumKnowledge: 0,
  };
  let keys = Object.keys(convertedValuesForSum);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    if (keys[i] == "sumFamily") {
      if (traits["neat"] >= 5) {
        convertedValuesForSum["sumFamily"]++;
      }
      if (traits["outgoing"] > 0 && traits["outgoing"] <= 5) {
        convertedValuesForSum["sumFamily"]++;
      }
      if (traits["nice"] == 5 || traits["nice"] == 4) {
        convertedValuesForSum["sumFamily"]++;
      }
    } else if (keys[i] == "sumRomance") {
      if (traits["outgoing"] >= 6) {
        convertedValuesForSum["sumRomance"]++;
      }
      if (traits["active"] >= 5) {
        convertedValuesForSum["sumRomance"]++;
      }
      if (traits["nice"] === 5) {
        convertedValuesForSum["sumRomance"]++;
      }
    } else if (keys[i] == "sumFortune") {
      if (traits["outgoing"] >= 5) {
        convertedValuesForSum["sumFortune"]++;
      }
      if (traits["active"] >= 5) {
        convertedValuesForSum["sumFortune"]++;
      }
      if (traits["playful"] > 0 && traits["playful"] <= 4) {
        convertedValuesForSum["sumFortune"]++;
      }
    } else if (keys[i] == "sumPopularity") {
      if (traits["outgoing"] >= 5) {
        convertedValuesForSum["sumPopularity"]++;
      }
      if (traits["playful"] >= 5) {
        convertedValuesForSum["sumPopularity"]++;
      }
      if (traits["nice"] >= 5) {
        convertedValuesForSum["sumPopularity"]++;
      }
    } else if (keys[i] == "sumPleasure") {
      if (traits["outgoing"] >= 8) {
        convertedValuesForSum["sumPleasure"]++;
      }
      if (traits["active"] > 0 && traits["active"] <= 4) {
        convertedValuesForSum["sumPleasure"]++;
      }
      if (traits["playful"] >= 8) {
        convertedValuesForSum["sumPleasure"]++;
      }
    } else if (keys[i] == "sumKnowledge") {
      if (traits["neat"] >= 5) {
        convertedValuesForSum["sumKnowledge"]++;
      }
      if (traits["playful"] > 0 && traits["playful"] <= 5) {
        convertedValuesForSum["sumKnowledge"]++;
      }
      if (traits["nice"] > 0 && traits["nice"] <= 2) {
        convertedValuesForSum["sumKnowledge"]++;
      }
    }
  }
  return convertedValuesForSum;
}
function calculate() {
  let neat = parseInt(document.getElementById("neat").value);
  let outgoing = parseInt(document.getElementById("outgoing").value);
  let active = parseInt(document.getElementById("active").value);
  let playful = parseInt(document.getElementById("playful").value);
  let nice = parseInt(document.getElementById("nice").value);
  const traits = {
    neat: neat,
    outgoing: outgoing,
    active: active,
    playful: playful,
    nice: nice,
  };
  const convertedValuesForSum = valueConversion(traits);
  const environment = parseInt(document.getElementById("environment").value);
  const food = parseInt(document.getElementById("food").value);
  const weather = parseInt(document.getElementById("weather").value);
  const culture = parseInt(document.getElementById("culture").value);
  const money = parseInt(document.getElementById("money").value);
  const politics = parseInt(document.getElementById("poilitics").value);
  const paranormal = parseInt(document.getElementById("paranormal").value);
  const health = parseInt(document.getElementById("health").value);
  const fashion = parseInt(document.getElementById("fashion").value);
  const travel = parseInt(document.getElementById("travel").value);
  const crime = parseInt(document.getElementById("crime").value);
  const sports = parseInt(document.getElementById("sports").value);
  const entertainment = parseInt(
    document.getElementById("entertainment").value
  );
  const animals = parseInt(document.getElementById("animals").value);
  const work = parseInt(document.getElementById("work").value);
  const school = parseInt(document.getElementById("school").value);
  const toys = parseInt(document.getElementById("toys").value);
  const scifi = parseInt(document.getElementById("scifi").value);

  //family counting
  let sumFamily =
    environment + animals + toys + convertedValuesForSum["sumFamily"];

  console.log(sumFamily);

  //romance counting
  // let sumRomance = active + outgoing + nice + culture + health + fashion;

  let sumRomance =
    culture + health + fashion + convertedValuesForSum["sumRomance"];

  console.log(sumRomance);

  //fortune counting
  // let sumFortune = active + outgoing + playful + money + crime + work;

  let sumFortune = money + crime + work + convertedValuesForSum["sumFortune"];

  console.log(sumFortune);

  //popularity counting
  // let sumPopularity = playful + outgoing + nice + weather + politics + sports;

  let sumPopularity =
    weather + politics + sports + convertedValuesForSum["sumPopularity"];

  console.log(sumPopularity);

  //pleasure counting
  // let sumPleasure = active + outgoing + playful + travel + entertainment + food;

  let sumPleasure =
    travel + entertainment + food + convertedValuesForSum["sumPleasure"];

  console.log(sumPleasure);

  //knowledge counting
  // let sumKnowledge = neat + playful + nice + paranormal + school + scifi;

  let sumKnowledge =
    paranormal + school + scifi + convertedValuesForSum["sumKnowledge"];

  console.log(sumKnowledge);

  // popups
  const popupFamily = document.getElementById("popup_family");
  const popupRomance = document.getElementById("popup_romance");
  const popupFortune = document.getElementById("popup_fortune");
  const popupPopularity = document.getElementById("popup_popularity");
  const popupPleasure = document.getElementById("popup_pleasure");
  const popupKnowledge = document.getElementById("popup_knowledge");
  const popupWrong = document.getElementById("popup_wrong");

  //checking if all zeros than give Wrong popup and show random if aspiration values are equel
  const aspirations = {
    sumFamily: sumFamily,
    sumRomance: sumRomance,
    sumFortune: sumFortune,
    sumPopularity: sumPopularity,
    sumPleasure: sumPleasure,
    sumKnowledge: sumKnowledge,
  };

  let keys = Object.keys(aspirations);
  let values = Object.values(aspirations);
  let duplicates = [];
  const highestValue = Math.max(...values);
  let choice;

  for (let i = 0; i < keys.length; i++) {
    if (aspirations[keys[i]] == highestValue) {
      duplicates.push(keys[i]);
    }
  }
  if (duplicates.length > 1) {
    choice = duplicates[Math.floor(Math.random() * duplicates.length)];
  } else {
    choice = duplicates[0];
  }
  const allZero = (values) => values.every((value) => value === 0);
  if (allZero(values)) {
    popupWrong.classList.remove("hidden_wrong");
  } else if (choice == "sumFamily") {
    popupFamily.classList.remove("hidden_family");
  } else if (choice == "sumRomance") {
    popupRomance.classList.remove("hidden_romance");
  } else if (choice == "sumFortune") {
    popupFortune.classList.remove("hidden_fortune");
  } else if (choice == "sumPopularity") {
    popupPopularity.classList.remove("hidden_popularity");
  } else if (choice == "sumPleasure") {
    popupPleasure.classList.remove("hidden_pleasure");
  } else if (choice == "sumKnowledge") {
    popupKnowledge.classList.remove("hidden_knowledge");
  }
}
