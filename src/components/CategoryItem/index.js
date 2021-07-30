import React from 'react';
import {Container, Categoryimage} from './styled';


export default ({data, activeCategory, setActiveCategory}) => {
    const handleCategoryClick = () =>{
        setActiveCategory(data.id);
    }


    return(
        <Container active={activeCategory}  
        id={data.id}
        onClick={handleCategoryClick}
        data-tip={data.name}
        data-for="tip-top"

        >
            <Categoryimage src={data.image}/>
        </Container>
    );
}