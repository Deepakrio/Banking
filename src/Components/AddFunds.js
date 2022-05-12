import React from "react";
import axios from "axios";
import "./Styles/AddFunds.css";
import Card from "../Components/BankTransfer/UI/Card";

import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
class Addstudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Gender: "",
      Username: "",
      Password: "",
    };
  } // https://localhost:44317/Help/Api/GET-api-UserRegistrations
  Addstudent = () => {
    axios
      .post("https://localhost:44315/Api/Funds", {
        Scheme: this.state.Scheme,
        Amount: this.state.Amount,
        Duration: this.state.Duration,
        Mode: this.state.Mode,
        InvType: this.state.InvType,
      })
      .then((json) => {
        // if(json.data.Status==='Success'){
        //   console.log(json.data.Status);
        //   alert("Data Save Successfully");
        // this.props.history.push('/Studentlist')
        // //
        // }
        // else{
        // alert('Request Sent Succesfully');
        // debugger;
        // this.props.history.push('/Studentlist')
        // }

        alert("Investment Sucessfull");
        window.location.reload(false);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="App ">
        <center>
          {" "}
          <h4 className="AddHeading">INVEST FUNDS</h4>{" "}
        </center>
        <Form className="form AddMFund">
          <Col>
            <FormGroup row>
              {/* <Label for="Id" sm={2}>ID</Label>  
          <Col sm={10}>  
            <Input type="text" name="Id" onChange={this.handleChange} value={this.state.Id} placeholder="Enter Id" />  
          </Col>   */}
            </FormGroup>
            <FormGroup row>
              {/* <Label for="Scheme" sm={2}>Scheme</Label>   */}
              <Col sm={10}>
                {/* <Input className='ip' type="text" name="Scheme" onChange={this.handleChange} value={this.state.Scheme} placeholder="Enter Scheme" />   */}
                <select
                  name="Scheme"
                  class="form-control ip"
                  onChange={this.handleChange}
                  value={this.state.Scheme}
                  required="required"
                  data-error="Please specify Scheme Name."
                >
                  <option value="" selected disabled>
                    --Select Scheme--
                  </option>
                  <option>Axis Small Cap Fund</option>
                  <option>HDFC Sensex Index Funds </option>
                  <option>Parag Pariek Multi Cap Fund</option>
                  <option>Axis BlueChip Funds</option>
                  <option>Canara Rebocco Bluechip Fund</option>
                </select>
              </Col>
            </FormGroup>
            <FormGroup row>
              {/* <Label for="Amount" sm={2}>Amount</Label>   */}
              <Col sm={10}>
                <Input
                  className="ip"
                  type="text"
                  name="Amount"
                  onChange={this.handleChange}
                  value={this.state.Amount}
                  placeholder="Enter Amount"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              {/* <Label for="Duration" sm={2}>Duration</Label>   */}
              <Col sm={10}>
                {/* <Input className='ip' type="text" name="Duration" onChange={this.handleChange} value={this.state.Duration} placeholder="Enter Duration" />   */}
                <select
                  name="Duration"
                  class="form-control ip"
                  onChange={this.handleChange}
                  value={this.state.Duration}
                  required="required"
                  data-error="Please specify the Duration."
                >
                  <option value="" selected disabled>
                    --Select Duration--
                  </option>
                  <option>10 Months</option>
                  <option>15 Months</option>
                  <option>20 Months</option>
                  <option>Cancel Anytime</option>
                </select>
              </Col>
            </FormGroup>
            <FormGroup row>
              {/* <Label for="Mode" sm={2}>Mode</Label>   */}
              <Col sm={10}>
                {/* <Input
                  className="ip"
                  type="text"
                  name="Mode"
                  onChange={this.handleChange}
                  value={this.state.Mode}
                  placeholder="Enter Mode"
                /> */}
                <select
                  name="Mode"
                  class="form-control ip"
                  onChange={this.handleChange}
                  value={this.state.Mode}
                  required="required"
                  data-error="Please specify Payment Mode."
                >
                  <option value="" selected disabled>
                    --Investment Mode--
                  </option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                  <option>Quaterly</option>
                </select>
              </Col>
            </FormGroup>
            <FormGroup row>
              {/* <Label for="InvType" sm={2}>InvType</Label>   */}
              <Col sm={10}>
                {/* <Input
                  className="ip"
                  type="text"
                  name="InvType"
                  onChange={this.handleChange}
                  value={this.state.InvType}
                  placeholder="Enter Investment Type(SIP/LUMPSUM)"
                /> */}
                <select
                  name="InvType"
                  class="form-control ip"
                  onChange={this.handleChange}
                  value={this.state.InvType}
                  required="required"
                  data-error="Please specify SIP/Lumpsum."
                >
                  <option value="" selected disabled>
                    --Investment Type--
                  </option>
                  <option>SIP</option>
                  <option>LUMPSUM</option>
                </select>
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <button
                  type="button"
                  onClick={this.Addstudent}
                  id="submit"
                  className="btn btn-success"
                >
                  Submit
                </button>
              </Col>
              <Col sm={1}>
                <Button color="danger" id="cancel">
                  Cancel
                </Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
        <br></br>
        <br></br>
        <br></br>
        <div className="blankHolder">
          <h1>dsdaasdasddasdasdasdsadsdada</h1>
        </div>
      </Container>
    );
  }
}

export default Addstudent;
