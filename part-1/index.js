const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jim" />
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById("root")
);
