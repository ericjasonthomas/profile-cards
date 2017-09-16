import React, { Component } from 'react'
import SiteCard from './SiteCard';

class SiteSelection extends Component {
  constructor() {
    super();
		this.state = { showPanel: false, selectedSite:'defualt', siteComponent:'defualt' };
  }
	openForm(profile, newName) {
		console.log(newName);
		alert("you selected " + profile + " " + newName);
	}

  render() {

		let sitegroup;
		let card = 0;
		if (this.props.projectsites){
			sitegroup = this.props.projectsites.map( projectsite => {
				return (
					<div className="siteGroup" key={projectsite.section}>
						<div className="sectionTitle">
							<h2>{projectsite.section}</h2>
						</div>
            <div class="row-fluid">
						{projectsite.sites.map( site => {
							// console.log(site.profile);
							return (
								<SiteCard ref="theCard" tabIndex = {0}
									key={"card" + card ++}
									site={site}
									section={projectsite.section}
									profileClass={site.profileClass}
									profileColor={site.profileColor}
									logoIMG={site.logoIMG}
									trigger={this.openForm.bind(this)}
								/>
							);
						})}
					</div>
          </div>
				);
			});
		}
    return (
				<div className="sitesContainer">
				{sitegroup}
				</div>
    );
  }
}
export default SiteSelection;
