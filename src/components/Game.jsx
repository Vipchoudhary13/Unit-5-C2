import axios from "axios";
import { useEffect, useState } from "react";
import { GameInput } from "./GameInput"
import { GameItem } from "./GameItem";

// import { method } from "cypress/types/bluebird";

export const Game = () => {
    const[game, setGame] = useState([]);
    const[page, setPage] = useState(1);
    const handelClick = (gamename, gameauthor, gametags, gameprice) => {
        fetch(`http://localhost:3001/games`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({gamename:gamename, gameauthor:gameauthor, gametags:gametags, gameprice:gameprice})
        }).then(getData);
    }

    useEffect(() =>{
        getData()
    }, [page]);

    async function getData () {
        await fetch(`http://localhost:3001/games?_page=${page}&_limit=2)`)
           .then(res => res.json())
           .then(data => {setGame(data)})
           .catch((e) => {
               console.log(e);
           });
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/games/${id}`);

        getData();
    }
    return <div id="addgame">
        <GameInput handelClick={handelClick}/>

        {game.length>0 && game.map((e) => {
            return <GameItem gamename={e.gamename} gameauthor={e.gameauthor} gametags={e.gametags} gameprice={e.gameprice} id= {e.id} 
                      handleDelete={handleDelete}
                />
        })}
        <div className="btn">
        <button onClick={() => {
            setPage(page - 1);
        }}>Prev</button>
        <button onClick={() => {
            setPage(page + 1);
        }}>Next</button>
        </div>
    </div>
}