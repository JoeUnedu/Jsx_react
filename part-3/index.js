const App = () => {

    return (
        <div>
            <Person name="OverEightChars" age={18} />
            <Person name="Exactly8" age={19} />
            <Person name="Under8" age={19} />
            <Person name="Jim G." age={19} hobbies={["Photography", "Scuba Diving", "Underwater basket weaving"]} />
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById("root")
);
