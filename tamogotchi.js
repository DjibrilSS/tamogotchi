const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus() {
    let mealStatus = "";
    let energyStatus = "";
    let moodStatus = "";
    if (this.meal < 3) {
      mealStatus = "Я голоден";
    } else {
      mealStatus = "Я не голоден";
    }
    if (this.energy < 3) {
      energyStatus = "Я хочу спать";
    } else {
      energyStatus = "Я не хочу спать";
    }
    if (this.mood < 3) {
      moodStatus = "Мне скучно";
    } else {
      moodStatus = "Мне весело";
    }
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      this.name = "умер :(";
    }
    console.log(
      `имя: ${this.name}, Еда: ${mealStatus} (${this.meal}), Энергия: ${energyStatus} (${this.energy}), Настроение: ${moodStatus} (${this.mood})`
    );
  },
  setName(name) {
    this.name = name;
  },
  eat() {
    if (this.meal < 5) {
      this.meal += 1;
    }
    this.mood = this.mood - 1;
  },
  sleep() {
    if (this.energy < 5) {
      this.energy += 1;
    }
    this.meal = this.meal - 1;
  },
  play() {
    if (this.mood < 5) {
      this.mood += 1;
    }
    this.energy -= 1;
  },
};
