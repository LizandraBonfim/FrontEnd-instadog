import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    top: 0px;
    left: 0;
    z-index: 1000;
`;

export const LoadingContainer = styled.div`
    margin: auto;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding-left: 0.5px;
    background: rgba(255, 255, 255, .5)
`;