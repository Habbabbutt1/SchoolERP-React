import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CLabel,
  CInputCheckbox,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Login extends React.Component {
  constructor(){
    super();
    this.state={
      UserName: null,
      Password: null,
      RememnerMe:false,
    }
    this.handleFunction=this.handleFunction.bind(this);
  }
  handleFunction(e){
    this.setState({[e.target.id]: e.target.value})
  }
login()
  {
    const {UserName,Password,RememberMe}=this.state;
    const login={
      UserName:UserName,
      password:Password,
      RememberMe:RememberMe
    }
    debugger
    console.log(this.login)
    try{
    fetch("https://localhost:44307/api/Account/Login",{
      method:"Post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
      body:JSON.stringify(login)
    })
    .then(response => response.json())
       .then((result) => {
        console.warn(JSON.stringify(result))
        localStorage.setItem('login',JSON.stringify({
          token: result
        }))
      })
      debugger
  }
  catch(e)
  {
  debugger
    console.log(e);
  }
  }
  render() {
    return(
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}+/images/loginimage.jpg)` }}>
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="UserName" placeholder="Username" id="UserName" onChange={(e)=>{this.handleFunction(e)}} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="Password" placeholder="Password" autoComplete="current-password" id="Password" onChange={(e)=>{this.handleFunction(e)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="Id" placeholder="Id" onChange={(e)=>{this.handleFunction(e)}} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="Name" placeholder="Name" onChange={(e)=>{this.handleFunction(e)}} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="Name" placeholder="Name" onChange={(e)=>{this.handleFunction(e)}} />
                    </CInputGroup>
                    {/* <CInputGroup className="mb-5">
                    <CInputCheckbox 
                     custom 
                     id="inline-checkbox1" 
                     name="RememberMe" 
                     onChange={(e)=> {this.setState({RememberMe:e.target.value})}}
                     value="option1" 
                    />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Remember Me?</CLabel>
                     </CInputGroup> */}
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={()=>this.login()}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </div>
    );
  }
}

export default Login
