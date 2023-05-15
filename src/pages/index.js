import React, { useRef, useState } from "react";
import { Tabs } from "antd";
import Onsite from './component/Onsite'
import Remote from './component/Remote'
import Meeting from './component/Meeting'

const Home = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        { label: 'Onsite', key: 'Onsite', children: <Onsite /> },
        { label: 'Remote', key: 'Remote', children: <Remote /> },
        { label: 'Meeting', key: 'Meeting', children: <Meeting /> },
    ];

    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ padding: 20 }}>
            </Tabs>
        </div>
    );
};

export default Home;
