
class Coach {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  print() {
    const { name, job } = this;
    console.log(`${name}, ${job}`);
  }
}

const thatCoach = new Coach("John Doe", "Software Engineer");
thatCoach.print();
