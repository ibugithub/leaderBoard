import gameApi from './gameApi.js';

class RecentScore {
  constructor() {
    this.mainSection = document.querySelector('#main_section');
    this.recentScoreNode = ` <div id="recent_score">
    <div id="title_refreshButton">
          <h3 class="margin-top-unset margin-bottom-unset title">Recent scores</h3>
          <div id="refresh_button">
              <button> refresh</button>
          </div>
      </div>
      <ul class="padding-left-unset" id="score_table">
      </ul>
    </div>`;
  }

  addingList = async () => {
    const scoreTable = document.querySelector('#score_table');
    const listData = (await gameApi.gettingData()).result;
    listData.forEach((data) => {
      const list = document.createElement('li');
      list.classList.add('score_list');
      list.innerHTML = `
      <div class="name">${data.user}</div>:
      <div class="score">${data.score}</div>`;
      scoreTable.appendChild(list);
    });
  };

  resetList = () => {
    const scoreList = document.querySelector('#score_table');
    scoreList.innerHTML = '';
    this.addingList();
  };

  handleRefresh = () => {
    const refreshButton = document.querySelector('#refresh_button');
    refreshButton.addEventListener('click', this.resetList);
  };

  recentScore = () => {
    this.mainSection.insertAdjacentHTML('beforeend', this.recentScoreNode);
    this.addingList();
    this.handleRefresh();
  };
}

const score = new RecentScore();
export default score;