import styled from 'styled-components';
import img from '../../assets/login.jpg';

export const FormLogin = styled.section`
    margin-top: 20vh;
    margin-bottom: 2rem;

    > a{
        display: inline-block;
        padding: 0.5rem 0 ;
        color: #667;
        line-height :1;
        margin: 3rem 0;
        font-size: 1.2rem;

        &::after{
            display: block;
            height: 2px;
            content: '';
            width: 100%;
            background: currentColor;

        }
    }

    @media(max-width: 40rem){
        margin-top: 0vh;

    }
`;

export const Cadastro = styled.div`
    margin: 2rem 2rem 0 0 ;

    > h2{
        font-family: var(--type-second);
        line-height: 1;
        font-size: 2rem;
        margin-bottom: 2rem;

        &::after{
            content: '';
            display: block;
            background: #ddd;
            height: 0.5rem;
            width: 3rem;
            border-radius: 0.2rem;
           

            
        }
    }

    p{
        margin-bottom: 1rem;
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

export const MessageSuccess = styled.p`
    color: #2ea44f;
    padding: 1rem 0 ;

    a{
        font-size: 1.2rem;
        margin: 1rem 0;
    }
`;