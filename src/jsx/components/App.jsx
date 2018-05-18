import React, {Component} from 'react';

import {Provider, create} from 'mini-store';

import Menu from './Menu';
import NewsBar from './NewsBar';

import {fetchData} from '../data';

const config = require('../../../config.json')

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            rules: []
        };

    }

    componentDidMount() {
        fetchData(config.SPACE_ID, config.API_KEY)
            .then(data => this.setState({
                products: data[config.dataMapping.products],
                rules: data[config.dataMapping.rules]
            }))
    }

    render() {
        const {products, rules} = this.state;
        console.log('rul', rules)
        return <div className="Application">
            <Menu products={products}/>
            <NewsBar rules={rules}/>
        </div>
    }
}

export default App;
