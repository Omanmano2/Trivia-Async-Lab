import { Question } from "../Models/Question.js"
import { triviaApi } from "../Services/AxiosService.js"
import { ProxyState } from "../AppState.js"


class QuestionsService {

  async getAllQuestions() {
    let res = await triviaApi.get('')
    // console.log(res.data)
    let questions = res.data.results.map(q => new Question(q))
    console.log(questions)
    ProxyState.questions = questions
  }
}


export const questionsService = new QuestionsService()