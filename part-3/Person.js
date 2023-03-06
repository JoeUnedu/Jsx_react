function Person({ name, age, hobbies = [] }) {

    const ageLimit = 18;
    const nameMaxLen = 8;
    const nameSubLen = 6;

    return (
        // username & name of the user who wrote the tweet, 
        //  the date of the tweet, and the message being tweeted
        <div>
            <p>Learn some information about this person</p>
            <h3>name: {name.length > nameMaxLen ? name.substr(0, nameSubLen) : name}</h3>
            <h3>{age > ageLimit ? "please go vote!" : `you must be ${ageLimit}`}</h3>
            <span>{hobbies.length > 0 ? `${name} is interested in the following hobbies:` : ""}</span>
            <ul>{hobbies.map(hobby => <li>{hobby}</li>)}</ul>
            <hr />
        </div>
    );
}
