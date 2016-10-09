import React, {Component} from "react";

if (global.IS_BROWSER) {
    require("./app.styl");
}


class App extends Component {

    constructor(props) {
        super(props);

        this.state ={
            appAlready: false
        }
    }

    componentDidMount() {

        // test
        setTimeout(() => {
            this.setState({
                appAlready: true
            })
        }, 2000);
    }

    render() {

        return (
            <div className="container">

                {this.state.appAlready
                    ? this.props.children
                    : 'Loading...'
                }
            </div>
        )
    }
}

export default App