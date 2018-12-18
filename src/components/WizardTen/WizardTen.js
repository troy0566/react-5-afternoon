import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { update_firstname, update_lastname, update_email } from '../../ducks/reducer';

class WizardTen extends Component {
    render(){
        const { update_firstname, update_lastname, update_email } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={( e ) => update_firstname( e.target.value )}/>
                    <input type="text" placeholder="Last Name" onChange= {( e ) => update_lastname( e.target.value )}/>
                    <input type="text" placeholder="email" onChange={( e ) => update_email( e.target.value )}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { firstname, lastname, email } = state;
  
    return {
        firstname, 
        lastname, 
        email
    };
  }
export default connect( mapStateToProps, { update_firstname, update_lastname, update_email } )( WizardTen );