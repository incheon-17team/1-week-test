import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(000, 000, 000, 0.1);
    backdrop-filter: blur(30px);
    z-index: 10;
`;

const Gnb = styled.nav`
    width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 120px;
`;

const SignInBtn = styled.button`
    height: 36px;
    padding: 0px 16px;
    border-radius: 10px;
    color: #ccc;
    background: #e30914;
`;

export const S = {
    Header,
    Gnb,
    LogoImg,
    SignInBtn,
    Link,
};
