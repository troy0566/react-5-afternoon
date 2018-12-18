import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { update_credit } from '../../ducks/reducer';


class WizardSeven extends Component {

    render(){
        const { update_credit } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={() => update_credit('Excellent')}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={() => update_credit('Good')}>Good</button></Link>
                        <Link to="/wEight"><button onClick={() => update_credit('Fair')}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={() => update_credit('Poor')}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { credit } = state;
  
    return {
      credit
    };
  }
export default connect( mapStateToProps, { update_credit } )( WizardSeven );