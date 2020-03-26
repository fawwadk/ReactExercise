import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';
const APIs_URL = 'final-data.json';

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}`
class AppList extends React.Component {
	
	constructor(props) {
    super(props);
	
    this.state = {
		users: [],
		isLoading: true,
		isHovered: true, 
		message: "", 
		hover: false,
		active: '',
		errors: null,
		myClass:''
    };
	
	//this.onClick=this.onClick.bind(this);
	this.onMouseEnter=this.onMouseEnter.bind(this);
 }
  /*  onClick(event){
	 const clickedId = event.target.id
	 console.log(clickedId);
	 if(this.state.active === clickedId) { 
          this.setState({active: ''});
      } else {
          this.setState({active: clickedId})
     }
	}*/
	onMouseEnter(event){
	const clickedId = event.target.id
	 if(this.state.active === clickedId) { 
          this.setState({active: ''});
		} else {
          this.setState({active: clickedId})
		}
	}
	
	/*onMouseLeave(event){
	const clickedId = event.target.id
	if(this.state.active === clickedId) { 
	this.setState({active: clickedId})
          
      } else {
          this.setState({active: ''});
     }
	}*/
 componentDidMount() {
   axios
    .get("new.json")
    .then(response =>
      response.data.results.map(user => ({
		id:`${user.id}`,
		apptitle:`${user.apptitle}`,
		description:`${user.descriptions}`,
		icon:`${user.icon}`,
		intro: `${user.link.intro}`,
		guide:`${user.link.guide}` ,
		reference:`${user.link.reference}`,
        //link: `${user.link.intro} ${user.link.guide} ${user.link.reference}`,
        
      }))
    )
    .then(users => {
      this.setState({
        users,
        isLoading: false
      });
    })
    .catch(error => this.setState({ error, isLoading: false,isHovered: false }));
	
}
    	
  

  render() {
  const { isLoading, users } = this.state;
  return (
    <React.Fragment>
     
      <div className="row mb-4">
        {!isLoading ? (
          users.map(user => {
            const { id,apptitle,icon,description,username,intro,guide,reference} = user;
			
            return (
                <div className={`col-sm-6 py-2 col-lg-4`} onMouseEnter={this.onMouseEnter} id = {id} >
			        
				<div className={`card h-100  ${this.state.active === id ? 'shadow-lg bg-white rounded': ''}`}  >
					    <div className={`card-body `} >
				            <h5 className="card-title text-dark">< i className={icon}></i>  {apptitle}</h5>
							 <p className="card-text text-muted">{description}</p> 
						</div>  
						<div className="card-detail mx-3 ">
							 <ul className = "list-inline ">
							  <li><a href={intro} className="text-dark no-underline text-capitalize footer-link-icon">Intro<span className="position-relative"><i className="fa fa-chevron-right float-right" ></i></span></a></li>
							<hr/>
							 <li><a href={guide} className="text-dark no-underline text-capitalize footer-link-icon">Developer's guide <span className="position-relative"><i className="fa fa-chevron-right float-right" ></i></span></a></li>
							<hr/>
							<li><a href={reference} className="text-dark no-underline text-capitalize footer-link-icon">API reference<span className="position-relative"><i className="fa fa-chevron-right float-right" ></i></span></a></li>
							</ul>
						</div>
					</div>
				</div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </React.Fragment>
  );
}
}
export default AppList;
//https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/