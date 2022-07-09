import { connect } from "react-redux";
import { resetPage } from "../../../store/actions/action";
import NavigationItem from "../../styled-blocks/navigation-parts/navigation-item/navigation-item";
import NavigationLink from "../../styled-blocks/navigation-parts/navigation-link/navigation-link";
function NavigationItemBlock({text, link, reset}) {
    return <NavigationItem>
        <NavigationLink 
            to={link}
            onClick = {() => {
                reset(1)
            }}
        >
            {text}
        </NavigationLink>
    </NavigationItem>
};

const mapDispatchToProps = (dispatch) => ({
    reset(page) {
        dispatch(resetPage(page))
    },
});

export {NavigationItemBlock};
export default connect(mapDispatchToProps)(NavigationItemBlock);