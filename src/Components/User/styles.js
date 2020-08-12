import styled from 'styled-components';

export const Header = styled.header`

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    position: relative;

`;

export const UserPhostContent = styled.section` 
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    #img{
        margin-bottom: 1rem;
    }

    form > label{
        padding: 0rem 1rem;
        height: 50px;
        width: 50px;
        border-radius: 0.5m;
        font-size: 3rem;
        background: #fff;
        box-shadow: 0 0 0 3px #fea;
        border:1px solid #fb1;
        color: #fb1;
        border-radius: .2rem;
        cursor: pointer;
    }

`;


export const Preview = styled.div` 
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;

    &::after{
        content: '';
        display: block;
        height: 0px;
        padding-bottom: 100%;
    }
`;
