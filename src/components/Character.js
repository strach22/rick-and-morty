export default function Character(props) {
  const resetCharacters = () => {
    props.setCharacters(null);
  };
  const bPage = () => {
    props.setCharacters(null);
    props.nextPage("b");
  };
  const aPage = () => {
    props.setCharacters(null);
    props.nextPage("a");
  };
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <button onClick={resetCharacters} className="btn-search">
        Página principal
      </button>
      <div className="container-characters">
        {props.characters.map((character) => (
          <div className="character-container" key={character.id}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"></span>
                    <span>Vivo</span>
                  </>
                ) : (
                  <>
                    <span className="dead"></span>
                    <span>Muerto</span>
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Género: </span>
                <span>{character.gender==="Male"?"Hombre":"Mujer"}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species==="Human"?"Humano":character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={bPage} className="btn-search">
        Anterior
      </button>
      <span> </span>
      <button onClick={aPage} className="btn-search">
        Siguiente
      </button>
    </div>
  );
}
