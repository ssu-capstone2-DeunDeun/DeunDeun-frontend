// import MyPage from 'pages/MyPage';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation, useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import { ContainerRow } from 'styles';
import OAuth2RedirectHandler from 'components/login/oauth2/OAuth2RedirectHandler';
import RegisterInfoContainer from 'container/register/RegisterInfoContainer';
import RegisterHashtagContainer from 'container/register/RegisterHashtagContainer';
import ClubAddInfoContainer from 'container/clubRegister/ClubAddInfoContainer';
import ClubModifyPageContainer from 'container/clubRegister/ClubModifyPageContainer';
import HeaderContainer from 'container/common/HeaderContainer';
import MyProfileModifyPageContainer from 'container/myProfileModify/MyProfileModifyPageContainer';
import ClubPostPage from 'pages/ClubPostPage/index';
import ClubManagePostPage from 'pages/ClubManagePostPage.js/index';
import ClubPostItemPage from 'pages/ClubPostItemPage/index';
import ClubAddSuccessPage from 'pages/ClubAddSuccessPage/index';
import RecruitAddInfoContainer from 'container/recruit/RecruitAddInfoContainer';
import ApplicationAddInfoContainer from 'container/application/ApplicationAddInfoContainer';
import PostAllPage from 'pages/PostAllPage.js/index';
import { Fragment } from 'react';
import SideBar from '../src/components/common/SideBar';
import ApplicationSuccessPage from 'pages/ApplicationSuccessPage/index';
import ApplySuccessPage from 'pages/ApplySuccessPage/index';
import RecruitSuccessPage from 'pages/RecruitSuccessPage/index';
import MyApplyPage from 'pages/MyApplyPage/index';
import ApplicationOverviewPage from 'pages/ApplicationOverviewPage/index';
import ApplicationModifyPage from 'pages/ApplicationModifyPage/index';
import SendMsgSuccess from 'components/SendMsgSuccess/index';

const ClubHomePage = loadable(() => import('pages/ClubHomePage'));
const CategoryITPage = loadable(() => import('pages/CategoryITPage'));
const CategoryPage = loadable(() => import('pages/CategoryPage'));
const ClubDetailPage = loadable(() => import('pages/ClubDetailPage'));
const MyProfileModifyPage = loadable(() => import('pages/MyProfileModifyPage'));
const MyClubListPage = loadable(() => import('pages/MyClubListPage'));
const MyApplicationPage = loadable(() => import('pages/MyApplicationPage'));
const MyLikeListPage = loadable(() => import('pages/MyLikeListPage'));

const LoginPage = loadable(() => import('pages/LoginPage'));
const ApplyPage = loadable(() => import('pages/ApplyPage'));
const ApplyPageSuccessPage = loadable(() => import('pages/ApplyPageSuccessPage'));
const RecruitDetailPage = loadable(() => import('pages/RecruitDetailPage'));
const PostDetailPage = loadable(() => import('pages/PostDetailPage'));

// const ClubModifyPage = loadable(() => import('pages/ClubModifyPage'));
const ApplicationAddPage = loadable(() => import('pages/ApplicationAddPage'));
const ApplicationManagePage = loadable(() => import('pages/ApplicationManagePage'));
const RecruitAddPage = loadable(() => import('pages/RecruitAddPage'));
const RecruitManagePage = loadable(() => import('pages/RecruitManagePage'));
const ApplicantManagePage = loadable(() => import('pages/ApplicantManagePage'));
const MemberManagePage = loadable(() => import('pages/MemberManagePage'));

