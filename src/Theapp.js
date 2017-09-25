import React, { Component } from 'react';
import Section from './components/Section';
import $ from 'jquery'

class Theapp extends Component {
	constructor(){
		super();
		this.state = {
			projectsites: [],
		}
	}
getdata(){
	$.ajax({
		url:'http://localhost:3000/data/sites.json',
		// url:'https://bahtest.sharepoint.com/sites/pmeEntApps/SiteProv/SiteAssets/build/data/sites.txt',
		dataType:'JSON',
		cache:false,
		success: function(data){
			this.setState({projectsites: data}, function(){
				// console.log(this.state.projectsites);
			})
		}.bind(this),
		error: function(xhr, status, err){
			console.log(err)
		}
	});
}

	componentWillMount(){
		this.getdata();
		// this.addProfiles();
	}

	//
  render() {
    return (
      <div className="theApp container-fluid">
				<div className="intro-txt">
					<p>Welcome! Section cards with data from JSON. Fun stuff </p>
				</div>
				<Section projectsites={this.state.projectsites}/>
      </div>
    );
  }
}
export default Theapp;
