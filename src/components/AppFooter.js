import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a
          href="https://github.com/SupAut/SupAut-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          SupAut
        </a>
        <span className="ms-1">&copy; 2023 Team semi;colon</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Built by</span>
        <a
          href="https://github.com/SupAut/SupAut-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team semi;colon
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
