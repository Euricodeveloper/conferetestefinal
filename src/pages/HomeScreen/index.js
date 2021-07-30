import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { Container, 
        CategoryArea, 
        CategoryList,
        ProductArea,
        ProductList,
        ProductPaginationArea,
        ProductPaginationItem
    } from './styled';

import api from '../../api'

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal'
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const[categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');

    
    const [activeCategory, setActiveCategory] = useState([]);
    const [activePage, setActivePage] = useState(0);

    const[modalStatus, setModalStatus] = useState(false);
    const[modalData, setModalData] = useState({});


    useEffect(()=>{
        const getCategories = async () =>{
        const cat = await api.getCategories();
        setCategories(cat);
        ReactTooltip.rebuild();
        };

        getCategories();
    }, []);

    const getProducts = async () => {
        const prods = await api.getProducts(activeSearch, activePage, activeCategory);
        setPosts(prods);
        setTotalPages(prods.index);
        setActivePage(prods.index);
    }

    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
                setActiveSearch(headerSearch);
        }, 2000)
    },[headerSearch]);

    useEffect(()=>{
        setPosts([]);
        getProducts();
    }, [activeSearch, activeCategory, activePage]);

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>

                <>

                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem 
                        data={{
                            id:0, 
                            name:'Todas as Categorias', 
                            image:'/assets/loja-online.png'}}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            />
                    </CategoryList>
                </CategoryArea>
                
                {posts.length > 0 &&
                    <ProductArea>
                        <ProductList>
                            {posts.map((item, index) => {
                               return(
                                <ProductItem
                                    key={index}
                                    data={item}
                                    onClick={handleProductClick}
                                />)
                            })}
                        </ProductList>
                    </ProductArea>
                }

                {totalPages > 0 &&
                    <ProductPaginationArea>
                           {Array(totalPages).fill(0).map((item, index)=>(
                               <ProductPaginationItem 
                               key={index} 
                               activePage={activePage}
                               current={index + 1}
                               onClick={()=>setActivePage(index + 1)}>
                                    
                                    {index + 1}
                               </ProductPaginationItem>
                           ))}
                    </ProductPaginationArea>
                }
                </>            
            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus}/>
            </Modal>
        </Container>
    );
}