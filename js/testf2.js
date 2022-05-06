const questions = [
	{
		question: "Вопрос 1",
		answers: ["1", "2", "3", "Правильный"],
		correct: 4,
	},
	{
		question: "Вопрос 2",
		answers: [
			"1",
			"Правильный",
			"3",
			"4",
		],
		correct: 2,
	},
	{
		question: "Вопрос 3",
		answers: [
			"Правильный",
			"2",
			"3",
			"4",
		],
		correct: 1,
	},
	{
		question: "Вопрос 4",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 5",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 6",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 7",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 8",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 9",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 10",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 11",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 12",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 13",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 14",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
	{
		question: "Вопрос 15",
		answers: ["1", "Правильный", "3", "4"],
		correct: 2,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

headerContainer.innerHTML = '';
listContainer.innerHTML = '';

clearPage()
showQuestion()
submitBtn.onclick = checkAnswer;

function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion(){
	console.log('showQuestion');
	
	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;
	
	let answerNumber = 1;
	for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
		
		const questionTemplate = 
			`<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>`;

			const answerHTML = questionTemplate
									.replace('%answer%', answerText)
									.replace('%number%', answerNumber);
			
			listContainer.innerHTML += answerHTML;
			answerNumber++;
	}
}

function checkAnswer(){
	console.log('checkAnswer started!');
	
	const checkedRadio = listContainer.querySelector('input:checked')
	
	if (!checkedRadio){
		submitBtn.blur();
		return
	}
	
	const userAnswer = parseInt(checkedRadio.value)

	if (userAnswer === questions[questionIndex]['correct']) {
		score++;
	}
	console.log('score = ', score);
	
	if (questionIndex !== questions.length - 1){
		console.log('Это НЕ последний вопрос');
		questionIndex++;
		clearPage();
		showQuestion();
		return;
	} else {
		console.log('Это последний вопрос');
		clearPage();
		showResults();
		
	}
}

function showResults() {
	console.log('showResults started!');
	console.log(score);
	
	const resultsTemplate = `
			<h2 class="title">%title%</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
		`;
		
	let title, message;
	
	if (score === questions.length) {
		title = 'Поздравляем!';
		message = 'Вы ответили верно на все вопросы!';
	} else if ((score * 100)/questions.length >= 50) {
		title = 'Неплохой результат!';
		message = 'Вы дали более половины правильных ответов.';
	} else {
		title = 'Возможно стоит пересмотреть этот фильм.';
		message = 'Пока у вас меньше половины правильных ответов.';
	}
	
	let result = `${score} из ${questions.length}`;
	
	const finalMessage = resultsTemplate
							.replace('%title%', title)
							.replace('%message%', message)
							.replace('%result%', result)
							
	headerContainer.innerHTML = finalMessage;
	
	submitBtn.blur();
	submitBtn.innerText = 'Начать заново';
	submitBtn.onclick = () => history.go();
	
}