import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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

const EditFunds = () => {
  let navigate = useNavigate();
  const { Id } = useParams();

  const [user, setUser] = useState({
    Scheme: "",
    Amount: "",
    Duration: "",
    Mode: "",
    InvType: "",
  });
  const { Scheme, Amount, Duration, Mode, InvType } = user;
  // https://localhost:44317/Help/Api/GET-api-UserRegistrations
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://localhost:44315/Api/Funds/${Id}`, user);
    alert("Funds Modified!");
    navigate("/passbook");
  };
  const loadUser = async () => {
    const response = await axios.get(`https://localhost:44315/Api/Funds/${Id}`);
    setUser(response.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container className="App ">
        <br></br><br></br><br></br>
      <center>
        {" "}
        <h4 className="AddHeading">MODIFY FUNDS</h4>{" "}
      </center>
      <Form className="form AddMFund">
        <Col>
          <FormGroup row>
            {/* <Label for="Id" sm={2}>Id</Label>  
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
                onChange={(e) => handleChange(e)}
                value={Scheme}
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
                onChange={(e) => handleChange(e)}
                value={Amount}
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
                onChange={(e) => handleChange(e)}
                value={Duration}
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
                onChange={(e) => handleChange(e)}
                value={Mode}
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
                onChange={(e) => handleChange(e)}
                value={InvType}
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
                onClick={e=> onSubmit(e)} 
                Id="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </Col>
            <Col sm={1}>
              <Button color="danger" Id="cancel">
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
      {/* <div className="blankHolder">
            <h1>dsdaasdasddasdasdasdsadsdada</h1>
          </div> */}
    </Container>
  );
};

export default EditFunds;
