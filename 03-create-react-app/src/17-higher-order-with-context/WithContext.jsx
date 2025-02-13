import ThemeContext from "./ThemeContext";

function WithThemeContext(Component) {
    return function ThemedComponent(props) {
        return (
            <ThemeContext.Consumer>
                {theme => <Component {...props} {...theme} />}
            </ThemeContext.Consumer>
        );
    };
}

export default WithThemeContext;