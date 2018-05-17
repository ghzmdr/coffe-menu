import React, {Component} from 'react';

import ProductsList from './ProductsList';
import ProductsHeader from './ProductsHeader';

class Menu extends Component {

    render() {
        const {kinds, products} = this.props;

        return <div className="Menu columns is-gapless">
            <div className="column is-half">
                <table className="table">

                    <ProductsHeader tabs="Kush,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.kind === 'kush')}/>

                    <ProductsHeader tabs="Haze,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.kind === 'haze')}/>

                    <ProductsHeader tabs="Classics,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.kind === 'classic')}/>

                </table>
            </div>
            <div className="column is-half">
                <table className="table">

                    <ProductsHeader tabs="Hashish,,,1g,4g,5g"/>
                    <ProductsList products={products.filter(p => p.kind === 'hash')}/>
                </table>
                <table className="table">
                    <ProductsHeader tabs="Joints,,,,,1 piece"/>
                    <ProductsList products={products.filter(p => p.kind === 'joint')}/>

                    <ProductsHeader tabs="Edibles,,,,,1 piece"/>
                    <ProductsList products={products.filter(p => p.kind === 'edibles')}/>

                </table>
                <table className="table">

                    <ProductsHeader tabs="Services,,,,,,"/>

                    <tbody className="ProductsList">
                        <tr className="ProductEntry">
                            <td className="ProductEntry__name">Internet</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ProductEntry__price" style={{textAlign: "right"}}>1.6€ / 20 Min</td>
                        </tr>
                        <tr width="100%">
                            <td className="ProductEntry__name">Pooltable</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ProductEntry__price" style={{textAlign: "right"}}>2€ / 1 Game</td>
                        </tr>
                    </tbody>

                    <ProductsHeader tabs="Tools,,,,,,"/>
                    <tbody>
                        <tr className="ProductEntry">
                            <td className="ProductEntry__name">Bongs, Pipes, Grinders</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ProductEntry__price" style={{textAlign: "right"}}>5€ Deposit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }

}

export default Menu;
