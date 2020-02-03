import React from 'react';

import Calc from './Components/Calc';
import { useSelector, useDispatch, connect} from 'react-redux';
import { DISPLAY } from './Config/Actions';


class App extends React.Component{
    constructor(props){
        super(props)
        
    }


    render(){
      
        return(
            <div className ="App-main p-2">
                <input type='text' className='output pr-3 rounded-top border border-dark container bg-secondary text-right text-white font-weight-bold' value={this.props.display} />              {'state:', this.props.display}
                <Calc />
            </div>

        )
    }

}

const mapStateToProps = (state) => {
  return {display: state};
}

connect(mapStateToProps, null) (App);



export default App;