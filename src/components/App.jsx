import React, { Component } from 'react';
import './App.css';
import FactoryCases from './FactorsCases/FactorsCases';
import Results from './Results/Results';
import ColumnsProperties from './ColumnsProperties/ColumnsProperties';
import Buttons from './Buttons/Buttons';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        PzA: '0', MxA: '0', MyA: '0',
        PzB: '-100', MxB: '20', MyB: '40',
        PzC: '0', MxC: '150', MyC: '200',
        PzD: '0', MxD: '0', MyD: '0',
        U1A: '1.100', U2A: '1.100', U3A: '-1.100',
        U1B: '1.200', U2B: '1.200', U3B: '-1.200',
        U1C: '1.300', U2C: '1.300', U3C: '-1.300',
        U1D: '1.400', U2D: '0', U3D: '0',
      },
      showResults: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formReset = this.formReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showResults = this.showResults.bind(this);
  }
  
  showResults() {
    this.setState({
      showResults: true
    });
  }

  calculateResults() {
    const {
      PzA, MxA, MyA,  U1A, U2A, U3A,
      PzB, MxB, MyB,  U1B, U2B, U3B,
      PzC, MxC, MyC,  U1C, U2C, U3C,
      PzD, MxD, MyD,  U1D, U2D, U3D,
             
    } = this.state.formData;
  
    const PzU1 = (PzA * U1A) + (PzB *U1B) + (PzC *U1C) + (PzD * U1D);
    const MxU1 = (MxA * U1A) + (MxB *U1B) + (MxC *U1C) + (MxD * U1D);
    const MyU1 = (MyA * U1A) + (MyB *U1B) + (MyC *U1C) + (MyD * U1D);

    const PzU2 = (PzA * U2A) + (PzB *U2B) + (PzC *U2C) + (PzD * U2D);
    const MxU2 = (MxA * U2A) + (MxB *U2B) + (MxC *U2C) + (MxD * U2D);
    const MyU2 = (MyA * U2A) + (MyB *U2B) + (MyC *U2C) + (MyD * U2D);

    const PzU3 = (PzA * U3A) + (PzB *U3B) + (PzC *U3C) + (PzD * U3D);
    const MxU3 = (MxA * U3A) + (MxB *U3B) + (MxC *U3C) + (MxD * U3D);
    const MyU3 = (MyA * U3A) + (MyB *U3B) + (MyC *U3C) + (MyD * U3D);



    this.setState({
      results: { 
        PzU1,PzU2, PzU3,  MxU1, MxU2, MxU3, MyU1, MyU2, MyU3},
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  
    const form = evt.currentTarget;
    const elementName = form.name;
    const elementValue = evt.target.value;
      
    this.setState(
      (prevState) => ({
        formData: {
          ...prevState.formData,
          [elementName]: elementValue,
        },
      }),
      () => {

        this.calculateResults();
        this.showResults();
      }
    );
  }

  formReset(evt) {
    evt.preventDefault();
    this.setState(() => ({
      formData: {
        PzA: '', MxA: '', MyA: '',
        PzB: '', MxB: '', MyB: '',
        PzC: '', MxC: '', MyC: '',
        PzD: '', MxD: '', MyD: '',
        U1A: '', U2A: '', U3A: '',
        U1B: '', U2B: '', U3B: '',
        U1C: '', U2C: '', U3C: '',
        U1D: '', U2D: '', U3D: '',
      },
      showResults: false,
    }));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  }

  render() {
    const { formData, showResults } = this.state;

    return (
      < >
      <div className="container">
      <ColumnsProperties
        formData={formData}
        formReset={this.formReset}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      >
        <FactoryCases 
        formData={formData}
        handleChange = {this.handleChange}
        />
      </ColumnsProperties>
      </div>
      <Buttons formReset={this.formReset} handleSubmit={this.handleSubmit}/>
      {showResults && <Results results={this.state.results}
       />}
          </>
      
    );
  }
}