import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/Header";
import WorksCarousel from "@/components/WorksCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { WorkCard } from "@/components/WorkCard";
import { SectionHeaderText } from "@/components/SectionHeaderText";
import { Footer } from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${notoSansJP.className}`}
      >
        <h1 className="text-6xl font-bold py-12">Portfolio</h1>
        <WorksCarousel slides={SLIDES} options={OPTIONS} />

        <section id="profile">
          <SectionHeaderText text="Profile" />
          <p className="text-lg mt-4 max-md:mx-2">
            けめるです。
            <br />
            主にゲーム開発・作曲・デザイン等をやっております。
            <br />
            よろしくお願いします。
            <br />
            <br />
            - ゲーム制作: 2023.3~
            <br />
            - プログラミング: 2022.3~
            <br />
            - 作曲: 2020~
            <br />
            - デザイン: ちょっと
            <br />
            <br />
            - Game Jamでのチーム開発の経験あり（デザイナー、プログラマを担当）
            <br />
            -
            インターンにてカジュアルゲーム開発の経験あり（ゲーム制作全体を担当）
            <br />
          </p>
        </section>

        <section id="works">
          <SectionHeaderText text="Works" />
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto space-x-2">
            <WorkCard
              title="けめるのインターネット"
              link="https://qemel-blog-nextjs.vercel.app/"
              description="自分用のサイトです。"
              imageRef="/images/works/qemel-blog-nextjs.png"
              tags={["Next.js", "daisyUI", "TailWindCSS"]}
            />
            <WorkCard
              title="赤点レベルでさくさく進むDTM入門"
              link="https://music-tutorial-docs.vercel.app/"
              description="DTM(PC作曲)の支援サイトです。"
              imageRef="/images/works/dtm-web.png"
              tags={["Next.js", "Nextra", "Figma"]}
            />
            <WorkCard
              title="Here is ONE Button!"
              link="https://unityroom.com/games/here_is_one_button"
              description="ルールが説明されないパズルゲームです。unity1weekで制作しました。"
              imageRef="/images/works/here-is-one-button.png"
              tags={["Music", "Unity", "C#"]}
            />
            <WorkCard
              title="Circla"
              link="https://unityroom.com/games/circla"
              description="2レーン+αなのに高難易度なリズムゲームです。"
              imageRef="/images/works/circla.gif"
              tags={["Music", "Unity", "C#", "Figma"]}
            />
            <WorkCard
              title="Circla Album"
              link="https://qemel-blog-nextjs.vercel.app/"
              description="Circlaの楽曲をまとめたアルバムです。"
              imageRef="/images/works/circla-album.png"
              tags={["Music", "Figma"]}
            />
            <WorkCard
              title="地獄のおくりびと"
              link="https://unityroom.com/games/jigokuno_okuribito"
              description="地獄に送るためになんとか問答して絞りだすゲームです。unity1weekで制作しました。"
              imageRef="/images/works/hell.png"
              tags={["Music", "Unity", "C#", "Figma", "Aseprite"]}
            />
            <WorkCard
              title="Songs"
              link="https://www.youtube.com/playlist?list=PL-cydTzyfRl83vy7VTp5JmSoUCKKzcnua"
              description="その他楽曲です。"
              imageRef="/images/works/nobs.gif"
              tags={["Music", "Aseprite"]}
            />
          </div>
        </section>

        <section id="skills">
          <SectionHeaderText text="Skills" />
          <p className="text-lg mt-4 max-md:mx-2">
            - プログラミング: C#, JavaScript, TypeScript, Python
            <br />
            - ゲームエンジン: Unity
            <br />
            - DAW: FL Studio, Bitwig Studio
            <br />
            - デザイン: Figma
            <br />
            - 基本情報技術者試験取得
            <br />- TOEIC Writing / Listening 895点
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
