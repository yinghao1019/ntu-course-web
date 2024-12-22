// 寫註解可使用快捷鍵: ctrl + / (cmd + /)
import Image from 'next/image'
import TripCard from '@/components/TripCard'
import tripList from '@/data/trip-list'

export default function Home() {

  const cards = tripList.map((trip) => {
    return <TripCard key={trip.id} trip={trip} />
  })
  return (
    <>
      <header className="text-center py-10 bg-neutral-100">
        <div className="container mx-auto">
          <h1>HTML &amp; CSS</h1>
          <p>關於HTML標籤的更多資訊可參考 <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML</a></p>
          <a href="/about" className='mt-4'>About</a>
        </div>
      </header>
      <section id="tripListSection" className="my-4">
        <div className="container max-auto px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards}
        </div>
      </section>
      <section id="htmlTagsSection" className="my-4">
        <div className="container mx-auto">
          <h1>HTML標籤</h1>
          <p>用以表達你想在網頁上放入的各種內容</p>
          {/* TODO: 請嘗試在此處放入HTML標籤 */}

        </div>
      </section>
      <footer className="">
        <div className="container mx-auto">
          <p>
            CopyRight &copy; 2024
          </p>
        </div>
      </footer>
    </>
  );
}
