import styled from "styled-components";

export const Image = styled.img`
width: 27rem;
height: 26rem;
border-radius: 2rem;
cursor: pointer;
`
export const P = styled.p`
font-size: 2rem;
`
export const PNation = styled.p`
font-weight: 500;
font-size: 2rem;
`
export const Imaged = styled.img`
width: 25rem;
height: 23rem;
border-radius: 2rem;
`
export const Card = styled.div`
 /* background-color: #F8F8F8; */
 padding: 1.5rem;
 border-radius: 2rem;
&:hover{
    transform: translateY(-30px);
    transition: all 1s;
    &:hover{
    color: #FF385C;
}
}
`