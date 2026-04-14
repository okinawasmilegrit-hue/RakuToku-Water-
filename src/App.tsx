import { CheckCircle2, ChevronRight, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  // --- 記事情報（ここを変更する） ---
  const article = {
    title: "【もう限界!?】重いペットボトルの買い出しとゴミ捨てから解放される、沖縄県民のための新しい選択肢",
    target: "毎週スーパーで水を箱買いしている方／ペットボトルのゴミ捨てにうんざりしている方",
    heroImage: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&q=80&w=1200&h=600",
    leadText: "「毎週スーパーで重い水を箱買いして、運ぶのが本当に辛い…」「すぐ空のペットボトルが溜まって、ゴミ出しの日までキッチンが狭い…」そんな風に感じていませんか？実は、そのストレス、毎月定額の「水道直結型ウォーターサーバー」で完全に無くすことができるんです。",
    painPoints: [
      "スーパーから重い水を運ぶのが重労働で腰が痛い",
      "空のペットボトルがキッチンを占領して見栄えが悪い",
      "ゴミ出しの日の分別と、かさばるゴミ袋の持ち運びが面倒",
      "夏場は消費が激しく、買い忘れのプレッシャーが常にある"
    ],
    insertImage1: "https://images.unsplash.com/photo-1584820927498-cafe2c1c6669?auto=format&fit=crop&q=80&w=800&h=500",
    solutionText: "そんなお悩みを一掃するのが、水道直結型の「ラクトクウォーター」です。ご自宅の水道水から直接、安全でおいしいお水を作るので、買い出しも、ゴミ捨ても、重いボトルの受け取りも一切不要。使えば使うほどお得な定額制なので、飲み水としてはもちろん、お料理や麦茶作りにも気兼ねなくたっぷり使えます。",
    insertImage2: "https://images.unsplash.com/photo-1544448325-10eb08381241?auto=format&fit=crop&q=80&w=800&h=500",
    
    // キャンペーン情報
    campaign: {
      name: "【期間限定】春の新生活応援キャンペーン",
      description: "今なら初期費用・初月レンタル料が完全無料！",
      freeItems: [
        "設置工事費用 0円",
        "初月のお水代（レンタル料） 0円",
        "撤去費用 0円",
        "自動更新なし（お試し後の解約も安心）"
      ],
      link: "https://lstep.app/form/28365/ZMiflJ/69514a",
      bannerImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=300"
    },
    
    // 固定バナー（フィルター）
    filterBanner: "https://images.unsplash.com/photo-1585776263594-518337190d63?auto=format&fit=crop&q=80&w=800&h=300"
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-center">
          <p className="text-sm font-bold text-brand-blue tracking-wider">
            株式会社SmileGrit / OKINAWA | WATER &amp; WELLNESS
          </p>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto w-full bg-white shadow-xl">
        {/* 1. ヒーロー */}
        <section className="relative">
          <div className="aspect-[2/1] w-full overflow-hidden">
            <img 
              src={article.heroImage} 
              alt="Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6 md:p-10 text-center">
            <p className="text-brand-orange font-bold text-sm mb-3 tracking-widest">
              ターゲット: {article.target}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-8">
              {article.title}
            </h1>
            
            <a 
              href={article.campaign.link}
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              無料お試しに申し込む
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        {/* 2. リード文 */}
        <section className="px-6 md:px-10 py-8 bg-brand-bg/50">
          <p className="text-lg leading-relaxed text-gray-700">
            {article.leadText}
          </p>
        </section>

        {/* 3. 痛点セクション */}
        <section className="px-6 md:px-10 py-12">
          <h2 className="font-serif text-2xl font-bold text-center mb-8 text-brand-blue flex items-center justify-center">
            <Droplets className="w-6 h-6 mr-2" />
            こんなお悩みありませんか？
          </h2>
          
          <div className="bg-blue-50 rounded-2xl p-6 md:p-8 mb-8">
            <ul className="space-y-4">
              {article.painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mr-3 mt-0.5" />
                  <span className="text-lg font-medium text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <img 
            src={article.insertImage1} 
            alt="お悩みのイメージ" 
            className="w-full h-auto rounded-xl shadow-md mb-8"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* 4. 解決策・商品説明セクション */}
        <section className="px-6 md:px-10 py-12 bg-gray-50">
          <h2 className="font-serif text-2xl font-bold text-center mb-8 text-brand-orange flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-2" />
            ラクトクウォーターが解決します！
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {article.solutionText}
          </p>

          <img 
            src={article.insertImage2} 
            alt="解決策のイメージ" 
            className="w-full h-auto rounded-xl shadow-md"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* 5. フィルター説明（固定バナー） */}
        <section className="px-6 md:px-10 py-12">
          <div className="mb-8">
            {/* フィルターバナー（固定） */}
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-brand-blue text-white text-center p-8">
              {/* 実際の運用時はここに固定画像を配置 */}
              <img 
                src={article.filterBanner} 
                alt="県外とは水質が違う沖縄の水。" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold mb-2">県外とは水質が違う沖縄の水。</h3>
                <p className="text-blue-100">沖縄特有の硬水に合わせた専用フィルター</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="font-serif text-xl font-bold text-brand-blue mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-2" />
              安心の3段階浄水システム
            </h3>
            <p>
              沖縄の水道水はミネラル分が多く、そのままでは飲みにくいと感じる方も多いです。ラクトクウォーターは、沖縄の水質に特化した高性能フィルターを搭載。不純物をしっかり除去し、まろやかで美味しいお水を作ります。
            </p>
          </div>
        </section>

        {/* 6 & 7. キャンペーンセクション */}
        <section className="px-6 md:px-10 py-12 bg-brand-bg">
          {/* キャンペーンバナー（固定位置） */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-md">
            <img 
              src={article.campaign.bannerImage} 
              alt={article.campaign.name} 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* キャンペーンボックス（ゴールド枠） */}
          <div className="border-4 border-brand-gold rounded-2xl bg-white p-6 md:p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
            
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-gold mb-4">
              {article.campaign.name}
            </h2>
            <p className="text-xl font-bold text-gray-800 mb-8">
              {article.campaign.description}
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 mb-8 text-left inline-block w-full md:w-auto">
              <p className="font-bold text-center text-brand-orange mb-4">＼ 今ならすべて無料！ ／</p>
              <ul className="space-y-3">
                {article.campaign.freeItems.map((item, index) => (
                  <li key={index} className="flex items-center text-lg font-medium text-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={article.campaign.link}
              className="flex items-center justify-center w-full py-5 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xl"
            >
              今すぐ無料お試しに申し込む
              <ChevronRight className="ml-2 w-6 h-6" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              ※お申し込みは1分で完了します
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
        <p className="text-sm">
          &copy; 株式会社SmileGrit | ラクトク（楽得）ウォーター | 沖縄県
        </p>
      </footer>
    </div>
  );
}
