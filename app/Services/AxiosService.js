

  export const triviaApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=12',
    timeout: 3000
  })