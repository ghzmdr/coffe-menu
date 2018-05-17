import React, {Component} from 'react';

import ProductEntry from './ProductEntry';

class ProductsList extends Component {

    render() {
        const {products} = this.props;

        return <tbody className="ProductsList">
            {
                products.map((p, i) => <ProductEntry product={p} key={i}/>)
            }
        </tbody>
    }

}

export default ProductsList;
