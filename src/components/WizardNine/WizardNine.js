import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { update_address1, update_address2, update_address3 } from '../../ducks/reducer';

class WizardNine extends Component {

    render(){
        const { update_address1, update_address2, update_address3 } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={( e ) => update_address1( e.target.value )}/>
                    <input type="text" placeholder="Line Two" onChange={( e ) => update_address2( e.target.value )}/>
                    <input type="text" placeholder="Line Three" onChange={( e ) => update_address3( e.target.value )}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { address1, address2, address3 } = state;
  
    return {
        address1, 
        address2, 
        address3
    };
  }
export default connect( mapStateToProps, { update_address1, update_address2, update_address3 } )( WizardNine );