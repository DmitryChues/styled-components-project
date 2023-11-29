import React from 'react'
import './App.css'
import styled from 'styled-components'
import { StyledBtn } from './components/Button.styled'
import { Link } from './components/Link.styled';
import { Menu } from './components/Menu.styled';


function App() {
	return (
		<div className="App">
			<Box>
				{/* <StyledBtn color={'green'} fontSize={'20px'}>Hello</StyledBtn>
				<StyledBtn color={'red'}>Hello</StyledBtn>
				<StyledBtn fontSize='30px'>Hello</StyledBtn> */}

				{/* <StyledBtn color='green' primary>Hello</StyledBtn>
				<StyledBtn color='green' outlined>Hello</StyledBtn> */}

				<StyledBtn color='green' btnType="primary" active>Hello</StyledBtn>
				<StyledBtn color='green' btnType="outlined">Hello</StyledBtn>
			</Box>
		</div>
	);
}

export default App;



const Box = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;

	button {
		cursor: pointer;
	}

	${Link} {
		cursor: zoom-in;
	}

	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`