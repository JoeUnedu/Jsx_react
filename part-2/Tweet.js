function Tweet({ username, name, date, message }) {
  const fancyDate = moment(date).fromNow();
  return (
    // username & name of the user who wrote the tweet,

    <div>
      <span>
        <strong>{name}</strong>&nbsp;@{username}&nbsp;-&nbsp;{fancyDate}
      </span>
      <p>{message}</p>
      <hr />
    </div>
  );
}
