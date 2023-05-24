const mainSection = document.querySelector('#main_section');

const addScoreNode = ` 
<div id="add_score">
<h3 class="title">Add your score</h3>
<form id="scoreForm">
    <input type="text" name="name" id="nameInput" placeholder="your name">
    <input type="number" name="score" id="scoreInput" placeholder="your score">
    <input type="submit" value="submit" id="submitButton">
</form>
</div>
`;

const addScore = () => {
  mainSection.insertAdjacentHTML('beforeend', addScoreNode);
};

export default addScore;