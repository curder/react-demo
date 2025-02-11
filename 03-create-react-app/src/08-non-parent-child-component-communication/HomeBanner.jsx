import ThemeContext from "./contexts/theme";

function HomeBanner() {

    return (
        <div>
            <h2>HomeBanner</h2>
            <ThemeContext.Consumer>
                {
                    theme => {
                        return (
                            <div style={{ fontSize: theme.fontSize, color: theme.color }}>
                                <h2>HomeBanner</h2>
                                <p>HomeBanner content...</p>
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
        </div>
    )
}

export default HomeBanner