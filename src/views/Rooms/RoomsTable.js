import React, {useEffect, useState} from "react"
import Swal from 'sweetalert2'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CButton,
    CRow,
    CTableDataCell 
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import axios from "axios"
import { DeleteWithAuth } from "src/Services/APIRequests.service"

  const getBadge = item => {
      if(item.class == null){
        return 'success'
      }
      else{
        return 'danger'
      }
    }

   
  const fields = ['roomName', 'type', 'floor' , 'capacity' , 'status', 'action' ]

  const RoomsTable = () => {
    
    const [RoomData, setRoomData] = useState([{}]);
    
    useEffect(() => {
      axios.get('https://localhost:44307/api/Rooms').then(res => {console.log(res.data); setRoomData(res.data)}).catch(error =>{console.log(error)})
    },[])

    function del(item){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          debugger
          DeleteWithAuth('/Rooms/'+item.id).then(res =>{
            if(res.status == 200){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            }
          }).catch(err => err.status)
        }
      })
    }
    return (
<CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Rooms
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={RoomData}
                fields={fields}
                bordered
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'status': 
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item)}>
                          {RoomData.class == null? 'Not Occupide':'Occupide'}
                        </CBadge>
                      </td>
                    ),
                    'action':(item,index)=>(
                      <td>
                          <CButton color="primary"  variant="outline" onClick='' ><CIcon content={freeSet.cilPen} /></CButton>
                          <CButton color="danger"  variant="outline" onClick={()=>del(item)}><CIcon content={freeSet.cilWarning} /></CButton>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
    )
  }
  export default RoomsTable;