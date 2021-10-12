import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ModalContainer = styled(motion.div)`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalBox = styled(motion.div)`
	width: 80vw;
	max-width: 500px;
	height: max-content;
	border-radius: 1.58em 1.58em 0.847em 0.847em;
	overflow: hidden;
	background-color: aliceblue;
	box-shadow: 1.5px 1.5px 4px 2px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
	color: white;
	background-color: ${props => props.background};
	padding: 0.6em 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CloseButton = styled.button`
	color: inherit;
	background: none;
	border: none;
	margin: 0;
	padding: 0;
	transform: scale(3);
	transform-origin: right;
	cursor: pointer;
	transition: color 0.3s linear;

	&:hover {
		color: crimson;
	}
`;

const Message = styled.p`
	font-size: 1.5em;
	font-weight: 600;
	padding: 0.8em 1em;
	color: #333;
`;

const ActionSection = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Button = styled.button`
	color: ${props => {
		return props.type == 'accept' ? 'white' : props.themeColor;
	}};
	background-color: ${props => {
		return props.type == 'accept' ? props.themeColor : 'transparent';
	}};
	font-size: 1.1em;
	font-weight: 500;
	padding: 0.5em 0.7em;
	min-width: 80px;
	border: 2px solid ${props => props.themeColor};
	border-radius: 0.3em;
	margin: 0.5em 0.5em 0.5em 0;
	cursor: pointer;
	transition: transform 0.1s ease;

	&:hover {
		transform: scale(1.08);
		transform-origin: center;
		box-shadow: 1.5px 1.5px 4px 2px rgba(0, 0, 0, 0.2);
	}
`;

export default function Modal({ settings, closeModal }) {
	return (
		<ModalContainer
			key="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.3 } }}
			exit={{ opacity: 0, transition: { delay: 0.4 } }}
		>
			<ModalBox
				key="box"
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.3 } }}
				exit={{ y: '-250%', transition: { duration: 0.4, ease: 'anticipate' } }}
			>
				<Header background={settings.themeColor}>
					<h2>{settings.title}</h2>
					<CloseButton onClick={() => closeModal()}>&times;</CloseButton>
				</Header>
				<Message>{settings.message}</Message>
				<ActionSection>
					{settings.decline && (
						<Button
							type="decline"
							themeColor={settings.themeColor}
							onClick={() => settings.decline.callback(closeModal)}
						>
							{settings.decline.text}
						</Button>
					)}
					{settings.accept && (
						<Button
							type="accept"
							themeColor={settings.themeColor}
							onClick={() => settings.accept.callback(closeModal)}
						>
							{settings.accept.text}
						</Button>
					)}
				</ActionSection>
			</ModalBox>
		</ModalContainer>
	);
}
