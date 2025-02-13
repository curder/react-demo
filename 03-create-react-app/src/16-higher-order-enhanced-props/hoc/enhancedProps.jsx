import { Component } from 'react';

export const EnhancedProps = (WrappedComponent) => class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'Curder',
                age: 18,
            }
        }
    }
    render() {
        return <WrappedComponent {...this.state.userInfo} {...this.props} />;
    }
};

export default EnhancedProps;