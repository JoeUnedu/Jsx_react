const App = () => {

    const tweetMsg2 = "@NASA TV is live now for the 10:35am ET undocking of the @SpaceX #CargoDragon today. It returns to Earth Friday packed with science and cargo for retrieval. https://nasa.gov/live"
    const tweetMsg3 = "I’ve always been a dreamer. My mum taught me to never give up and to reach for the stars. On July 11, it’s time to turn that dream into a reality aboard the next @VirginGalactic spaceflight https://virg.in/4wiq #Unity22"

    return (
        <div>
            <Tweet username="jrnyryche" name="Jim G" date={Date.now()} message="Is this on?" />
            <Tweet username="Space_Station" name="International Space Station" date="2021-07-08T10:00-04" message={tweetMsg2} />
            <Tweet username="richardbranson" name="Richard Branson" date="2021-07-01T18:38-04" message={tweetMsg3} />
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById("root")
);
