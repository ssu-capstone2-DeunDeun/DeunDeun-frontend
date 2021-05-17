import {
	TitleKorean,
	ApplicationLoadCard,
	InnerContainer,
	RecruitingOrderButton,
	RecruitTitleInput,
	RecruitInfo,
	RecruitDeadline,
	Tilde,
	RecruitInfoTextarea,
	ImageButton
} from './styles';
import React, { useCallback, useEffect, useState } from 'react';
import { ContainerColumn, ContainerRow } from 'styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { ContentKorean } from 'components/ClubPostCardSmall/styles';
import { Header, SubmitButton } from 'pages/ApplicationAddPage/styles';
import LoadApplicationModal from 'components/modal/LoadApplicationModal';
import { Footer } from 'components/PostSection/styles';

const RecruitAddPage = ({ setAddNewForm }) => {
	const [showLoadApplicationModal, setShowLoadApplicationModal] = useState(false);

	const onClickLoadApplication = useCallback((e) => {
		setShowLoadApplicationModal(true);
	}, []);

	const onCloseModal = useCallback((e) => {
		setShowLoadApplicationModal(false);
	}, []);

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	return (
		//
		<ContainerColumn style={{ marginTop: '2em', width: '68vw' }}>
			<Header>새 모집 공고 추가하기</Header>
			<TitleKorean>모집 공고 제목</TitleKorean>
			<ApplicationLoadCard onClick={onClickLoadApplication}>
				<InnerContainer className="inner">
					<AddCircleOutlineIcon style={{ marginRight: '0.4em' }} />
					<ContentKorean>지원서 불러오기</ContentKorean>
				</InnerContainer>
			</ApplicationLoadCard>
			<TitleKorean style={{ marginBottom: '1em' }}>모집 기수 / 제목</TitleKorean>
			<ContainerRow style={{ marginBottom: '2em' }}>
				<RecruitingOrderButton>0기</RecruitingOrderButton>
				<RecruitTitleInput placeholder="제목을 입력해 주세요."></RecruitTitleInput>
			</ContainerRow>
			<TitleKorean style={{ marginBottom: '1em' }}>모집 일정</TitleKorean>
			<ContainerColumn style={{ marginBottom: '2em' }}>
				<ContainerRow>
					<RecruitInfo>서류접수</RecruitInfo>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
					<Tilde>~</Tilde>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>1차 발표</RecruitInfo>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
					<Tilde>~</Tilde>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>면접 진행</RecruitInfo>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
					<Tilde>~</Tilde>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
				</ContainerRow>
				<ContainerRow>
					<RecruitInfo>최종 발표</RecruitInfo>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
					<Tilde>~</Tilde>
					<RecruitDeadline>2021.01.01</RecruitDeadline>
				</ContainerRow>
			</ContainerColumn>
			<TitleKorean>모집 내용</TitleKorean>
			<RecruitInfoTextarea />
			<TitleKorean>이미지 업로드</TitleKorean>
			<ContainerRow>
				<ImageButton placeholder="이미지 업로드"></ImageButton>
				<ImageButton />
				<ImageButton />
			</ContainerRow>
			<SubmitButton>모집 공고 등록하기</SubmitButton>
			<LoadApplicationModal show={showLoadApplicationModal} onCloseModal={onCloseModal} />
			<Footer />
		</ContainerColumn>
	);
};

export default RecruitAddPage;