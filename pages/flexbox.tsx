import type { NextPage } from 'next'
import Head from 'next/head'

const Spacer = () => <div className="mb-4" />

const Page: NextPage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>Flexbox ドットインストール</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-2">
        <div className="flex flex-col items-center w-36">
          <img className="h-24 w-24" src="/vercel.svg" alt="ChitChat Logo" />
          <span className="text-center">GitHub</span>
        </div>
        <div className="flex flex-col items-center w-36">
          <img className="h-24 w-24" src="/vercel.svg" alt="ChitChat Logo" />
          <span>SoundCloud</span>
        </div>
      </div>
      <Spacer />
      <span className="font-bold">
        #03
        フレックスコンテナ用のプロパティとフレックスアイテム用のプロパティがある
      </span>
      <div className="mb-2" />
      <div className="inline-flex flex-col border-2 p-1">
        <div className="inline-flex font-bold">コンテナ</div>
        <div className="inline-flex">flex-direction</div>
        <div className="inline-flex">justify-content 主軸</div>
        <div className="inline-flex">align-items 交差軸</div>
        <div className="inline-flex">flex-wrap</div>
        <div className="inline-flex">gap</div>
        <div className="inline-flex text-gray-500">flex-flow</div>
        <div className="inline-flex text-gray-500">align-content</div>
      </div>
      <div className="inline-flex flex-col border-2 p-1">
        <div className="inline-flex font-bold">アイテム</div>
        <div className="inline-flex">align-self</div>
        <div className="inline-flex">order</div>
        <div className="inline-flex">flex</div>
        <div className="inline-flex text-gray-500">flex-grow</div>
        <div className="inline-flex text-gray-500">flex-shrink</div>
        <div className="inline-flex text-gray-500">flex-basis</div>
      </div>
      <Spacer />
      <span className="font-bold">
        #07 align-items で交差軸方向の要素間隔を調整
      </span>
      <br />
      justify-conent: start：主軸→の最初（justify-start）
      <br />
      align-items: end：交差軸↓の最後（items-end）
      <div className="flex items-end justify-start h-32 border-sky-200 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
      </div>
      <br />
      align-items: center：主軸→ 交差軸↓の中央
      <div className="flex items-center h-32 border-sky-200 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
      </div>
      <br />
      flex-direction: column：主軸を↓交差軸を→に
      <br />
      align-items: center：交差軸→の中央
      <div className="flex flex-col items-center h-32 border-sky-200 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
      </div>
      <Spacer />
      <span className="font-bold">
        #06 justify-content で主軸方向の要素間隔を調整
      </span>
      <br />
      between
      <div className="flex justify-between border-2">
        <div className="w-20 h-20 bg-fuchsia-200" />
        <div className="w-20 h-20 bg-fuchsia-200" />
        <div className="w-20 h-20 bg-fuchsia-200" />
      </div>
      flex-end
      <div className="flex justify-end border-2">
        <div className="w-20 h-20 bg-fuchsia-200 border-2 border-slate-300" />
        <div className="w-20 h-20 bg-fuchsia-200 border-2 border-slate-300" />
        <div className="w-20 h-20 bg-fuchsia-200 border-2 border-slate-300" />
      </div>
      <Spacer />
      <span className="font-bold">
        #05 flex-direction (主軸方向) で向きを縦方向 column に変える
      </span>
      <br />
      <div className="inline-flex flex-col">
        <div className="w-20 h-20 bg-pink-200 text-center">1</div>
        <div className="w-20 h-20 bg-blue-200 text-center">2</div>
        <div className="w-20 h-20 bg-orange-200 text-center">3</div>
      </div>
      <div className="inline-block m-2">flex-direction: column = flex-col</div>
      <Spacer />
      <span className="font-bold">
        #04 フレックスコンテナにflex, inline-flexを設定
      </span>
      <br />
      display: flex だけで横 row
      方向に表示される。フレックスボックスの基本は横（水平 flex）
      <div className="flex border-2 border-rose-500">
        <div className="w-20 h-20 bg-pink-200"></div>
        <div className="w-20 h-20 bg-blue-200"></div>
        <div className="w-20 h-20 bg-orange-200"></div>
      </div>
      display: inline-flex だとインラインに（文字列並びで）並べられる
      <br />
      <div className="inline-flex border-2 border-rose-500">
        <div className="w-20 h-20 bg-pink-200"></div>
        <div className="w-20 h-20 bg-blue-200"></div>
        <div className="w-20 h-20 bg-orange-200"></div>
      </div>
      <div className="inline-flex border-2 border-rose-500">
        <div className="w-20 h-20 bg-pink-200"></div>
        <div className="w-20 h-20 bg-blue-200"></div>
        <div className="w-20 h-20 bg-orange-200"></div>
      </div>
      <Spacer />
      <span className="font-bold">#08 flex-wrap 折り返し</span>
      <br />
      デフォルトでは縮もうとする
      <div className="flex w-36 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
        <div className="w-10 h-10 bg-teal-200 text-center">4</div>
        <div className="w-10 h-10 bg-gray-200 text-center">5</div>
      </div>
      flex-wrap
      <div className="flex flex-wrap w-36 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
        <div className="w-10 h-10 bg-teal-200 text-center">4</div>
        <div className="w-10 h-10 bg-gray-200 text-center">5</div>
      </div>
      space-between も <strong>行ごとに</strong> space-between される
      <div className="flex flex-wrap justify-between w-36 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
        <div className="w-10 h-10 bg-teal-200 text-center">4</div>
        <div className="w-10 h-10 bg-gray-200 text-center">5</div>
      </div>
      <Spacer />
      <span className="font-bold">#09 gap で要素のすき間</span>
      <div className="flex justify-center gap-4 h-20 border-sky-200 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
      </div>
      <hr className="my-4 border-gray-500" />
      <Spacer />
      <span className="font-bold">
        #12 flex ではみ出たり足りなかったりする要素の伸縮を操る
      </span>
      <br />
      <ul>
        <li>
          flex: initial：
          <strong className="text-red-700">広がらないけど縮もうとする</strong>
        </li>
      </ul>
      <div className="flex border-2 w-90">
        <div className="w-12 h-10 bg-pink-200"></div>
        <div className="w-24 h-10 bg-orange-200"></div>
        <div className="w-36 h-10 bg-blue-200"></div>
      </div>
      <div className="flex border-2 w-48">
        <div className="w-12 h-10 bg-pink-200"></div>
        <div className="w-24 h-10 bg-orange-200"></div>
        <div className="w-36 h-10 bg-blue-200"></div>
      </div>
      <ul>
        <li>flex: auto：伸縮自在</li>
        <li>flex: 1 　 ：伸縮自在、でもこっちが多く採用される</li>
        <li>flex: none：固まる</li>
      </ul>
      <br />
      <div className="flex border-2 w-90">
        <div className="w-12 h-10 bg-pink-200">flex: 0</div>
        <div className="flex-1 w-24 h-10 bg-orange-200">flex: 1</div>
        <div className="w-36 h-10 bg-blue-200">flex: 0</div>
      </div>
      <Spacer />
      <span className="font-bold ">#10 align-self で交差軸方向で単独行動</span>
      <br />
      align-self: center：2だけ交差軸↓中央にしたい（self-center）
      <div className="flex h-32 border-2">
        <div className="w-10 h-10 bg-pink-200 text-center">1</div>
        <div className="self-center w-10 h-10 bg-blue-200 text-center">2</div>
        <div className="w-10 h-10 bg-orange-200 text-center">3</div>
      </div>
      <Spacer />
      <span className="font-bold">#10 主軸方向の配置テクニック</span>
      <br />
      margin-left: auto：一番最後のアイテムだけ右寄せしたい
      <div className="flex border-2">
        <div className="w-10 h-10 bg-pink-200 " />
        <div className="w-10 h-10 bg-blue-200 " />
        <div className="w-10 h-10 ml-auto bg-orange-200 text-sm text-center ">
          ml-auto
        </div>
      </div>
      <Spacer />
      <span className="font-bold">#11 order で要素をCSSで並び替える</span>
      <br />
      order -1 → 0 → 1 → 2 の順に横並び
      <div className="flex border-2">
        <div className="w-10 h-10 bg-pink-200 order-10">o10</div>
        <div className="w-10 h-10 bg-blue-200 order-1">o1</div>
        <div className="w-10 h-10  bg-orange-200 order-3">o3</div>
      </div>
      {/* </div> */}
      <div className="mb-20" />
    </div>
  )
}

export default Page
