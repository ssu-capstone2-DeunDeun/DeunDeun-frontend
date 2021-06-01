import { TitleKorean } from 'components/RecruitingClubSection/styles';
import PopularClubCard from 'components/PopularClubCard';
import React from 'react';
import { Header, CardContainer, ContentKorean } from './styles';

const PopularClubSection = ({ onClickSeeAll }) => {
	return (
		//
		<>
			<Header>
				<TitleKorean>인기 동아리</TitleKorean>
				<ContentKorean id="popular" onClick={onClickSeeAll}>
					전체보기
				</ContentKorean>
			</Header>
			<CardContainer>
				<PopularClubCard order={1} imageURL={'/images/test6.jpeg'} isRecruiting={true} clubName={'트와이스'} />
				<PopularClubCard order={2} imageURL={'/images/test7.jpeg'} isRecruiting={true} clubName={'트와이스'} />
				<PopularClubCard order={3} imageURL={'/images/test8.jpeg'} clubName={'트와이스'} />
				<PopularClubCard order={4} imageURL={'/images/test9.jpeg'} clubName={'트와이스'} />
				<PopularClubCard order={5} imageURL={'/images/test5.jpeg'} clubName={'트와이스'} />
			</CardContainer>
		</>
	);
};

export default PopularClubSection;