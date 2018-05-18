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
                    <ProductsList products={products.filter(p => p.category === 'Hashish')}/>
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
                        {
                            services.map((s, i) => <tr key={i} className="ProductEntry">
                                <td className="ProductEntry__name">{s.name}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="ProductEntry__price">{s.price}</td>
                            </tr>)
                        }
                    </tbody>

                    <ProductsHeader tabs="Tools,,,,,,Deposit"/>
                    <tbody>
                        {
                            tools.map((t, i) => <tr key={i} className="ProductEntry">
                                <td className="ProductEntry__name">{t.name}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="ProductEntry__price">{t.price}€</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    }

}

export default Menu;
