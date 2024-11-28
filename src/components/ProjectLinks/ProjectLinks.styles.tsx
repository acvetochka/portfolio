import styled from "styled-components";

export const LinksWrapper = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  // margin-top: 10px;
  margin: auto;

  & li {
    width: 25px;
    height: 25px;
    background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
    border-radius: 50%;
  }

  & a {
    // display: inline-block;
    padding: 1px;
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #000;
    transition: background-color 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & svg {
    width: 23px;
    height: 23px;
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
  }

  & a:hover,
  & a:focus {
    // background: linear-gradient(88deg, #a313e0 20%, #4f0ac9 66%, #0000ff);
    background: transparent;

    svg {
      transform: scale(1.2);
    }
  }
`;
