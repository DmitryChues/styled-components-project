import { styled } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

export const StyledBtn = styled.button`
	border: none;
	background-color: #794f45;
	padding: 10px 20px;
	border-radius: 5px;
	color: #fff;
	font-size: 2rem;
	font-weight: 700;
	
	&:hover {
		background-color: #f83707;
	}

	&:last-child:hover {
		background-color: #1f07f8;
	}
`

export const SuperButton = styled(StyledBtn)`
	border-radius: 30px;
	background-color: #77608d;

	&:hover {
		animation: ${MyAnimation} 2s ease-in-out;
	}

	
`