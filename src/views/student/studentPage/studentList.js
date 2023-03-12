/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React, { useState, useEffect } from 'react'
// import { collection, query, onSnapshot, setDoc, doc, getDocs } from 'firebase/firestore'
// import db from '../../../firebase'


// export const aboutData = {
//     title: "Who I am",
//     description1: "My name's Zainab. I'm currently following the undergraduate degree program in Computer Science at IIT Sri Lanka in affiliation with the university of Westminster.",
//     description2: "During the day I work on my assignments and projects in par with the degree. But my interest for web design and development always makes me want to bring to life different projects.",
//     image: 2
// }

// const StudentList = () => {
//   const [student, setStudent] = useState([
//     {
//       id: '1',
//       class: '7',
//       name: 'John Doe',
//       contact: '0776792726',
//       careGiverEmail: 'doe@gmail.com',
//       careGiverContact: '0776792724',
//       //skill: { creativity: '3', logical: '4', time: '4', visual: '5' },
//     },
//   ])
//   useEffect(
//     () =>
//       onSnapshot(query(collection(db, 'student')), (studentSnapshot) => {
//         const studentInfoTable = []
//         studentSnapshot.forEach((studentDoc) => {
//           var studentInfo = studentDoc.data()
//           studentInfoTable.push({
//             id: studentDoc.id,
//             class: studentInfo.class,
//             name: studentInfo.name,
//             contact: studentInfo.contact,
//             careGiverEmail: studentInfo.careGiverEmail,
//             careGiverContact: studentInfo.careGiverContact,
//             // skill: {
//             //   creativity: studentInfo.skill.creativity,
//             //   logical: studentInfo.skill.logical,
//             //   time: studentInfo.skill.time,
//             //   visual: studentInfo.skill.visual,
//             // },
//           })
//         })
//         setStudent(studentInfoTable)
//       }),
//     [],
//   )
//   console.log(student)
//   return console.log()
// }

// export default StudentList

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//   // your firebase config here
// };

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();

// // function to retrieve Firestore data and format as array
// const getDataAsArray = callback => {
//   const collectionRef = firestore.collection('your-collection-name');
//   return collectionRef.onSnapshot(snapshot => {
//     const dataArray = snapshot.docs.map(doc => doc.data());
//     callback(dataArray);
//   });
// };

// export default getDataAsArray;
