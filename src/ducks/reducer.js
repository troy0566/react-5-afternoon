const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: 'aa',
    lastName: '',
    email: ''
 }
 
 const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
 const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
 const UPDATE_CITY = "UPDATE_CITY";
 const UPDATE_PROP = "UPDATE_PROP";
 const UPDATE_FOUND = "UPDATE_FOUND";
 const UPDATE_AGENT = "UPDATE_AGENT";
 const UPDATE_COST = "UPDATE_COST";
 const UPDATE_DWNPYMT = "UPDATE_DOWNPYMT";
 const UPDATE_CREDIT = "UPDATE_CREDIT";
 const UPDATE_HISTORY = "UPDATE_HISTORY";
 const UPDATE_ADDRESS1 = 'UPDATE_ADDRESS1';
 const UPDATE_ADDRESS2 = 'UPDATE_ADDRESS2';
 const UPDATE_ADDRESS3 = 'UPDATE_ADDRESS3';
 const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
 const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
 const UPDATE_EMAIL = 'UPDATE_EMAIL';
 
 function reducer( state = initialState, action ) { 
     console.log('REDUCER HIT: Action ->', action );
     
     switch( action.type ){
       case UPDATE_LOAN_TYPE:
         return Object.assign( {}, state, { loanType: action.payload } );
       case UPDATE_PROPERTY_TYPE:
         return Object.assign( {}, state, { propertyType: action.payload } );
       case UPDATE_CITY:
         return Object.assign( {}, state, { city: action.payload } );
       case UPDATE_PROP:
         return Object.assign( {}, state, { propToBeUsedOn: action.payload } );
       case UPDATE_FOUND:
         return Object.assign( {}, state, { found: action.payload } );
       case UPDATE_AGENT:
         return Object.assign( {}, state, { realEstateAgent: action.payload } );
       case UPDATE_COST:
         return Object.assign( {}, state, { cost: action.payload } );
       case UPDATE_DWNPYMT:
         return Object.assign( {}, state, { downPayment: action.payload } );
       case UPDATE_CREDIT:
         return Object.assign( {}, state, { credit: action.payload } );
       case UPDATE_HISTORY:
         return Object.assign( {}, state, { history: action.payload } );
       case UPDATE_ADDRESS1:
         return Object.assign( {}, state, { addressOne: action.payload } );
       case UPDATE_ADDRESS2:
         return Object.assign( {}, state, { addressTwo: action.payload } );
       case UPDATE_ADDRESS3:
         return Object.assign( {}, state, { addressThree: action.payload } );
       case UPDATE_FIRSTNAME:
         return Object.assign( {}, state, { firstName: action.payload } );
       case UPDATE_LASTNAME:
         return Object.assign( {}, state, { lastName: action.payload } );
       case UPDATE_EMAIL:
         return Object.assign( {}, state, { email: action.payload } );
       default: return state;
     }
 } 
 
 export function updateLoanType( loanType ){
   return {
     type: UPDATE_LOAN_TYPE,
     payload: loanType
   };
 }
 export function updatePropertyType( property ) {
   return {
     type: UPDATE_PROPERTY_TYPE,
     payload: property
   };
 }
 export function updateCity( city ) {
   return {
     type: UPDATE_CITY,
     payload: city
   };
 }
 export function updateProp( prop ) {
   return {
     type: UPDATE_PROP,
     payload: prop
   };
 }
 export function updateFound( found ) {
   return {
     type: UPDATE_FOUND,
     payload: found
   };
 }
export function update_agent( agent ) {
    return {
      type: UPDATE_AGENT,
      payload: agent
    };
  }
export function update_cost(cost){
    return {
      type: UPDATE_COST,
      payload: cost
    };
  }
export function update_dwnpymt(dwnpymt){
    return {
      type: UPDATE_DWNPYMT,
      payload: dwnpymt
    };
  }
export function update_credit(credit){
    return {
      type: UPDATE_CREDIT,
      payload: credit
    };
  }
export function update_history(history){
    return {
      type: UPDATE_HISTORY,
      payload: history
    };
  }
export function update_address1(address1){
    return {
      type: UPDATE_ADDRESS1,
      payload: address1
    };
  }
export function update_address2(address2){
    return {
      type: UPDATE_ADDRESS2,
      payload: address2
    };
  }
export function update_address3(address3){
    return {
      type: UPDATE_ADDRESS3,
      payload: address3
    };
  }
export function update_firstname(firstname){
    return {
      type: UPDATE_FIRSTNAME,
      payload: firstname
    };
  }
export function update_lastname(lastname){
    return {
      type: UPDATE_LASTNAME,
      payload: lastname
    };
  }
export function update_email(email){
    return {
      type: UPDATE_EMAIL,
      payload: email
    };
  }
export default reducer; 