import styled from "styled-components";

export const  ButtonLoading = styled.button`
    background-color: ${({bg}) => bg ? bg : "#134892"};
    width: 11rem;
    height: 2.75rem;
    border-radius: .4rem;
    box-shadow: 0 4px 6px #00000000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .6rem;

    & span{
        color: #fff;
        font-size: 1.3rem;
    }

    &:hover{
        background-color:#0b2b57;
    }
`

