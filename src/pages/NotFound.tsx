import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LOGO_URL } from 'constants/app';

const Wrapper = styled.section`
    margin: 150px auto;
    text-align: center;
    h1 {
        margin: ${props => props.theme.spacing.large} 0;
    }
    h3 {
        margin: ${props => props.theme.spacing.medium} 0;
    }
    .link {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
    }
    img {
        width: 200px;
    }
`;

const NotFound = () => {
    return (
        <Wrapper>
            <img src={LOGO_URL} alt="Logo" />
            <h1>404 - Not Found</h1>
            <h3>Sorry the page you are looking for does not exists</h3>
            <h3>You can always go back to the <Link className='link' to={'/'}>homepage</Link>.</h3>
        </Wrapper>
    )
}

export default NotFound;