const App = () => {
	let location = useLocation();
	useEffect(() => {
		// console.log(location.pathname);
	}, [location]);

	return (
		//
		<Switch>
			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
			<Route exact path="/home">
				{/* <Header /> */}
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<ClubHomePage />
				</ContainerRow>
			</Route>
			<Route path="/post/all" exact>
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<PostAllPage />
				</ContainerRow>
			</Route>
			<Route path="/club/category/:categoryType">
				{/* <Header /> */}
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<CategoryPage />
				</ContainerRow>
			</Route>
			<Route path="/mypage/:name">
				{/* <Header /> */}
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<MyPage />
				</ContainerRow>
			</Route>
			<Route path="/club/manage/:name">
				{/* <Header /> */}
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<ClubManagePage />
				</ContainerRow>
			</Route>
			<Route exact path="/club/add">
				{/* <Header /> */}
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<ClubAddInfoContainer />
				</ContainerRow>
			</Route>
			<Route exact path="/club/add/success">
				<HeaderContainer />
				<ClubAddSuccessPage />
			</Route>
			<Route exact path="/application/success">
				<HeaderContainer />
				<ApplicationSuccessPage />
			</Route>
			<Route exact path="/applicant/message/success">
				<HeaderContainer />
				<SendMsgSuccess applicant />
			</Route>
			<Route exact path="/member/message/success">
				<HeaderContainer />
				<SendMsgSuccess member />
			</Route>
			<Route exact path="/apply/success">
				<HeaderContainer />
				<ApplySuccessPage />
			</Route>
			<Route exact path="/recruit/success">
				<HeaderContainer />
				<RecruitSuccessPage />
			</Route>
			<Route exact path="/application/:clubName/:id">
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<ApplicationOverviewPage />
				</ContainerRow>
			</Route>
			<Route exact path="/application/:clubName/:id/modify">
				<HeaderContainer />
				<ContainerRow>
					<SideBar location={location} />
					<ApplicationModifyPage />
				</ContainerRow>
			</Route>
			{/* <Route exact path="/club/" */}
			<Route component={LoginPage} path="/login" exact />
			<Route component={RegisterInfoContainer} path="/register/1" exact />
			{/* <Route component={RegisterPage2} path="/register/2" exact /> */}
			<Route component={RegisterHashtagContainer} path="/register/2" exact />
			<Route component={ApplyPage} path="/forms/:clubName/:id" exact />
			<Route component={ApplyPageSuccessPage} path="/forms/:clubName/success" exact />
			<Route component={MyApplyPage} path="/apply/:clubName/:id" exact />

			<Route component={RecruitDetailPage} path="/recruit/detail/id" exact />
			<Route component={PostDetailPage} path="/club/:clubName/post/:postId" exact />

			<Route component={ApplicantManagePage} path="/manager/applicant" exact />
			<Route component={MemberManagePage} path="/manager/member" exact />
			<Route component={OAuth2RedirectHandler} path="/oauth2/redirect" exact />
			<Route component={ClubPostPage} path="/club/post" exact />
			<Route component={ClubPostItemPage} path="/club/post/:postId" exact />
			<Route component={ClubDetailPage} path="/club/:clubName" exact />
		</Switch>
	);
};

const MyPage = () => {
	const { name } = useParams();
	return (
		//
		<Fragment>
			{name === 'modify' && <MyProfileModifyPageContainer />}
			{name === 'clubs' && <MyClubListPage />}
			{name === 'application' && <MyApplicationPage />}
			{name === 'likes' && <MyLikeListPage />}
		</Fragment>
	);
};

const ClubManagePage = () => {
	const { name } = useParams();
	let location = useLocation();
	const [addNewApplication, setAddNewApplication] = useState(false);
	const [addNewRecruit, setAddNewRecruit] = useState(false);
	useEffect(() => {
		return () => {
			setAddNewApplication(false);
			setAddNewRecruit(false);
		};
	}, []);

	useEffect(() => {
		switch (location.pathname) {
			case '/club/manage/application':
				setAddNewApplication(false);
				break;
			case '/club/manage/recruit':
				setAddNewRecruit(false);
				break;
			default:
				break;
		}
	}, [location]);

	return (
		//
		<Fragment>
			{name === 'modify' && <ClubModifyPageContainer />}
			{name === 'application' &&
				(addNewApplication ? (
					<Fragment>
						<Redirect to="/club/manage/application/new" />
						<ApplicationAddInfoContainer setAddNewForm={setAddNewApplication} />
					</Fragment>
				) : (
					<Fragment>
						<Redirect to="/club/manage/application" />
						<ApplicationManagePage setAddNewForm={setAddNewApplication} />
					</Fragment>
				))}
			{name === 'recruit' &&
				(addNewRecruit ? (
					<>
						<Redirect to="/club/manage/recruit/new" />
						<RecruitAddInfoContainer setAddNewForm={setAddNewRecruit} />
					</>
				) : (
					<>
						<Redirect to="/club/manage/recruit" />
						<RecruitManagePage setAddNewForm={setAddNewRecruit} />
					</>
				))}
			{name === 'applicant' && <ApplicantManagePage />}
			{name === 'member' && <MemberManagePage />}
			{name === 'post' && <ClubManagePostPage />}
		</Fragment>
	);
};

export default App;
