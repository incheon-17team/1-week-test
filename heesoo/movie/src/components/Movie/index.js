import React from 'react';
import PropTypes from 'prop-types';
import { S } from './Movie.style';

export default function Movie({ id, coverImg, title, summary, rating }) {
    return (
        <S.GridContainer>
            <S.GridItem>
                <S.MoviePoster src={coverImg} alt={title} />
                <S.MovieDescBox>
                    <S.MovieTitle>{title}</S.MovieTitle>
                    <S.MovieRate>{rating}</S.MovieRate>
                    <S.MovieDesc>{summary.length > 150 ? `${summary.slice(0, 150)}...` : summary}</S.MovieDesc>
                </S.MovieDescBox>
            </S.GridItem>
        </S.GridContainer>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};
