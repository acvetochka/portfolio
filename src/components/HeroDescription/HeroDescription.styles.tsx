import styled from "styled-components";

export const DescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

& > p {
margin-top: 50px;
}

`

export const ButtonWrapper = styled.div`
margin-top: auto;
display: flex;
gap: 10px;
flex-direction: column;
margin-top: 50px;
margin-bottom: 30px;
align-items: center;



@media (min-width: 480px) {
flex-direction: row;
gap: 20px;
}

& div {
// width: 50%;
width: 250px;
align-items: center;
height: 50px;

@media (min-width: 480px) {
width: 50%;}


@media (min-width: 768px) {
max-width: 350px;
// width: 50%;
}
}
`