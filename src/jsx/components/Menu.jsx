import React, {Component} from 'react'

import CategoryPanel from './CategoryPanel'

class Menu extends Component {

  render () {
    const {products} = this.props
    console.log(products)

    const categories = [
      {
        slug: 'Weed',
        title: 'Flowers',
        sub: [
          {slug: 'Kush', title: 'Kush'},
          {slug: 'Classics', title: 'Classics'},
          {slug: 'Haze', title: 'Haze'}
        ],
        columns: [
          {title: 'Flowers', slug: 'name'},
          {title: '', slug: 'kind'},
          {title: 'up to 3,99g', slug: 'price'},
          {
            title: 'from 4g to 5g',
            slug: 'price',
            transform: p => (p * 0.9).toFixed(2).replace('.', ',')
          }
        ]}
    ]

    if (!products) return null

    return <div className="Menu">
      {
        categories.map(c => <CategoryPanel
          category={c}
          products={products}
        />)
      }
    </div>

    // <div>
    //   <div className="column is-half">
    //     <table className="table">

    //       <ProductsHeader tabs="Kush,,per gram,4+ g"/>
    //       <ProductsList products={products.filter(p => p.category === 'Kush')} suffix={'/g'}/>

    //       <ProductsHeader tabs="Classics,,per gram,4+ g"/>
    //       <ProductsList products={products.filter(p => p.category === 'Classics')} suffix={'/g'}/>

    //     </table>
    //   </div>
    //   <div className="column is-half">
    //     <table className="table">

    //       <ProductsHeader tabs="Haze,,per gram,4+ g"/>
    //       <ProductsList products={products.filter(p => p.category === 'Haze')} suffix={'/g'}/>

    //       <ProductsHeader tabs="Hashish,,per gram,4+ g"/>
    //       <ProductsList products={products.filter(p => p.category === 'Hashish')} suffix={'/g'}/>

    //     </table>
    //     <table className="table">

    //       <ProductsHeader tabs="Prepacked,,,1 piece"/>
    //       <ProductsList products={products.filter(p => p.category === 'Prerolled' || p.category === 'Edibles')}/>

    //     </table>
    //   </div>
    // </div>
  }

}

export default Menu;
