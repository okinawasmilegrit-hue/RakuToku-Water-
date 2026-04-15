import { CheckCircle2, ChevronRight, Droplets, Package, Trash2, Home, Coffee, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-[#f9f7f4]">
      {/* Header */}
      <header className="bg-white border-b-2 border-[#1a6fa8] py-3 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="font-serif text-base font-bold text-[#0d4f7a]">
          株式会社SmileGrit
          <span className="text-[0.7rem] font-normal text-gray-500 block tracking-widest mt-0.5">
            OKINAWA | WATER &amp; WELLNESS
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&w=1400&q=85" 
          alt="ペットボトルのお水" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#08203c]/70 via-[#0d4f7a]/55 to-[#1a6fa8]/35 flex flex-col items-center justify-center text-center px-6 py-10">
          <div className="inline-block bg-white/20 border border-white/40 text-white/90 text-xs tracking-widest px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
            💧 ラクトクウォーター
          </div>
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-snug mb-4 drop-shadow-md">
            ペットボトルの買い出しは<br />お休みしませんか？
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-xl leading-relaxed mb-8 drop-shadow">
            「毎日の小さな負担」をなくす定額制浄水サーバー
          </p>
          <a 
            href="https://lstep.app/form/28365/ZMiflJ/69514a" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-br from-[#e05a2b] to-[#c0381a] text-white text-base font-bold px-8 py-4 rounded-full shadow-[0_6px_24px_rgba(200,60,30,0.4)] tracking-wide hover:transform hover:-translate-y-0.5 transition-all"
          >
            ▼ 無料お試し・お問い合わせはこちら
          </a>
        </div>
      </div>

      <main className="flex-grow max-w-[780px] mx-auto w-full px-5 pb-20">
        
        {/* Lead Text */}
        <div className="text-base md:text-lg text-[#555] border-y border-[#e2ddd8] py-6 my-8 leading-loose">
          <p className="mb-4">
            家族の健康や、毎日の美味しいごはんのために。「お水にはこだわって、毎回スーパーやネットでペットボトルを買っている」というご家庭、とても多いですよね。<br />
            いつも重いお水を運んだり、ストックを管理したり、本当にお疲れ様です！✨
          </p>
          <p>
            家族を思うからこその選択ですが、日々の生活の中で、ふとこんな<strong>「ちょっとした手間」</strong>を感じることはありませんか？
          </p>
        </div>

        {/* Section 1: Pain Points */}
        <section className="pt-10">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug">
            家族思いだからこそ抱える、毎日の「ちょっとした手間」
          </h2>

          <div className="bg-[#fff8f5] border border-[#f0d0c0] rounded-xl p-6 md:p-8 my-6">
            <div className="font-bold text-sm text-[#e05a2b] mb-4">💬 ペットボトル生活のあるある</div>
            
            <div className="flex gap-3 mb-5 pb-5 border-b border-dashed border-[#f0d0c0]">
              <Droplets className="w-6 h-6 text-[#e05a2b] shrink-0 mt-0.5" />
              <p className="text-sm text-[#555] leading-relaxed m-0">「お水が重くて、買い出しが少し大変」</p>
            </div>
            <div className="flex gap-3 mb-5 pb-5 border-b border-dashed border-[#f0d0c0]">
              <Package className="w-6 h-6 text-[#e05a2b] shrink-0 mt-0.5" />
              <p className="text-sm text-[#555] leading-relaxed m-0">「ネットで買っても、ダンボールを開けて収納する手間がかかる」</p>
            </div>
            <div className="flex gap-3 mb-5 pb-5 border-b border-dashed border-[#f0d0c0]">
              <Trash2 className="w-6 h-6 text-[#e05a2b] shrink-0 mt-0.5" />
              <p className="text-sm text-[#555] leading-relaxed m-0">「ラベルを剥がして、キャップを分けて、ボトルを洗って潰す作業が地味に時間がかかる」</p>
            </div>
            <div className="flex gap-3">
              <Home className="w-6 h-6 text-[#e05a2b] shrink-0 mt-0.5" />
              <p className="text-sm text-[#555] leading-relaxed m-0">「ゴミの日まで、空きペットボトルの保管スペースが必要になる」</p>
            </div>
          </div>

          <p className="text-[#2a2a2a] leading-loose mb-4">実はこれ、月に換算すると結構な「時間と労力」を使っているんです。</p>

          <img 
            src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&w=780&q=80" 
            alt="時計・時間のイメージ" 
            className="w-full rounded-xl my-7 object-cover max-h-[360px]"
          />
          <p className="text-center text-xs text-[#888] italic mb-7">毎週の買い出し、地味に大変ですよね</p>
        </section>

        {/* Section 2: Solution */}
        <section className="pt-14">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug">
            毎日の「ちょっとした手間」をなくして、ゆとりのある生活へ
          </h2>

          <p className="text-[#2a2a2a] leading-loose mb-4">「お水は美味しい方がいいけど、買い出しやゴミ捨ての手間がなくなったらもっといいのに…」</p>
          <p className="text-[#2a2a2a] leading-loose mb-4">そんな沖縄の皆さまに「時間と心のゆとり」をお届けするために作られたのが、水道直結型ウォーターサーバー<strong>「楽得（ラクトク）ウォーター」</strong>です。</p>
          <p className="text-[#2a2a2a] leading-loose mb-4">ラクトクウォーターなら、ペットボトル生活での３つの手間がスッキリ解消されます！</p>

          <div className="bg-[#f0f7ff] border border-[#c0d8f0] rounded-xl p-5 md:p-8 my-6">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 pb-6 border-b border-dashed border-[#c0d8f0] items-start">
              <div className="bg-[#1a6fa8] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shrink-0 mt-0.5 self-start">ラクラク①</div>
              <div>
                <strong className="block text-[0.95rem] text-[#0d4f7a] mb-2 leading-relaxed">重い買い出し・受け取りの手間なし！</strong>
                <p className="text-sm text-[#555] leading-relaxed m-0">水道管と直接つないで（直結して）使うため、お水を「買う」必要がなくなります。スーパーで重い思いをすることも、宅配ボトルの受け取りのために家で待機することもありません。</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 pb-6 border-b border-dashed border-[#c0d8f0] items-start">
              <div className="bg-[#1a6fa8] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shrink-0 mt-0.5 self-start">ラクラク②</div>
              <div>
                <strong className="block text-[0.95rem] text-[#0d4f7a] mb-2 leading-relaxed">ゴミの分別・保管スペースが不要に！</strong>
                <p className="text-sm text-[#555] leading-relaxed m-0">ペットボトルが出ないので、ラベル剥がしやボトルの洗浄・圧縮といった家事から解放されます。キッチンを占領していた「空きボトルのスペース」も空いて、お部屋がスッキリ広く使えます。</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start">
              <div className="bg-[#1a6fa8] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shrink-0 mt-0.5 self-start">ラクラク③</div>
              <div>
                <strong className="block text-[0.95rem] text-[#0d4f7a] mb-2 leading-relaxed">お湯を沸かす手間なし！冷蔵庫も広々！</strong>
                <p className="text-sm text-[#555] leading-relaxed m-0">レバーを押すだけで「冷たいお水」も「熱いお湯（約85℃）」もすぐに出ます。ペットボトルを冷蔵庫で冷やしておく必要がないので、冷蔵庫の中も広々と使えます。朝のコーヒーや赤ちゃんのミルク作りも、待ち時間ゼロでスムーズに！</p>
              </div>
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&w=780&q=80" 
            alt="朝のコーヒーをゆったり楽しむ様子" 
            className="w-full rounded-xl my-7 object-cover max-h-[360px]"
          />
          <p className="text-center text-xs text-[#888] italic mb-7">朝のコーヒーも、待ち時間ゼロでゆっくり楽しめます</p>
        </section>

        {/* Section 3: Quality */}
        <section className="pt-14">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug">
            もちろん、味と安全性にもこだわっています
          </h2>

          <p className="text-[#2a2a2a] leading-loose mb-4">「水道管につなぐってことは、味は水道水と同じなんじゃないの？」と思われるかもしれません。</p>
          <p className="text-[#2a2a2a] leading-loose mb-4">ご安心ください！ラクトクウォーターは、<strong>【沖縄の硬い水質に合わせて専用設計された5段階フィルター】</strong>を搭載しています。</p>

          <img 
            src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/02/琉宮祭LP素材-2.png" 
            alt="5段階フィルター" 
            className="w-full rounded-xl my-6 object-cover shadow-sm border border-[#e2ddd8]"
          />

          <div className="bg-[#e8f4fb] border-l-4 border-[#1a6fa8] rounded-r-xl p-5 md:p-6 my-7 text-[0.95rem] leading-loose text-[#0d4f7a]">
            サビや気になる塩素（カルキ臭）、さらにはニュースで話題の有機フッ素化合物（PFAS）までしっかりキャッチ。そして、お料理やお茶が美味しくなる「軟水」へと生まれ変わらせます。
          </div>
          <p className="text-center text-xs text-[#888] italic mb-7">県外とは水質が違う沖縄の水。その違いを前提に設計した5段階フィルターで、まろやかな軟水へ</p>

          <p className="text-[#2a2a2a] leading-loose mb-4">「今まで買っていたペットボトルのお水より美味しい！」と、乗り換えたお客様からも嬉しいお声をいただいています。</p>
        </section>

        {/* Section 4: Campaign */}
        <section className="pt-14">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug" id="offer">
            【マルシェご来場者様限定】まずは1ヶ月無料で試してみませんか？
          </h2>

          <p className="text-[#2a2a2a] leading-loose mb-4">「本当にゴミが出なくなってラクになるか試してみたい」「まずは味に納得してから決めたい」</p>
          <p className="text-[#2a2a2a] leading-loose mb-4">そんなあなたのために、マルシェでご縁があった皆様限定で、<strong>【1ヶ月完全無料お試しキャンペーン】</strong>を実施中です！</p>
          
          <div className="bg-gradient-to-br from-[#fff9ee] to-[#fff3e0] border-2 border-[#c8922a] rounded-2xl p-6 md:p-9 my-10">
            <div className="inline-block bg-[#c8922a] text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded mb-3.5">
              🌺 マルシェご来場者様限定キャンペーン
            </div>
            <h3 className="font-serif text-xl text-[#7a4a00] font-bold mb-3.5">1ヶ月完全無料お試し実施中！</h3>
            <p className="text-[0.92rem] text-[#6a4800] leading-loose mb-4">
              初期の設置費用も、1ヶ月間どれだけ飲んでもお水代も、もし合わなかった場合の撤去費用も<strong>【すべて0円】</strong>。勝手に自動更新されて課金されることは絶対にありませんので、まずは気軽におうちで体験してみてください。
            </p>
            
            <ul className="flex flex-wrap gap-2.5 mb-6">
              {['設置費用 0円', '1ヶ月のお水代 0円', '撤去費用 0円', '自動更新・課金なし'].map((item, i) => (
                <li key={i} className="bg-white border border-[#e8c878] rounded-md px-4 py-1.5 text-[0.85rem] text-[#7a4a00] font-medium flex items-center">
                  <span className="text-[#2e7d52] font-bold mr-1.5">✓</span> {item}
                </li>
              ))}
            </ul>

            <img 
              src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ryugusai.png" 
              alt="ご案内モデル" 
              className="w-full rounded-xl mb-6 object-cover shadow-sm border border-[#e8c878]"
            />
            
            <a 
              href="https://lstep.app/form/28365/ZMiflJ/69514a" 
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-br from-[#e05a2b] to-[#c0381a] text-white text-lg font-bold px-6 py-5 rounded-xl shadow-[0_4px_20px_rgba(200,60,30,0.32)] tracking-wide hover:transform hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,60,30,0.4)] transition-all"
            >
              ▼ 無料お試しのお申し込み・お問い合わせ ▼
            </a>
            <p className="text-center text-xs text-[#aa7a30] mt-4 leading-relaxed">
              「うちのキッチンにも置ける？」「まずは話だけ聞きたい」<br />
              という方も、LINEからお気軽にご相談ください！
            </p>
          </div>
        </section>

        {/* Author Card */}
        <div className="mt-12 p-6 md:p-7 bg-[#f5f8fb] border border-[#d8e8f3] rounded-xl flex gap-4 items-start">
          <div className="w-14 h-14 bg-gradient-to-br from-[#1a6fa8] to-[#4db8d4] rounded-full flex items-center justify-center text-2xl shrink-0">
            🌊
          </div>
          <div>
            <div className="font-bold text-[0.95rem] text-[#2a2a2a] mb-1">株式会社SmileGrit</div>
            <div className="text-[0.83rem] text-[#555] leading-relaxed">
              沖縄県を拠点に、暮らしを豊かにするサービスを提供しています。「毎日の小さな幸せ」をテーマに、水・健康・デジタルの分野でお客様をサポートしています。
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/40 text-center py-10 px-5 text-xs tracking-wide mt-auto">
        <div className="max-w-[780px] mx-auto mb-8">
          <img 
            src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ラクトク-バナーのコピー.png" 
            alt="ラクトクウォーター バナー" 
            className="w-full max-w-md mx-auto rounded-xl object-cover shadow-lg"
          />
        </div>
        <p>© 株式会社SmileGrit | ラクトク（楽得）ウォーター | 沖縄県</p>
      </footer>
    </div>
  );
}
