
	<header>
		<div class="first">
			<div class="container">
				<div class="menu skills open" onclick="this.classList.toggle('open');">
					<div class="text">Виберіть крок</div>
					<div class="icon"></div>
					<div class="items">
						<div class="skill" data-skill='1' onclick="this.parentElement.dataset.skill = '1'; document.querySelector('body').dataset.lessonStep = '1';  document.getElementById('lessonStep1').scrollIntoView(); window.scrollBy(0, -64);" data-state="started">
							<div class="flex">
								<div class="sequence-number">1</div>
								<div class="type">
									<div class="from"><span class="icon listen"></span><span class="language">eng</span></div>
									<div class="icon right-arrow"></div>
									<div class="to"><span class="icon tap"></span><span class="language">eng</span></div>
								</div>
								<div class="result">
									<div class="done">60</div>
									<div class="from">120</div>
								</div>
							</div>
							<div class="progress"><div style="width: 50%"></div></div>
						</div>
						<div class="skill" data-skill='2' onclick="this.parentElement.dataset.skill = '2'; document.querySelector('body').dataset.lessonStep = '2';" data-state="">
							<div class="flex">
								<div class="sequence-number">2</div>
								<div class="type">
									<div class="from"><span class="icon view"></span><span class="language">ukr</span></div>
									<div class="icon right-arrow"></div>
									<div class="to"><span class="icon tap"></span><span class="language">eng</span></div>
								</div>
								<div class="result">
									<div class="done">0</div>
									<div class="from">120</div>
								</div>
							</div>
							<div class="progress"><div style="width: 0%"></div></div>
						</div>
						<div class="skill" data-skill='3' onclick="this.parentElement.dataset.skill = '3'; document.querySelector('body').dataset.lessonStep = '3';" data-state="completed">
							<div class="flex">
								<div class="sequence-number">3</div>
								<div class="type">
									<div class="from"><span class="icon view"></span><span class="language">ukr</span></div>
									<div class="icon right-arrow"></div>
									<div class="to"><span class="icon write"></span><span class="language">eng</span></div>
								</div>
								<div class="result">
									<div class="done">120</div>
									<div class="from">120</div>
								</div>
							</div>
							<div class="progress"><div style="width: 100%"></div></div>
						</div>
						<div class="skill" data-skill='4' onclick="this.parentElement.dataset.skill = '4'; document.querySelector('body').dataset.lessonStep = '4';" data-state="completed">
							<div class="flex">
								<div class="sequence-number">4</div>
								<div class="type">
									<span class="icon spinner"></span><span class="name">Повторити</span>
								</div>
								<div class="result">
									<div class="done">120</div>
									<div class="from">120</div>
								</div>
							</div>
							<div class="progress"><div style="width: 100%"></div></div>
						</div>
						<div class="skill" data-skill='5' onclick="this.parentElement.dataset.skill = '5'; document.querySelector('body').dataset.lessonStep = '5';" data-state="">
							<div class="flex">
								<div class="sequence-number">5</div>
								<div class="type">
									<span class="icon indicator"></span><span class="name">Тест</span>
								</div>
								<div class="result">
									<div class="done">0</div>
									<div class="from">120</div>
								</div>
							</div>
							<div class="progress"><div style="width: 0%"></div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="second">
		</div>
		<div class="shadow-layer"></div>
	</header>
