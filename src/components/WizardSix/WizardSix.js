import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {update_cost, update_dwnpymt  } from '../../ducks/reducer';

class WizardSix extends Component {

    render(){
        const { update_cost, update_dwnpymt } = this.props;
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={( e ) => update_cost( e.target.value )}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={( e ) => update_dwnpymt( e.target.value )}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { cost, dwnpymt } = state;
  
    return {
      cost,
      dwnpymt
    };
  }
export default connect( mapStateToProps, { update_cost, update_dwnpymt } )( WizardSix );