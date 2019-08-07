import styled from "styled-components";

export const Title = styled.h1`
    color: #f00;


`;

export const Table = styled.table`

    display: center;
    th, td{
        border: 1px solid #f4f6f8;
        padding: 10px;
        text-align: left;
        
    }
    tr{
        width: 131px;
        height: 19px;
        font-family: 'OpenSans', sans-serif;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
        color: #191c3c;
        background-color: white;
        &:nth-child(2n+2){
            background-color: #f8f9fe;
        }
    }
    th{
        width: 1136px;
        height: 47px;
        background-color: #eaf0f7;
        font-family: 'OpenSans',sans-serif;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: center;
        color: #707070;
    }
   
`;



