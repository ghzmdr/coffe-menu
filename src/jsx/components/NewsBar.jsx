import React, {Component} from 'react';

export default class NewsBar extends Component {

    render() {
        const {rules} = this.props;

        const orderedRules = this.orderRules(rules);
        const cleanRules = orderedRules.map(r => r.content);

        return <div className="NewsBar">
            <div className="NewsBar__content content" >
                <p>
                    <b>HOUSE RULES</b>: {cleanRules.join(' • ')}
                </p>
            </div>
        </div>
    }

    orderRules(rules) {
        return rules.sort((a, b) => a.position > b.position)
    }

}
