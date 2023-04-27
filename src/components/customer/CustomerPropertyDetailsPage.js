import React from 'react'
import CustomerPropertyDetail from './CustomerPropertyDetail'
import CustomerNavigation from './CustomerNavigation'
import Footer from '../Footer'

function CustomerPropertyDetailsPage() {
  return (
    <div>
      <CustomerNavigation />
      <CustomerPropertyDetail/>
      {/* <Footer /> */}
    </div>
  )
}

export default CustomerPropertyDetailsPage