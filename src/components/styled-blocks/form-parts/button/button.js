import styled from "styled-components";

const Button = styled.button`
    font-size: 1.1rem;
    color: #000;
    background-color: ${props => props.active ? "tomato" : "#fff"};
    border-radius: 10px;
    padding: 0.3rem 0.5rem;
    border: none;
    border-color: ${props => props.err === "t" ? "2px solid tomato" : "none"};
    cursor: pointer;
    margin-right: 1rem;
`;

export default Button;