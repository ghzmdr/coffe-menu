import React, {Component} from 'react'

class ProductEntry extends Component {
  render () {
    const {product, suffix} = this.props

    let isIndica = product.kind.indexOf('Indica') != -1
    let isSativa = product.kind.indexOf('Sativa') != -1

    let kindTagColor = 'success'

    if (isIndica) {
      kindTagColor = 'warning'
    }

    if (isSativa) {
      kindTagColor = 'danger'
    }

    const prices = product.hasDiscount ? [
      product.price.toFixed(2).replace('.00', '.-').replace('.', ','),
      (product.price * 0.9).toFixed(2).replace('.00', '.-').replace('.', ',')
    ] : [
      null,
      product.price
    ]

    return <tr className="ProductEntry">
      <td className="ProductEntry__name">{product.name}</td>

      <td>
        <span className={`tag is-${kindTagColor} is-size-5 ProductEntry__label`}>{product.kind}</span>
      </td>

      {
        prices.map((p, i) => <td key={i} className="ProductEntry__price">
          {p ? `€ ${p}` : ''}{i > 0 && suffix ? suffix : ''}
        </td>)
      }
    </tr>
  }
}

export default ProductEntry
