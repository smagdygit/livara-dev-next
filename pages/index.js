/* eslint-disable */
import { Grid, Icon, Image, Segment, Card, Divider, Button } from 'semantic-ui-react';
import Thumbnail from '@/components/Thumbnail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlidingReviews from '@/components/SlidingReviews';
import Link from 'next/link';
import useMediaQuery from 'react-responsive';
import Head from "next/head";


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
			<Head>
				<title>Livara - Hemtjänst och Assistans</title>
				<meta name="description" content="Livara är ett hemtjänsts och assistensföretag som är till för att hjälpa dig och dina nära och kära."></meta>
			</Head>

			<div style={{ backgroundImage: "url('/tree-background-darker.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
				<div className="container mt-4 pt-5 pb-3" style={{ minHeight: 'calc(100vh - 431px)' }}>
					<center>
						<h1 className="text-white pb-5" style={{ textShadow: 'black 0px 0px 2px, black 0px 0px 8px, black 0px 0px 2px' }}>
							<b>Varmt välkommen till Livara Hemtjänst!</b>
						</h1>
					</center>
					<Grid columns={2} divided padded verticalAlign='middle'>
						<Grid.Row className="m-0 pt-0">
							<Thumbnail position="top left" name="Vill du bli kund?" url="/hemtjanst/bli-kund/" alt="Bli Kund" image="url('https://images.pexels.com/photos/3733929/pexels-photo-3733929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" />
							<div style={{ width: '5%' }} />
							<Thumbnail position="center" name="Hur fungerar hemtjänst?" url="/hemtjanst/hur-fungerar-det/" alt="Hur Fungerar Det" image="url('mountain.jpg')" />
						</Grid.Row>
						<Grid.Row className="m-0 pt-0">
							<Thumbnail position="center" name="Hur jobbar vi på Livara?" url="/hemtjanst/hur-jobbar-vi/" alt="Hur Jobbar Vi" image="url('/autumn.jpg')" />
							<div style={{ width: '5%' }} />
							<Thumbnail position="center" name="Tilläggstjänster" url="/hemtjanst/tillaggstjanster/" alt="Tilläggstjänster" image="url('/bigtree.jpg')" />
						</Grid.Row>
					</Grid>
				</div>
				<br />
			</div>
			<div>
				<br />
				<div className="container mt-4" style={{ minHeight: 'calc(100vh - 431px)' }}>
					<div className="container" style={{ margin: '0', borderRadius: '10px' }}>
						<div className="mb-5">
							<h3>
								Hej
							</h3>
							<p>Vad roligt att du hittat hit. Vi på Livara Hemtjänst erbjuder omsorg av högsta kvalité i alla dess former. Livara Hemtjänst är ett omsorgsföretag som blivit godkända att utföra hemtjänst av Göteborgs stad. Vår verksamhet startade i början av 2019 och har tillfredsställt göteborgarnas behov sedan dess. Nu erbjuder vi hemtjänst i stora delar av Göteborg, däribland Hisingen, Angered och Östra Göteborg. Är du osäker på om vi utför hemtjänst i ditt område? Kontakta oss gärna så berättar vi mer!</p>
							<p>I perioder behöver vi dock stoppa inflödet av nya kunder för att kunna kvalitetssäkra vår verksamhet och bibehålla den höga kvalité våra kunder är vana vid, och samtidigt rusta upp för en ny grupp kunder att få in i verksamheten med bästa resultat. I dessa perioder finns intagningslistor att skriva upp sig på för alla nya kunder som önskar uppstart. Listorna följs sedan upp och intagningen av nya kunder görs i tur och ordning, men den som väntar på något gott, väntar aldrig för länge!</p>
							<p>Just nu har vi kapacitet att ta emot nya kunder och det går därför att göra en ansökan via formuläret under fliken ”vill du bli kund?” alternativt ringa in så får du den hjälp du önskar.</p>
							<p>Kolla gärna vidare i andra avsnitt på hemsidan för mer information om oss och våra tjänster. Detta gör du enklast genom att välja det ämne du önskar läsa mer om. Tveka inte på att kontakta oss för vidare information eller en kort pratstund.</p>
							<p>Trevlig dag,</p>
							<br />
							<p>Med kärlek och glada hälsningar</p>
							<p>Livara Hemtjänst</p>
						</div>
						<div className="mb-5">
							<Link href={'/kontakt'}>
								<a href={'/kontakt'}>
									<Button size='big' color="brown" icon labelPosition='left'>Kontakta oss på Livara Omsorg<Icon name='mail' /></Button>
								</a>
							</Link>
							<br />
							<br />
							<a href={'tel:0738350213'}>
								<Button size='big' color='green' icon labelPosition='left'>Ring 0738-350213<Icon name='phone' /></Button>
							</a>
						</div>
						<div className="mb-5">
							<h3>
								Livara på Seniorval
							</h3>
							<p>På seniorval hittar du samtliga alternativ för dig som kund inom både hemtjänst och andra tjänster, där kan du som kund jämföra dina olika alternativ.</p>
							<p>Behöver du hjälp med jämförelsen, eller undrar hur seniorval fungerar? Tveka inte på att kontakta oss eller vår samarbetspartner Seniorval för mer information, så att du kan känna dig trygg i ditt val.</p>
							<a href={'https://www.seniorval.se/hemtjanst/goteborg/livara-hemtjänst'}>
								<Button size='big' color='blue' icon labelPosition='left'>
									Besök Seniorval
									<Icon name='globe' />
								</Button>
							</a>
						</div>
						{/*<div className="mb-5">
							<h3>
								Nyheter & Blog
							</h3>
							<a href={'/nyheter/'}>Klicka här för uppdateringar kring Livara</a>
						</div>*/}
						{/*<SlidingReviews />*/}
					</div>
				</div>
			</div>
		</>
	);
}

export default Mainpage;
