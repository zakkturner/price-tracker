import style from './GpuListings.module.css'
import GpuCard from './GpuCard'

export default function GpuListings() {
  return (
    <main className={style.wrapper}>
      <GpuCard />
    </main>
  )
}