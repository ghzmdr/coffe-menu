import React, {Component} from 'react'

const HeaderRow = ({columns, size = 'medium'}) => <div className="HeaderRow row">
  {
    columns.map(
      c => <div className={`HeaderRow__cell column is-${size}`}>
        {c}
      </div>
    )
  }
</div>

const ProductsList =({products, fields}) => <div className="ProductsList">
  {
    products.map(
      p => fields.map(slug => p[slug])
    ).map(fields => <div className="Product row">
      {
        fields.map(cell => <div className="Product__cell column">
          {cell}
        </div>)
      }
    </div>)
  }
</div>

const SubCategory = ({sub, parent, products}) => <div className="SubCategory">
  <HeaderRow columns={parent.columns.map((c, i) => i === 0 ? sub.title : '')} />
  <ProductsList
    products={products.filter(
      p => p.category === parent.slug && p.sub === sub.slug
    )}

    fields={parent.columns.map(c => c.slug)}
  />
</div>

class CategoryPanel extends Component {
  render () {
    const {category, products} = this.props

    const subCategories = []
    let filteredProducts = []

    if (category.sub) {
      category.sub.forEach(s => subCategories.push({
        title: s.title,
        products: products.filter(
          p => (p.category === category.slug) && (p.subCategory === s.slug)
        )
      }))
    } else {
      filteredProducts = products.filter(
        p => p.category === category.slug
      )
    }

    return <div className="Category">
      <HeaderRow columns={category.columns.map(c => c.title)}/>
      {
        subCategories.length
          ? subCategories.map(s => <SubCategory sub={s} parent={category} products={products} />)
          : 'asd'//<ProductsList products={filteredProducts} />
      }
    </div>
  }
}

export default CategoryPanel

