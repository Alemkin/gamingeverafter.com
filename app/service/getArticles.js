import { register } from 'async-ops'
import { defaultOptions, throwExceptionErrors, deserializeJsonResponse } from '../utils/fetch'
import { GET_ARTICLES } from '../constants/serviceTypes'
import { BASE_API_URL } from '../constants/url'

export const service = async () => {
  const url = BASE_API_URL + '/articles'
  const options = {
    ...defaultOptions,
    method: 'GET'
  }
  const response = await window.fetch(url, options)
  const articles = await deserializeJsonResponse(response)
  throwExceptionErrors(articles)
  return articles
}

const getArticles = () => {
  const articles = []
  for (let i = 0; i < 20; i++) {
    articles.push({
      title: 'hello',
      text: 'this is the preview for an article. it is a good preview. yes. love you. anyways, how are you doing? oh, you do not want to talk? fine. I get it.',
      fileName: 'massgetrekt'
    })
  }
  return articles
}

const mock = request => Promise.resolve(getArticles())

register(GET_ARTICLES, service, mock)
