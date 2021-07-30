import React, {useState}from 'react';
import { Container, Logo, SearchInput } from './styled';


export default ({search, onSearch}) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true);

    const hendleInputFocus = () =>{
        setInputActive(true);
    }
    const hendleInputBlur = () =>{
        if(search == ''){
            setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }
    return(
        <Container>
            <Logo src="/assets/logo.png"/>
            <SearchInput 
                type="text" 
                placeholder="Digite um produto..."
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={hendleInputFocus}
                onBlur={hendleInputBlur}
            />
        </Container>
    );
}