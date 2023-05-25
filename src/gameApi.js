class SendAndReciveData {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MqVkhpWOIm3Y1TpwQjZV/scores';
  }

    gettingData = async () => {
      const response = await fetch(this.url);
      const jsonData = await response.json();
      return jsonData;
    }

    sendScore = async (name, userScore) => {
      const data = { user: name, score: userScore };
      await fetch(this.url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
    };
}

const gameApi = new SendAndReciveData();
export default gameApi;