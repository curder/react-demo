import { Component } from 'react';

const recordLog = (WrappedComponent) => class extends Component {
    UNSAFE_componentWillMount() {
        this.startTime = new Date().getTime();
    }

    componentDidMount() {
        const endTime = new Date().getTime();
        console.log(`Component ${WrappedComponent.name} Render time: ${endTime - this.startTime} ms`);
    }

    render() {
        return <WrappedComponent {...this.props} />;
    }
};

export default recordLog