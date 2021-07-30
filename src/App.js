import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import { Container, Menu, PageBody } from './AppStyleds';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/Menuitem';
import Cart from './components/Cart';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Inicio" icon="/assets/store.png" link="/"/>
                    <MenuItem title="Carrinho/entregas" icon="/assets/order.png" link="/orders"/>
                    <MenuItem title="Minha conta" icon="/assets/profile.png" link="/profile"/>
                </Menu>
                <PageBody>
                    <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <PrivateRoute path="/orders">
                        <div>Tela de pedidos</div>
                    </PrivateRoute>
                    <PrivateRoute path="/profile">
                        <div>Tela de perfil</div>
                    </PrivateRoute>
                    <Route path="/tela2/:nome">
                        <Tela2Screen />
                    </Route>
                </Switch>
                </PageBody>
                <Cart/>
                <ReactTooltip id="tip-top" place="top" effect="solid"/>
                <ReactTooltip id="tip-right" place="right" effect="solid"/>
            </Container>
        </BrowserRouter>
    );
}