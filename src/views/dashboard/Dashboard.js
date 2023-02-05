import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsC,
} from '@coreui/react'
import { CChartLine, CChart, CChartBar } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cilChartPie,
  cilNoteAdd,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilWc,
  cilSpreadsheet,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  return (
    <CRow>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          icon={<CIcon icon={cilPeople} height={36} />}
          progress={{ value: 50 }}
          text="Widget helper text"
          title="Visitors"
          value="152"
        />
      </CCol>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          icon={<CIcon icon={cilWc} height={36} />}
          color="primary"
          inverse
          progress={{ value: 50 }}
          text="Widget helper text"
          title="Staff"
          value="10"
        />
      </CCol>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          icon={<CIcon icon={cilNoteAdd} height={36} />}
          progress={{ value: 50 }}
          text="Widget helper text"
          title="Questions"
          value="90"
        />
      </CCol>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          icon={<CIcon icon={cilSpreadsheet} height={36} />}
          color="primary"
          inverse
          progress={{ value: 50 }}
          text="Widget helper text"
          title="Modules"
          value="8"
        />
      </CCol>
      <CCol xs={6}>
        <CChart
          type="bar"
          data={{
            labels: ['Maths', 'Science', 'Health', 'English', 'History', 'Religion', 'Language'],
            datasets: [
              {
                label: 'Modules',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)',
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)',
                ],
              },
            ],
          }}
          labels="months"
        />
      </CCol>

      <CCol xs={6}>
        <CChart
          type="line"
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            datasets: [
              {
                label: '6th Grade',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                data: [40, 44, 50, 39, 66, 56, 59, 78, 70],
              },
              {
                label: '7th Grade',
                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                borderColor: 'rgba(151, 187, 205, 1)',
                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                pointBorderColor: '#fff',
                data: [63, 71, 69, 64, 73, 78, 59, 70, 60],
              },
              {
                label: '8th Grade',
                backgroundColor: 'rgba(100, 60, 205, 0.2)',
                borderColor: 'rgba(100, 60, 205, 1)',
                pointBackgroundColor: 'rgba(100, 60, 205, 1)',
                pointBorderColor: '#fff',
                data: [60, 52, 40, 35, 54, 51, 29, 60, 55],
              },
            ],
          }}
        />
      </CCol>
      <CCol xs={12}>
        {' '}
        <br />
        <CButton color="primary" className="float-end" size="md">
          Add Student
        </CButton>{' '}
        <CButton color="primary" size="md">
          Add Question
        </CButton>
      </CCol>
    </CRow>
  )
}

export default Dashboard
