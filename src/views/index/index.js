/**
 * @file index.js
 * @description index component
 */

import React, {useContext} from 'react';
import {observer}from 'mobx-react';
import './index.less';
import {StoreContext} from 'Src/store';

const Index = observer(() => {
    const {count, plusCount} = useContext(StoreContext).mainStore;
    return (
        <div className="index">
            this is index page,
            and a mobx userInfo state {count}
            <button onClick={plusCount}>click</button> to plus 1;
        </div>
    );
})

export default Index;
