/* eslint-disable */
import { Form, Button, TextArea, Divider, Input } from 'semantic-ui-react';
import { React, useEffect, useState } from 'react';
import Head from "next/head";

const options = [
	{ key: 'hemtjänst', text: 'Hemtjänst', value: 'hemtjänst' },
	{ key: 'assistans', text: 'Assistans', value: 'assistans' },
	{ key: 'övrigt', text: 'Övrigt', value: 'övrigt' },
	{ key: 'b2b', text: 'B2B', value: 'b2b' },
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

	function handleSubmit(e) {
		e.preventDefault();

		const isNameError = (name === undefined) ? nameErrorText : (name === '') ? nameErrorText : false;
		setNameError(isNameError);
		const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		const validEmail = (!pattern.test(email)) ? false : true;
		const isEmailError = (email === undefined) ? emailErrorText : (email === '') ? emailErrorText : !validEmail ? emailErrorText : false;
		setEmailError(isEmailError);

		if (!isNameError && !isEmailError) {
			setLoading(true);
			fetch('https://formspree.io/f/mayaybjg', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					_replyto: email,
					area: `${select}`,
					name: `${name}`,
					message: `${text}`
				})
			})
				.then(response => response.json())
				.then(data => {/*console.log(data);
					if (data.ok === false) {
						setBigError(true);
						setSmallError('404/500');
					} else {*/
						setName('');
						setEmail('');
						setText('');
						setLoading(false);
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

	function handleEmail(value) {
		setEmail(value);
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		const validEmail = (!pattern.test(value)) ? false : true;
		setEmailError((value === undefined) ? emailErrorText : (value === '') ? emailErrorText : !validEmail ? emailErrorText : false);
	}

	return (
		<>
			<Head>
				<title>Kontakt</title>
			</Head>
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
				{!bigError &&
					<Form loading={loading}>
						<h4>Område *</h4>
						<Form.Select
							required
							fluid
							options={options}
							placeholder='Område'
							defaultValue="övrigt"
							onChange={(val) => setSelect(val)}
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
						<h4>Mejladress *</h4>
						<Form.Field
							required
							control={Input}
							id="form-input-control-error-email"
							error={emailError}
							placeholder='Din Mejladress'
							value={email}
							onChange={(e) => { handleEmail(e.target.value) }}
						/>
						<h4>Valfri Text *</h4>
						<Form.Field
							required
							control={TextArea}
							placeholder="Text"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<Button type='submit' onClick={(e) => handleSubmit(e)}>Skicka</Button>
					</Form>
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
