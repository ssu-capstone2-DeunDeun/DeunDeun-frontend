import styled from '@emotion/styled';

export const Container = styled.header`
	width: 100vmax;
	height: 7vh;
	padding: 19px 20px 19px 48px;
	display: flex;
	flex-direction: row;
	align-items: center;
	&.detail {
		background-color: #a3a3a3;
	}
	border-bottom: solid 1px #d3d3d3;
`;

export const Logo = styled.img`
	width: 110px;
	height: 44.1px;
	cursor: pointer;
`;

export const IconContainer = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: row;
	align-items: center;

	.sign {
		display: flex;
		margin-right: 60px;
		a {
			text-decoration: none;
			color: black;
		}
		div {
			margin: 0 15px;
		}
	}
`;

export const ProfileIcon = styled.div`
	width: 4.62vh;
	height: 4.62vh;
	margin-left: auto;
	background-color: black;
	border-radius: 35px;
	margin-left: 0.8em;
	cursor: pointer;
`;

export const SearchBoxContainer = styled.div`
	width: 800px;
	height: 40px;
	border-radius: 36px;
	border: solid 1.5px #a7a7a7;

	padding-left: 1em;

	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;

	margin-left: 27em;
`;

export const SearchBox = styled.input`
	width: 750px;
	height: 30px;
	border: none;

	&:focus {
		outline: none;
	}
`;
