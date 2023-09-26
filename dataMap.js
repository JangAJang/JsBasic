class DataMap {
  #countDictionary;

  constructor() {
    this.#countDictionary = {};
  }

  addData(words) {
    words.forEach((element) => {
      if (!this.#countDictionary[element]) {
        this.#countDictionary[element] = 0;
      }

      this.#countDictionary[element]++;
    });
  }

  getDatasOrderByCountDesc() {
    return Object.keys(this.#countDictionary).sort(
      (a, b) => this.#countDictionary[b] - this.#countDictionary[a]
    );
  }
}

module.exports = DataMap;
