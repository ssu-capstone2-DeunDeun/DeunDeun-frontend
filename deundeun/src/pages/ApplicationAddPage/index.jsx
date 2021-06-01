import { TitleKorean } from 'pages/RecruitAddPage/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { ContainerColumn, ContainerPage } from 'styles';
import { AddQuestionButton, ApplicationTitleInput, InnerContainer, SubmitButton, Header, Error } from './styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import QuestionCard from 'components/common/QuestionCard/index';
import { Prompt, useHistory } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Footer } from 'pages/ClubAddPage/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeInput } from 'modules/applicationAddInfo';
const ApplicationAddPage = ({ setAddNewForm }) => {
	const history = useHistory();
	const [questionIndex, setQuestionIndex] = useState(2);
	const [deleteError, setDeleteError] = useState(false);
	const [submitError, setSubmitError] = useState(false);


	const [questionTypeIdx, setQuestionTypeIdx] = useState(0);

	const [questionList, setQuestionList] = useState([
		{
			index: 1,
			title: ''
		}
	]);

	//내가 짠 코드
	const dispatch = useDispatch();
	const { title, recruitQuestion } = useSelector(({ applicationAddInfo }) => ({
		title: applicationAddInfo.title,
		recruitQuestion: applicationAddInfo.recruitQuestionRequestDtos,
	}))

	const onChangeTitle = useCallback((e) => {
		dispatch(changeInput({ type: "title", value: e.target.value }))
	}, [dispatch]);
	//내가 짠 코드 종료

	useEffect(() => {
		const question = {
			multipleChoiceRequestDtos: [],
			questionContent: "",
			questionType: "",
		}

		if (questionTypeIdx === 0) {  //주관식

		}
		else {  //선다형

		}
	}, [questionTypeIdx]);

	const onSubmit = useCallback(() => {
		history.push('/apply/success');
	}, [history]);

	const onClickAddQuestion = useCallback(() => {
		const newQuestion = {
			index: questionIndex,
			title: ''
		};
		setQuestionList(questionList.concat(newQuestion));
		setQuestionIndex(questionIndex + 1);
	}, [questionList, questionIndex]);


	const onDeleteQuestion = useCallback(
		(e) => {
			if (questionList.length === 1) {
				setDeleteError(true);
				return;
			}
			setQuestionList(questionList.filter((question) => question.index !== parseInt(e.target.id)));
		},
		[questionList]
	);

	const onCloseSnackbar = useCallback(() => {
		setDeleteError(false);
	}, []);

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	useEffect(() => {
		console.log(questionList);
	}, [questionList]);

	return (
		//
		<>
			<ContainerPage style={{ width: '1300px', minHeight: '130vh' }}>
				<form onSubmit={onSubmit}>
					<ContainerColumn style={{ marginBottom: '3em' }}>
						<Header>새 지원서 추가하기</Header>
						<TitleKorean>제목</TitleKorean>
						<ApplicationTitleInput
							type="text"
							id="title"
							name="title"
							onChange={onChangeTitle}
							placeholder="제목을 입력해주세요."
							value={title}
						></ApplicationTitleInput>
						{title === "" && <Error style={{ marginLeft: '0.3em' }}>* 제목은 필수 입력 항목입니다.</Error>}
					</ContainerColumn>

					<ContainerColumn>
						<TitleKorean style={{ marginBottom: '1em' }}>질문</TitleKorean>
						{questionList.map((question) => (
							<QuestionCard key={question.index} index={question.index} setQuestionTypeIdx={setQuestionTypeIdx} onDeleteQuestion={onDeleteQuestion} />
						))}
						<AddQuestionButton>
							<InnerContainer onClick={onClickAddQuestion}>
								<AddCircleOutlineIcon style={{ marginRight: '0.5em' }} />
								질문 추가하기
							</InnerContainer>
						</AddQuestionButton>
						<SubmitButton type="submit">지원서 등록하기</SubmitButton>
					</ContainerColumn>
				</form>
				<Snackbar open={deleteError} autoHideDuration={1000} onClose={onCloseSnackbar}>
					<Alert onClose={onCloseSnackbar} severity="error">
						하나 이상의 질문이 필요합니다.
					</Alert>
				</Snackbar>
				<Footer />
			</ContainerPage>
			{/* <Prompt when={true} message="작성된 정보가 모두 삭제됩니다. 정말 나가시겠어요?" /> */}
		</>
	);
};

export default ApplicationAddPage;
