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
});