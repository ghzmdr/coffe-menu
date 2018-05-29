import React, {Component} from 'react';

import ProductsList from './ProductsList';
import ProductsHeader from './ProductsHeader';

class Menu extends Component {

    render() {
        const {products, tools, services} = this.props;

        if (!products) return null;

        return <div className="Menu columns is-gapless">
            <div className="column is-half">
                <table className="table">

                    <ProductsHeader tabs="Kush,,per gram,4+ g"/>
                    <ProductsList products={products.filter(p => p.category === 'Kush')} suffix={'/g'}/>

                    <ProductsHeader tabs="Classics,,per gram,4+ g"/>
                    <ProductsList products={products.filter(p => p.category === 'Classics')} suffix={'/g'}/>

                </table>
            </div>
            <div className="column is-half">
                <table className="table">

                    <ProductsHeader tabs="Haze,,per gram,4+ g"/>
                    <ProductsList products={products.filter(p => p.category === 'Haze')} suffix={'/g'}/>

                    <ProductsHeader tabs="Hashish,,per gram,4+ g"/>
                    <ProductsList products={products.filter(p => p.category === 'Hashish')} suffix={'/g'}/>

                </table>
                <table className="table">

                    <ProductsHeader tabs="Prepacked,,,1 piece"/>
                    <ProductsList products={products.filter(p => p.category === 'Prerolled' || p.category === 'Edibles')}/>

                </table>
            </div>
        </div>
    }

}

export default Menu;
