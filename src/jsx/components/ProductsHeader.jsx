import React, {Component} from 'react';

class ProductsHeader extends Component {

    render() {
        const {tabs} = this.props;

        return <thead className="ProductsHeader ProductsHeader--with-prices">
            <tr>
            {
                tabs.split(',').map((t, i) => <th key={i}>{t}</th>)
            }
            </tr>
        </thead>
    }

}

export default ProductsHeader;
