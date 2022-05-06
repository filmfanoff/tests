const questions = [
	{
		question: "Как звали дочь Царя из Тридевятого царства?",
		answers: [
			"Василиса Прекрасная.",
			"Василиса.",
			"Василиса Премудрая.",
			"Варенька.",
		],
		correct: 3,
	},
	{
		question: "Из какого царства прибыл Иван?",
		answers: [
			"Тридевятое.",
			"Тридесятое.",
			"Триодиннадцатое.",
			"Тривосьмое.",
		],
		correct: 2,
	},
	{
		question: "О чём мечтает Василиса?",
		answers: [
			"Выйти замуж по любви.",
			"Путешествовать по миру.",
			"Занять трон в своём царстве.",
			"Закончить обучение и посторить свою успешную карьеру.",
		],
		correct: 4,
	},
	{
		question: "Какая главная мечта Ивана?",
		answers: [
			"Стать царём.",
			"Жениться по любви.",
			"Стать пожарным.",
			"Стать рыцарем во дворце Царя.",
		],
		correct: 3,
	},
	{
		question: "Что первый минист и зловещая Тень хотят украсть у Царя?",
		answers: [
			"Ключ.",
			"Медальон.",
			"Корону.",
			"Шкатулку.",
		],
		correct: 1,
	},
	{
		question: " Кто отправляет Ивана в свободный полет прямиком в Тридевятое царство?",
		answers: [
			"Волк",
			"Свинья",
			"Коронова",
			"Козёл",
		],
		correct: 2,
	},
	{
		question: "Что пытаются внушить первый министр и Тень Царю, пугая его всю ночь?",
		answers: [
			"Отдать медальон.",
			"Отдать ключ.",
			"Отдать трон первому министру.",
			"Поскорее выдать дочь замуж.",
		],
		correct: 4,
	},
	{
		question: "За кого Царь решает выдать свою дочь замуж?",
		answers: [
			"За слугу.",
			"За первого встречного.",
			"За первого министра.",
			"За второго встречного.",
		],
		correct: 2,
	},
	{
		question: "Кто является тем самым первым встречным?",
		answers: [
			"Рыцарь.",
			"Первый министр.",
			"Слуга.",
			"Иван.",
		],
		correct: 4,
	},
	{
		question: "Что происходит с Иваном и Василисой на их собственной свадьбе?",
		answers: [
			"Иван влюбляется в Василису, а Василиса всё ещё холодна к Ивану.",
			"Василиса влюбляется в Ивана с первого вздяда, но Ивану она безразлична.",
			"Иван и Василиса оба не испытывают симпатии друг к дургу.",
			"Они влюбляются друг в друга.",
		],
		correct: 4,
	},
	{
		question: " Куда Царь отправляет Ивана?",
		answers: [
			"В другое царство на поиски золотого яблока.",
			"К Коту учёному за всезнающей книгой.",
			'Пойти "туда, не знаю куда", искать "то, не знаю что".',
			"В волщебный лес за шкатулкой к Бабе Яге.",
		],
		correct: 3,
	},
	{
		question: "Кто вызывается помочь Ивану и отправляется вместе с ним в путешествие?",
		answers: [
			"Кот учёный.",
			"Серый Волк.",
			"Первый министр.",
			"Слуга Царя.",
		],
		correct: 2,
	},
	{
		question: "Куда по совету Кота учёнога идут Иван и Серый Волк?",
		answers: [
			"В волшебный колодец.",
			"В Тридесятое царство.",
			"В закалдованный лес.",
			"К Бабе Яге.",
		],
		correct: 1,
	},
	{
		question: "Что хитростью забирают у Бабы Яги главные герои?",
		answers: [
			"Волшебные сани.",
			"Волшебные часы.",
			"Волшебный клубочек.",
			"Волшебное церкало.",
		],
		correct: 3,
	},
	{
		question: "К кому после Бабы Яги напрвляются Иван и Серый Волк?",
		answers: [
			"К Кощею Бессмертному.",
			"К Змею-Горынычу.",
			"Обратно в Тридевятое царство.",
			"К Коту учёному.",
		],
		correct: 1,
	},
	{
		question: 'Где всё таки находится это "то, не знаю что"?',
		answers: [
			"В сундуке Кощея Бессмортного.",
			"На дне волшебного колодца.",
			"В шкатулке у Бабы Яги.",
			"У Змея-Горыныча.",
		],
		correct: 4,
	},
	{
		question: "Украв у Царя желанный ключ, что находят министр и тень в его тайнике?",
		answers: [
			"Корону.",
			"Скатерть самобранку.",
			"ещё дин ключ.",
			"Шапку-неведимку.",
		],
		correct: 4,
	},
	{
		question: "Что происходит когда Тень надевает шапку-неведимку?",
		answers: [
			"Тень становиться человеком.",
			"Тень превращается в Царя.",
			"Тень становится невидимым.",
			"Тень превращается в лужу.",
		],
		correct: 1,
	},
	{
		question: "Кто помогает Ивану и Серому Волку победить Тень и спасти Тридевятое царство?",
		answers: [
			"Кощей Бессмертный.",
			"Змей-Горыныч.",
			"Кот учёный.",
			"Баба Яга.",
		],
		correct: 2,
	},
	{
		question: "Чем заканчивается мультфильм?",
		answers: [
			"Тень побеждает и захватывает Тридевятое царство.",
			"Ивана уходит из Тридевятого царства.",
			"Свадьбой Ивана и Василисы.",
			"Иван становиться Царём Тридевятого царства.",
		],
		correct: 3,
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