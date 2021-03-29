/* eslint-disable */
import { Grid, Divider } from 'semantic-ui-react';
import Thumbnail from '@/components/Thumbnail';



function Assistans() {

	return (
		<>
			<center>
				<h2>
					Omsorgs Meny
				</h2>
				<Divider />
			</center>
			<Grid columns={2} divided padded verticalAlign='middle'>
				<Grid.Row className="m-0 pt-0">
					<Thumbnail name="Vill du bli kund?" url="/omsorg/bli-kund/" alt="Bli Kund" image="url('https://images.pexels.com/photos/3733929/pexels-photo-3733929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" />
					<div style={{ width: '5%' }} />
					<Thumbnail name="Hur fungerar omsorg?" url="/omsorg/hur-fungerar-det/" alt="Hur Fungerar Det" image="url('https://images.unsplash.com/photo-1495433983223-7ac06157ca62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" />
				</Grid.Row>
				<Grid.Row className="m-0 pt-0">
					<Thumbnail name="Hur jobbar vi på Livara?" url="/omsorg/hur-jobbar-vi/" alt="Hur Jobbar Vi" image="url('https://images.pexels.com/photos/3733929/pexels-photo-3733929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" />
					<div style={{ width: '5%' }} />
					<Thumbnail name="Recensioner om Livara" url="/omsorg/recensioner/" alt="Recensioner" image="url('https://images.unsplash.com/photo-1495433983223-7ac06157ca62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" />
				</Grid.Row>
			</Grid>
			<div className="container mt-5">
				<div className="mb-5">
					<h2>
						Omsorg
					</h2>
					<p>Vi har.. mycket omsorg, massa omsorgbehov, omsorg? Omsorg! Massvis med omsorg! Vill du ha omsorg? Vi ger dig omsorg! Omsorg för alla!</p>
				</div>
			</div>
		</>
	);
}

export default Assistans;
