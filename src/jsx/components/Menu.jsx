import React, {Component} from 'react';

import ProductsList from './ProductsList';
import ProductsHeader from './ProductsHeader';

class Menu extends Component {

    render() {
        const {products} = this.props;

        if (!products) return null;

        return <div className="Menu columns is-gapless">
            <div className="column is-half">
                <table className="table">

                    <ProductsHeader tabs="Kush,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.category === 'Kush')}/>

                    <ProductsHeader tabs="Haze,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.category === 'Haze')}/>

                    <ProductsHeader tabs="Classics,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.category === 'Classics')}/>

                </table>
            </div>
            <div className="column is-half">
                <table className="table">

                    <ProductsHeader tabs="Hashish,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.category === 'Hash')}/>
                </table>
                <table className="table">
                    <ProductsHeader tabs="Joints,,,,,1 piece"/>
                    <ProductsList products={products.filter(p => p.category === 'Prerolled')}/>

                    <ProductsHeader tabs="Edibles,,,,,1 piece"/>
                    <ProductsList products={products.filter(p => p.category === 'Edibles')}/>

                </table>
                <table className="table">

                    <ProductsHeader tabs="Services,,,,,,Price"/>

                    <tbody className="ProductsList">
                        <tr className="ProductEntry">
                            <td className="ProductEntry__name">Internet</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ProductEntry__price">1.6€ / 20 Min</td>
                        </tr>
                        <tr width="100%">
                            <td className="ProductEntry__name">Pooltable</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ProductEntry__price">2€ / 1 Game</td>
                        </tr>
                    </tbody>

                    <ProductsHeader tabs="Tools,,,,,,Deposit"/>
                    <tbody>
                        <tr className="ProductEntry">
                            <td className="ProductEntry__name">Bongs, Pipes, Grinders</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ProductEntry__price">5€</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }

}

export default Menu;
