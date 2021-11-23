import React, { Fragment } from 'react';
import { DoPost } from 'src/Services/APIRequests.service';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
class AddRoom extends React.Component{
constructor(){
    super();
    this.state = {
        RoomName:'',
        Capacity:0,
        Type:0,
        Floor:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleInput(e){
    debugger
    this.setState({[e.target.name]: e.target.value})
}
handleSubmit(e){
    const {RoomName,Capacity,Type,Floor} = this.state;
    var x = parseInt(Type)
    const logo={
        RoomName:RoomName,
        Capacity:Capacity,
        Type:x,
        Floor:Floor
    };
    DoPost('https://localhost:44307/api/Rooms',logo)
    e.preventDefault();
}
render(){
    return (
        <CCard>
             <CCardHeader>
      Add Rooms
    </CCardHeader>
    <CCardBody>
            <CForm onSubmit={this.handleSubmit}>
                <CFormGroup row>
                    <CCol lg="6" xs="12" md="6">
                        <CLabel htmlFor="text-input">Name</CLabel>
                        <CInput type="text" id="text-input" name="RoomName" placeholder='Enter Room Name' onChange={(e) => {this.handleInput(e)}}/>
                    </CCol>
                    <CCol lg="6" xs="12" md="6">
                    <CLabel htmlFor="number-input">Floor</CLabel>
                        <CInput type="text" id="text-input" name="Floor" placeholder='Enter Floor' onChange={(e) => {this.handleInput(e)}}/>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol lg="6" xs="12" md="6">
                    <CLabel htmlFor="number-input">Capacity</CLabel>
                        <CInput type="number" id="number-input" name="Capacity" placeholder='Enter Room Capacity' onChange={(e) => {this.handleInput(e)}}/>
                    </CCol>
                    <CCol lg="6" xs="12" md="6">
                    <CLabel>Type</CLabel>
                        <CSelect  onChange={(e) => {this.handleInput(e)}}  name="Type" id="ccmonth">
                         <option disabled selected>-- Please Select --</option>
                         <option value='0'>Room</option>
                         <option value='1'>Hall</option>
                        </CSelect>
                    </CCol>
                </CFormGroup>
                <div className="form-actions">
                      <CButton type="submit" color="primary">Create Room</CButton>
                      <CButton color="secondary">Cancel</CButton>
                    </div>
            </CForm>
            </CCardBody>
        </CCard>
    );
}
}

export default AddRoom;