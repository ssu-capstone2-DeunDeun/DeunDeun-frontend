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
import { useDispatch, useSelector } from 'react-redux';
import applicationAddInfo, {
	addApplication,
	addQuestion,
	deleteQuestion,
	initializeQuestion,
	makeApplication,
	modifyQuestionContent
} from 'modules/applicationAddInfo';
import { List } from 'immutable';
import axios from '../../../node_modules/axios/index';
const ApplicationAddPage = ({
	setAddNewForm,
	onChangeAppTitle,
	appTitle,
	onChangeQuestionType,
	clubName,
	loading,
	setLoading,
	appLoading,
	setAppLoading,
	whenState,
	setWhenState
}) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [questionIndex, setQuestionIndex] = useState(2);
	const [deleteError, setDeleteError] = useState(false);
	const [submitError, setSubmitError] = useState(false);
	const [questionList, setQuestionList] = useState([
		{
			index: 1,
			title: ''
		}
	]);

	// const { recruitQuestionRequestDtos, title } = useSelector(({ applicationAddInfo }) => ({
	// 	recruitQuestionRequestDtos: applicationAddInfo.get('recruitQuestionRequestDtos'),
	// 	title: applicationAddInfo.get('title')
	// }));

	const { applicationAddInfo } = useSelector(({ applicationAddInfo }) => ({
		applicationAddInfo: applicationAddInfo
	}));

	const onSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			if (appTitle === '' && clubName) {
				setSubmitError(true);
				window.scrollTo(0, 0);
				return;
			} else {
				if (!loading) {
					const data = applicationAddInfo.toJS();
					const newApplication = {
						recruitQuestionRequestDtos: data.recruitQuestionRequestDtos,
						title: data.title
					};
					const test = {
						newApplication: newApplication,
						clubName: clubName
					};
					console.log(test);
					dispatch(addApplication(test));
					history.push('/application/success');
				}
			}
		},
		[appTitle, clubName, loading, history, dispatch, applicationAddInfo]
	);

	const onClickAddQuestion = useCallback(() => {
		setWhenState(true);
		const newQuestion = {
			index: questionIndex,
			title: ''
		};
		setQuestionList(questionList.concat(newQuestion));

		dispatch(addQuestion(questionIndex, List([]), '', 'SUBJECTIVE'));
		setQuestionIndex(questionIndex + 1);
	}, [questionList, questionIndex, dispatch, setWhenState]);

	const onChangeQuestionInput = useCallback(
		(e) => {
			setWhenState(true);
			dispatch(modifyQuestionContent(e.target.id, e.target.value));
		},
		[dispatch, setWhenState]
	);

	const onDeleteQuestion = useCallback(
		(e) => {
			if (questionList.length === 1) {
				setDeleteError(true);
				return;
			}
			setQuestionList(questionList.filter((question) => question.index !== parseInt(e.target.id)));
			dispatch(deleteQuestion(e.target.id));
		},
		[questionList, dispatch]
	);

	const onCloseSnackbar = useCallback(() => {
		setDeleteError(false);
	}, []);

	useEffect(() => {
		console.log(questionList);
	}, [questionList]);

	useEffect(() => {
		return () => {
			setAddNewForm(false);
			dispatch(initializeQuestion());
		};
	}, []);

	return (
		//
		<>
			<ContainerPage style={{ width: '1300px', minHeight: '130vh' }}>
				<form onSubmit={onSubmit}>
					<ContainerColumn style={{ marginBottom: '3em' }}>
						<Header>??? ????????? ????????????</Header>
						<TitleKorean>??????</TitleKorean>
						<ApplicationTitleInput
							type="text"
							id="title"
							name="title"
							onChange={onChangeAppTitle}
							placeholder="????????? ??????????????????."
							value={appTitle}
						></ApplicationTitleInput>
						{appTitle === '' && <Error style={{ marginLeft: '0.3em' }}>* ????????? ?????? ?????? ???????????????.</Error>}
					</ContainerColumn>
					<ContainerColumn>
						<TitleKorean style={{ marginBottom: '1em' }}>??????</TitleKorean>
						{questionList.map((question) => (
							<QuestionCard
								key={question.index}
								index={question.index}
								onDeleteQuestion={onDeleteQuestion}
								onChangeQuestionInput={onChangeQuestionInput}
								onChangeQuestionType={onChangeQuestionType}
							/>
						))}
						<AddQuestionButton>
							<InnerContainer onClick={onClickAddQuestion}>
								<AddCircleOutlineIcon style={{ marginRight: '0.5em' }} />
								?????? ????????????
							</InnerContainer>
						</AddQuestionButton>
						<SubmitButton type="submit" onClick={onSubmit}>
							????????? ????????????
						</SubmitButton>
					</ContainerColumn>
				</form>
				<Snackbar open={deleteError} autoHideDuration={1000} onClose={onCloseSnackbar}>
					<Alert onClose={onCloseSnackbar} severity="error">
						?????? ????????? ????????? ???????????????.
					</Alert>
				</Snackbar>
				<Footer />
			</ContainerPage>
			<Prompt
				when={whenState}
				yes="??????"
				no="??????"
				message={(location) => {
					return location.pathname === '/aplication/success'
						? true
						: '?????? ?????? ????????? ?????? ???????????????. ?????? ??????????????????????';
				}}
			/>
		</>
	);
};

export default ApplicationAddPage;
