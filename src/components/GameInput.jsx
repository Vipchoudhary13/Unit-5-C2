import { useState } from "react"

export const GameInput = ({handelClick}) => {
    const [gamename, setGamename] = useState("");
    const [gameauthor, setGameauthor] = useState("");
    const [gametags, setGametags] = useState("");
    const [gameprice, setGameprice] = useState();
    return <div>
        <h1>Game Store...</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <input onChange={(e) => {
                setGamename(e.target.value);
            }} name="gamename" type="text" placeholder="game name..." /><br></br>

            <input onChange={(e) => {
                setGameauthor(e.target.value);
            }} name="gameauthor" type="text" placeholder="game author..." /><br></br>

            <input onChange={(e) => {
                setGametags(e.target.value);
            }} name="gametags" type="text" placeholder="game tags..." /><br></br>

            <input onChange={(e) => {
                setGameprice(e.target.value);
            }} name="gameprice" type="text" placeholder="game price ..." /><br></br>

            <input style={{
                cursor: "pointer",
                backgroundColor: "coral",
                border: "none",
                borderRadius: "3px",
                color: "white",
                fontSize: "20px"
            }} onClick={() => {
                handelClick(gamename, gameauthor, gametags, gameprice)
            }} type="submit" value="submit" />
        </form>
        <hr></hr>

    </div>
}