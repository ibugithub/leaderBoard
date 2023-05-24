const mainSection = document.querySelector('#main_section');
const recentScoreNode = ` <div id="recent_score">
<div id="title_refreshButton">
    <h3 class="margin-top-unset margin-bottom-unset title">Recent scores</h3>
    <div id="refresh_button">
        <button> refresh</button>
    </div>
</div>
<ul class="padding-left-unset" id="score_table">
</ul>
</div>`;

const addingList = () => {
  const scoreTable = document.getElementById('score_table');
  const listData = [{ name: 'name', score: 200 }, { name: 'name', score: 300 }, { name: 'name', score: 200 }, { name: 'name', score: 300 }, { name: 'name', score: 300 }, { name: 'name', score: 200 }, { name: 'name', score: 300 }];
  listData.forEach((data) => {
    const list = document.createElement('li');
    list.classList.add('score_list');
    list.innerHTML = `
  <div class="name">${data.name}</div>:
  <div class="score">${data.score}</div>`;
    scoreTable.appendChild(list);
  });
};

const recentScore = () => {
  mainSection.insertAdjacentHTML('beforeend', recentScoreNode);
  addingList();
};

export default recentScore;