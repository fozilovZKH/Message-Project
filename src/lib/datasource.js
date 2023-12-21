import fs from "fs";

export class DataSource {
  #dir;
  constructor(dir) {
    this.#dir = dir;
  }

  read() {
    const jsonData = fs.readFileSync(this.#dir, {
      encoding: "utf8",
      flag: "r",
    });

    return jsonData ? JSON.parse(jsonData) : [];
  }

  write(data) {
    fs.writeFileSync(this.#dir, JSON.stringify(data, undefined, 4));
  }
}
