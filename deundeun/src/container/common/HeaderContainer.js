import Header from 'components/common/Header/index';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getClubInfo, getUserInfo, initialUserInfo } from 'modules/currentUserInfo';
import { ACCESS_TOKEN } from 'constants/index';
import { getHome } from 'modules/initHomePage';
import { withRouter } from 'react-router-dom';

const HeaderContainer = ({ history }) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(({ currentUserInfo }) => (currentUserInfo.userInfo));
    const [checkLogin, setCheckLogin] = useState(false);


    useEffect(() => {
        dispatch(getHome("DATE"));
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(getUserInfo());
    //     dispatch(getClubInfo());
    // }, [dispatch]);



    useEffect(() => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            setCheckLogin(true);
        } else {
            setCheckLogin(false);
        }
    }, [dispatch]);


    const onLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        dispatch(initialUserInfo("userInfo"));
        setCheckLogin(false);
        history.push('/home');

    }
    return (
        <Header onLogout={onLogout} userInfo={userInfo} checkLogin={checkLogin} />
    )
};

export default withRouter(HeaderContainer);