import { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Movie from '../../components/Movie/index';
import { S } from './Home.style';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
        setMovies(json.data.movies);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <S.HomeWrapper>
            <Header />
            <S.Main>
                <S.Banner>
                    <S.Center>
                        <S.TitleBox>
                            <S.MovieSubTitle src={process.env.PUBLIC_URL + '/title01.svg'} alt='movie title' />
                            <S.MovieTitle src={process.env.PUBLIC_URL + '/main-title-2.png'} alt='movie title' />
                            <S.MovieDesc>Tony Stark, the CEO who leads the world's strongest weapons company with his genius brain and talent, and a billionaire ...</S.MovieDesc>
                            <S.MoreBtn className='active'>View More</S.MoreBtn>
                        </S.TitleBox>
                    </S.Center>
                </S.Banner>
                <S.MovieWrapper>
                    <S.Category>
                        <S.MovieInner>
                            <S.CategoryTitle>Popular on STUDIOS</S.CategoryTitle>
                        </S.MovieInner>
                    </S.Category>
                    <S.MovieList>
                        <S.MovieInner>
                            <S.GridContainer>
                                {movies.map((movie) => (
                                    <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} rating={movie.rating} />
                                ))}
                            </S.GridContainer>
                        </S.MovieInner>
                    </S.MovieList>
                </S.MovieWrapper>
            </S.Main>
        </S.HomeWrapper>
    );
}
