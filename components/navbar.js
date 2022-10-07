/* eslint-disable */
import { Grid, Icon, Divider, Button, Image } from 'semantic-ui-react';
import Link from 'next/link';
import styled from 'styled-components';
//import { useMediaQuery } from 'react-responsive';
import { useState, useCallback, useEffect } from 'react';
import React from 'react';

const StyledOverlayElement = styled.a`
	padding: 2px;
	text-decoration: none;
	font-size: 26px;
	color: #a6a6a6;
	display: block;
	transition: 0.3s;
	color: white;
	`;

const StyledOverlayElementHeader = styled.h2`
	padding: 8px;
	text-decoration: none;
	font-size: 42px;
	color: #98b6e3;
	display: block;
	transition: 0.3s;
	margin-bottom: 0;
	margin-top: 30px;
	cursor: default;
	`;

const useMediaQuery = (width) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`);
		media.addListener(updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeListener(updateTarget);
	}, []);

	return targetReached;
}

function Navbar() {
	const overlayActive = { display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.95)', overflowX: 'hidden', transition: '0.3s', position: 'fixed', zIndex: '10', left: '0', top: '0', height: '100%', width: '100%' }
	const [isOverlayActive, setIsOverlayActive] = useState(false);


	/*const isDesktop = useMediaQuery({
		query: '(min-device-width: 1224px)'
	});*/

	function openFullscreenNav() {
		setIsOverlayActive(true);
		document.documentElement.style.overflow = 'hidden';
		document.body.scroll = "no";
	}

	function closeFullscreenNav() {
		setIsOverlayActive(false);
		console.log("eee");
	}

	const MenuElement = ((props) => {
		return (
			<Link href={props.url}>
				<StyledOverlayElement href={props.url} onClick={() => closeFullscreenNav()} style={props.special !== undefined ? {fontSize: '35px', color: 'lightgreen'} : {}}>
					{props.name}
				</StyledOverlayElement>
			</Link>
		);
	});

	const menuData = [
		[
			{
				type: 'title',
				name: 'Hemtjänst',
			},
			{
				type: 'link',
				url: '/hemtjanst/bli-kund',
				name: 'Vill du bli kund?',
			},
			{
				type: 'link',
				url: '/hemtjanst/hur-fungerar-det',
				name: 'Hur fungerar hemtjänst?',
			},
			{
				type: 'link',
				url: '/hemtjanst/hur-jobbar-vi',
				name: 'Hur jobbar vi på Livara?',
			},
			{
				type: 'link',
				url: '/hemtjanst/tillaggstjanster',
				name: 'Tilläggstjänster',
			},
			{
				type: 'link',
				url: '/kontakt',
				name: 'Kontakta Oss',
				special: true,
			}
		],/*
		[
			{
				type: 'title',
				name: 'Assistans',
			},
			{
				type: 'link',
				url: '/assistans/bli-kund',
				name: 'Vill du bli kund?',
			},
			{
				type: 'link',
				url: '/assistans/hur-fungerar-det',
				name: 'Hur fungerar hemtjänst?',
			},
			{
				type: 'link',
				url: '/assistans/hur-jobbar-vi',
				name: 'Hur jobbar vi på Livara?',
			},
			{
				type: 'link',
				url: '/assistans/recensioner',
				name: 'Recensioner om Livara',
			},
		],*//*
		[
			{
				type: 'title',
				name: 'Övrigt',
			},
			{
				type: 'link',
				url: '/om-oss',
				name: 'Om Oss',
			},
			{
				type: 'link',
				url: '/kontakt',
				name: 'Kontakt',
			},
			{
				type: 'link',
				url: '/nyheter',
				name: 'Nyheter',
			},
		]*/
	];

	const menuCollection = menuData.map((item, index) => {
		const subMenu = item.map((subItem, subIndex) => {
			return (
				<React.Fragment key={'overlay-child-' + subIndex}>
					{subItem.type === 'title' &&
						<StyledOverlayElementHeader>{subItem.name}</StyledOverlayElementHeader>
					}
					{subItem.type === 'link' &&
						<>
							{subItem.special !== undefined &&
								<MenuElement url={subItem.url} name={subItem.name} special={true}/>
							}
							{subItem.special === undefined &&
								<MenuElement url={subItem.url} name={subItem.name} />
							}
						</>
					}
				</React.Fragment>
			)
		});

		return (
			<div className="overlay-split ml-auto mr-auto" key={'overlay-parent-' + index}>
				{subMenu}
			</div>
		)

	});


	const isBreakpoint = useMediaQuery(1224);

	return (
		<div>
			<div className="overlay" style={isOverlayActive ? overlayActive : {}}>
				{isOverlayActive &&
					<>
						<div onClick={() => closeFullscreenNav()} style={{ position: 'absolute', top: '10px', right: '45px', fontSize: '60px', color: 'white', cursor: 'pointer' }}>&times;</div>
						{isBreakpoint &&
							<div style={{ position: 'relative', top: '10%', width: '100%', textAlign: 'center' }}>
								{menuCollection}
							</div>
						}
						{!isBreakpoint &&
							<div style={{ position: 'relative', width: '65%', textAlign: 'center', display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: '25vh' }}>
								{menuCollection}
							</div>
						}
					</>
				}
			</div>
			<header style={{ backgroundColor: 'rgb(245, 245, 245, 0.0)' }} className=''>
				<center>
					<Grid padded centered verticalAlign='middle' style={{ maxWidth: '1100px', height: '110px' }}>
						<Grid.Row style={{ height: '100%' }} className="p-0">
							{isBreakpoint &&
								<>
									<Grid.Column width={4} className="p-3">
										<a href="tel:031-320 41 49" style={{ textDecoration: 'none', color: 'black' }}>
											<center>
												<Icon style={{ color: 'green' }} name="phone" size="big" />
												<p>Ring</p>
											</center>
										</a>
									</Grid.Column>
									<Grid.Column width={8} className="p-3">
										<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
											<a href={'/'} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
												<center>
													<h2>Livara Hemtjänst</h2>
													<p>Hemtjänst På Dina Villkor</p>
												</center>
											</a>
										</Link>
									</Grid.Column>
									<Grid.Column width={4} onClick={e => openFullscreenNav()} className="p-3">
										<center>
											<Icon name="inbox" size="big" />
											<p>Meny</p>
										</center>
									</Grid.Column>
								</>
							}
							{!isBreakpoint &&
								<>
									<Grid.Column width={2} className="m-0 p-2" style={{ cursor: 'pointer' }}>
										<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
											<a href={'/'} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
												<div>
													<Image src="/livara_logga_0.png" alt="Livara Logga" className="m-0" />
												</div>
											</a>
										</Link>
									</Grid.Column>
									<Grid.Column width={6} style={{ cursor: 'pointer' }}>
										<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
											<a href={'/'} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
												<div>
													<h1 style={{fontSize: '3em'}}>Livara Hemtjänst</h1>
													<p style={{fontSize: '1.3em'}}>Hemtjänst På Dina Villkor</p>
												</div>
											</a>
										</Link>
									</Grid.Column>
									<Grid.Column width={2}>
									</Grid.Column>
									<Grid.Column width={6} style={{ height: '100%', width: '100%', verticalAlign: 'middle', paddingRight: '0' }}>
										{/*<div className="float-right d-flex text-center justify-content-center" style={{height: '100%', width: '100%'}}>
											<Button size="big" className="align-self-center" style={{}}>Meny</Button>
										</div>*/}
										<div>
											<Button size="huge" color="brown" className="float-right" style={{ marginTop: '7%', marginLeft: '6%' }} onClick={e => openFullscreenNav()}>Meny</Button>
										</div>
										<div>
											<Link href={'/kontakt'}>
												<a href={'/kontakt'} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
													<Button icon color="blue" labelPosition="left" size="huge" className="float-right" style={{ marginTop: '7%' }} >Kontakta Oss<Icon name='mail' /></Button>
												</a>
											</Link>
										</div>
									</Grid.Column>
								</>
							}
						</Grid.Row>
					</Grid>
					{/*<Divider className="mt-0" />*/}
				</center>
			</header>
		</div>
	);
}

export default Navbar;
