import React from 'react';
import {
    Container,
    ProductPhotoArea,
    ProductInfoArea,
    ProductButtonArea,
    ProductPhoto,
    ProductName,
    ProductPrice,
    ProductPromo,
    ProductButton
} from './styled';


export default ({data, onClick})=> {

    const handleClick = () =>{
        onClick(data);
    }

    return(
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image}/>
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.regular_price}</ProductPrice>
                <ProductPromo>R$ {data.actual_price}</ProductPromo>
            </ProductInfoArea>
            <ProductButtonArea>
                    <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>
    );
}