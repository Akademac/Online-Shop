window.addEventListener('load', () => {
	let about_us_video = document.querySelector('#about_us_video');
	let play_about_us_video = document.querySelector('.fa-play-circle');

	play_about_us_video.addEventListener('click', () => {
		about_us_video.play();
		play_about_us_video.style.display = 'none';		
	});

	about_us_video.onended = function() {
		play_about_us_video.style.display = 'block';
	};

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

});