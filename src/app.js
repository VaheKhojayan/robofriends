import React,{Component} from 'react';
import Cardlist from './cardlist';
import Searchbox from './Searchbox';
import './app.css'
import Scroll from './scroll'


class App extends Component {
    constructor(){
    	super()
    this.state={
	robots:[],
	searchfield: ''
                }
    }	; 


    componentDidMount(){
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response => response.json())
    	.then(users=> this.setState({robots:users}))
    	
    }


    onSearchChange=(event)=>{  
    	this.setState({searchfield:event.target.value})
    }

   

    render(){
    	const filteredRobots=this.state.robots.filter(robot =>{
    	  	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
	if (this.state.robots.length===0)
		      {return <h1 className='tc'>Loaded</h1>}
		      else 
		      	{return <div className='tc'>
		         <h1 className='f2'>RoboFriends</h1>
		         <Searchbox searchchange={this.onSearchChange} />
		         <Scroll>
                   <Cardlist robots={filteredRobots}/>
                 </Scroll>
                    </div>}
		
		
}
}
	
export default App; 