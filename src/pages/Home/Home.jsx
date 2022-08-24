import React from 'react'
import Drawer from '../../components/Drawer/Drawer'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <div class="drawer" data-theme="light">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            {/* For non logged user */}
            <Hero />
            {/* For logged user */}
        </div>
        <Drawer />
    </div>
  )
}

export default Home