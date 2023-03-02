import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function StudentList(props) {
  const students = [
    { id: 1, name: 'Emily' },
    { id: 2, name: 'David' },
    { id: 3, name: 'Samantha' },
  ]

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default StudentList
