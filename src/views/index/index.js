/**
 * @file index.js
 * @description index component
 */

import React from 'react';
import {observer}from 'mobx-react';
import './index.less';
import useStores from 'Src/store/useStores';

const Index = observer(() => {
    const {count, plusCount} = useStores().mainStore;
    return (
        <div className="index">
            this is index page,
            and a mobx userInfo state {count}
            <button onClick={plusCount}>click</button> to plus 1;
        </div>
    );
})

export default Index;
