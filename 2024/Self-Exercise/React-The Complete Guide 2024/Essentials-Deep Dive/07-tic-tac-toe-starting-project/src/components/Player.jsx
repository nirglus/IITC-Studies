import {useState} from 'react'

function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () =>{
        setIsEditing(editing => !editing);
    }

    const handleChange = (e) =>{
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

  return (
    <li>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player
