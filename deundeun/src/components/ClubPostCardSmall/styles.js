import styled from '@emotion/styled';

export const Container = styled.div`
	width: 370px;
	height: 467px;
`;

export const PostOverview = styled.div`
	height: 279px;
	padding-left: 1.25em;
	padding-right: 1.25em;
	background-color: #f7f7f7;
	display: flex;
	flex-direction: column;
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1.25rem;
	line-height: 1.48;
	margin-top: 1.563em;
	margin-bottom: 0.563em;
`;

export const ContentKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.125rem;
	line-height: 1.45;
	font-weight: 500;
`;

export const PostDate = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	color: #9b9b9b;
	margin-left: auto;
	margin-top: 2em;
	margin-bottom: 1em;
`;

export const NicknameAndLike = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 65px;
	border-top: solid 1px #d9d9d9;
`;

export const Nickname = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
`;
export const Comment = styled.span`
	margin-left: auto;
	font-family: 'GmarketSansMedium';
	font-weight: 500;
	font-size: 0.9rem;
	line-height: 1.17;
	margin-right: 0.3em;
	color: #282828;
`;

export const Like = styled.span`
	font-family: 'GmarketSansMedium';
	font-weight: 500;
	font-size: 0.9rem;
	line-height: 1.17;
	color: #282828;
`;
