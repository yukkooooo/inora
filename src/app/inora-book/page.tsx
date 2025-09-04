
'use client'

export default function InoraBookPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 items-center px-4 py-16">
          {/* 左側: 人物画像 */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden aspect-[4/5] flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-32 h-48 bg-inora-beige rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                  <span className="text-inora-dark text-sm font-medium">inora-book</span>
                </div>
                <p className="text-sm text-gray-600">ダミー画像: ヒーロー人物</p>
              </div>
            </div>
          </div>

          {/* 右側: テキスト */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl font-light text-inora-dark mb-4">
              inora
            </h1>
            <p className="text-lg text-inora-gray mb-6 tracking-wider">
              FOR MODERN LIFE
            </p>
            <p className="text-base text-inora-gray mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              BRIGHTENING YOUR EVERYDAY<br />
              ONE PRAYER AT A TIME
            </p>
            <button className="border border-inora-gray px-8 py-2 text-inora-gray hover:bg-inora-gray hover:text-white transition-colors">
              MORE →
            </button>
          </div>
        </div>
      </section>

      {/* 商品紹介とコンセプト */}
      <section className="py-20 bg-inora-light">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* 左側: デスクセットアップ画像 */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden aspect-square flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-24 h-36 bg-inora-beige rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-inora-dark text-xs">inora-book</span>
                </div>
                <p className="text-sm text-gray-600">ダミー画像: デスクセットアップ</p>
              </div>
            </div>
          </div>

          {/* 右側: コンセプトテキスト */}
          <div className="text-center lg:text-left">
            <div className="space-y-4 text-lg leading-relaxed text-inora-dark">
              <p>朝の光に、夜の静けさに、</p>
              <p>暮らしの中に、そっと息づく祈り。</p>
              <p>そのかたちは、自由で、多様でいい。</p>
              <p className="font-medium">「inora」は、</p>
              <p>日常にやさしく彩りを添え、</p>
              <p>あなたのそばで、いつもあたたかな</p>
              <p>祈りを支えます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 使用シーンの提案 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* 勉強会 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden aspect-square mb-6 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-32 bg-inora-gray rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-medium">inora-book</span>
                  </div>
                  <p className="text-sm text-gray-600">ダミー画像: 勉強会</p>
                </div>
              </div>
              <p className="text-inora-dark font-medium">勉強会に行くときにも</p>
            </div>

            {/* 休日 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden aspect-square mb-6 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-32 bg-inora-brown rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-medium">inora-book</span>
                  </div>
                  <p className="text-sm text-gray-600">ダミー画像: 休日</p>
                </div>
              </div>
              <p className="text-inora-dark font-medium">休日の穏やかな時間にも</p>
            </div>

            {/* 朝の時間 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg overflow-hidden aspect-square mb-6 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-32 bg-inora-beige rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                    <span className="text-inora-dark text-xs font-medium">inora-book</span>
                  </div>
                  <p className="text-sm text-gray-600">ダミー画像: 朝の時間</p>
                </div>
              </div>
              <p className="text-inora-dark font-medium">清々しい一日のはじまりにも</p>
            </div>
          </div>
        </div>
      </section>

      {/* 商品の提示 */}
      <section className="py-20 bg-inora-dark">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* 左側: 商品提示画像 */}
          <div>
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden aspect-[4/5] flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-32 h-48 bg-inora-gray rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                  <span className="text-white text-sm font-medium">inora-book</span>
                </div>
                <p className="text-sm text-gray-600">ダミー画像: 商品提示</p>
              </div>
            </div>
          </div>

          {/* 右側: テキスト */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-light text-white">
              あなたのそばに
            </h2>
          </div>
        </div>
      </section>

      {/* 基本カラーの紹介 */}
      <section className="py-20 bg-white">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* 左側: カラーバリエーション画像 */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden aspect-square flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="space-y-4">
                  <div className="w-24 h-36 bg-inora-brown rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-white text-xs">#6</span>
                  </div>
                  <div className="w-24 h-36 bg-inora-gray rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-white text-xs">#2</span>
                  </div>
                  <div className="w-24 h-36 bg-inora-beige rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-inora-dark text-xs">#3</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">ダミー画像: カラーバリエーション</p>
              </div>
            </div>
          </div>

          {/* 右側: カラー情報 */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-medium text-inora-dark mb-8">
              ベーシックカラー
            </h2>
            <div className="space-y-4 text-inora-dark">
              <div>
                <p className="font-medium">DARK BROWN #6</p>
              </div>
              <div>
                <p className="font-medium">LIGHT GRAY #2</p>
              </div>
              <div>
                <p className="font-medium">MOCHA BEIGE #3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 各カラーの詳細 */}
      <section className="py-20 bg-inora-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* ダークブラウン */}
            <div className="text-center">
              <div className="bg-white rounded-lg overflow-hidden aspect-square mb-6 flex items-center justify-center shadow-lg">
                <div className="w-24 h-36 bg-inora-brown rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">inora-book</span>
                </div>
              </div>
              <p className="text-inora-dark font-medium">ダークブラウン</p>
            </div>

            {/* ライトグレー */}
            <div className="text-center">
              <div className="bg-white rounded-lg overflow-hidden aspect-square mb-6 flex items-center justify-center shadow-lg">
                <div className="w-24 h-36 bg-inora-gray rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">inora-book</span>
                </div>
              </div>
              <p className="text-inora-dark font-medium">ライトグレー</p>
            </div>

            {/* モカベージュ */}
            <div className="text-center">
              <div className="bg-white rounded-lg overflow-hidden aspect-square mb-6 flex items-center justify-center shadow-lg">
                <div className="w-24 h-36 bg-inora-beige rounded-lg flex items-center justify-center">
                  <span className="text-inora-dark text-xs">inora-book</span>
                </div>
              </div>
              <p className="text-inora-dark font-medium">モカベージュ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Point セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-light text-inora-dark mb-8 font-serif italic">
            Point
          </h2>
          <p className="text-lg text-inora-gray">
            さらなる詳細や特徴を説明するセクション
          </p>
        </div>
      </section>
    </main>
  )
}
