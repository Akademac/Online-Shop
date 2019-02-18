window.addEventListener('load', () => {

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

//Best sell

	let best_sell_cards = document.querySelectorAll('.second_div_cards');

	let numberOfCards = 0;

	let text = '';

	fetch('https://akademac.github.io/testJSON_2/testJson_2.json')
	.then(response => {
		return response.json();
	})
	.then(data => {

		best_sell_cards.forEach(card => {

				text = `<div>
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