import styled from 'styled-components';
import img from '../../assets/login.jpg';

export const FormLogin = styled.section`
    /* margin-top: 4rem; */
    margin-bottom: 2rem;

    > a{
        display: inline-block;
        padding: 0.5rem 0 ;
        color: #667;
        line-height :1;

        &::after{
            display: block;
            height: 2px;
            content: '';
            width: 100%;
            background: currentColor;

        }
    }
`;

export const Cadastro = styled.div`
    margin: 2rem 2rem 0 0 ;

    > a{
        font-family: var(--type-second);
        line-height: 1;
        font-size: 2rem;

        &::after{
            content: '';
            display: block;
            background: #ddd;
            height: 0.5rem;
            width: 3rem;
            border-radius: 0.2rem;
           

            
        }
    }

`;

export const LoginContent = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh; 
    gap: 2rem;

    &::before{
        display: block;
        content: '';
        background: url(${img}) no-repeat center center ;
        background-size:cover ;
    }

    @media(max-width: 40rem) {
        grid-template-columns: 1fr;

        &::before{
            display: none;
        }
  }
`;

export const Forms = styled.div`
    max-width: 30rem;
    padding: 2rem;


    @media(max-width: 40rem) {
        max-width: 100%;
    }
`;

