import List from "../../styled-blocks/content-blocks/list/list";
import Wrapper from "../../styled-blocks/wrapper/wrapper";
import Card from "../../styled-blocks/content-blocks/card/card";
import HeadingThree from "../../styled-blocks/text-parts/heading-three/heading-three";
import { Fragment, useEffect } from "react";
import CardImage from "../../styled-blocks/text-parts/card-image/card-image";
import CardDescription from "../../styled-blocks/text-parts/card-description/card-description";
import CardLink from "../../styled-blocks/text-parts/card-link/card-link";
import Pagination from "../../styled-blocks/navigation-parts/pagination/pagination";
import PaginationItem from "../../styled-blocks/navigation-parts/pagination-item/pagination-item";
import PaginationLink from "../../styled-blocks/navigation-parts/pagination-link/pagination-link";
import { connect } from "react-redux";
import { FetchWorks } from "../../../store/actions/api-actions";
import { changePage, changeSort } from "../../../store/actions/action";
import { Box } from "@mui/material";
import Button from "../../styled-blocks/form-parts/button/button";
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from "../../blocks/spinner/spinner";

function MainPage(props) {
    const {visibleWorks, works, currentPage, pages, loadWorks, onPageClick, sort, sortType} = props;

    useEffect(() => {
        if (JSON.stringify(works) === JSON.stringify([])) {
            loadWorks();
        }
    }, [visibleWorks, pages, loadWorks, works]);

    const navigate = useNavigate();

    const navigateToFirst = () => {
        navigate(`/works/1`);
    }

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
                            navigate(`/works/${i}`)
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
                active={sortType === "" ? true : false}
                onClick={(evt) => {
                    evt.preventDefault();
                    sort(``);
                    navigateToFirst();
                }}
            >Disable sorting</Button>
            <Button 
                active={sortType === "title" ? true : false}
                onClick={(evt) => {
                    evt.preventDefault();
                    sort(`title`);
                    navigateToFirst();
                }}
            >Sort by title</Button>
            <Button
                active={sortType === "date" ? true : false}
                onClick={(evt) => {
                    evt.preventDefault();
                    sort(`date`);
                    navigateToFirst();
                }}
            >Sort by date</Button>
        </Box>

        {JSON.stringify(works) === JSON.stringify([]) ?
        <LoadingSpinner/>
        : <Fragment>
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
        </Fragment>
        } 
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
    works: DATA.works,
    sortType: DATA.sort
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);