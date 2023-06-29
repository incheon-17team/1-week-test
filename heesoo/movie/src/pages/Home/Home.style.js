import styled, { keyframes } from 'styled-components';

const HomeWrapper = styled.div`
    width: 100%;
    overflow-y: hidden;
    background-color: #020202;
`;

const Center = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const Main = styled.main`
    width: 100%;
    height: 100%;
`;

const Banner = styled.section`
    width: 100%;
    height: 730px;
    background-image: url('background.png');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    position: relative;
`;

const TitleBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
const TitleBoxFade = keyframes`
    0% {
    transform: translateY(50px);
    opacity: 0;
  } 
    100% {
    transform: none;
    opacity: 1;
  }
`;

const SubTitleBoxFade = keyframes`
    0% {
    transform: translateY(50px);
    opacity: 0;
  } 50%{
    transform: translateY(50px);
    opacity: 0;
  }
    100% {
    transform: none;
    opacity: 1;
  }
`;

const DescBoxFade = keyframes`
    0% {
    transform: translateY(50px);
    opacity: 0;
  } 70%{
    transform: translateY(50px);
    opacity: 0;
  }
    100% {
    transform: none;
    opacity: 1;
  }
`;

const MovieTitle = styled.img`
    display: block;
    width: 450px;
    margin-top: 10px;
    animation: ${TitleBoxFade} 0.6s linear;
`;
const MovieSubTitle = styled.img`
    display: block;
    width: 450px;
    margin-top: 10px;
    animation: ${SubTitleBoxFade} 1.3s linear;
`;

const MovieDesc = styled.p`
    width: 450px;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    line-height: 20px;
    color: #777;
    font-weight: 300;
    font-size: 14px;
    margin: 20px 0;
    animation: ${DescBoxFade} 1.8s linear;
`;

const MoreBtn = styled.button`
    font-size: 16px;
    height: 50px;
    padding: 0px 16px;
    text-align: center;
    color: #eee;
    border-radius: 10px;
    border: 1px solid #777;
    transition: all ease-in-out 0.5s;
    animation: ${DescBoxFade} 1.8s linear;
    &:hover {
        color: #ccc;
        border: 1px solid #020202;
        border-radius: 10px;
        background: #e30914;
        box-shadow: 0px 16px 30px 0px rgba(255, 0, 0, 0.3);
    }
`;

const MovieWrapper = styled.div``;

const Category = styled.div`
    padding: 150px 0 50px;
`;

const CategoryTitle = styled.h2`
    position: relative;
    &::before {
        content: '';
        width: 4px;
        height: 30px;
        background-color: #e30914;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
    }
    color: #ccc;
    font-size: 20px;
    font-weight: 400;
    font-family: Roboto;
    line-height: 100%;
    padding-left: 20px;
`;

const MovieList = styled.div`
    width: 100%;
    padding-bottom: 100px;
`;
const MovieInner = styled.div`
    width: 1000px;
    margin: 0 auto;
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
`;

export const S = {
    HomeWrapper,
    Banner,
    Main,
    Center,
    GridContainer,
    MovieWrapper,
    MovieInner,
    MovieList,
    CategoryTitle,
    MovieDesc,
    TitleBox,
    MovieSubTitle,
    MovieTitle,
    MoreBtn,
    Category,
};
