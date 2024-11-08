import styled from "styled-components";

export const List = styled.ul`
    list-style: none;


    @media (min-width: 768px) {
    display: grid;
    grid-template: auto / 1fr 1fr;
    column-gap: 50px;

    @media (min-width: 1020px) {
    column-gap: 100px;
    }
`;

export const SkillsType = styled.li`

// &:nth-child(2n-1){
// justify-self: flex-end;
// text-align: end;
}
`;
