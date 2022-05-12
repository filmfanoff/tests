const questions = [
	{
		question: "Начнём с простого, помните ли вы полное имя Шерлока Холмса?",
		answers: [
			"Уильям Шерлок Том Холмс",
			"Хэмиш Шерлок Скотт Холмс",
			"Уильям Шерлок Скотт Холмс",
			"Хэмиш Шерло Том Холмс",
		],
		correct: 3,
	},
	{
		question: "А имя главного злодея 1-ого и 2-ого сезона, который продолжал докучать Шерлоку?",
		answers: [
			"Джек Мариарти",
			"Майкрофт Холмс",
			"Джеймс Мариарти",
			"Эвр Холмс",
		],
		correct: 3,
	},
	{
		question: "Кем был доктор Ватсон до встречи с Шерлоком? Это оставило в нём серьёзные травмы.",
		answers: [
			"Военным врачом",
			"Следователем",
			"Военным",
			"Хирургом",
		],
		correct: 1,
	},
	{
		question: "А помните ли вы где именно служил Джон Ватсон?",
		answers: [
			"Ирак",
			"Афганистан",
			"Сирия",
			"Вьетнам",
		],
		correct: 2,
	},
	{
		question: "Как правильно называется профессия Шерлока?",
		answers: [
			"Детектив",
			"Следователь",
			"Частный детектив",
			"Детектив-консультант",
		],
		correct: 4,
	},
	{
		question: "Как звали детектива, который постоянно обращался за помощью к Шерлоку?",
		answers: [
			"Филип Андерсон",
			"Грегори Лестрейд",
			"Джон Лейстрейд",
			"Фил Андерсон",
		],
		correct: 2,
	},
	{
		question: 'Кто же всё таки оказывается убийцей в серии "Этюд в розовых тонах"?',
		answers: [
			"Официант",
			"Журналист",
			"Таксист",
			"Врач",
		],
		correct: 3,
	},
	{
		question: 'А помнители ли вы эту знаменитую фразу "<Имя героя> не говори вслух, ты понижаешь IQ всей улицы"? К кому она была обращена?',
		answers: [
			"Грег Лейстрейд",
			"Джон Ватсон",
			"Филипу Андерсону",
			"Миссис Хадсон",
		],
		correct: 3,
	},
	{
		question: "А сейчас вопрос для внимательных. Муж миссис Хадсон был...",
		answers: [
			"Киллером",
			"Шпионом",
			"Детективом",
			"Наркоторговцем",
		],
		correct: 4,
	},
	{
		question: "В чём одет Шерлок в Букингемском дворце? Это было поистине абсурдно и Майкрофт был явно недоволен поведением своего брата.",
		answers: [
			"В дорогой костюм",
			"в пижаму",
			"В костюм, подаренный братом",
			"В простынь",
		],
		correct: 4,
	},
	{
		question: "Как себя характеризует Шерлок? То, что ему приходилось повторять несколько раз явно недоходчивому Андерсону.",
		answers: [
			"Высокоактивный социопат",
			"Психопат",
			"Гений",
			"Социопат",
		],
		correct: 1,
	},
	{
		question: "Кто помог Шерлоку инсценировать свою смерть? Это было велеколепно продуманно, но что ещё можно ожидать от Шерлока Холмса?",
		answers: [
			"Джон Ватсон",
			"Молли Хупер",
			"Джим Мариарти",
			"Майкрофт Холмс",
		],
		correct: 2,
	},
	{
		question: "А помните ли вы как звали возлюбленную Джона Ватсона? Стойкая и своевольная женщина, но при этом заботливая и любящая, как можно не влюбиться?",
		answers: [
			"Ирэн Адлер",
			"Джанин Хокинс",
			"Молли Хупер",
			"Мэри Морстен",
		],
		correct: 4,
	},
	{
		question: "Какой фразой Мориарти предсказал появление Эвр Холмс?",
		answers: [
			"Грядёт Восточный ветер",
			"До встречи с моим хорошим другом",
			"Тебе конец, Шерлок",
			"Удачи, Шерлок",
		],
		correct: 1,
	},
	{
		question: "Вернёмся к самому началу, как знакомятся Шерлок и Ватсон?",
		answers: [
			"Несколько лет назад, на военной службе в Афганистане",
			"Они оба искали соседа по квартире, и познакомились через общего знакомого",
			"На одном из раскрытии дел, благодаря Грегори Лейстрейду",
			"Учились в одном университете, а потом случайно встретились в кафе",
		],
		correct: 2,
	},
	{
		question: "На каком инструменте играет Шерлок?",
		answers: [
			"На пианино",
			"На флейте",
			"На скрипке",
			"На виолончели",
		],
		correct: 3,
	},
	{
		question: "Какой пароль от телефона мисс Адлер? Это было её подарком подаренным Шерлоку.",
		answers: [
			'"SHERLOCK"',
			'"SHERHOLMS"',
			'"SHERLOCKED"',
			'"SHER"',
		],
		correct: 4,
	},
	{
		question: "Как зовут дочь Мери и Джона?",
		answers: [
			"Китти",
			"Рози",
			"Крис",
			"Элизабетт",
		],
		correct: 2,
	},
	{
		question: "А знаете ли вы кто такая Эвр Холмс?",
		answers: [
			"Родная сестра Шерлока",
			"Тётя Шерлока",
			"Двоюродная сестра Шерлока",
			"Никто, у них просто одна фамилия",
		],
		correct: 1,
	},
	{
		question: "Из-за чего, на самом деле, Эвр убила Редберда?",
		answers: [
			"Она хотела отомстить",
			"Ей хотелось иметь лучшего друга",
			"Она его ненавидела",
			"Чтобы придумать загадку для своих братьев",
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
