window.addEventListener('load', () => {

	let html_tag = document.querySelector('#html_tag').getAttribute('lang');

	console.log(html_tag);

//About us small video

	let about_us_video = document.querySelector('#about_us_video');
	let play_about_us_video = document.querySelector('.fa-play-circle');

	play_about_us_video.addEventListener('click', () => {
		about_us_video.play();
		play_about_us_video.style.display = 'none';		
	});

	about_us_video.onended = function() {
		play_about_us_video.style.display = 'block';
	};

//Main Nav Div	

	let nav_options = document.querySelectorAll('.nav_options');

	let nav_options_div = document.querySelector('#nav_hover_options');

	nav_options.forEach(opt => {
		opt.addEventListener('mouseover', () => {
			nav_options_div.style.display = 'grid';
		});
		opt.addEventListener('mouseout', () => {
			nav_options_div.style.display = 'none';
		});
	});

	nav_options_div.addEventListener('mouseover', () => {
		nav_options_div.style.display = 'grid';
		});
	nav_options_div.addEventListener('mouseout', () => {
		nav_options_div.style.display = 'none';
		}); 
	
//Banner
	
	let banner_container = document.querySelector('#banner_container');

	let banner_buttons = document.querySelectorAll('.banner_buttons');

	let banner_img = '';

	let best_sell_cards = document.querySelectorAll('.second_div_cards');

	let numberOfCards = 0;

	let text = '';

	let interval;

	let x_img = 13;

	let banner_inventory = document.querySelector('#banner_inventory');
	let banner_lighting = document.querySelector('#banner_lighting');
	let banner_stratocaster = document.querySelector('#banner_stratocaster');

	fetch('https://akademac.github.io/testJSON_2/testJson_2.json')
	.then(response => {
		return response.json();
	})
	.then(data => {

		interval = setInterval(() => {
				if(x_img === 13) {
					banner_stratocaster.style.backgroundColor = '#f9f9f9';
					banner_stratocaster.style.color = '#000';
					banner_inventory.style.backgroundColor = '#f9f9f9';
					banner_inventory.style.color = '#000';
					banner_lighting.style.backgroundColor = '#0059b3';
					banner_lighting.style.color = '#fff';
					banner_img = `<img src="${data[x_img].img}" id='main_banner' alt='Not found' />`;
					banner_container.innerHTML = banner_img;
					x_img++;	
					console.log(x_img)				
				}
				else if(x_img === 14) {
					banner_stratocaster.style.backgroundColor = '#0059b3';
					banner_stratocaster.style.color = '#fff';
					banner_lighting.style.backgroundColor = '#f9f9f9';
					banner_lighting.style.color = '#000';
					banner_inventory.style.backgroundColor = '#f9f9f9';
					banner_inventory.style.color = '#000';
					banner_img = `<img src="${data[x_img].img}" id='main_banner' alt='Not found' />`;
					banner_container.innerHTML = banner_img;
					x_img++;
					console.log(x_img);
				}
				else if(x_img > 14) {	
					x_img = 12;
					banner_stratocaster.style.backgroundColor = '#f9f9f9';
					banner_stratocaster.style.color = '#000';
					banner_lighting.style.backgroundColor = '#f9f9f9';
					banner_lighting.style.color = '#000';
					banner_inventory.style.backgroundColor = '#0059b3';
					banner_inventory.style.color = '#fff';
					banner_img = `<img src="${data[x_img].img}" id='main_banner' alt='Not found' />`;
					banner_container.innerHTML = banner_img;
					x_img++;
				}

			}, 5000);


	banner_buttons.forEach(event => {

		event.addEventListener('click', e => {
			let btn = e.target.dataset.img;
			switch(btn) {
				case '1':
					console.log('check invent...');
					banner_img = `<img src="${data[12].img}" id='main_banner' alt='Not found' />`;
					banner_container.innerHTML = banner_img;
					if(btn !== 1) {
						banner_lighting.style.backgroundColor = '#f9f9f9';
						banner_lighting.style.color = '#000';
						banner_stratocaster.style.backgroundColor = '#f9f9f9';
						banner_stratocaster.style.color = '#000';
						banner_inventory.style.backgroundColor = '#0059b3';
						banner_inventory.style.color = '#fff';						
					}
				break;
				case '2':
					console.log('check invent...');
					banner_img = `<img src="${data[13].img}" id='main_banner' alt='Not found' />`;
					banner_container.innerHTML = banner_img;
					banner_lighting.style.backgroundColor = '#0059b3';
					banner_lighting.style.color = '#fff';
					if(btn !== 2) {
						banner_inventory.style.backgroundColor = '#f9f9f9';
						banner_inventory.style.color = '#000';
						banner_stratocaster.style.backgroundColor = '#f9f9f9';
						banner_stratocaster.style.color = '#000';
					}
					else {
						banner_lighting.style.backgroundColor = '#0059b3';
						banner_lighting.style.color = '#fff';						
					}				
				break;
				case '3':
					console.log('check invent...');
					banner_img = `<img src="${data[14].img}" id='main_banner' alt='Not found' />`;
					banner_container.innerHTML = banner_img;
					banner_stratocaster.style.backgroundColor = '#0059b3';
					banner_stratocaster.style.color = '#fff';
					if(btn !== 3) {
						banner_lighting.style.backgroundColor = '#f9f9f9';
						banner_lighting.style.color = '#000';
						banner_inventory.style.backgroundColor = '#f9f9f9';
						banner_inventory.style.color = '#000';
					}
					else {
						banner_stratocaster.style.backgroundColor = '#0059b3';
						banner_stratocaster.style.color = '#fff';						
					}
				break;
			}

		});

	});

//Best sell

		best_sell_cards.forEach(card => {

				text = `<div>
						<div class='onSale'>Sale</div>
						<img src="${data[numberOfCards].img}" class='best_sell_img' alt='Not Found' />
					</div>
					<div>
						<h4>${data[numberOfCards].name}</h4>
						<p>${data[numberOfCards].description}</p>
						<span class='best_sell_stock'>${data[numberOfCards].stock} in stock</span>
						<span class='best_sell_price'>$${data[numberOfCards].price}</span>
					</div>`;


			card.innerHTML += text;
			numberOfCards++;
		});
	})

});