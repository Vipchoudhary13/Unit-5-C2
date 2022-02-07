export const GameItem = ({gamename, gameauthor, gametags, gameprice, id, handleDelete}) => {
    return <>
        <table>
            <tr>
                <th>game name</th>
                <th>game author</th>
                <th>game tags</th>
                <th>game price</th>
            </tr>
            <tr>
                <td>{gamename}</td>
                <td>{gameauthor}</td>
                <td>{gametags}</td>
                <td>{gameprice}</td>
                <td><button style={{
                    backgroundColor: "skyblue",
                    cursor: "pointer"
                }} onClick={() => {
                    handleDelete(id)
                }}>Delete</button></td>
            </tr>
        </table>
    </>
}