/**
 * @file index.js
 * @description index component
 */

import React from 'react';
import {observer, inject}from 'mobx-react';
import './index.less';

const Index = inject('mainStore')(
    observer((props) => {
        const {count, plusCount} = props.mainStore;
        React.useEffect(() => {
            console.log('render');
        })
        return (
            <div className="index">
                this is index page,
                and a mobx userInfo state {count}
                <button onClick={plusCount}>click</button> to plus 1;
            </div>
        );
    })
)

export default Index;
