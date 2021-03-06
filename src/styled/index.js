import styled from 'styled-components';

const color = {
	dark: '#222',
	plain: '#FFF',
	error: '#A00',
}

const pageWidth = 600;

export const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: ${pageWidth}px;
	color: ${color.dark};
	font-family: DejaVu Serif;

	* {
		box-sizing: border-box;
	}
`;

export const Heading = styled.h1`
	font-size: 24px;
	font-weight: 400;
`

export const Input = styled.input`
	width: 100%;
	max-width: 300px;
	border: 1px solid ${color.dark};
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
		background: ${color.dark};
		transition: height .1s;

		z-index: -1;
	}

	&:hover,
	&:active {
		color: ${color.plain};
		&:before {
			height: 45px;
		}
	}
`;

export const Error = styled.p`
	color: ${color.error};
`

export const Spinner = styled.div`
	--size: ${props => props.size || '90px'};

  display: inline-block;
  width: var(--size);
  height: var(--size);

  &:after {
    content: " ";
    display: block;
    width: calc(var(--size) * 0.7);
    height: calc(var(--size) * 0.7);
    margin: 1px;
    border-radius: 50%;
    border: 5px solid${color.dark};
    border-color:${color.dark} transparent${color.dark} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SlideEffect = styled.div`
	overflow: hidden;
	animation: slide-in .35s 1;

	@keyframes slide-in {
		from {
			transform: translateY(500px);
			opacity: 0.1;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;

export const HorizontalScroll = styled.div`
	max-width: 100%;
	overflow-x: auto;
	padding-bottom: 20px;
`;