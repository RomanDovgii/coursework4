import styled from "styled-components";

const InputText = styled.input`
    font-size: 1rem;
    color: #000;
    background-color: white;
    border-radius: 10px;
    padding: 0.3rem 0.5rem;
    border: 2px solid #fff;
    height: ${props => props.height ? props.height : `2rem`};
    border-color: ${props => props.err === "t" ? "2px solid tomato" : "none"}
`;

export default InputText;