'use strict';
(function (mainName = 'UkrLingva') {
	var
		Main,
		Constants,
		Data,
		Elements,
		Functions,
		Modules,
		Variables;

	Main = function (moduleName, dataForModule) {
		if (Main.Modules[moduleName]) {
			Main.Modules[moduleName](dataForModule);
		}
		else {
			console.error(mainName, 'Module', moduleName, 'not registered');
		}
	};

	Constants = Main.Constants = {
		'localStorage': false,
		'sessionStorage': false,
		'storageType': undefined,
		'cookieEnabled': false,
	};
	Data = Main.Data = {};
	Elements = Main.Elements = {};
	Functions = Main.Functions = {};
	Modules = Main.Modules = {};
	Variables = Main.Variables = {};

	if (window[mainName]) {
		console.error('Global variable', mainName, 'already exists. Please, resolve the collision.');
		return;
	}
	else {
		//console.log('Global variable', mainName, 'not exists. We will create it.');
		window[mainName] = Main;
	}

	/** @module fillPage */
	(function () {
		var
			moduleName = 'fillPage',
			E,
			F,
			module;

		module = function (dataForModule) {
			console.log(`${mainName}.${moduleName}`);
			F.processDataForModule(dataForModule);
		};

		E = module.E = {}; // Elements
		F = module.F = {}; // Functions

		/** @function processDataForModule */
		(function () {
			var
				f,
				functionName = 'processDataForModule';

			f = function (dataForModule) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Data.page) {
					if (Data.page.type) {
						switch (Data.page.type) {
							case 'courses':
								F.fillPageCourses(Data.page.type);
							break;
							case 'course':
								F.fillPageCourse(Data.page.type);
							break;
							case 'course-private':
								F.fillPageCoursePrivate(Data.page.type);
							break;
							case 'courses':
								F.fillPageCourses(Data.page.type);
							break;
							case 'courses-private':
								F.fillPageCoursesPrivate(Data.page.type);
							break;
							case 'exercise-private':
								F.fillPageExercisePrivate(Data.page.type);
							break;
							case 'game-private':
								F.fillPageGamePrivate(Data.page.type);
							break;
							case 'index':
								F.fillPageIndex(Data.page.type);
							break;
							case 'index-logged':
								F.fillPageIndex(Data.page.type);
							break;
							case 'lesson':
								F.fillPageLesson(Data.page.type);
							break;
							case 'login':
								F.fillPageLogin(Data.page.type);
							break;
							case 'registration':
								F.fillPageRegistration(Data.page.type);
							break;
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'Data.page.type undefined');
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'Data.page undefined');
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function clickPageHeaderLinksGroupsMenuSectionName */
		(function () {
			var
				f,
				functionName = 'clickPageHeaderLinksGroupsMenuSectionName';

			f = function (event) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					element = event.currentTarget,
					item = element.parentElement,
					items = item.parentElement,
					index = Array.prototype.indexOf.call(items.children, item) + 1;

				if (items.dataset.openedNodeId == index) {
					items.dataset.openedNodeId = '';
				}
				else {
					items.dataset.openedNodeId = index;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function findElements*/
		(function () {
			var
				f,
				functionName = 'findElements';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				Elements.html = document.documentElement;
				Elements.body = document.body;
				Elements.pageHeader = document.querySelector('body > header');
				Elements.main = document.querySelector('main');
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageCourse */
		(function () {
			var
				f,
				functionName = 'fillPageCourse';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
				F.addEventsToLayers();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageCoursePrivate */
		(function () {
			var
				f,
				functionName = 'fillPageCoursePrivate';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
				F.addEventsToLayers();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageCourses */
		(function () {
			var
				f,
				functionName = 'fillPageCourses';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
				F.addEventsToLayers();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageCoursesPrivate */
		(function () {
			var
				f,
				functionName = 'fillPageCoursesPrivate';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
				F.addEventsToLayers();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageExercisePrivate */
		(function () {
			var
				f,
				functionName = 'fillPageExercisePrivate';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
				F.addEventsToLayers();
				window.addEventListener('load', F.insertImage);
				Elements.changeDifficultyLevel = document.querySelector('main > .top-line > .difficult');
				Elements.answersElement = document.querySelector('main > .top-line > .answers');
				Elements.exerciseContent = document.querySelector('main > .exercise-content');

				Elements.changeDifficultyLevel.addEventListener('click', function (event) {
					event.stopPropagation();
					Elements.changeDifficultyLevel.classList.toggle('open');
				});

				Elements.answersElement.addEventListener('click', function () {
					Elements.answersElement.classList.toggle('active');
					Elements.exerciseContent.classList.toggle('answers');
				});

				if (Elements.exerciseContent.dataset.exerciseType === 'choose-right-translation') {
					Elements.language1Phrases = Elements.exerciseContent.querySelectorAll('.language-1 .number');
					Elements.language2Phrases = Elements.exerciseContent.querySelectorAll('.language-2 .number');

					Variables.connectedPhrases = {'1': '', '2': '', '3': '', '4': '', '5': '', '6': '', };
					Variables.selectedPhrase = '';
					Array.prototype.forEach.call(Elements.language1Phrases, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget,
								number = el.dataset.number;
								//console.log('number', number);

							if (Variables.connectedPhrases[number] != 'connected') {
								if ((Variables.selectedPhrase === '') || (Variables.selectedPhrase !== number)) {
									Variables.selectedPhrase = number;
									el.parentElement.parentElement.dataset.phrase = number;
									//console.log('Variables.selectedPhrase', Variables.selectedPhrase);
								}
								else {
									Variables.selectedPhrase = '';
									el.parentElement.parentElement.dataset.phrase = '';
									//console.log('Variables.selectedPhrase', Variables.selectedPhrase);
								}
							}
						});
					});
					Array.prototype.forEach.call(Elements.language2Phrases, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget,
								number = el.dataset.userNumber;
								//console.log('language2number', number);

								if (number === '') {
									if (Variables.selectedPhrase !== '') {
										if (Variables.connectedPhrases[Variables.selectedPhrase] != 'connected') {
											number = Variables.selectedPhrase;
											el.dataset.userNumber = number;
											el.textContent = number;
											el.parentElement.classList.add('connected');
											Variables.connectedPhrases[number] = 'connected';
											var
												el1 = document.querySelector(`.language-1 [data-phrase='${number}']`);
											console.log('el1', el1);
											document.querySelector(`.language-1 [data-phrase='${number}']`).classList.add('connected');
										}
									}
								}
								else {
									el.parentElement.parentElement.classList.remove('connected');
									document.querySelector(`.language-1 [data-phrase='${number}']`).classList.remove('connected');
									Variables.connectedPhrases[number] = '';
									number = '';
									el.dataset.userNumber = number;
									el.textContent = number;
								}

						});
					});
				}

				if (Elements.exerciseContent.dataset.exerciseType === 'choose-text-type' || Elements.exerciseContent.dataset.exerciseType === 'choose-text-type-alternative' || Elements.exerciseContent.dataset.exerciseType === 'choose-some-right-words') {
					Elements.textContainer = Elements.exerciseContent.querySelector('.text-container');
					Elements.itemsForChoosing = Elements.exerciseContent.querySelectorAll('.text-container > .items span');
					Array.prototype.forEach.call(Elements.itemsForChoosing, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget;

							console.log('el', el);
							console.log('Elements.textContainer.dataset.activeType', Elements.textContainer.dataset.activeType);
							el.dataset.userDataType = Elements.textContainer.dataset.activeType;
							console.log('after el', el);
						});
					});
				}

				if (Elements.exerciseContent.dataset.exerciseType === 'audio-to-phrase1') {
					Elements.inputWords = Elements.exerciseContent.querySelector('.input');
					Elements.wordsToChoose = Elements.exerciseContent.querySelectorAll('.words > .word');
					Array.prototype.forEach.call(Elements.wordsToChoose, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget,
								clone = el.cloneNode(true);

							console.log('el', el);
							el.classList.add('choosed');
							Elements.inputWords.appendChild(clone);
						});
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageGamePrivate */
		(function () {
			var
				f,
				functionName = 'fillPageGamePrivate';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
				F.addEventsToLayers();
				window.addEventListener('load', F.insertImage);

				if ((Elements.main.dataset['game-1'] == '') || (Elements.main.dataset['game-1a'] == '')) {
					Elements.answerButton = document.querySelector('main > .audio-container-with-scores > .button-container > button'),
					Elements.audio = document.querySelector('main > .audio-container-with-scores > .audio');
					Elements.stars = document.querySelector('main > .audio-container-with-scores > .scores-line-container > .stars');
					Elements.progressLine = document.querySelector('main > .audio-container-with-scores > .scores-line-container > .line > div');

					Functions.clickAudioButtonFirst = function () {
						console.log('clickAudioButtonFirst');
						var
							waitingForAnswer = function () {
								if (Variables.scores == 10) {
									window.clearInterval(Variables.interval);
									Variables.timer1 = window.setTimeout(function () {
										Elements.main.classList.remove('waiting-for-answer');
										Elements.main.classList.add('show-answers');
									}, 1);
								}
								else {
									Variables.scores += 2;
									Elements.stars.dataset.stars = Variables.scores;
								}
							};

						Variables.scores = 0;

						responsiveVoice.speak('Good sunny morning, my sweetheart.', 'UK English Female');

						Variables.timer0 = window.setTimeout(function () {
							Elements.progressLine.style.transitionDuration = '5s';
							Elements.main.classList.add('waiting-for-answer');
							Variables.interval = setInterval(waitingForAnswer, 1000);
							Elements.audio.removeEventListener('click', Functions.clickAudioButtonFirst);
							Elements.audio.addEventListener('click', Functions.clickAudioButtonNext);
						}, 2000);
					};

					if (Elements.audio) {
						Elements.audio.addEventListener('click', Functions.clickAudioButtonFirst);
					}

					if (Elements.answerButton) {
						Elements.answerButton.addEventListener('click', function () {
							console.log('Variables.interval', Variables.interval);
							window.clearInterval(Variables.interval);
							Elements.main.classList.remove('waiting-for-answer');
							Elements.main.classList.add('show-answers');
						});
					}

					Elements.badAnswers = document.querySelectorAll('[data-bad-answer]');
					Array.prototype.forEach.call(Elements.badAnswers, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget;

							el.classList.add('wrong');
							Variables.scores -= 2;
							Elements.stars.dataset.stars = Variables.scores;
						});
					});
				}

				if (Elements.main.dataset['game-1'] == '') {
					Functions.clickAudioButtonNext = function () {
						console.log('clickAudioButtonNext');
						responsiveVoice.speak('Good sunny morning, my sweetheart.', 'UK English Female');
						Variables.scores -= 2;
						Elements.stars.dataset.stars = Variables.scores;
					};
				}

				if (Elements.main.dataset['game-1a'] == '') {
					Functions.clickAudioButtonNext = function () {
						console.log('clickAudioButtonNext');
						Elements.main.classList.add('play-again');
						Variables.scores -= 2;
						Elements.stars.dataset.stars = Variables.scores;
						Variables.timer0 = window.setTimeout(function () {
							responsiveVoice.speak('Good sunny morning, my sweetheart.', 'UK English Female');
							Variables.timer1 = window.setTimeout(function () {
								Elements.main.classList.remove('play-again');
							}, 5000);
						}, 1000);
					};
				}

				if (Elements.main.dataset['game-2'] == '') {
					Variables.clicks = 0;
					Variables.cardPair = '';
					Variables.card = '';
					Elements.stars =document.querySelector('main > .stars');
					Elements.cards = document.querySelectorAll('main > .cards > .container > .card');
					Array.prototype.forEach.call(Elements.cards, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget;

							Elements.main.dataset.card = el.dataset.card;
							if ((Variables.card !== el.dataset.card) && (Variables.cardPair === el.dataset.pair)) {
								//Variables.pairs[el.dataset.pair] = 'open';
								Array.prototype.forEach.call(Elements.cards, function (element) {
									if (element.dataset.pair === Variables.cardPair) {
										element.classList.add('opened');
									}
								});
							}
							if (Variables.card !== el.dataset.card) {
								Variables.clicks += 1;
								if (Variables.clicks > 18) {
									Elements.stars.dataset.stars = '';
								}
								else if (Variables.clicks > 17) {
									Elements.stars.dataset.stars = '1';
								}
								else if (Variables.clicks > 16) {
									Elements.stars.dataset.stars = '2';
								}
								else if (Variables.clicks > 15) {
									Elements.stars.dataset.stars = '3';
								}
							}
							Variables.card = el.dataset.card;
							Variables.cardPair = el.dataset.pair;
						});
					});
				}

				if (Elements.main.dataset['game-3'] == '') {
					Elements.answerButton = document.querySelector('main > .container > .button-container > button'),
					Elements.audio = document.querySelector('main > .container > .audio-container > .audio');
					Elements.stars = document.querySelector('main > .container > .stars');
					Elements.progressLine = document.querySelector('main > .container > .time-line > div');
					Elements.text = document.querySelector('main > .container > .text-container');

					Functions.clickAudioButtonFirst = function () {
						console.log('clickAudioButtonFirst');
						var
							waitingForAnswer = function () {
								if (Variables.scores == 15) {
									window.clearInterval(Variables.interval);
									Variables.timer1 = window.setTimeout(function () {
										Elements.main.classList.remove('waiting-for-answer');
										Elements.main.classList.add('show-answers');
									}, 1);
								}
								else {
									Variables.scores += 1;
									Elements.stars.dataset.stars = Variables.scores;
								}
							};

						Variables.scores = 0;

						responsiveVoice.speak('Good sunny morning, my sweetheart.', 'UK English Female');

						Variables.timer0 = window.setTimeout(function () {
							Elements.progressLine.style.transitionDuration = '5s';
							Elements.main.classList.add('waiting-for-answer');
							Variables.interval = setInterval(waitingForAnswer, 5000/15);
							Elements.audio.removeEventListener('click', Functions.clickAudioButtonFirst);
							Elements.audio.addEventListener('click', Functions.clickAudioButtonNext);
						}, 2000);
					};

					Functions.clickAudioButtonNext = function () {
						console.log('clickAudioButtonNext');
						Elements.main.classList.add('play-again');
						Variables.scores -= 2;
						Elements.stars.dataset.stars = Variables.scores;
						Variables.timer0 = window.setTimeout(function () {
							responsiveVoice.speak('Good sunny morning, my sweetheart.', 'UK English Female');
							Variables.timer1 = window.setTimeout(function () {
								Elements.main.classList.remove('play-again');
							}, 5000);
						}, 1000);
					};

					if (Elements.audio) {
						Elements.audio.addEventListener('click', Functions.clickAudioButtonFirst);
					}

					if (Elements.answerButton) {
						Elements.answerButton.addEventListener('click', function () {
							console.log('Variables.interval', Variables.interval);
							window.clearInterval(Variables.interval);
							Elements.main.classList.remove('waiting-for-answer');
							Elements.main.classList.add('show-answers');
						});
					}

					Elements.badAnswers = document.querySelectorAll('[data-bad-answer]');
					Array.prototype.forEach.call(Elements.badAnswers, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget;

							el.classList.add('wrong');
							Variables.scores -= 1;
							Elements.stars.dataset.stars = Variables.scores;
						});
					});
				}

					Elements.goodAnswers = document.querySelectorAll('[data-good-answer]');
					Array.prototype.forEach.call(Elements.goodAnswers, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget;

							Elements.text.textContent += ` ${el.textContent}`;
							Elements.main.dataset.answers = el.dataset.next;
						});
					});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageIndex */
		(function () {
			var
				f,
				functionName = 'fillPageIndex';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageLogin */
		(function () {
			var
				f,
				functionName = 'fillPageLogin';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageRegistration */
		(function () {
			var
				f,
				functionName = 'fillPageRegistration';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.processPageHeader();
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageLesson */
		(function () {
			var
				f,
				functionName = 'fillPageLesson';

			f = function (pageType) {
				console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				/*F.setPageType(pageType);*/
				F.fillElementPageHeader();
				F.fillElementPageFooter();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				window.addEventListener('load', F.insertImage);
				Elements.mainDataActions = Elements.main.querySelectorAll('[data-action]');
				Array.prototype.forEach.call(Elements.mainDataActions, function (element) {
					element.addEventListener('click', function (event) {
						var
							el = event.currentTarget;

						switch (el.dataset.action) {
							case 'open-lesson-menu':
								Elements.pageHeaderLessonMenu.classList.toggle('open');
							break;
							default :
								Elements.body.dataset.lessonPart = el.dataset.action;
								Elements.main.querySelector(`[data-lesson-part=${el.dataset.action}]`).scrollIntoView();
								window.scrollBy(0, -64);
							break;
						}
					});
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function processPageHeader */
		(function () {
			var
				f,
				functionName = 'processPageHeader';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				Elements.userDictionaryMenuSwitch = document.querySelector('.user-dictionary-menu-switch');
				if (Elements.userDictionaryMenuSwitch) {
					Elements.userDictionaryMenuSwitch.addEventListener('click', function () {
						if (Elements.body.dataset.activeMenu === 'user-dictionary-menu') {
							Elements.body.dataset.activeMenu = '';
						}
						else {
							Elements.body.dataset.activeMenu = 'user-dictionary-menu';
						}
					});
				}
				Elements.mainMenuSwitch = document.querySelector('.main-menu-switch');
				if (Elements.mainMenuSwitch) {
					Elements.mainMenuSwitch.addEventListener('click', function () {
						if (Elements.body.dataset.activeMenu === 'main-menu') {
							Elements.body.dataset.activeMenu = '';
						}
						else {
							Elements.body.dataset.activeMenu = 'main-menu';
						}
					});
				}
				Elements.mainMenuContainer = document.querySelector('.main-menu-container');
				if (Elements.mainMenuContainer) {
					var
						sectionsHeaders = Elements.mainMenuContainer.querySelectorAll('.section-name');

					Array.prototype.forEach.call(sectionsHeaders, function (element) {
						element.addEventListener('click', function () {
							if (element.parentElement.classList.contains('active')) {
								element.parentElement.classList.remove('active')
							}
							else {
								var
									activeSection = Elements.mainMenuContainer.querySelector('.section.active');

								if (activeSection) {
									activeSection.classList.remove('active');
								}
								element.parentElement.classList.add('active');
							}
						})
					})
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function insertImage */
		(function () {
			var
				f,
				functionName = 'insertImage';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					imgSrcItems = document.querySelectorAll('.image[data-for-insert-img-src]'),
					imgUrlItems = document.querySelectorAll('.image[data-background-image-url]');

				Array.prototype.forEach.call(imgSrcItems,
					function (item) {
						item.innerHTML = `<img src="${item.dataset.forInsertImgSrc}" alt="${item.dataset.forInsertImgAlt}">`;
					}
				);
				Array.prototype.forEach.call(imgUrlItems,
					function (item) {
						item.style.backgroundImage = `url(${item.dataset.backgroundImageUrl})`;
					}
				);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function setPageType */
		(function () {
			var
				f,
				functionName = 'setPageType';

			f = function (pageType) {
				console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (pageType) {
					if (typeof pageType === 'string') {
						Elements.body.dataset.pageType = pageType;
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'typeof pageType is not string');
						return;
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'pageType not set');
					return;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function showVideo */
		(function () {
			var
				f,
				functionName = 'showVideo';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					figureVideoElements = document.querySelectorAll('figure[data-video-type="youtube"]');

				if (figureVideoElements) {
					Array.prototype.forEach.call(figureVideoElements, function (element) {
						switch (element.dataset.videoType) {
							case 'youtube':
								element.insertAdjacentHTML('beforeend',
									`<div class="container"><iframe src="https://www.youtube-nocookie.com/embed/${element.dataset.videoId}" allowfullscreen></iframe></div>`
								);
							break;
						}
						element.insertAdjacentHTML('beforeend',
							`<figcaption>${element.dataset.videoCaption}</figcaption>`
						);
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function addEventsToLayers */
		(function () {
			var
				f,
				functionName = 'addEventsToLayers';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					layerWithShadowOpenElements = document.querySelectorAll('.layer-with-shadow-open'),
					layerOpenElements = document.querySelectorAll('[data-open-layer]'),
					layerCloseElements = document.querySelectorAll('[data-close-layer]'),
					layerWithShadowCloseElements = document.querySelectorAll('.layer-container > .layer-with-shadow-close');

				Array.prototype.forEach.call(layerWithShadowOpenElements, function (element) {
					element.addEventListener('click', function (event) {
						var
							el = event.currentTarget;

						//Elements.body.classList.add('shadow');
						el.classList.add('open');
					});
				});

				Array.prototype.forEach.call(layerOpenElements, function (element) {
					element.addEventListener('click', function (event) {
						var
							el = event.currentTarget,
							index = el.dataset.openLayer,
							targetElement = document.querySelector(`[data-layer='${index}']`);

						//Elements.body.classList.add('shadow');
						targetElement.classList.add('open');
					});
				});

				Array.prototype.forEach.call(layerCloseElements, function (element) {
					element.addEventListener('click', function (event) {
						var
							el = event.currentTarget,
							index = el.dataset.closeLayer,
							targetElement = document.querySelector(`[data-layer='${index}']`);

						//Elements.body.classList.remove('shadow');
						targetElement.classList.remove('open');
					});
				});

				Array.prototype.forEach.call(layerWithShadowCloseElements, function (element) {
					element.addEventListener('click', function (event) {
						event.stopPropagation();
						if (event.target === element) {
							//Elements.body.classList.remove('shadow');
							element.parentElement.parentElement.parentElement.classList.remove('open');
						}
					});
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		Modules[moduleName] = module;
	})();
	///////////////////////////////////////////////////////////////////////////////////////////////


	window.addEventListener('DOMContentLoaded', Modules.fillPage);
})();