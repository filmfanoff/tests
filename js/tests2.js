const questions = [
	{
		question: "Откуда приехал Огузок?",
		answers: [
			"Смоленск.",
			"Воронеж.",
			"Уфа.",
			"Новосибирск.",
		],
		correct: 2,
	},
	{
		question: "Как Макс узнал о ресторане?",
		answers: [
			"Увидел объявление о работе в газете.",
			"Случайно увидел проходя мимо и решил попытать удачу.",
			"Ему рассказал друг о свободной должности в ресторане.",
			"Дмитрий Нагиев пригласил его в ресторан на работу.",
		],
		correct: 4,
	},
	{
		question: "У кого из этих героев нету удостоверения на работу?",
		answers: [
			"Айнура.",
			"Лёва.",
			"Луи.",
			"Сеня.",
		],
		correct: 1,
	},
	{
		question: "Кто из поваров - специалист по рыбе?",
		answers: [
			"Лёва.",
			"Сеня.",
			"Луи.",
			"Федя.",
		],
		correct: 4,
	},
	{
		question: " Как зовут постановщика продуктов ресторана?",
		answers: [
			"Родион.",
			"Тимур.",
			"Ашот.",
			"Аркадий.",
		],
		correct: 2,
	},
	{
		question: "Кем оказалась Катя шефу?",
		answers: [
			"Внучкой.",
			"Дочерью.",
			"Никем.",
			"Племянницей.",
		],
		correct: 2,
	},
	{
		question: "За какой футбольный клуб болеет Шеф?",
		answers: [
			'"Спартак."',
			'"ЦСК."',
			'"Барселона."',
			'"Зенит."',
		],
		correct: 1,
	},
	{
		question: "Откуда приехал Луи?",
		answers: [
			"Париж.",
			"Саратов.",
			"Прованс.",
			"Милан.",
		],
		correct: 3,
	},
	{
		question: " Как звали племенницу Айнуры?",
		answers: [
			"Айгуль.",
			"Аиша.",
			"Гульнара.",
			"Айару.",
		],
		correct: 3,
	},
	{
		question: "Кто Арт-Директор ресторана?",
		answers: [
			"Дмитрий Нагиев.",
			"Виктор Петрович.",
			"Виктория Сергеевна.",
			"Кристина Нагиева.",
		],
		correct: 2,
	},
	{
		question: "Полное имя Шефа?",
		answers: [
			"Баранов Виктор Петрович",
			"Баранов Виктор Павлович",
			"Баринов Виктор Петрович.",
			"Баринов Виктор Павлович",
		],
		correct: 3,
	},
	{
		question: "Что поручил шеф Максиму в его первые рабочие дни?",
		answers: [
			"Почистить картошку.",
			"Отклеить наклйеки от бананов.",
			"Сделать заготовки.",
			"Закупить продуктов на рынке.",
		],
		correct: 2,
	},
	{
		question: "В каком рестроане происходили основные события в первых сезонах сериала?",
		answers: [
			"Arcobaleno.",
			"Victor.",
			"Gold cafe.",
			"Claude Monet.",
		],
		correct: 4,
	},
	{
		question: "Кто постоянно был на заднем дворе ресторана?",
		answers: [
			"Родион Сергеевич.",
			"Аркадий Петрович.",
			"Пётр Максимович.",
			"Анатолий Павлович.",
		],
		correct: 1,
	},
	{
		question: "Кто из поворов ресторана иногда ворует продукты?",
		answers: [
			"Федя.",
			"Сеня.",
			"Айнура.",
			"Макс.",
		],
		correct: 2,
	},
	{
		question: "Как зовут аквариумную рыбку шефа?",
		answers: [
			"Александр.",
			"Родион.",
			"Пётр.",
			"Аркадий.",
		],
		correct: 4,
	},
	{
		question: "Что Вика категорически не умела делать?",
		answers: [
			"Водить машину.",
			"Прибираться.",
			"Готовить.",
			"Управлять рестораном.",
		],
		correct: 2,
	},
	{
		question: "Что случилось с Родионом Сергеевичем?",
		answers: [
			"Пропал безвести.",
			"Оказалось, что он был богатым человеком.",
			"Он переехал в другой город.",
			"Утсроился в ресторан уборщиком.",
		],
		correct: 2,
	},
	{
		question: "Почему Дмитрий Нагиев продал ресторан в 3-ем сезоне сериала?",
		answers: [
			"Ему надоел ресторан.",
			"У него украли деньги, и ему пришлось продать ресторан.",
			"Проиграл ресторан когда был пьян.",
			"Он сильно поссорился с Виктором Петровичем.",
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