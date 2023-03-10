import Head from 'next/head'
import TypewriterCompornent from './components/Typewriter'
import Modal from './components/Modal'
import Image from 'next/image'
import Myphoto from 'public/myphoto.jpg'
import ToggleButton from './components/Togglebutton'


export default function Home() {

  return (
    <>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative w-screen h-screen bg-slate-200 font-Lora font-custom'>

        <div className='custom_wrapper font-bold'>
          <div className='text-5xl relative h-full'>
            <TypewriterCompornent />
          </div>
        </div>

        <div className='custom_wrapper flex flex-wrap justify-center'>

          <div className="w-full bg-red-900 text-center">
            <Image src={Myphoto} alt={''}/>
          </div>
          <div className="w-full h-full flex gap-4 justify-center">

            <ToggleButton label={"詳細情報"} data={'detail'} />
            <ToggleButton label={"好きなもの・趣味"} data={'like'} />
            <ToggleButton label={"経歴"} data={'carrer'} />
            <ToggleButton label={"苦手なもの"} data={'dislike'} />

          </div>

          {/*
          TODO

          Change props key
          label is change "title"

          after
          make object same props key

          my task is ...
          SSR func ,API
           */}

          <Modal title={"詳細情報"} data={"detail"}>
              <p>生年月日: 1997-08-06</p>
              <p>年齢: 25</p>
              <p>血液型: B型</p>
              <p>出生地: 長野県</p>
              <p>居住地: 京都府京丹後市峰山町</p>
              <p>卒業学校: 静岡県立田方農業高等学校</p>
              <p>身長: 172cm</p>
              <p>獅子座、丑年</p>
          </Modal>

            <Modal title={'好きなもの・趣味'} data={"like"}>
            <p>本を読むことが趣味です。ジャンルは様々ですが、主に心理学、恋愛小説、ノンフィクション、戦争関係が多いです。</p>
            <p>最近読んだ本の中で非常に面白かったのは「夜と霧」という強制収用のお話です</p>
            <p>紅茶を茶葉で買い、家で淹れるのが好きです</p>
            <p>実家では猫を飼っていました。猫派です</p>
            <p>次はハリネズミをお迎えしたいと思ってます</p>
            <p>ゲームもします。基本はFPSをやります。</p>
            <p>しかし積みゲーがたくさんあって勉強とどのように並行しようか考え中です</p>
            </Modal>

            <Modal title={"経歴"} data={"carrer"}>
            <p>静岡県立田方農業高等学校を卒業後</p>
            <p>静岡県東部でフランチャイズ展開している企業の飲食店に就職</p>
            <p>料理全般できるようになりました。</p>
            <p>その後、Appleの正規販売代理店で販売員として従事</p>
            <p>コロナの影響により、解雇</p>
            <p>そして現在交際中の女性と出会い、京都に移住することを決断</p>
            </Modal>

            <Modal title={"苦手なもの"} data={"dislike"}>
            <p>海亀のスープ（本当に苦手です）</p>
            <p>オリーブの実（この世の食べ物ではありません）</p>
            <p>貝類</p>
            </Modal>

          </div>{/* container end */}

    </main>

    </>
  )
}
