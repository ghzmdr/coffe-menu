import React, {Component} from 'react'
import TweenLite from 'gsap'

export default class NewsBar extends Component {
  constructor (p) {
    super(p)
    this.animateText = this.animateText.bind(this)
  }

  componentDidMount () {
    this.animateText()
  }

  animateText () {
    const {text} = this.refs
    TweenLite.set(text, {x: '100vh'})
    TweenLite.to(text, 100, {
      x: '-100%',
      onComplete: this.animateText,
      ease: Power0.easeNone,
      force3D: true
    })
  }

  render () {
    const {rules} = this.props

    const orderedRules = this.orderRules(rules)
    const cleanRules = orderedRules.map(r => r.content)

    return <div className="NewsBar">
      <div className="NewsBar__content content" >
        <p ref='text'>
          <b>HOUSE RULES:</b> {cleanRules.join(' • ')} <span style={{paddingLeft: '50vw'}}><b>HOUSE RULES:</b> {cleanRules.join(' • ')}</span>
        </p>
      </div>
    </div>
  }

  orderRules (rules) {
    return rules.sort((a, b) => a.position > b.position)
  }
}
