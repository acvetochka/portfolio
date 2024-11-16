import styled from "styled-components";

const gradientBorder = `linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff)`;

export const ProjectsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProjectItem = styled.li`
  width: 100%;

  display: inline-flex;
  position: relative;
  border-radius: 10px;
  background: ${gradientBorder};
  padding: 2px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: calc((100% - 20px)/ 2);
  }

  @media (min-width: 1024px) {
    width: calc((100% - 40px)/ 3);
  }
`;

export const ProjectComtainer = styled.div`
  background: #000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  //   transition: background-color 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: ;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
`;

export const TypeList = styled.div`
display: flex;
font-size: 12px;
gap: 5px;
`

export const TechnologiesList = styled.ul`
list-style: none;
display: flex;
gap: 5px;
font-size: 12px;
flex-wrap: wrap;

`