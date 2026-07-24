function ListofPlayers({ players }) {

    return (
        <div>

            {players.map((player, index) => (

                <li key={index}>
                    Mr. {player.name} <span>{player.score}</span>
                </li>

            ))}

        </div>
    );

}

export default ListofPlayers;