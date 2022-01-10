


export class Question {
  constructor (data) {
    this.question = data.question
    this.category = data.category
    this.difficulty = data.difficulty
    
  }

  get Template() {
    return `
    <div class="col-md-4 p-4">
    <div class="bg-white rounded text-center">
      <p>${this.category}</p>
      <p>${this.difficulty}</p>
      <p>${this.question}</p>
    </div>
    </div>
    `
  }
}