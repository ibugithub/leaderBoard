import gameApi from './gameApi.js';

class AddScore {
  constructor() {
    this.mainSection = document.querySelector('#main_section');
    this.addScoreNode = ` 
    <div id="add_score">
    <h3 class="title">Add your score</h3>
    <form id="scoreForm">
        <input type="text" name="name" id="nameInput" placeholder="your name">
        <input type="number" name="score" id="scoreInput" placeholder="your score">
        <input type="submit" value="submit" id="submitButton">
    </form>
    </div>
    `;
  }

   handleForm = () => {
     const form = document.querySelector('#scoreForm');
     form.addEventListener('submit', (event) => {
       event.preventDefault();
       const formData = new FormData(form);
       const name = formData.get('name');
       const score = formData.get('score');
       if (name !== '' && score !== '') {
         gameApi.sendScore(name, parseInt(score, 10));
         form.reset();
       }
     });
   };

  addScore = () => {
    this.mainSection.insertAdjacentHTML('beforeend', this.addScoreNode);
    this.handleForm();
  };
}
const addingScore = new AddScore();
export default addingScore;