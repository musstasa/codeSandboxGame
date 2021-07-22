import styled from "styled-components";

export const StyledDocument = styled.div`
  width: 45%;
  background: white;
  position: absolute;
  top: 30px;
  bottom: 30px;
  right: 35px;
  padding: 20px;
  font-family: monospace;
  font-size: 15px;

  h1 {
    font-size: 20px;
  }

  h4 {
    text-align: left;
    padding-left: 5px;
    margin-bottom: 5px;
    margin-top: 25px;
  }

  p {
    text-align: left;
    margin: 5px;
  }

  li {
    text-align: left;
    margin: 5px;
    position: relative;
    padding-left: 20px;

    > span {
      left: 0px;
      position: absolute;
    }
  }

  ul {
    padding-left: 0;
    list-style-type: none;
  }
`;
