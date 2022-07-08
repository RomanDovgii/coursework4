import { Link } from "react-router-dom";
import styled from "styled-components";

const CardLink = styled(Link)`
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    display: block;
    max-width: fit-content;
    padding: 0.3rem 0.6rem;
    background-color: tomato;
    border-radius: 20px;
`;

export default CardLink;