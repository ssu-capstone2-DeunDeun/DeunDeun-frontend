import styled from '@emotion/styled';

export const Container = styled.div`
	width: 654px;
	height: 176px;

	display: flex;
	flex-direction: row;

	margin-right: 2.375em;
	margin-bottom: 1.75em;

	/* & > .inactive {
		background-color: #f0f0f0;
		opacity: 0.5;
	} */
`;

export const ClubImage = styled.div`
	width: 176px;
	border: solid 1px #a7a7a7;
`;

export const ClubName = styled.span`
	font-family: NotoSansKR;
	font-size: 1.3rem;
	font-weight: bold;
	color: #282828;
	cursor: pointer;
`;

export const ClubInfo = styled.div`
	width: 481px;
	display: flex;
	flex-direction: column;
	background-color: #f2f2f2;

	padding-top: 1.125em;
	padding-left: 1.5em;
	padding-right: 1.338em;
`;

export const ClubDetail = styled.span`
	font-family: 'NotoSansKR';
	font-size: 0.9rem;
	font-weight: 500;
	color: #282828;

	margin-top: 1em;
`;

export const JoinedDate = styled.span`
	font-family: NotoSansKR;
	font-size: 0.93rem;
	color: #9a9a9a;

	margin-top: 1.563em;
`;

export const InactiveContainer = styled.div`
	width: 604px;
	height: 160px;
	background-color: #f0f0f0;
	opacity: 0.5;
`;
