function ScoreBelow70({ players }) {

    const players70 = players.filter(
        player => player.score <= 70
    );

    return (

        <div>

            {players70.map((player, index) => (

                <li key={index}>
                    Mr. {player.name} {player.score}
                </li>

            ))}

        </div>

    );

}

export default ScoreBelow70;