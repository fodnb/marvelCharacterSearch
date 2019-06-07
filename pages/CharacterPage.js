class CharacterPage extends React.Component{
constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
}

handleChange(){
    this.props.clear();
}

 render() {
     return(
    <div>
    <h2>{this.props.name}</h2>
    <img src={this.props.img} alt={this.props.name}/>
    <p>{this.props.description}</p>
    <button onClick={this.handleChange}>New Search</button>
    </div>
    )
 }  
}
export default CharacterPage;