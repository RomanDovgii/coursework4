import './App.css';
import Paragraph from '../../styled-blocks/text-parts/paragraph/paragraph';
import HeadingOne from '../../styled-blocks/text-parts/heading-one/heading-one';
import HeadingTwo from '../../styled-blocks/text-parts/heading-two/heading-two';
import HeadingThree from '../../styled-blocks/text-parts/heading-three/heading-three';
import CardLink from '../../styled-blocks/text-parts/card-link/card-link';
import CardDescription from '../../styled-blocks/text-parts/card-description/card-description';
import Pagination from '../../styled-blocks/navigation-parts/pagination/pagination';
import PaginationItem from '../../styled-blocks/navigation-parts/pagination-item/pagination-item';
import PaginationLink from '../../styled-blocks/navigation-parts/pagination-link/pagination-link';
import Navigation from '../../styled-blocks/navigation-parts/navigation/navigation';
import NavigationItem from '../../styled-blocks/navigation-parts/navigation-item/navigation-item';
import NavigationLink from '../../styled-blocks/navigation-parts/navigation-link/navigation-link';

function Main() {
  return (
    <div className="App">
      <HeadingOne>Test</HeadingOne>
      <HeadingTwo>Test</HeadingTwo>
      <HeadingThree>Test</HeadingThree>
      <Paragraph>test</Paragraph>
      <CardLink>test</CardLink>
      <CardDescription>test test test</CardDescription>
      <Pagination>
        <PaginationItem>
          <PaginationLink>Test</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>Test</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>Test</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>Test</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>Test</PaginationLink>
        </PaginationItem>
      </Pagination>
      <Navigation>
        <NavigationItem>
          <NavigationLink>Test</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Test</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Test</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Test</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Test</NavigationLink>
        </NavigationItem>
      </Navigation>
    </div>
  );
}

export default Main;
