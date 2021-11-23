import React, { Fragment } from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import axios from "axios";
import { DoGet } from "src/Services/APIRequests.service";

class AddClass extends React.Component{
    constructor(){
        super();
        this.state={
            PostForm:{
                ClassName: '',
                ClassFee:0,
                MaterialCharges:0,
                SectionId:null,
                RoomId:0
            },
            visible:false,
            Section:[],
            Room:[]
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.modelPopUp = this.modelPopUp.bind(this)
    }
  componentDidMount(){
      DoGet('https://localhost:44307/api/Rooms').then(res=>{this.setState({Room: res.data})})
      .catch(error => error.data);
      debugger
        // axios.get('https://localhost:44307/api/Rooms')
        
    }
    handleInput(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit(e){
        console.log(this.state)
        e.preventDefault();
    }
    modelPopUp(){
        this.setState({visible:true})
    }
    render(){
        return(
            <Fragment>
                 <CCard>
             <CCardHeader>
      Create Class
    </CCardHeader>
    <CCardBody>
            <CForm onSubmit={this.handleSubmit}>
                <CFormGroup row>
                    <CCol lg="6" xs="12" md="6">
                        <CLabel htmlFor="text-input">Name</CLabel>
                        <CInput type="text" id="text-input" name="ClassName" placeholder='Enter Class Name' onChange={(e) => {this.handleInput(e)}}/>
                    </CCol>
                    <CCol lg="5" xs="10" md="5">
                    <CLabel htmlFor="number-input">Section</CLabel>
                        <CSelect onChange={(e) => {this.handleInput(e)}} custom name="SectionId" id="ccmonth">
                         <option defaultValue>-- Please Select --</option>

                          {
                            this.state.Room.map(room => <option value={room.id}>{room.roomName}</option>)
                          }
                        </CSelect>
                    </CCol>
                    <CCol lg="1" xs="2" md="1">
                    <CButton color="primary" style={{marginLeft:-29,marginTop:'29px'}} variant="outline" onClick={() =>this.setState({visible:true})}><CIcon content={freeSet.cilPlus} /></CButton>
                    
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol lg="6" xs="12" md="6">
                        <CLabel htmlFor="number-input">Fee</CLabel>
                        <CInput type="number" id="number-input" name="ClassFee" placeholder='Enter Fee' onChange={(e) => {this.handleInput(e)}}/>  
                    </CCol>
                <CCol lg="6" xs="12" md="6">
                        <CLabel htmlFor="number-input">Material Charges</CLabel>
                        <CInput type="number" id="number-input" name="MaterialCharges" placeholder='Enter Material Charges' onChange={(e) => {this.handleInput(e)}}/>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol lg="6" xs="12" md="6">
                        <CLabel htmlFor="number-input">Room</CLabel>
                        <CSelect  onChange={(e) => {this.handleInput(e)}} custom name="RoomId" id="ccmonth">
                         <option defaultValue disabled>-- Please Select --</option>
                         <option value="0">Ground</option>
                         <option value="1">1st</option>
                         <option value="2">2nd</option>
                         <option value="3">3rd</option>
                         <option value="4">4th</option>
                         <option value="5">5th</option>
                        </CSelect>
                    </CCol>
                    </CFormGroup>
                <div className="form-actions">
                      <CButton type="submit" color="primary">Add Class</CButton>
                      <CButton color="secondary">Cancel</CButton>
                    </div>
            </CForm>
            </CCardBody>
        </CCard>

        <CModal alignment="center" scrollable show={this.state.visible} onClose={() => this.setState({visible:false})}>
      <CModalHeader>
        <CModalTitle>Create Section</CModalTitle>
      </CModalHeader>
      <CModalBody>
            <CForm onSubmit={this.handleSubmit}>
                <CFormGroup row>
                    <CCol lg="12" xs="12" md="12">
                        <CLabel htmlFor="text-input">Name</CLabel>
                        <CInput type="text" id="text-input" name="ClassName" placeholder='Enter Section Name' onChange={(e) => {this.handleInput(e)}}/>
                    </CCol>
                    </CFormGroup>
                    <CModalFooter>
                    <CButton color="secondary" onClick={() => this.setState({visible:false})}>
                      Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                    </CModalFooter>         
            </CForm>
      </CModalBody>
    </CModal>
            </Fragment>
        );
    }
}
export default AddClass;