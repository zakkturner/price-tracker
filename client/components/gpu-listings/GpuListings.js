import GpuCard from './GpuCard'

import gpuData from '../../../api/data/data.json'

import style from './GpuListings.module.css'

export default function GpuListings() {
  return (
    <main className={style.wrapper}>
      {gpuData.map(gpu =>
        <GpuCard
          key={gpu.id}
          mhz={gpu.MHz}
          bits={gpu.bits}
          brand={gpu.brand}
          gddr={gpu.gddr}
          id={gpu.id}
          img={gpu.img}
          price={gpu.price}
          slots={gpu.slots}
          title={gpu.title}
          vram={gpu.vram}
        />
      )}
    </main>
  )
}