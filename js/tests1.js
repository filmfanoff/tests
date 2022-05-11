const questions = [
	{
		question: "Ради чего Раскольников совершает убийство старухи-процентщицы?",
		answers: [
			"Он сходит с ума",
			"Чтобы проверить свою теорию",
			"Чтобы украсть у неё деньги и залог",
			"Из-за ненависти к ней",
		],
		correct: 2,
	},
	{
		question: "Кому Раскольников в первый раз сознался в своём преступлении?",
		answers: [
			"Своему другу Дмитрию Разумихину",
			"Он никому не рассказывал о своём преступлении",
			"Своей новой знакомой Соне Мармеладовой",
			"Своей сестре Дуне Раскольниковой",
		],
		correct: 3,
	},
	{
		question: "Почему Раскольников убивает Лизавету, сестру процентщицы?",
		answers: [
			"Он изначально планировал убить их обеих",
			"За день до содеянного, Лиза ужасно разозлила Раскольникова",
			"Он случайно убил Лизавету вместо старухи-процентщицы",
			"Лизавета становится слуйчайной свидетельницей престпления, и Раскольникову приходится её убить",
		],
		correct: 4,
	},
	{
		question: "Что в последнйи раз Родион Раскольников закладывает у старухи-процентщицы?",
		answers: [
			"Кольцо сестры",
			"Серебряные часы",
			"Деревяшку, завернутую в бумагу",
			"Золотую цепь",
		],
		correct: 3,
	},
	{
		question: '"Бедный студент, молодой, гордый, бескорыстный юноша". Чьё это описание?',
		answers: [
			"Разумихин",
			"Раскольников",
			"Зосимов",
			"Заметов",
		],
		correct: 2,
	},
	{
		question: "На каком факультете учился Раскольников?",
		answers: [
			"Юридическом",
			"Математическом",
			"Медицинском",
			"Философском",
		],
		correct: 2,
	},
	{
		question: '"Пристав следственных дел, который занимался делом об убийстве старухи-процентщицы" Чьё это описание?',
		answers: [
			"Заметов",
			"Пётр Лужин",
			"Порфирий Петрович",
			"Аркадий Свидригайлов",
		],
		correct: 2,
	},
	{
		question: '"Студент, друг Родиона. Очень неглупый молодой человек, хотя иногда простоватый." Чьё это описание?',
		answers: [
			"Заметов",
			"Зосимов",
			"Лужин",
			"Разумихин",
		],
		correct: 4,
	},
	{
		question: '"Жадный, расчетливый, подлый и мелочный человек". Чьё это описание?',
		answers: [
			"Лужин",
			"Порфирий Петрович",
			"Рарузмихин",
			"Мармеладов",
		],
		correct: 1,
	},
	{
		question: "Как умер Аркадий Свидригайлов?",
		answers: [
			"Упал под повозку с лошадью",
			"Был застрелен Дуней из револьвера",
			"Выстрелил себе в голову",
			"Умер на каторге в Сибири",
		],
		correct: 3,
	},
	{
		question: '"Азартный игрок с противоречивым характером, переступивший через несколько жизней." Чьё это описание?',
		answers: [
			"Лужин",
			"Заметов",
			"Свидригайлов",
			"Лебезятников",
		],
		correct: 3,
	},
	{
		question: "В чем Лужин обвинил Соню, явившись на поминки Мармеладова?",
		answers: [
			"В убийстве старухи-процентщицы",
			"В краже",
			"В убийстве Мармеладова",
			"В развратном поведениии",
		],
		correct: 2,
	},
	{
		question: "Кого из этих героев не постигла учесть смерти?",
		answers: [
			"Свидригайлов",
			"Дуня",
			"Мармеладов",
			"Катерина Ивановна",
		],
		correct: 2,
	},
	{
		question: "Кто уговаривает Расольникова признаться в убийстве?",
		answers: [
			"Его сестра Дуня",
			"Его мать Пульхерии Александровна",
			"Его лучший друг Разумихин",
			"Его возлюбленная Соня",
		],
		correct: 4,
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
