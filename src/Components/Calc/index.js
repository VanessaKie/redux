import React from 'react';
import { DISPLAY } from '../../Config/Actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch, display) => {
    return{ handleDisplay: (display) => {
                dispatch(DISPLAY(display))
        }
    }
}

connect(null, mapDispatchToProps)(Calc);

class Calc extends React.Component{
    constructor(props){
        super(props)
            
        this.display = '';
        this.percent= '';
    }

    handleClickDisplay = (e) => {
        let input = e.target.value;
        this.percent = input;
        this.display += input;  


        this.props.handleDisplay(this.display);
    }

    handleClear = () => {
        this.display= '';
       /*  this.props.display(' '); */
    }

    handleCalc = () => {
        try{   
            let output = eval(this.display);
           /*  this.props.display(output); */
            this.display= ' '; 
            }   catch(error){
                    /* this.props.display('Error'); */
                };
    }

    handlePercent = () => {
        let calc = this.display.split(' '); //splitting string in arr

        if (calc.length === 1){
            let output = calc/100
            this.props.display(output);
            this.display= ' ';
            } else {
                let index = calc.length-2; //index so the last 2 el of arr can be split off (Op + percent)
                let x1 = calc.splice(0,index+1) // arr with el for eval for everything before the op+percent
                let l = x1.length
                let op = x1[l-1] //operator for final eval
                x1 = x1.splice(0, l-1) // cut off operator
                let pValue = calc.splice(0,index) // value of percent
            
                let y = x1.join('');
                let z = pValue.join('');

                let x = eval(y); // eval for calculating everything befor the op and percent
                let percent = eval(`${x}/100*${pValue}`) // eval the percent
                let finalResult = eval(`${x}${op}${percent}`); // combining calc and percent into
            
               /*  this.props.display(finalResult); */
                this.display= ' ';
                }
        
    }


    render(){
        return(
            <div className="input container">
                <div className="row">
                    <button onClick={this.handleClear} className="col-3 clear btn btn-dark rounded-0" value='clear'>C</button>
                    <button className="col-3 transform btn btn-dark rounded-0" value='transform'>+/-</button>
                    <button onClick={this.handlePercent} className="col-3 percent btn btn-dark rounded-0" value="percent">%</button>
                    <button onClick={this.handleClickDisplay} className="col-3 divide btn btn-warning text-white rounded-0" value=' / '>{String.fromCharCode(247)}</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='7'>7</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='8'>8</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='9'>9</button>
                    <button onClick={this.handleClickDisplay} className="col-3 mul btn btn-warning text-white rounded-0" value=' * '>x</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='4'>4</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='5'>5</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='6'>6</button>
                    <button onClick={this.handleClickDisplay} className="col-3 min btn btn-warning text-white rounded-0" value=' - '>-</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='1'>1</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='2'>2</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='3'>3</button>
                    <button onClick={this.handleClickDisplay} className="col-3 add btn btn-warning text-white rounded-0" value=' + '>+</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-6 numb btn btn-secondary rounded-0" value='0'>0</button>
                    <button onClick={this.handleClickDisplay} className="col-3 comma btn btn-secondary rounded-0" value='.'>,</button>
                    <button onClick={this.handleCalc} className="col-3 output btn btn-warning text-white rounded-0" value='output'>=</button>
                </div>
            </div>
        )
    }

}


export default Calc;