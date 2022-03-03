import Image from 'next/image'
import HeartIcon from '../../public/icons/heart.svg'

import style from './GpuCard.module.css'

export default function GpuCard() {
  return (
    <div className={style.wrapper}>
      <Image
        priority
        src="/images/asus-rog-gpu.jpg"
        className={style.image}
        height={200}
        width={200}
        alt="gpu thumbnail"
      />
      <hr className={style.divider} />
      <div>
        <span className={style.brand}>ASUS</span>
        <h3 className={style.title}>ASUS ROG Strix NVIDIA GeForce RTX 3080 Ti OC Edition Gaming Graphics Card</h3>
        <dl className={style.specs}>
          <li>PCI Express x16</li>
          <li>12 GB</li>
          <li>GDDR6X</li>
          <li>384 bits</li>
          <li>4000 MHz</li>
        </dl>
        <hr className={style.divider} />
        <div className={style.footer}>
          <span className={style.price}>
            $9,999.99
          </span>
          <HeartIcon className={style.icon} />
        </div>
      </div>
    </div>
  )
}