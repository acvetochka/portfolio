import styled from "styled-components";


export const DescriptionWrapper = styled.div`
max-height: 0;
overflow: hidden;
opacity: 0;
padding: 10px 0;
transition: max-height 1s ease-in-out, opacity 1s ease-in-out, transform 1s ease-in-out;

`

export const TechnologiesList = styled.ul`
list-style: none;
display: flex;
gap: 5px;
font-size: 12px;
flex-wrap: wrap;
margin-top: 10px;

`