import styled from "styled-components";

const CardDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    ${props => props.color ? props.color : "#fff"};
    display: block;
    text-align: justify;
    display: block;
    padding: 0 0.5rem;
`;

export default CardDescription;