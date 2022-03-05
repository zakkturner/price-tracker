import Image from 'next/image'
import HeartIcon from '../../public/icons/heart.svg'

import style from './GpuCard.module.css'

export default function GpuCard({ mhz, bits, brand, gddr, id, img, price, slots, title, vram }) {
  return (
    <div className={style.wrapper}>
      <Image
        priority
        src={img}
        className={style.image}
        height={200}
        width={200}
        alt="gpu thumbnail"
      />
      <hr className={style.divider} />
      <div>
        <span className={style.brand}>{brand}</span>
        <h3 className={style.title}>{title}</h3>
        <ul className={style.specs}>
          <li>{slots}</li>
          <li>{gddr}</li>
          <li>{mhz} MHz</li>
          <li>{vram}</li>
          <li>{bits} bits</li>
        </ul>
        <hr className={style.divider} />
        <div className={style.footer}>
          <span className={style.price}>
            {price}
          </span>
          <HeartIcon className={style.icon} />
        </div>
      </div>
    </div>
  );
}