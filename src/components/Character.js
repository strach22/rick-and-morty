export default function Character(props) {
  return (
    <div className="characters">
        <h1>Personajes</h1>
      <button onClick={console.log(props)} className="btn-search">
        Regresar
      </button>
      <div className="container-characters">
        {props.characters.map(character=>(
          <div className="character-container" key={character.id}>
            <p>{character.name}</p>
            <br/>
            <img src={character.image}/>
          </div>

        ))}

      </div>
    </div>
  );
}
