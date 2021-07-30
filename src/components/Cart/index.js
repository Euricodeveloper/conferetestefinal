import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText,
    ProductSize,
    ProductTotalValue
} from './styled';




export default () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.cart.posts);
    const [showCart, setShowCart] = useState(true);
    const [valor_total, setValorTotal] = useState(null)
    const [valor_qtd, setValorQtd] = useState(0)
    const [totalvalue, setTotalvalue] = useState(0)
    const [totalqtd, setTotalQtd] = useState(0)
    const handleCartClick = () => {
        setShowCart(!showCart);
    }

    useEffect(() => {
        setValorTotal(posts.reduce((a, b) => a + b.actual_price, 0))
        setValorQtd(posts.reduce((a, b) => a + b.qt, 0))
    }, [])

    

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload:{key, type}
        })
    }
    return(
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu Carrinho({posts && posts.length})</CartText>
                {showCart &&
                <CartIcon src="/assets/down.png"/>
                }
            </CartHeader>
            <CartBody show={showCart}>
                <ProductArea>
                    {posts && posts.map((item, index) => (
                    <ProductItem key={index}>
                        <ProductPhoto src={item.image}/>
                        <ProductInfoArea>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice> R$ {item.actual_price}</ProductPrice>
                            <ProductSize>Tamanho: M</ProductSize>
                        </ProductInfoArea>
                        <ProductQuantityArea>
                            <ProductQtIcon 
                            src="/assets/minus.png"
                            onClick={()=>handleProductChange(index, '-')}
                            />
                            <ProductQtText>{item.qt}</ProductQtText>
                            <ProductQtIcon 
                            src="/assets/plus.png"
                            onClick={()=>handleProductChange(index, '+')}
                            />
                            
                        </ProductQuantityArea>
                </ProductItem>
                ))}
                <ProductTotalValue>
                <div>
                    <div>Total Qtd:{totalqtd}</div>
                    <div>Total R${totalvalue}</div>
                </div>                 
                </ProductTotalValue>          
                </ProductArea>
            </CartBody>
        </CartArea>
    );

}
