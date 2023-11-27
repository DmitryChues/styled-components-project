import styled from "styled-components";

export const Menu = styled.nav`
	ul {
		list-style: none;
		/* margin: 0; */
		padding: 0;
		display: flex;

		li > a {
			color: red;
			font-weight: 700;
		}

		li + li {
			margin: 0px 0px 0px 20px;
		}
	}
`