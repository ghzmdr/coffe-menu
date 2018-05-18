import React, {Component} from 'react';

class ProductEntry extends Component {
    render() {
        const {product} = this.props;

        let isIndica = product.kind.indexOf('Indica') != -1;
        let isSativa = product.kind.indexOf('Sativa') != -1;

        let kindTagColor = 'success';

        if (isIndica) {
            kindTagColor = 'warning';
        }

        if (isSativa) {
            kindTagColor = 'danger';
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
                    <span className={`tag is-${kindTagColor} is-size-5 ProductEntry__label`}>{product.kind}</span>
                </td>

                <td className="">{/*<p>{product.position}</p>*/}</td>
                {
                    prices.map((p, i) => <td key={i} className="ProductEntry__price">
                        {p ? `${p}€` : ''}
                    </td>)
                }
        </tr>
    }
}

export default ProductEntry;
