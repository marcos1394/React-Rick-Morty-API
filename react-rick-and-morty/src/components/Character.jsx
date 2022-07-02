function Character(props){
return (
    <div key={props.character.id}>
    <h2>{props.character.name}</h2>
    <img src={props.character.image} alt={props.character.name}></img>
  </div>
)
}

export default Character