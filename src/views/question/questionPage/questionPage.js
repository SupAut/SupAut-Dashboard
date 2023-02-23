import React, { useState, useEffect } from 'react'
//import db from '../../../firebase'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAvatar,
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHamburgerMenu } from '@coreui/icons'

import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react'

//import { collection, query, onSnapshot } from 'firebase/firestore'

function calcRevenue(sales, price) {
  var total = 0
  total = sales.length * price
  for (var i = 0; i < sales.length; i++) {
    total *= sales[i].quantity
  }
  return total
}

const ViewProductsPage = () => {
  const [order, setOrder] = useState([
    {
      item: [{ name: 'item-name', quantity: 3 }],
      date: '02/09/2022',
      time: '12:40 am',
      id: 2,
      customer: {
        name: 'Kris Doe',
        contact: '011224599',
      },
      quantity: 3,
    },
  ])
  // useEffect(
  //   () =>
  //     onSnapshot(query(collection(db, 'order')), (orderSnapshot2) => {
  //       const orderInfoTable = []
  //       orderSnapshot2.forEach((orderDoc) => {
  //         var orderInfo = orderDoc.data()
  //         let itemArr = []
  //         orderInfo.item.forEach((orderItem) => {
  //           itemArr.push({ name: orderItem.name, quantity: orderItem.quantity })
  //         })
  //         orderInfoTable.push({
  //           item: itemArr,
  //           date: orderInfo.timepoint.date,
  //           time: orderInfo.timepoint.time,
  //           id: orderDoc.id,
  //           customer: {
  //             name: orderInfo.customer.name,
  //             contact: orderInfo.customer.contact,
  //           },
  //           quantity: parseInt(orderInfo.item[0].quantity),
  //         })
  //       })
  //       setOrder(orderInfoTable)
  //     }),
  //   [],
  // )
  const [product, setProduct] = useState([
    {
      item: {
        id: 'p1235',
        name: 'Cupcakes',
        measurement: 'Pieces',
        price: 100,
      },
      sales: [
        {
          date: '02/09/2022',
          time: '12:40 am',
          id: 2,
          customer: {
            name: 'Kris Doe',
            contact: '011224599',
          },
          quantity: 3,
        },
      ],
      itemStatus: 'menu',
    },
  ])
  // useEffect(
  //   () =>
  //     onSnapshot(query(collection(db, 'product')), (custSnapshot) => {
  //       const productArr = []
  //       custSnapshot.forEach((prodDoc) => {
  //         var prodInfo = prodDoc.data()
  //         //get sales history
  //         let saleList = []
  //         order.forEach((singleOrder) => {
  //           singleOrder.item.forEach((orderItem) => {
  //             if (orderItem.name === prodInfo.name) {
  //               saleList.push({
  //                 date: singleOrder.date,
  //                 time: singleOrder.time,
  //                 id: singleOrder.id,
  //                 customer: {
  //                   name: singleOrder.name,
  //                   contact: singleOrder.contact,
  //                 },
  //                 quantity: singleOrder.quantity,
  //               })
  //             }
  //           })
  //         })
  //         productArr.push({
  //           item: {
  //             id: prodDoc.id,
  //             name: prodInfo.name,
  //             measurement: prodInfo.measurement,
  //             price: parseInt(prodInfo.price),
  //           },
  //           sales: saleList,
  //           itemStatus: prodInfo.status,
  //         })
  //       })
  //       setProduct(productArr)
  //     }),
  //   [order],
  // )
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Questions List Group</CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Detail</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Question</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Answer</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Activity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #1
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Figurative Language</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #2
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Poetry Analysis </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #3
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Creative Writing </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #4
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Research Paper Writing</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #5
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Parts of Speech</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #6
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Othello</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #7
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Adverb</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #8
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Complex Sentences</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #9
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Comprehension</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CAvatar color="secondary" textColor="white">
                      #10
                    </CAvatar>
                  </CTableHeaderCell>
                  <CTableDataCell>Preposition</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Question Details</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Answer Details</CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ViewProductsPage
