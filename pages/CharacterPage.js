const CharacterPage = props => (
    <div>
    <h2>{props.name}</h2>
    <img src={props.img} alt={props.name}/>
    <p>{props.description}</p>
    </div>
)

export default CharacterPage;