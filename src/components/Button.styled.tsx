import { css, styled } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

type StyledBtnPropsType = {
	color?: string
	fontSize?: string
	primary?: boolean
	outlined?: boolean
	btnType: 'primary' | 'outlined'
	active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: ${props => props.fontSize || '2rem'};
	font-weight: 700;

	${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
		border: 2px solid ${props => props.color || "#794f45"};
		color: ${props => props.color || "#794f45"};
		background-color: transparent;

		&:hover {
			border-color: blue;
			color: blue;
			background-color: transparent;
		}
	`}
	//outlined
	
	${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
		background-color: ${props => props.color || "#794f45"};
		color: #fff;

		&:hover {
			background-color: blue;
		}
	`}
	//primary

	${props => props.active && css<StyledBtnPropsType>`
		box-shadow: 5px 5px 5px 5px #16035e;
	`}
	
`
