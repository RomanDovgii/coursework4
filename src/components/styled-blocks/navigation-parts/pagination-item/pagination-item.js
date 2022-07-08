import styled from "styled-components"

const PaginationItem = styled.li`
    padding: 0.3rem;
    background-color: ${props => props.current ? "#000" : "#888"};
    margin: 0 0.25rem;
`;

export default PaginationItem;