import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';
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

function Home() {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
        setMovies(json.data.movies);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <HomeWrapper>
            <Header>
                <Gnb>
                    <Link to='/'>
                        <LogoImg src={process.env.PUBLIC_URL + '/logo.png'} alt='logo image' />
                    </Link>
                    <SignInBtn>Sign In</SignInBtn>
                </Gnb>
            </Header>
            <Main>
                <Banner>
                    <Center>
                        <TitleBox>
                            <MovieSubTitle src={process.env.PUBLIC_URL + '/title01.svg'} alt='movie title' />
                            <MovieTitle src={process.env.PUBLIC_URL + '/main-title-2.png'} alt='movie title' />
                            <MovieDesc>Tony Stark, the CEO who leads the world's strongest weapons company with his genius brain and talent, and a billionaire ...</MovieDesc>
                            <MoreBtn className='active'>View More</MoreBtn>
                        </TitleBox>
                    </Center>
                </Banner>
                <MovieWrapper>
                    <Category>
                        <MovieInner>
                            <CategoryTitle>Popular on STUDIOS</CategoryTitle>
                        </MovieInner>
                    </Category>
                    <MovieList>
                        <MovieInner>
                            <GridContainer>
                                {movies.map((movie) => (
                                    <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} rating={movie.rating} />
                                ))}
                            </GridContainer>
                        </MovieInner>
                    </MovieList>
                </MovieWrapper>
            </Main>
        </HomeWrapper>
    );
}
export default Home;
