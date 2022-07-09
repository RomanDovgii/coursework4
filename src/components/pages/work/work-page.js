import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { FetchWork } from "../../../store/actions/api-actions";
import { ApiEndpoints } from "../../../utils/constants";
import LoadingSpinner from "../../blocks/spinner/spinner";
import Cover from "../../styled-blocks/text-parts/cover/cover";
import HeadingOne from "../../styled-blocks/text-parts/heading-one/heading-one";
import HeadingThree from "../../styled-blocks/text-parts/heading-three/heading-three";
import Paragraph from "../../styled-blocks/text-parts/paragraph/paragraph";
import Wrapper from "../../styled-blocks/wrapper/wrapper";

function WorkPage({loadWork, currentWorkData}) {
    const path = window.location.pathname;
    const elementsOfPath = path.split('/');
    const id =elementsOfPath[elementsOfPath.length-1]
    if (Object.keys(currentWorkData).length === 0) {
        loadWork(`${id}`)
    } 
    return (
        <Wrapper>
        {Object.keys(currentWorkData).length === 0 ?
        <LoadingSpinner/>
        : <Fragment>
            <Cover src={currentWorkData.cover}/>
            <HeadingOne>{currentWorkData.title}</HeadingOne>
            <HeadingThree>author: {currentWorkData.author}</HeadingThree>
            <Paragraph>{currentWorkData.description}</Paragraph>
        </Fragment>
        }
        </Wrapper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadWork(id) {
        dispatch(FetchWork(id))
    },
});

const mapStateToProps = ({DATA}) => ({
    currentWorkData: DATA.currentWorkData,
});


export {WorkPage};
export default connect(mapStateToProps, mapDispatchToProps)(WorkPage);