import React, { useState, useEffect }  from 'react';
import {useDispatch} from 'react-redux';
import {
    Container,
    ProductArea,
    ProdcutButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductSizeArea,
    ProductName,
    ProductColor,
    ProductButton,
    ProductSizes,
    ProductPrice,
    ProductQuantityArea,
    ProductQuantity,
    ProductQtImage,
    ProductQtText
} from './styled';



export default ({data, setStatus}) => {
    const [qt, setQt] = useState(1);

    useEffect(()=>{
        setQt(1);
    },[data]);

    const dispatch = useDispatch();

    const handleCancelButton = () =>{
        setStatus(false);
    }

    const handleAddToCart = ()=> {
        
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data},
            qt: qt
        })


        setStatus(false);
    }

    const handleMinusQt = () => {
        if(qt >= 1){
            setQt(qt - 1);
        }
        console.log(qt)
    }

    const handlePlusQt = () => {
        setQt(qt + 1);
    }



    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image}/>
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductColor>{data.color}</ProductColor>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png"/>
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png"/>
                        </ProductQuantity>
                    </ProductQuantityArea>
                    <ProductSizeArea>
                        <ProductSizes>
                            Tamanhos:
                        </ProductSizes>
                        <ProductPrice>
                            R$ {(data.actual_price * qt).toFixed(2)}
                        </ProductPrice>
                    </ProductSizeArea>
                </ProductInfoArea>
            </ProductArea>
            <ProdcutButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProdcutButtons>
        </Container>
    );
}