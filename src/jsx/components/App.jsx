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
            tools: [],
            services: [],
            rules: []
        };

    }

    componentDidMount() {
        fetchData(config.SPACE_ID, config.API_KEY)
            .then(data => this.setState({
                products: data[config.dataMapping.products],
                tools: data[config.dataMapping.tools],
                services: data[config.dataMapping.services],
                rules: data[config.dataMapping.rules]
            }))
    }

    render() {
        const {products, tools, services, rules} = this.state;
        console.log('rul', rules)
        return <div className="Application">
            <Menu products={products} tools={tools} services={services}/>
            <NewsBar rules={rules}/>
        </div>
    }
}

export default App;
