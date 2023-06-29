import styled from 'styled-components';

const GridContainer = styled.div``;

const GridItem = styled.div`
    position: relative;
    border-radius: 16px;
    overflow: hidden;
`;

const MoviePoster = styled.img`
    width: 100%;
`;

const MovieDescBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 16px;
    box-sizing: border-box;
    &:hover {
        opacity: 1;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(84, 0, 4, 0.94) 70.83%);
    }
    &:hover > h2 {
        transform: translateY(0px);
    }
    &:hover > p {
        transform: translateY(0px);
    }
    transition: all ease-in-out 0.3s;
`;

const MovieTitle = styled.h2`
    white-space: pre-wrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    font-size: 20px;
    margin-bottom: 10px;
    transform: translateY(50px);
    transition: all ease-in-out 0.5s;
`;

const MovieRate = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background-color: #000;
    border-radius: 6px;
    text-align: center;
    line-height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
`;

const MovieDesc = styled.p`
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    font-weight: 300;
    color: #888;
    transform: translateY(150px);
    transition: all ease-in-out 0.5s;
    /* transition-delay: 0.2s; */
`;

export const S = {
    GridContainer,
    GridItem,
    MoviePoster,
    MovieDescBox,
    MovieTitle,
    MovieRate,
    MovieDesc,
};
