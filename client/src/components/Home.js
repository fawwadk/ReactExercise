import React, { Component} from 'react';
import ApiList from './ApiList';

class home extends Component{
	render(){
		return (
			<main role="main bg-info">
				<div className="container">
				 <h3>APIs & Services</h3>
				 <p>Access information on how to use Forget APIs and Services</p>
				 <ApiList/>
				</div>
			</main>	
		);
    }
}
export default home;
