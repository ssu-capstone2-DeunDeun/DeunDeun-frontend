import ApplyForm from 'components/apply/ApplyForm';
import BasicTemplate from 'components/common/BasicTemplate';
import React from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ApplyPage = ({ match }) => {
    const { clubName } = match.params;
    useEffect(() => {

    }, [])
    return (
        <BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
            <ApplyForm />
        </BasicTemplate>
    );
};

export default withRouter(ApplyPage);