import React from 'react'
import ListOfPropertyContainer from '../container/ListOfPropertyContainer'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function ListOfPropertyDetailsPage() {
    return (
        <div>
          <Navigation/>
          <ListOfPropertyContainer/>
          <Footer/>
        </div>
      )
}

export default ListOfPropertyDetailsPage