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

const thatCoach = new Coach("John Doe", "Jiu Jitsu Coach");
thatCoach.print();

// Fetch the name and job fields from the database upon user selection of a particular a-tag
// This is a placeholder function for database fetching
function fetchCoachData(coachId) {
  // Replace with actual database fetching logic
  return new Promise((resolve, reject) => {
    // Simulate database call with timeout
    setTimeout(() => {
      if (coachId) {
        resolve({ name: 'Jane Doe', job: 'Yoga Coach' });
      } else {
        reject('Coach not found');
      }
    }, 1000);
  });
}

// Event listener for a-tags
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', function(event) {
    event.preventDefault();
    const coachId = this.getAttribute('data-coach-id');
    fetchCoachData(coachId)
      .then(coachData => {
        const newCoach = new Coach(coachData.name, coachData.job);
        newCoach.print();
      })
      .catch(error => console.error(error));
  });
});