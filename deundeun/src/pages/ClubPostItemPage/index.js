import React from 'react';
import { useEffect } from 'react';
import { ClubWritePostBlock, DeleteModal, ModalBox } from './styles';
import Button from 'components/common/Button/index';
import { changeField, deletePost, initialField, initPost, updatePost } from 'modules/write';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderContainer from 'container/common/HeaderContainer';
import { RiDeleteBinLine } from "react-icons/ri";
import Loader from 'components/common/Loading/Loader';

const ClubPostItemPage = ({ match, history }) => {
    const { postId } = match.params;
    const dispatch = useDispatch();
    const { initpost, title, content, thumbnailUrl, clubInfo } = useSelector(({ write, currentUserInfo }) => ({
        initpost: write.initpost,
        title: write.title,
        content: write.content,
        thumbnailUrl: write.thumbnailUrl,
        clubInfo: currentUserInfo.clubInfo,
    }));
    console.log(initpost);



    useEffect(() => {
        dispatch(initPost(postId))
    }, [postId, dispatch])

    useEffect(() => {
        if (initpost) {
            dispatch(changeField({ key: "title", value: initpost.title }));
            dispatch(changeField({ key: "content", value: initpost.content }));
        }
    }, [initpost, dispatch])


    const onChangeField = (e) => {
        const { value, name } = e.target;
        dispatch(changeField({ key: name, value }));
    }

    useEffect(() => {
        return () => {
            dispatch(initialField());
        }
    }, [dispatch]);

    const onUpdate = (e) => {
        const postRequestDto = { title, content, thumbnailUrl };
        dispatch(updatePost({ postRequestDto, postId }));
        history.push('/club/manage/post');
        e.preventDefault();
    }

    const onCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const onDelete = (e) => {
        dispatch(deletePost(postId));
        history.push('/club/manage/post');
        e.preventDefault();
    }

    const onOpen = () => {
        const modal = document.getElementById("modalId");
        modal.className = "make";
    }
    const onClose = () => {
        const modal = document.getElementById("modalId");
        modal.className = "delete";
    }

    if (!title) {
        return (
            <>
                <Loader />
            </>
        )
    }


    return (
        <>
            <HeaderContainer />
            <ClubWritePostBlock>
                <form>
                    <div className="main">
                        <input className="title" name="title" value={title} type="text" onChange={onChangeField} placeholder="????????? ???????????????" />
                        <RiDeleteBinLine onClick={onOpen} />
                    </div>
                    <textarea className="body" name="content" value={content} onChange={onChangeField} placeholder="????????? ??????????????????." />
                    <div className="btn">
                        <Button postBtn1 onClick={onUpdate}>????????????</Button>
                        <Button postBtn2 onClick={onCancel}>????????????</Button>
                    </div>
                </form>
            </ClubWritePostBlock>

            <DeleteModal>
                <div id="modalId" className="delete">
                    <ModalBox>
                        <div className="deleteBtn">???????????? ?????????????????????????</div>
                        <div className="removeBtn">
                            <Button removeBtn1 onClick={onDelete}>???</Button>
                            <Button removeBtn2 onClick={onClose}>?????????</Button>
                        </div>
                    </ModalBox>
                </div>

            </DeleteModal>
        </>
    );
};

export default withRouter(ClubPostItemPage);