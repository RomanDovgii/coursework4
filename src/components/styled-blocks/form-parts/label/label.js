import styled from "styled-components";

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    color: ${props => props.err === "t" ? "tomato" : "white"}
`;

export default Label;