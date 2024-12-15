// 寫註解可使用快捷鍵: ctrl + / (cmd + /)
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <header className="">
        <div className="container mx-auto">
          <h1>HTML &amp; CSS</h1>
          <p>關於HTML標籤的更多資訊可參考 <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML</a></p>
        </div>
      </header>
      <section id="travelListSection" className="my-4">
        <div className="">
          {/* TODO: 請在此處放入一系列的產品卡片 */}

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
