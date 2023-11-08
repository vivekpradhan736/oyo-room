import Image from 'next/image'
import React from 'react'

const Ads = () => {
  return (
    <div>
      <Image
                src={"/offerImg.webp"}
                alt="demo"
                width={1900}
                height={200}
                className=" py-14 px-28"
              />
    </div>
  )
}

export default Ads
