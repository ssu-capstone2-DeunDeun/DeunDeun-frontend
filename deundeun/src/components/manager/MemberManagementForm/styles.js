import styled from '@emotion/styled';


export const BasicBlock = styled.div`
    margin-left:80px;
    margin-right:240px;
    display:flex;
    margin-top:55.5px;
`;


export const MenuBlock = styled.div`
    margin-right:166px;
    .menu{
        font-size:18px;
        color:#bebebe;
        width:274px;
        .menuItem{
            .menuTitle{
                font-weight:500;
                height:56px;
                padding-left:26px;
                display:flex;
                align-items:center;
                
                &:hover{
                    background-color: #D7FFFF;
                    color:#282828;
                    font-weight:bold;
                }
            }
            .subMenu{
                div{
                    height:56px;
                    display:flex;
                    align-items:center;
                    padding-left:46px;
                
                    &:hover{
                        font-weight:bold;
                        color:#282828;
                    }
                }
            }
        }
    }
`;

export const ContentBlock = styled.div`
    .header{
        display:flex;
        align-items:center;
        font-size:20px;
        font-weight:bold;

        .headerTitle{
            margin-right:14px;
            color:#282828;
            display:flex;
            align-items:center;
            div{
                margin-right:12.6px;
            }
        }

        .headerInfo{
            display:flex;
            align-items:center;
            margin-right:20px;
            div{
                margin-right :10px;
            }
        }
    }
    .main{
        margin-top:60px;
        width:1160px;

        .mainHeader{
            display:flex;
            justify-content:space-between;
            margin-bottom:16.5px;
            
            .mainTitle{
                font-size:28px;
                font-weight:bold;
                color:#282828;
            }

            .findUser{
                display:flex;
                align-items:center;
                border-bottom:1px solid #b2b2b2;
                width:180px;
                input{
                    border:none;
                    outline:none;
                    font-size:14px;
                    color:#b2b2b2;
                }
                svg{
                    width:13px;
                    height:13px;
                }
            }
        }

        .mainContent{
            .mainContentHeader{
                border-top:3px solid #282828;
                display:flex;
                align-items:center;
                
                height:59.4px;
                padding-left:15px;

                .skills{
                    display:flex;
                    align-items:center;
                    padding-right:402px; //변경
                    .message{
                        display:flex;
                        margin-right:17.5px;
                        svg{
                            width:20px;
                            height:20px;
                            opacity:0.2;
                        }
                    }
                    .skill{
                        text-decoration:underline;
                        margin-right:17.5px;
                        font-size:14px;
                        font-weight:bold;
                        color:#282828;
                    }
                    .roleSet{
                        cursor:pointer;
                    }
                    .authSet{
                        cursor:pointer;
                    }
                }

                .func{
                    display:flex;
                    align-items:center;
                    font-weight:bold;
                    font-size:15px;
                    color:#282828;
                    .allUnit{
                        display:flex;
                        align-items:center;
                        margin-right:52px;
                        div{
                            margin-right:3px;
                        }
                        
                    }
                    .allRole{
                        display:flex;
                        align-items:center;
                        margin-right:52px;
                        div{
                            margin-right:3px; 
                        }
                        
                    }
                    .allAuthorized{
                        display:flex;
                        align-items:center;
                        div{
                            margin-right:3px;
                        }
                    
                    }
                }
            }
        }
    }
`;

export const ApplicantInfoBlock = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:70px;
    font-size:14px;
    font-weight:500;
    color:#282828;
    border-top:1px solid #d5d5d5;
    svg{
        width:20px;
        height:20px;
        opacity:0.2;
        padding-left:15px;
        padding-right:42px;
    }
    .userInfo{
        display:flex;
        align-items:center;
        .userImg{
            width:30px;
            height:30px;
            border-radius:50%;
            background:url("/img/club/HealthClub.jpeg");
            background-size:contain;
            margin-right:8px;
        }
        .nickname{
            width:230px;
        }
    }

    .phoneNumber{
        width:180px;
    }
    .email{
        width:230px;
    }
    .unit{
        width:110px;
    }
    .role{
        width:130px;
    }
    .authorized{
        width:110px;
    }
    .other{
        width:60px;
        svg{
            opacity:0.5;
        }
    }
`;
export const PopupBlock = styled.div`
    .msgDelete{
        display:none;
    }
    .msgPopupBlock{
        width:700px;
        height:600px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 50px 38px 44px;
        color:#282828;

        .msgPopupTitle{
            font-size:25px;
            font-weight:900;
            margin-bottom:38px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            svg{
                opacity :0.3;
                width:25px;
                height:25px;
                &:hover{
                    opacity:0.7;
                }
            }
        }
        .kind{
            font-size:15px;
            font-weight:900;
            margin-bottom:11px;
        }
        .kindItem{
            display:flex;
            align-items:center;
            font-weight:bold;
            margin-bottom:21px;
            
            svg{
                margin-right:10px;
                width:18px;
                height:18px;
                opacity:0.2;
            }
            div{
                margin-right:20px;
                font-size:14px;
            }
        }
        .receiver{
            font-size:15px;
            font-weight:bold;
            
        }
        .receiverIist{
            display:flex;
            flex-wrap:wrap;
            button{
                width:220px;
                height:32px;
                font-size:12px;
                margin:15px 8px 0 0;
                padding:8px 12.8px 6px 18px;
                color:#282828;
                background-color:#f7f7f7;
                border:none;
                display:flex;
                align-items:center;
                justify-content:center;
                svg{
                    margin-left:36.7px;
                    cursor:pointer;
                    width:15px;
                    height:15px;
                }
            }
        }
        .content{
            font-weight:bold;
            margin-top:19px;
        }
        .btn{
            text-align:center;
        }
    }
    
`;
export const StyledTextarea = styled.textarea`
    width:688px;
    height:188px;
    margin-top:15px;
    margin-bottom:38px;
    font-size:14px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:24px;
    padding-top:16px;
`;

export const RoleSetBlock = styled.div`
    .roleDelete{
        display:none;
    }
    .rolePopupBlock{
        width:782px;
        height:580px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 40.5px 49px 44px;
        color:#282828;

        .rolePopupTitle{
            font-size:25px;
            font-weight:900;
            color:#282828;
            margin-bottom:36px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            svg{
                opacity :0.3;
                width:25px;
                height:25px;
                &:hover{
                    opacity:0.7;
                }
            }
        }
        .addAuth{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            font-size:14px;
            color:#b5b5b5;
            margin-bottom:11.5px;
            svg{
                margin-right:6px;
            }
        }
        .btn{
            text-align:center;
        }
    }
    
`;
