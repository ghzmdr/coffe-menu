import React, {Component} from 'react';

import ProductEntry from './ProductEntry';

import {arrayMove} from '../../utils';

class ProductsList extends Component {

    render() {
        const {products, suffix} = this.props;

        let sorted = products.sort(this.sortProduct);
        sorted = this.resort(sorted);
        sorted = this.resort(sorted);


        return <tbody className="ProductsList">
            {
                sorted.map((p, i) => <ProductEntry product={p} key={i} suffix={suffix}/>)
            }
        </tbody>
    }

    sortProduct(a, b) {
        if (a.price === b.price) {
            return a.name > b.name
        } else {
            return a.price < b.price
        }
    }

    resort(arr) {
        arr.forEach((item, index) => {
            if (item.position && item.position -1 !== index) {
                arrayMove(arr, index, item.position -1)
            }
        })

        return arr;
    }

}

export default ProductsList;
