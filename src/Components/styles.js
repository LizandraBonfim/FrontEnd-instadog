import styled from 'styled-components';
import foto from '../assets/usuario.svg';
import footer from '../assets/dogs-footer.svg';

export const ContainerHeader = styled.header`
   
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #fff;
    top: 0;

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
    }


`;


export const Login = styled.nav`

    &::after{
        content: "";
        background: url(${foto}) no-repeat center center;
        width: 14px;
        height: 17px;
        display: inline-block;
        margin-left: 0.5rem;
    }
`;

export const Container = styled.footer` 
    background: #000;
    color: #764706;
    height: 20vh;
    text-align: center;
    padding-top: 3rem;

    &::before{
        content: '';
        background: url(${footer}) no-repeat center center;
        display: grid;
        width: 37px;
        height: 35px;
        margin: auto;

    }
`