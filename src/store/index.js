/**
 * @file index.js
 * @description store 入口
 */

import React from 'react';
import UserInfo from './modules/userInfo';
import Main from './modules/main';

export default class RootStore {
    constructor() {
        this.userStore = new UserInfo(this);
        this.mainStore = new Main(this);
    }
}