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

                    <ProductsHeader tabs="Kush,,up to 4g,4g and up"/>
                    <ProductsList products={products.filter(p => p.category === 'Kush')} suffix={'/g'}/>

                    <ProductsHeader tabs="Classics,,up to 4g,4g and up"/>
                    <ProductsList products={products.filter(p => p.category === 'Classics')} suffix={'/g'}/>

                    <ProductsHeader tabs="Edibles,,,1 piece"/>
                    <ProductsList products={products.filter(p => p.category === 'Edibles')}/>
                </table>
            </div>
            <div className="column is-half">
                <table className="table">

                    <ProductsHeader tabs="Haze,,up to 4g,4g and up"/>
                    <ProductsList products={products.filter(p => p.category === 'Haze')} suffix={'/g'}/>

                    <ProductsHeader tabs="Hashish,,up to 4g,4g and up"/>
                    <ProductsList products={products.filter(p => p.category === 'Hashish')} suffix={'/g'}/>

                </table>
                <table className="table">

                    <ProductsHeader tabs="Joints,,,1 piece"/>
                    <ProductsList products={products.filter(p => p.category === 'Prerolled')}/>

                </table>
            </div>
        </div>
    }

}

export default Menu;
