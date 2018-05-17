import React, {Component} from 'react';

import {Provider, create} from 'mini-store';

import Menu from './Menu';
import NewsBar from './NewsBar';

const products = require('../../data/products.json');


class App extends Component {

    constructor(props) {
        super(props);

        this.store = create({})
    }

    render() {
        return <div className="Application">
            <Provider store={this.store}>
                <div>
                    <Menu products={products}/>
                    <NewsBar/>
                </div>
            </Provider>
        </div>
    }
}

export default App;
