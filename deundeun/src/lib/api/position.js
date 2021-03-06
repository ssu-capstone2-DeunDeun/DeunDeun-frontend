import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import client from './client';

//해당 클럽의 모든 역할을 불러오는 것
export const getClubPositions = (clubName) =>
    client.get(API_BASE_URL + `/positions?clubName=${clubName}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });

//해당 클럽에 역할을 추가하는 것
export const addClubPosition = (clubPositionRequestDto) =>
    client.post(API_BASE_URL + '/positions', clubPositionRequestDto, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });


//해당 클럽에 역할을 삭제하는 것
export const deleteClubPosition = (positionId) =>
    client.delete(API_BASE_URL + `/positions/${positionId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });


//해당 클럽에 역할을 수정하는 것
export const updateClubPosition = ({ body }) =>
    client.patch(API_BASE_URL + `/positions/${body.positionId}`, body.clubPositionRequestDto, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });

// -------------------------------------------------------------------------------------------------

//해당 클럽의 멤버의 역할을 삭제하는 것
export const deleteParticipateClubPositions = (participateId) =>
    client.delete(API_BASE_URL + `/participates/${participateId}/position`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });



//해당 클럽의 멤버의 역할을 할당하는 것
export const assignParticipateClubPositions = (positionChangeDto) =>
    client.patch(API_BASE_URL + '/participates/positions', (positionChangeDto), {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });

// -------------------------------------------------------------------------------------------------


// 해당 멤버의 관리자 권한읇 부여하는 것
export const assignAdminRole = (participatedId) =>
    client.post(API_BASE_URL + `/participates/${participatedId}/admins`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });

// 해당 멤버의 관리자 권한읇 박탈하는 것
export const quitAdminRole = (participatedId) =>
    client.patch(API_BASE_URL + `/participates/${participatedId}/admins`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });