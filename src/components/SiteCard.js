import React, { Component } from 'react';

class SiteCard extends Component {

onChangesite() {
	this.props.trigger(this.props.section, this.props.site.title);
}
textType () {
	let bulletCount = 0;
	let itemCount = 0;
	if (this.props.site.descriptionType === 'bullet') {
		return (
			<ul className='descriptionList'>
					{ this.props.site.description.map(bullet => {
						 return ([
							 <li key={'bullet' + bulletCount ++}>{bullet.item}</li>
						 ]);
					 })}
			</ul>
		);
	} else {
		return (
			<div className='descriptionList'>
					{ this.props.site.description.map(item => {
						 return ([
							 <p key={'item' + itemCount ++}>{item.item}</p>
						 ]);
					 })}
			</div>
		);
	}
}
  render() {
		let cardTopStyle = { background: this.props.profileColor }
		return (
			<div className='siteCardholder'>
	      <div className={'siteCard ' + this.props.profileClass} onClick={this.onChangesite.bind(this)} onKeyPress={this.onChangesite.bind(this)} tabIndex = {0} role="button">
						<div className='cardtop'>
							<div className='primarycolor' style={cardTopStyle}>
								<div className='logoholder'>
									<div className='logo'>
										<img src={this.props.logoIMG} alt={this.props.profileClass + ' logo'}/>
									</div>
								</div>
								<div className='plusIcon fa fa-plus'></div>
							</div>
						</div>
						<div className='cardContent'>
		          <div className='siteTitle'>{this.props.site.title}</div>
							{this.textType()}
							<div>{this.props.primaryColor}</div>
						</div>
	      </div>
			</div>
    );
  }
}
export default SiteCard;
