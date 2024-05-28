import React from 'react'
import './style.css'
import FabricDesignDisplay1 from '../../components/HomeScreen/FabricDesignDisplay1'
import { mockData } from '../../util'
import NavBar from '../../components/NavBar'
import BottomBar from '../../components/BottomBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div
        className="container"
        data-ignore="used only for top most containter width"
      >
        <FabricDesignDisplay1
          fabricDesignOptions={mockData.fabricDesignOptions}
        />
      </div>
      <BottomBar />
    </>
  )
}

export default Home
