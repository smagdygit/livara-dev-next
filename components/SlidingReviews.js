import React, { Component } from "react";
import Review from './Review';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SlidingReviews() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		swipeToSlide: true,
	};

	const reviews = [
		{
			name: 'Gun Britt',
			stars: '⭐⭐⭐⭐',
			text: '"Redigt bra service och dom kommer alltid i tid, en gång fick jag även en chokladkaka!"',
		},
		{
			name: 'Jonas Sjöstedt',
			stars: '⭐⭐⭐⭐⭐',
			text: '"Mycket bra omtanke! Kommunism för alla! Viva la revolution!"',
		},
		{
			name: 'Dua',
			stars: '⭐⭐⭐⭐',
			text: '"Bästa jobbet på planeten! Och den där IT-Snubben är ju fantastisk på allt han gör, helt gudomligt!"',
		},
	]

	const reviewsHtml = reviews.map((item, index) => {
		return (
			<Review key={index} name={item.name} stars={item.stars} text={item.text} className="p-5" />
		);
	})

	return (
		<Slider {...settings} className="p-2 mt-5">
			{reviewsHtml}
		</Slider>
	);
}

export default SlidingReviews;
