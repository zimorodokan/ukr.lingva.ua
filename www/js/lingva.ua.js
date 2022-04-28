'use strict';
(function (mainName = 'Lingva') {
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
							case 'lesson':
								F.fillPageLesson(Data.page.type);
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

		/** @function addEventsToLayer */
		(function () {
			var
				f,
				functionName = 'addEventsToLayer';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					layerWithShadowElements = document.querySelectorAll('.layer.with-shadow'),
					openLayerInfoElements = document.querySelectorAll('[data-open-layer="info"]'),
					closeLayerInterfaceElements = document.querySelectorAll('[data-close-layer=""]');

				if (layerWithShadowElements) {
					Array.prototype.forEach.call(layerWithShadowElements, function (element) {
						element.addEventListener('click', function (event) {
							event.stopPropagation();
							if (event.target === element) {
								element.classList.remove('open');
							}
						});
					});
				}

				if (openLayerInfoElements) {
					Array.prototype.forEach.call(openLayerInfoElements, function (element) {
						if (element.nextElementSibling) {
							element.addEventListener('click', function () {
								element.nextElementSibling.classList.add('open');
							});
						}
					});
				}

				if (closeLayerInterfaceElements) {
					Array.prototype.forEach.call(closeLayerInterfaceElements, function (element) {
						if (element.parentElement.parentElement) {
							element.addEventListener('click', function () {
								element.parentElement.parentElement.classList.remove('open');
							});
						}
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function addEventsToPageFooter */
		(function () {
			var
				f,
				functionName = 'addEventsToPageFooter';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (Elements.pageFooter) {
					Elements.pageFooterMenuSections = Elements.pageFooter.getElementsByClassName('section');
					Array.prototype.forEach.call(Elements.pageFooterMenuSections, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget;

							el.classList.toggle('open');
						});
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function addEventsToPageHeader */
		(function () {
			var
				f,
				functionName = 'addEventsToPageHeader';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageHeader) {
					Elements.pageHeaderLessonMenu = Elements.pageHeader.querySelector('.menu.lesson');
					Elements.pageHeaderSecondBlock = Elements.pageHeader.querySelector('.second');
					Elements.pageHeaderSecondBlockSwitch = Elements.pageHeader.querySelector('.first > .container > .left > .switch');
					Elements.pageHeaderShadowLayer = Elements.pageHeader.querySelector('.shadow-layer');
					Elements.pageHeaderLinksGroupsMenu = Elements.pageHeader.querySelector('.second > .container > .links-groups');
					if (Elements.pageHeaderLessonMenu) {
						Elements.pageHeaderLessonMenu.addEventListener('click', function (event) {
							var
								e = event.currentTarget;

							e.classList.toggle('open');
						});
						Elements.pageHeaderLessonMenuItems = Elements.pageHeaderLessonMenu.getElementsByClassName('item');
						Array.prototype.forEach.call(Elements.pageHeaderLessonMenuItems, function (element) {
							element.addEventListener('click', function (event) {
								var
									el = event.currentTarget;

								Elements.body.dataset.lessonPart = el.dataset.lessonPart;
								Elements.main.querySelector(`[data-lesson-part=${el.dataset.lessonPart}]`).scrollIntoView();
								window.scrollBy(0, -64);
							});
						});
					}
					if (Elements.pageHeaderSecondBlockSwitch && Elements.pageHeaderShadowLayer) {
						Elements.pageHeaderSecondBlockSwitch.addEventListener('click', function () {
							Elements.body.classList.add('page-left-menu-open');
						});
						Elements.pageHeaderShadowLayer.addEventListener('click', function () {
							Elements.body.classList.remove('page-left-menu-open');
						});
					}
					if (Elements.pageHeaderUserMenuMobileLoggedSwitch) {
						Elements.pageHeaderUserMenuMobileLoggedSwitch.addEventListener('click', function () {
							if (Elements.pageHeaderSecondBlock) {
								if (Elements.pageHeaderSecondBlock.dataset.menuOpened === 'user') {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = '';
								}
								else {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = 'user';
								}
							}
						});
					}
					if (Elements.pageHeaderUserMenuMobileUnloggedSwitch) {
						Elements.pageHeaderUserMenuMobileUnloggedSwitch.addEventListener('click', function () {
							if (Elements.pageHeaderSecondBlock) {
								if (Elements.pageHeaderSecondBlock.dataset.menuOpened === 'user') {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = '';
								}
								else {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = 'user';
								}
							}
						});
					}
					if (Elements.pageHeaderLinksGroupsMenu) {
						Elements.pageHeaderLinksGroupsMenuSectionNames = Elements.pageHeaderLinksGroupsMenu.querySelectorAll('.section-name');
						if (Elements.pageHeaderLinksGroupsMenuSectionNames) {
							Array.prototype.forEach.call(Elements.pageHeaderLinksGroupsMenuSectionNames, function (element) {
								//console.log(element);
								element.addEventListener('click', F.clickPageHeaderLinksGroupsMenuSectionName);
							});
						}
					}
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
				Elements.pageFooter = document.querySelector('body > footer');
				Elements.pageFooterFixedString = Elements.pageFooter.querySelector('.fixed-string');
				Elements.pageFooterNotification = Elements.pageFooter.querySelector('.notification');
				if (Elements.pageFooterNotification) {
					Elements.pageFooterNotificationText = Elements.pageFooterNotification.querySelector('.insert');
					Elements.pageFooterNotificationLink = Elements.pageFooterNotification.querySelector('.link');
				}
				Elements.pageHeader = document.querySelector('body > header');
				Elements.main = document.querySelector('main');
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillElementPageFooter */
		(function () {
			var
				f,
				functionName = 'fillElementPageFooter';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageFooter) {
					switch (pageType) {
						case 'courses':
							if (Elements.pageFooterFixedString) {
								Elements.pageFooterFixedStringCurrentItem = Elements.pageFooterFixedString.querySelector(`[data-${pageType}]`);
								if (Elements.pageFooterFixedStringCurrentItem) {
									Elements.pageFooterFixedStringCurrentItem.classList.add('current');
								}
							}
						break;
					}
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillElementPageHeader */
		(function () {
			var
				f,
				functionName = 'fillElementPageHeader';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageHeader) {
					Elements.pageHeaderUserMenuDesktop = Elements.pageHeader.querySelector('.first > .container > .right > .menu.user');
					Elements.pageHeaderUserMenuMobile = Elements.pageHeader.querySelector('.second > .container > .menu.user');
					if (Elements.pageHeaderShopStatus && Data.shop.status) {
						switch (Data.shop.status) {
							case 'online':
							case 'offline':
								Elements.pageHeaderShopStatus.classList.add(Data.shop.status);
							break;
						}
					}
					if (typeof Data.user === 'object' && typeof Data.user.name === 'string' && Data.user.name != '') {
						if (Elements.pageHeaderUserMenuDesktop) {
							Elements.pageHeaderUserMenuDesktopUserName = Elements.pageHeaderUserMenuDesktop.querySelector('.items > .user-name');
							Elements.pageHeaderUserMenuDesktopUserIcon = Elements.pageHeaderUserMenuDesktop.querySelector('.switch[data-user="logged"] > .icon');
							Elements.pageHeaderUserMenuDesktop.dataset.user = 'logged';
							Elements.pageHeaderUserMenuDesktopUserName.textContent = Data.user.name;
							if (Elements.pageHeaderUserMenuDesktopUserIcon) {
								if (typeof Data.user.avatar === 'string' && Data.user.avatar != '') {
									Elements.pageHeaderUserMenuDesktopUserIcon.classList.add('avatar');
									Elements.pageHeaderUserMenuDesktopUserIcon.style.backgroundImage = `url(${Data.user.avatar})`;
								}
								else {
									Elements.pageHeaderUserMenuDesktopUserIcon.classList.add('font');
								}
							}
						}
						if (Elements.pageHeaderUserMenuMobile) {
							Elements.pageHeaderUserMenuMobileLoggedSwitch = Elements.pageHeaderUserMenuMobile.querySelector('.switch[data-user="logged"]');
							Elements.pageHeaderUserMenuMobileUserName = Elements.pageHeaderUserMenuMobile.querySelector('.user-name');
							Elements.pageHeaderUserMenuMobileUserIcon = Elements.pageHeaderUserMenuMobile.querySelector('.switch[data-user="logged"] > .icon');
							Elements.pageHeaderUserMenuMobile.dataset.user = 'logged';
							if (Elements.pageHeaderUserMenuMobileUserName) {
								Elements.pageHeaderUserMenuMobileUserName.textContent = Data.user.name;
							}
							if (Elements.pageHeaderUserMenuMobileUserIcon) {
								if (typeof Data.user.avatar === 'string' && Data.user.avatar != '') {
									Elements.pageHeaderUserMenuMobileUserIcon.classList.add('avatar');
									Elements.pageHeaderUserMenuMobileUserIcon.style.backgroundImage = `url(${Data.user.avatar})`;
								}
								else {
									Elements.pageHeaderUserMenuMobileUserIcon.classList.add('font');
								}
							}
						}
					}
					else {
						Elements.pageHeaderUserMenuMobileUnloggedSwitch = Elements.pageHeaderUserMenuMobile.querySelector('.switch[data-user="not-logged"]');
						if (Elements.pageHeaderUserMenuDesktop) {
							Elements.pageHeaderUserMenuDesktop.dataset.notPresent = '';
						}
						if (Elements.pageHeaderUserMenuMobile) {
							Elements.pageHeaderUserMenuMobile.dataset.notPresent = '';
						}
					}
					if (typeof Data.page.currentPageHeaderProductGroupsMenuSection === 'string' && Data.page.currentPageHeaderProductGroupsMenuSection != '') {
						Elements.currentPageHeaderProductGroupsMenuSection = Elements.pageHeader.querySelector(`.second > .product-groups [data-group-id='${Data.page.currentPageHeaderProductGroupsMenuSection}']`);
						if (Elements.currentPageHeaderProductGroupsMenuSection) {
							Elements.currentPageHeaderProductGroupsMenuSection.classList.add('current');
						}
					}
				}
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
				F.setPageType(pageType);
				//F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				window.addEventListener('load', F.insertImage);
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
				F.setPageType(pageType);
				//F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				window.addEventListener('load', F.insertImage);
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
				F.setPageType(pageType);
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

		Modules[moduleName] = module;
	})();
	///////////////////////////////////////////////////////////////////////////////////////////////


	window.addEventListener('DOMContentLoaded', Modules.fillPage);
})();