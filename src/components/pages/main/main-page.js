import List from "../../styled-blocks/content-blocks/list/list";
import Wrapper from "../../styled-blocks/wrapper/wrapper";
import Card from "../../styled-blocks/content-blocks/card/card";
import HeadingThree from "../../styled-blocks/text-parts/heading-three/heading-three";
import { useEffect } from "react";
import CardImage from "../../styled-blocks/text-parts/card-image/card-image";
import CardDescription from "../../styled-blocks/text-parts/card-description/card-description";
import CardLink from "../../styled-blocks/text-parts/card-link/card-link";
import Pagination from "../../styled-blocks/navigation-parts/pagination/pagination";
import PaginationItem from "../../styled-blocks/navigation-parts/pagination-item/pagination-item";
import PaginationLink from "../../styled-blocks/navigation-parts/pagination-link/pagination-link";
import { connect } from "react-redux";
import { FetchWorks } from "../../../store/actions/api-actions";
import { changePage, changeSort } from "../../../store/actions/action";
import { Box, Button } from "@mui/material";

function MainPage(props) {
    const {visibleWorks, works, currentPage, pages, loadWorks, onPageClick, sort} = props;

    useEffect(() => {
        if (JSON.stringify(works) === JSON.stringify([])) {
            loadWorks();
        }
    }, [visibleWorks, pages, loadWorks, works]);

    const renderPagination = () => {
        let content =[];
        for (let i = 1; i <= pages; i++) {
            content.push(
                <PaginationItem key={`pagination` + i} current={i === currentPage ? true : false}>
                    <PaginationLink 
                        href={`/works/${i}`} 
                        onClick={(evt) => {
                            evt.preventDefault();
                            onPageClick(i);
                        }}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )                    
        }
        return content;
    }

    return <Wrapper>
        <Box sx={{ margin: "2rem 0"}} m={2}>        
            <Button 
                onClick={(evt) => {
                    evt.preventDefault();
                    sort(``);
                }}
                variant="contained"
            >Disable sorting</Button>
            <Button 
                onClick={(evt) => {
                    evt.preventDefault();
                    sort(`title`);
                }}
                variant="contained"
            >Sort by title</Button>
            <Button 
                onClick={(evt) => {
                    evt.preventDefault();
                    sort(`date`);
                }}
                variant="contained"
            >Sort by date</Button>
        </Box>

        <List>
            {
                visibleWorks.map((work) => {
                    return <Card key={work.name + work.id}>
                        <CardImage src={work.cover}/>
                        <HeadingThree color="navyblue">
                            {work.title}
                        </HeadingThree>
                        <CardDescription>
                            {work.description.length > 100 ? `${work.description.slice(0, 100)}...` : work.description}
                        </CardDescription>
                        <CardLink to={`/work/${work.id}`}>
                            Read more
                        </CardLink>
                    </Card>
                })
            }
        </List>
        <Pagination>
            {renderPagination()}        
        </Pagination>
    </Wrapper>
}

const mapDispatchToProps = (dispatch) => ({
    loadWorks() {
        dispatch(FetchWorks())
    },
    onPageClick(newPage) {
        dispatch(changePage(newPage))
    },
    sort(sortType) {
        dispatch(changeSort(sortType))
    }
});

const mapStateToProps = ({DATA}) => ({
    visibleWorks: DATA.visibleWorks,
    currentPage: DATA.currentPage,
    pages: DATA.pages,
    works: DATA.works
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);