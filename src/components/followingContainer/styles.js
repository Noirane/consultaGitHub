import styled from 'styled-components';

export const Section = styled.section`
    width: 600px;
    height: 400px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #dea9be;
    margin-top: 15px;
    
    

    @media screen and (max-width: 600px){
        width: 450px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.h1`
    height: 300px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`


export const ProfilePicture = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid #FFF;
    margin-top: 10px;
`




export const Repo = styled.h2`
    width: 100%;
    height: 135px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;

    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    }

    p {
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`

