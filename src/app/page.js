'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [bravo, setBravo] = useState(0)
  const [nama, setNama] = useState('Nurul Alfatih Khumaera Azzahra H')

  function handlerTambahBravo(){
    setBravo(bravo + 1)
  }

  function handlerGantiNama(){
    setNama('Fatih')
  }

  return (
    <div className='body'>
      <div className="banner-container">
        {/* kartu */}
        <div className="header-banner-wrapper">
          {/* foto dan nama */}
          <div className="profile-header-banner">
            {/* foto*/}
            <Image
              src="/assets/pasphoto.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* nama*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* nim dan bio*/}
            <p>D121211008</p>
            <p>Semangat {bravo} ya!!!</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* tombol cta */}
            <div className='cta-button' onClick={handlerTambahBravo}>
              <p>Halo!</p>
            </div>
            <div className='cta-button' 
            style={{
              marginTop: '12px'
            }}
            
            onClick={handlerGantiNama}>
              <p>Ganti Nama</p>
            </div>
        </div>
      </div>
    </div>
  )
}