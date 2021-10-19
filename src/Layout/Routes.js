import { Layout } from 'antd'
import React from 'react'
import { Route } from 'react-router'

const { Header, Content, Footer } = Layout;
const Routes = ({ component: Component, ...args }) => {
    return (<Route {...args} render={(props) =>
        <Layout className="layout">
            <Header>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Component {...props} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>



    } />)
}

export default Routes
