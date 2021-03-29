/* eslint-disable */
import { Form, Button, TextArea, Divider } from 'semantic-ui-react';



function Kontakt() {

	return (
		<div>
			<center>
				<h2>
					Kontakt
				</h2>
			</center>
			<Divider />
			<br />
			<h3>Kontaktinformation</h3>
			<p>Telefonnummer: <a href="tel:072123456">072123456</a></p>
			<p>Mejl: <a href="mailto:something@livara.se">something@livara.se</a></p>
			<br />
			<Form>
				<h4>Namn</h4>
				<Form.Field>
					<input placeholder='Namn' />
				</Form.Field>
				<h4>Mejladress</h4>
				<Form.Field>
					<input placeholder='Din Mejladress' />
				</Form.Field>
				<h4>Valfri Text</h4>
				<Form.Field
					control={TextArea}
					placeholder="Text"
				>
				</Form.Field>
				<Button type='submit'>Skicka</Button>
			</Form>
		</div>
	);
}

export default Kontakt;
