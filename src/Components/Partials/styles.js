import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fb1;
    color: #764701;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    min-width: 8rem;
    transition: .1s;

    &:hover, &:focus{
        outline: none;
        box-shadow: 0 0 0 3px #fea, 0 0 0 5px #fb1;

    }

    &:disabled{
        opacity: .5;
        cursor: wait;

    }
`;

export const ContentInput = styled.div`
    margin-bottom: 1rem;

    label{
        display: block;
        font-size: 1.2rem;
        line-height: 1;
        padding-bottom:1rem;
    }

    input{
        border: 1px solid #eee;
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: .8rem;
        border-radius: .4rem;
        background: #eee;
        transition: .2s;
        margin-top: 0.5rem;

        &:hover, &:focus{
            background: #fff;
            outline: none;
            box-shadow: 0 0 0 3px #fea, 0 0 0 5px #fb1;
        }

    }
`;