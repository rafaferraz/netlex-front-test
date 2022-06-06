import client from "./config";

const pathWordFrequency = "/documents/word-frequency";
const pathWordSentences = "/documents/word-sentences";
const pathTopWords = "/documents/top-words";

const Client = {
  async getWordFrequency(data) {
    try {
      const response = await client.post(pathWordFrequency, data);
      return response;
    } catch (e) {
      return e;
    }
  },
  async getWordSentences(data) {
    try {
      const response = await client.post(pathWordSentences, data);
      return response;
    } catch (e) {
      return e;
    }
  },
  async getTopWords(data) {
    try {
      const response = await client.post(pathTopWords, data);
      return response;
    } catch (e) {
      return e;
    }
  },
};

export default Client;
