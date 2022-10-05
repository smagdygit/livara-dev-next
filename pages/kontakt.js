/* eslint-disable */
import { Form, Button, TextArea, Divider, Input, Segment, Icon } from 'semantic-ui-react';
import { React, useEffect, useState } from 'react';
import Head from "next/head";

const options = [
	{ key: 'hisingen', text: 'Hisingen', value: 'hisingen' },
	{ key: 'angered', text: 'Angered', value: 'angered' },
	{ key: 'bergsjön-kortedala', text: 'Bergsjön & Kortedala', value: 'bergsjön-kortedala' },
	{ key: 'övrigt', text: 'Övrigt', value: 'övrigt' },
]

function Kontakt() {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [text, setText] = useState('');
	const [select, setSelect] = useState('övrigt');
	const [loading, setLoading] = useState(false);
	const [bigError, setBigError] = useState(false);
	const [smallError, setSmallError] = useState('');
	const nameErrorText = {
		content: 'Vänligen skriv ett namn',
		pointing: 'below',
	};
	const emailErrorText = {
		content: 'Vänligen skriv en giltlig mejladress',
		pointing: 'below',
	};
	const [sent, setSent] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();

		const isNameError = (name === undefined) ? nameErrorText : (name === '') ? nameErrorText : false;
		setNameError(isNameError);
		/*const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		const validEmail = (!pattern.test(email)) ? false : true;
		const isEmailError = (email === undefined) ? emailErrorText : (email === '') ? emailErrorText : !validEmail ? emailErrorText : false;
		setEmailError(isEmailError);*/
		setEmailError(false);
		const isEmailError = false;

		console.log(select);

		if (!isNameError && !isEmailError) {
			setLoading(true);
			fetch('https://formspree.io/f/mayaybjg', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					_replyto: 'support@livara.se',
					area: `${select}`,
					name: `${name}`,
					message: `${text}`,
					telefon: `${email}`
				})
			})
				.then(response => response.json())
				.then(data => {/*console.log(data);
					if (data.ok === false) {
						setBigError(true);
						setSmallError('404/500');
					} else {*/console.log(select);
					setName('');
					setEmail('');
					setText('');
					setLoading(false);
					setSent(true);
				})
				/*})/*
				.catch(error => {
					setBigError(true);
					setSmallError(JSON.stringify(error));
				})*/;
		}
	}

	function handleName(value) {
		setName(value);
		setNameError((value === undefined) ? nameErrorText : (value === '') ? nameErrorText : false);
	}

	function handlePhone(value) {
		setEmail(value);
		setEmailError((value === undefined) ? nameErrorText : (value === '') ? nameErrorText : false);
	}

	/*
	function handleEmail(value) {
		setEmail(value);
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		const validEmail = (!pattern.test(value)) ? false : true;
		setEmailError((value === undefined) ? emailErrorText : (value === '') ? emailErrorText : !validEmail ? emailErrorText : false);
	}*/

	function changeSelect(e, val) {
		setSelect(val.value);
	}

	return (
		<>
			<Head>
				<title>Kontakta oss på Livara Omsorg!</title>
			</Head>
			<div>
				<center>
					<h2>
						Kontakta oss på Livara Omsorg!
				</h2>
				</center>
				<Divider />
				<br />
				<h2><b>Kontaktinformation</b></h2>
				<a href={'tel:0313204149'}>
					<Button size='massive' color='green' icon labelPosition='left'>031-320 41 49<Icon name='phone' /></Button>
				</a>
				<br />
				<br />
				<a href={'mailto:support@livara.se'}>
					<Button size='massive' color="blue" icon labelPosition='left'>support@livara.se<Icon name='mail' /></Button>
				</a>
				<br />
				<br />
				<br />
				{!sent &&
					<>
						{!bigError &&
							<Form loading={loading}>
								<h4>Område *</h4>
								<Form.Select
									required
									fluid
									options={options}
									placeholder='Område'
									defaultValue="övrigt"
									onChange={(e, val) => changeSelect(e, val)}
								/>
								<h4>Namn *</h4>
								<Form.Field
									required
									control={Input}
									id="form-input-control-first-name"
									error={nameError}
									placeholder='Namn'
									value={name}
									onChange={(e) => handleName(e.target.value)}
								/>
								<h4>Telefonnummer *</h4>
								<Form.Field
									required
									control={Input}
									id=""
									error={emailError}
									placeholder='Telefonnummer'
									value={email}
									onChange={(e) => { handlePhone(e.target.value) }}
								/>
								<h4>Valfri Text</h4>
								<Form.Field
									required
									control={TextArea}
									placeholder="Text"
									value={text}
									onChange={(e) => setText(e.target.value)}
								/>
								<Button size="big" type='submit' onClick={(e) => handleSubmit(e)}>Skicka</Button>
							</Form>
						}
					</>
				}
				{sent &&
					<Segment style={{backgroundColor: 'rgba(0,0,0,0.03)'}}>
						<center>
							<h1 className="m-5">Meddelandet har skickats!</h1>
						</center>
					</Segment>
				}
				{bigError &&
					<center>
						<h1>
							Meddelandet kunde inte skickas, vänligen skicka oss ett mejl eller ring istället.
						</h1>
						<p>{smallError}</p>
					</center>
				}
			</div>
		</>
	);
}

export default Kontakt;
