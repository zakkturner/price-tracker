import GpuCard from './GpuCard'

import style from './GpuListings.module.css'

export default function GpuListings() {
  return (
    <main className={style.wrapper}>
      <GpuCard />
    </main>
  )
}