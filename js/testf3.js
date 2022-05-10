const questions = [
	{
		question: "А вы помните как зовут дочку губернатора, стоящую на борту корабля в начале фильма?",
		answers: [
			"Элизабет Суон",
			"Бетти Стоун",
			"Элиза Стоун",
			"Элайза Смит",
		],
		correct: 1,
	},
	{
		question: "Как думаете, как звали мальчика, дрейфующего на плату, которого подняли на борт корабля?",
		answers: [
			"Уилл Торн",
			"Уильям Тёрнс",
			"Уилл Тёрнер",
			"Вилли Тёрнет",
		],
		correct: 3,
	},
	{
		question: "Что же снимает с шеи мальчика Элизабет?",
		answers: [
			"Серебряную цепочку",
			"Мадельон",
			"Маленький омпас на цепочке",
			"Крестик",
		],
		correct: 2,
	},
	{
		question: "Как Джек Воробей настаивал себя называть?",
		answers: [
			"Капитан Джек Воробей!",
			"Сэр Джек Воробей!",
			"Господин Джек Воробей!",
			"Пират Джек Воробей!",
		],
		correct: 1,
	},
	{
		question: "Помните ли вы как звали весёлую обезьянку Барбоссы?",
		answers: [
			"Вилли",
			"Джон",
			"Уилл",
			"Джек",
		],
		correct: 4,
	},
	{
		question: "А сколько капитанов было у Чёрной жемчужины?",
		answers: [
			"Один",
			"Два",
			"Три",
			"Четыре",
		],
		correct: 2,
	},
	{
		question: "Что постоянно терял один худой пират? Эх, это повторялось из раза в раз, как же так...",
		answers: [
			"Компас",
			"Пистолет",
			"Шпагу",
			"Глаз",
		],
		correct: 4,
	},
	{
		question: "Что такое удивительное Уилл узнаёт от Джека по пути на Тортугу?",
		answers: [
			"Что Джек знал его мать",
			"Что он его сын",
			"Что отец Уилла пират",
			"Что у него есть брат",
		],
		correct: 3,
	},
	{
		question: "Как же звали возлюбленную Дэйви Джонса? Что-то необычное.., но как же точно звучало это имя?",
		answers: [
			"Калипсо",
			"Капсио",
			"Калитса",
			"Клаписта",
		],
		correct: 1,
	},
	{
		question: "А вы помните на что всегда указывает компас Джека Воробья? Кажется Калипсо рассказывала ему про это...",
		answers: [
			"На золото",
			"На то, что хочет его сердце",
			"Только на Север",
			"Он был сломан и указывал только на Юг",
		],
		correct: 2,
	},
	{
		question: "Что же оказалось в том сундуке мертвеца, за которым все так гнались?",
		answers: [
			"Компас.",
			"Ключ.",
			"Сердце.",
			"Золото.",
		],
		correct: 3,
	},
	{
		question: "Как по легенде Джек выбрался с острова? Ох, и кто только мог в это поверить...",
		answers: [
			"Добрался вплавь. Нелегко, он это по силам Капитану Джеку Воробью!",
			"Добрался на черепахах. Даже морские жители признаю капитана!",
			"Захватил чужой, приплывший к острову, корабль. Ну а что? Он же пират!",
			"Прошёл по дну океана. Удивительно!",
		],
		correct: 2,
	},
	{
		question: "Кем же на самом деле оказались все пираты на корабле Чёрная жемчужина?",
		answers: [
			"Вампирами.",
			"Морскими дьяволами.",
			"Серенами.",
			"Призраками.",
		],
		correct: 4,
	},
	{
		question: "Кто героически спас Джека Воробья от повешения?",
		answers: [
			"Элизабет Суон.",
			"Джеймс Норрингтон.",
			"Уилл Тёрнер.",
			"Джошеми Гиббс.",
		],
		correct: 3,
	},
	{
		question: "Вы досмотрели до конца? Тогда вы точно помните как заканчивается фильм!",
		answers: [
			"Джек Воробей и Уилл уплывают на Чёрной жемчужине.",
			"Джек Воробей уплывает на Чёрной жемчужине, а Элизабет и Уилл остаются вместе.",
			"Элизабет выходит замуж за Норрингтона.",
			"Элизабет и Уилл остаются вместе, а Джека Воробья сажают в тюрьму.",
		],
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
