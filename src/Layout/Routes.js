import { Layout } from 'antd'
import React from 'react'
import { Route } from 'react-router'
import Footers from '../Components/footer/Footer';
import Headers from '../Components/Header/Header';
import Group from '../assets/Group 906.png'
const { Header, Content, Footer } = Layout;
const Routes = ({ component: Component, ...args }) => {
    
    return (<Route {...args} render={(props) =>
        <Layout className="layout">
            <Header>
                <Headers />    
            </Header>
            <Content style={{ padding: '0 0px' }}>
                <img src={Group} alt="group" style={{width:"100vw"}}/>    
                <Component {...props} />
            </Content>
            <Footer style={{backgroundColor:"black"}}>
                <Footers/>
            </Footer>
        </Layout>



    } />)
}

export default Routes
