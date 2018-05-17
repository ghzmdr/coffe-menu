import React, {Component} from 'react';

class ProductEntry extends Component {
    render() {
        const {product} = this.props;

        let isIndica = product.species.indexOf('Indica') != -1;
        let isSativa = product.species.indexOf('Sativa') != -1;

        let speciesTagColor = 'success';

        if (isIndica) {
            speciesTagColor = 'warning';
        }

        if (isSativa) {
            speciesTagColor = 'danger';
        }

        const prices =  product.hasDiscount ? [
            product.price,
            (product.price * 0.9 * 4).toFixed(2).replace('.00', ''),
            (product.price * 0.9 * 5).toFixed(2).replace('.00', '')
        ] : [
            null,
            null,
            product.price
        ]

        return <tr className="ProductEntry">
                <td className="ProductEntry__name">{product.name}</td>

                <td>
                    <span className={`tag is-${speciesTagColor} is-size-5 ProductEntry__label`}>{product.species}</span>
                </td>

                <td className="">{/*<p>{product.copy}</p>*/}</td>
                {
                    prices.map((p, i) => <td key={i} className="ProductEntry__price">
                        {p ? `${p}€` : ''}
                    </td>)
                }
        </tr>
    }
}

export default ProductEntry;
