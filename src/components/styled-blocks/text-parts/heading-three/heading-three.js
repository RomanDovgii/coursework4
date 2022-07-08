import styled from "styled-components";

const HeadingThree = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 2rem;
    display: block;
    padding: 0 0.5rem;
    color: ${props => props.color ? props.color : "#fff"};
`

export default HeadingThree;