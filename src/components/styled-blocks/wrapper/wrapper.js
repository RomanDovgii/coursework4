import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: ${props => props.display ? props.display : "block"};
    flex-direction: ${props => props.direction ? props.direction : "none"};
    align-items: ${props => props.align ? props.align : "none"};
    justify-content: ${props => props.justify ? props.justify : "none"};
`;

export default Wrapper;