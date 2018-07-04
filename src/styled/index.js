import styled from 'styled-components';

const color = {
	text: '#333',
	special: '#FFF',
	error: '#A00',
}

export const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 600px;
	color: #333;

	* {
		box-sizing: border-box;
	}
`;

export const Heading = styled.h1`
	font-size: 24px;
	font-weight: 400;
`

export const Input = styled.input`
	width: 300px;
	border: 1px solid ${color.text};
	background: none;
	margin: 10px 0;
	padding: 5px 10px;
`

export const Submit = Input.withComponent('button').extend.attrs({
	type: 'submit'
})`
	font-size: inherit;
	height: 45px;
	cursor: pointer;
	position: relative;
	z-index: 1;
	transition: all .1s;


	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0;
		background: black;
		transition: height .1s;

		z-index: -1;
	}

	&:hover,
	&:active {
		color: white;
		&:before {
			height: 45px;
		}
	}


`;

export const Error = styled.p`
	color: ${color.error};
`