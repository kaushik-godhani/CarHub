import Image from 'next/image'

import { Hero, SearchBar, CustomFilter } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  // console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y w-full' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalouge</h1>
          <p>Explore cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section></section>
        ) :
          (
            <div>
              <h2>Oops, No results!</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }

      </div>
    </main>
  )
}
