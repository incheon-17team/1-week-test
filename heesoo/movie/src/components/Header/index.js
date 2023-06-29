import { S } from './Header.style';

export default function Header() {
    return (
        <S.Header>
            <S.Gnb>
                <S.Link to='/'>
                    <S.LogoImg src={process.env.PUBLIC_URL + '/logo.png'} alt='logo image' />
                </S.Link>
                <S.SignInBtn>Sign In</S.SignInBtn>
            </S.Gnb>
        </S.Header>
    );
}
