import React, {Component} from 'react';

export default class NewsBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            left: 0
        }
    }

    componentDidMount() {
        this._RAF = requestAnimationFrame(this.tick.bind(this))
    }

    tick() {
        // this.setState({left: this.state.left - 0.5});
        this._RAF = requestAnimationFrame(this.tick.bind(this))
    }

    render() {
        return <div className="NewsBar">
            <div className="NewsBar__content content" >
                <p>
                    <b>HOUSE RULES</b>: • NO MINORS • NO HARD DRUGS • NO ALCOHOL • ID REQUIRED • MINIMUM PURCHASE 12E
                </p>
            </div>
        </div>
    }

}
