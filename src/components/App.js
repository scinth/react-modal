import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import styled from 'styled-components';

const confirmation_options = {
	themeColor: '#b8b822',
	title: 'Confirm',
	message: 'Are you sure you want to download this file "ce583D0dB6afe.ogg" again?',
	accept: {
		text: 'Yes',
		callback: callback => {
			alert('File will be downloaded again');
			callback();
		},
	},
	decline: {
		text: 'No',
		callback: callback => {
			alert('Download cancelled');
			callback();
		},
	},
};
const alert_options = {
	themeColor: '#e85922',
	title: 'Alert',
	message: 'The file "ce583D0dB6afe.ogg" has been downloaded successfully!',
	decline: {
		text: 'OK',
		callback: callback => {
			callback();
		},
	},
};

var settings = null;

const Button = styled.button`
	color: #ffffffaa;
	font-size: 2em;
	font-weight: bolder;
	padding: 0.6em 0.8em;
	margin: 0 0.5em;
	border-style: solid;
	border-width: 0 4px 4px 0;
	border-color: #999;
	border-radius: 0.3em;
	background-color: ${props => props.color};
	transform-origin: center;
	transition: transform 0.2s ease;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

export default function App() {
	const [isOpenModal, updateIsOpenModal] = useState(false);

	const openModal = () => {
		updateIsOpenModal(true);
	};
	const closeModal = () => {
		updateIsOpenModal(false);
	};

	const openConfirmationModal = () => {
		settings = confirmation_options;
		openModal();
	};
	const openAlertModal = () => {
		settings = alert_options;
		openModal();
	};

	return (
		<>
			<AnimatePresence>
				{isOpenModal && <Modal settings={settings} closeModal={closeModal} />}
			</AnimatePresence>
			<Button color={confirmation_options.themeColor} onClick={() => openConfirmationModal()}>
				Confirm
			</Button>
			<Button color={alert_options.themeColor} onClick={() => openAlertModal()}>
				Alert
			</Button>
		</>
	);
}
