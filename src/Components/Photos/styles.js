import styled, { keyframes } from 'styled-components';
import img from '../../assets/visualizacao-black.svg';
import excluir from '../../assets/excluir.svg';


const scaleUp = keyframes`
    to{
        opacity: initial;
        transform: initial;
    }
`

export const Container = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: .3rem;
    background: white;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: 36rem 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(.8);
    animation: ${scaleUp} .5s forwards;

    p{
        opacity: .5;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a:hover {
            text-decoration: underline;

        } 

        span::before{
            content: '';
            width: 16px;
            display: inline-block;
            height:10px;
            margin-right: 5px;
            background: url(${img});
        }


    }

    @media (max-width: 64rem){
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        display: grid;
        grid-template-columns: minmax(9rem,30rem);
        grid-template-rows: 16rem 20rem;
    }
    
`;

export const Img = styled.div`
    grid-row: 1/4;

    @media (max-width: 64rem){
        grid-row: 1;
        /* grid-template-rows: auto 1fr auto; */

        img{

            max-width: 100%;
        }
    }
`;

export const Details = styled.div`
    padding: 2rem 2rem 0 2rem;
    display: grid;
    grid-auto-rows: auto 1fr auto;
`;

export const Atributes = styled.ul`
    /* padding: 0 2rem; */
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li{
        margin-right: 2rem;

        &::before{
            content: '';
            display: inline-block;
            height: 20px;
            margin-right: .5rem;
            position : relative;
            top: 3px;
            width: 2px;
            background: #b2b2b2;
            margin-top: 5px;
        }
    }
`;

const latir = keyframes`
    from {
        opacity : 0;
    }
    to{
        opacity: 1;
    }
`;

export const FormComments = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem 0;

    textarea{
        display: block;
        width: 100%;
        font-size: 1rem;
        font-family: var(--type-second);
        resize: none;
        border: 1px solid #eee;
        border-radius: .3rem;
        background: #eee;
        transition: .3s;

        &:hover, &:focus{
            outline: none;
            border-color: #fb1;
            background: #fff;
            box-shadow: 0 0 0 3px #fea; 
        }
    }

    

    button{
        border: none;
        cursor: pointer;
        color: #333;
        background: transparent;
        padding: 0 1rem;

        &:hover , &:focus {
            outline: none;
        }

        &:hover svg > g, &:focus svg > g{
            animation: ${latir} .5s infinite;
        }

        &:hover svg > path, &:focus svg > path{
            fill: #fea;
            stroke: #fb1;
        }

       
    }
`;

export const ListaComments = styled.ul`
    overflow-y: auto;
    word-break: break-word;

    li{
        margin-bottom: .5rem;
        line-height: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        strong{
            color: #5656a2eb;
            margin-right: 0.5rem;

            &:hover{
                text-decoration: underline;
            }
        }

        button{

            border: none;
            background: none;
            cursor: pointer;
            outline: none;

                &::before{
                content: '';
                width: 17px;
                display: inline-block;
                height:17px;
                margin-right: 5px;
                background: url(${excluir}) no-repeat;
            }
        }
    }

`;

export const Button = styled.button`
    padding: 0;
    border-radius: .2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    border: none;
    outline: none;
    transition: .3s;


    &::before{
        
        content: "";
        width: 21px;
        height: 21px;
        
        background: url(${excluir}) no-repeat 50%;
        align-items: center;
        align-content: center;
        margin-right: .5rem;
        position: relative;
        justify-content: center;
    }
    

    &:hover, &focus{
        background-color: #ff0606b8;
        color: #000000;
    }
`;

export const PhotoSingle = styled.section`


    div{
        display: block;
        height: auto;

        img{
            border-radius: 5px;
        }

        div{
            padding: 0 ;
            margin-bottom: 2rem;
            li > div {
               
            margin-bottom: 0rem;
        
            }
            
        }
        
        ${Button} {
     
            color: #000;
            padding: .5rem;
            background: #292d2c3d;
            cursor: pointer;

            &:focus, &:hover{
                background: #292d2c7a;
            }

        }

       
       

    }

    ${Container}  {
        font-size: 1.4rem;

        span{ 

            font-size: 1.4rem;

            &::before{
                width: 22px;
                height: 13px;
                background-size: 21px;
            }

        }
    }

`;