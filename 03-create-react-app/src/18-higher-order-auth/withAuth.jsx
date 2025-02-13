function withAuth(Component) {
    return (props) => {

        const token = localStorage.getItem('token');
        console.log(token)
        if (!token) {
            return <h2>Please login</h2>;
        }

        return <Component {...props} />;
    };
}

export default withAuth;