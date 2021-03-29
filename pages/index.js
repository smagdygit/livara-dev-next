/* eslint-disable */
import { Grid, Icon, Image, Segment, Card, Divider } from 'semantic-ui-react';
import Thumbnail from '@/components/Thumbnail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlidingReviews from '@/components/SlidingReviews';
import Link from 'next/link';
import useMediaQuery from 'react-responsive';

function Mainpage() {
	const isDesktop = useMediaQuery({
		query: '(min-device-width: 1224px)'
	});

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 100000,
		swipeToSlide: true,
	};

	return (
		<>
			<center>
				<h2>
					Välj din avdelning
					</h2>
				<Divider />
			</center>
			<Grid columns={2} divided padded verticalAlign='middle'>
				<Grid.Row className="m-0 pt-0">
					<Thumbnail name="Omsorg" url="../omsorg/" alt="Omsorg" image="url('https://images.pexels.com/photos/3733929/pexels-photo-3733929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" />
					<div style={{ width: '5%' }} />
					<Thumbnail name="Assistans" url="../assistans/" alt="Assistans" image="url('https://images.unsplash.com/photo-1495433983223-7ac06157ca62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" />
				</Grid.Row>
			</Grid>
			<br />
			<br />
			<div className="container">
				<div className="mb-5">
					<h3>
						Välkommen till oss på Livara!
				</h3>
					<p>Vi tycker att du har rätt till en fungerande vardag på dina villkor. Vårt mål är att du alltid ska känna dig trygg i ditt hem och känna att din integritet respekteras. Därför är dina önskemål och behov vår prioritering. Tillsammans skapar vi en anpassad vård för just dig.</p>
					<p>Vi har alla våra yrkesbakgrunder i att arbeta med människor och socialt arbete i olika former. Tillsammans har vi många års erfarenhet inom den offentliga sektorn och landstinget. Vi har arbetat inom vård och omsorg, socialtjänst, funktionshinder, rättspsykiatrin, barn och ungdomar i utsatthet, metodutveckling och med bemanning av personal inom olika kommunala sektorer.</p>
				</div>
				<div className="mb-5">
					<h3>
						Vill du ha mer info om vår bakgrund?
				</h3>
					<p>Då är du välkommen att maila dina frågor via vårt formulär eller ringa till vår verksamhetsansvarig.</p>
					<Link href={'/kontakt/'}>Klicka här för att komma till kontaktsidan</Link>
				</div>
				<div className="mb-5">
					<h3>
						Besök oss på Seniorval
				</h3>
					<p>Seniorval är en sökmotor där du kan se diverse hemtjänst i sverige, och självklart har vi även vår egen sida där om ni vill jämföra oss med alternativen.</p>
					<a href={'https://www.seniorval.se/hemtjanst/goteborg/livara-omsorg'}>Klicka här för att komma till seniorval</a>
				</div>
				<SlidingReviews />
			</div>
		</>
	);
}

export default Mainpage;
