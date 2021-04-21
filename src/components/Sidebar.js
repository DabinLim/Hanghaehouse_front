import React from 'react';
import styled from 'styled-components';
import {Text} from '../elements';
import {api} from '../redux/modules/user';
import {useDispatch} from 'react-redux';
import { history } from '../redux/configStore';
import SideProfile from './SideProfile';

const Sidebar = (props) => {
    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <Container>
                <ProfileContainer>
                <SideProfile/>
                </ProfileContainer>
                <Line/>
                <Text cursor='pointer' _onClick={()=>{history.push('/all')}}>모든 채팅방 보기</Text>
                <Text cursor='pointer' _onClick={()=> {history.push('/interested')}}>추천 채팅방</Text>
                <Line/>
                <Text cursor='pointer' _onClick={()=> {history.push('/reactchat')}}>리액트 채팅방</Text>
                <Text cursor='pointer' _onClick={()=> {history.push('/nativechat')}}>리액트 네이티브 채팅방</Text>
                <Text cursor='pointer' _onClick={()=> {history.push('/springchat')}}>스프링 채팅방</Text>
                <Text cursor='pointer' _onClick={()=> {history.push('/nodechat')}}>노드 채팅방</Text>
                <LogOutContainer>
                <Text cursor='pointer' _onClick={()=>{
                    if(window.confirm('정말 로그아웃 하시겠습니까?')){
                        dispatch(api.logOutSV(history))
                    }
                    }}>로그아웃</Text>
                </LogOutContainer>
            </Container>
        </React.Fragment>
    )
}

const Container = styled.div`
    background-color:#f2efe4;
    padding:2rem;
    min-height:100%;
    width:200px;
    border-right:1px solid #dbdbdb;
    
`;

const ProfileContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height: 250px;
    align-items:center;
`;

const LogOutContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-height:45%;
    justify-content:flex-end;
    align-items:center;
`;

const Line = styled.hr`

  margin: 10px 0px;
  border: 1px dotted #dbdbdb;
`;

export default Sidebar;