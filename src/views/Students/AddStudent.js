import React from 'react'
import { DocsLink } from 'src/reusable'
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
class AddStudent extends React.Component{
  constructor(){
    super();
  }
  postStudent(){
    debugger
  }
  render(){
        return(
  <CCard>
    <CCardHeader>
      Student Submission Form
    </CCardHeader>
    <CCardBody>
      <CForm action="Post" method="PostStudent" onSubmit={this.postStudent} encType="multipart/form-data" className="form-horizontal">
        {/* <CFormGroup row> */}
          {/* <CCol md="3">
            <CLabel>Static</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <p className="form-control-static">Username</p>
          </CCol>
        </CFormGroup> */}
        <CFormGroup row>
          <CCol lg="6" xs="12" md="9">
            <CLabel htmlFor="text-input">Applicant Name</CLabel>
            <CInput id="text-input" name="text-input" placeholder="Enter Student Name" />
            {/* <CFormText>This is a help text</CFormText> */}
          </CCol>
          <CCol md="6">
            <CLabel htmlFor="email-input">Nick Name</CLabel>
            <CInput id="text-input" name="text-input" placeholder="Nick-Name here" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="6" xs="12" md="9">
            <CLabel htmlFor="text-input">Date Of Birth</CLabel>
            <CInput type="date" id="date-input" name="date-input" placeholder="date" />
          </CCol>
          <CCol md="6">
            <CLabel htmlFor="email-input">Religious</CLabel>
            <CInput id="text-input" name="text-input" placeholder="Enter Religious" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="6" xs="12" md="9">
            <CLabel htmlFor="text-input">Gender</CLabel>
            <CSelect custom name="select" id="select">
              <option value="0">Please select</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </CSelect>
          </CCol>
          <CCol md="6">
            <CLabel htmlFor="email-input">Blood Group</CLabel>
            <CSelect custom name="select" id="select">
              <option value="0">Please select</option>
              <option value="1">A+</option>
              <option value="2">B+</option>
              <option value="3">B-</option>
            </CSelect>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="6" xs="12" md="9">
            <CLabel htmlFor="text-input">Nationality</CLabel>
            <CInput id="text-input" name="text-input" placeholder="Nationality" />
          </CCol>
          <CCol md="6">
            <CLabel htmlFor="email-input">Current School</CLabel>
            <CInput id="text-input" name="text-input" placeholder="Current School" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="12" xs="12" md="12">
            <CLabel htmlFor="text-input">Home Address</CLabel>
            </CCol>
            <CCol lg="12" xs="12" md="9">
            <CTextarea 
              name="textarea-input" 
              id="textarea-input" 
              rows="3"
              placeholder="Address..." 
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="6" md="3">
            <CLabel htmlFor="email-input">Landline</CLabel>
            <CInput type="email" id="email-input" name="email-input" placeholder="Contact No." autoComplete="email"/>
          </CCol>
          <CCol md="6">
            <CLabel htmlFor="password-input">Emergency</CLabel>
            <CInput id="password-input" name="password-input" placeholder="Emergency Contact No." autoComplete="new-password" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
        <CCol lg="4" md="3">
            <CLabel htmlFor="email-input">Mother Name</CLabel>
            <CInput type="email" id="email-input" name="email-input" placeholder="Contact No." autoComplete="email"/>
          </CCol>
          <CCol lg="4" md="6">
            <CLabel htmlFor="password-input">Occupation</CLabel>
            <CInput id="password-input" name="password-input" placeholder="Emergency Contact No." autoComplete="new-password" />
          </CCol>
          <CCol lg="4" md="6">
            <CLabel htmlFor="password-input">Contact</CLabel>
            <CInput id="password-input" name="password-input" placeholder="Emergency Contact No." autoComplete="new-password" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
        <CCol lg="4" md="3">
            <CLabel htmlFor="email-input">Father Name</CLabel>
            <CInput type="email" id="email-input" name="email-input" placeholder="Contact No." autoComplete="email"/>
          </CCol>
          <CCol lg="4" md="6">
            <CLabel htmlFor="password-input">Occupation</CLabel>
            <CInput id="password-input" name="password-input" placeholder="Emergency Contact No." autoComplete="new-password" />
          </CCol>
          <CCol lg="4" md="6">
            <CLabel htmlFor="password-input">Contact</CLabel>
            <CInput id="password-input" name="password-input" placeholder="Emergency Contact No." autoComplete="new-password" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="6" md="3">
            <CLabel htmlFor="email-input">Father CNIC</CLabel>
            <CInput type="email" id="email-input" name="email-input" placeholder="Contact No." autoComplete="email"/>
          </CCol>
          <CCol md="6">
            <CLabel htmlFor="password-input">Mother CNIC</CLabel>
            <CInput id="password-input" name="password-input" placeholder="Emergency Contact No." autoComplete="new-password" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="12" xs="12" md="12">
            <CLabel htmlFor="text-input">Health Issue(If any)</CLabel>
            </CCol>
            <CCol lg="12" xs="12" md="9">
            <CTextarea 
              name="textarea-input" 
              id="textarea-input" 
              rows="1"
              placeholder="Address..." 
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="6" md="3">
            <CLabel htmlFor="email-input">Other Language Spoken at Home</CLabel>
            <CInput type="email" id="email-input" name="email-input" placeholder="Language" autoComplete="email"/>
          </CCol>
          <CCol md="6">
            <CLabel htmlFor="password-input">How did you hear of <b><i>Kids' Club</i></b></CLabel>
            <CInput id="password-input" name="password-input" placeholder="How did you hear" autoComplete="new-password" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="4" md="3">
            <CLabel htmlFor="email-input">Why have you chosen to apply to <b><i>Kids' Club</i>:</b></CLabel>
          </CCol>
          <CCol md="8">
            <CInput id="password-input" name="password-input" placeholder="Why Kids' Club" autoComplete="new-password" />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol lg="3" md="3">
          <CFormGroup variant="custom-radio" inline>
              <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
              <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Yes</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
              <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
              <CLabel variant="custom-checkbox" htmlFor="inline-radio2">No</CLabel>
            </CFormGroup>
          </CCol>
          <CCol lg="9" md="8">
            <CLabel htmlFor="email-input" style={{textAlign:'right'}}>اگر آپ کا بچہ پانچ سال  سے کم  عمر کا ہے تو ادارہ اس چیز کا مجاز ہے  کہ جب بھی پولیو کی ٹیم سکول میں آے تو ادارہ بچوں کو پولیو کے قطرے  پلا دے  </CLabel>
          </CCol>
        </CFormGroup>
      <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
      <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Cancel</CButton>
      </CForm>
    </CCardBody>
  </CCard>
 );
}
}

export default AddStudent