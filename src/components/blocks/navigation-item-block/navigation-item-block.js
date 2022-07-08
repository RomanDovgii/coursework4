import NavigationItem from "../../styled-blocks/navigation-parts/navigation-item/navigation-item";
import NavigationLink from "../../styled-blocks/navigation-parts/navigation-link/navigation-link";
function NavigationItemBlock({text, link}) {
    return <NavigationItem>
        <NavigationLink to={link}>
            {text}
        </NavigationLink>
    </NavigationItem>
};

export default NavigationItemBlock;