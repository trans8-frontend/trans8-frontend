import React from "react";
import { Tabs } from "antd";
import UpdateInfo from '../PaymentPage/UpdateInfo'
import './PaymentPannel'
const { TabPane } = Tabs;


const PaymentPannel = () => {
  return (
    <div className="PaymentPannel">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="UPDATE INFO" key="1">
         <UpdateInfo/>
        </TabPane>
        <TabPane tab="CHANGE PASSWORD" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="PAYMENT INFO" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PaymentPannel;
