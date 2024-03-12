import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/Header";
import WorksCarousel from "@/components/WorksCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { WorkCard } from "@/components/WorkCard";
import { SectionHeaderText } from "@/components/SectionHeaderText";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface WorkCardProps {
  genre: string;
  title: string;
  link: string;
  description: string;
  imageRef: string;
  tags: string[];
}

const workCards: WorkCardProps[] = [
  {
    genre: "Web",
    title: "けめるのインターネット",
    link: "https://qemel-blog-nextjs.vercel.app/",
    description: "自分用のサイトです。",
    imageRef: "/images/works/qemel-blog-nextjs.png",
    tags: ["Next.js", "daisyUI", "TailWindCSS"],
  },
  {
    genre: "Web",
    title: "赤点レベルでさくさく進むDTM入門",
    link: "https://music-tutorial-docs.vercel.app/",
    description: "DTM(PC作曲)の支援サイトです。",
    imageRef: "/images/works/dtm-web.png",
    tags: ["Next.js", "Nextra", "Figma"],
  },
  {
    genre: "Game",
    title: "Here is ONE Button!",
    link: "https://unityroom.com/games/here_is_one_button",
    description:
      "ルールが説明されないパズルゲームです。unity1weekで制作しました。",
    imageRef: "/images/works/here-is-one-button.png",
    tags: ["Music", "Unity", "C#"],
  },
  {
    genre: "Game",
    title: "Circla",
    link: "https://unityroom.com/games/circla",
    description: "2レーン+αなのに高難易度なリズムゲームです。",
    imageRef: "/images/works/circla.gif",
    tags: ["Music", "Unity", "C#", "Figma"],
  },
  {
    genre: "Music",
    title: "Circla Album",
    link: "https://qemel-blog-nextjs.vercel.app/",
    description: "Circlaの楽曲をまとめたアルバムです。",
    imageRef: "/images/works/circla-album.png",
    tags: ["Music", "Figma"],
  },
  {
    genre: "Game",
    title: "地獄のおくりびと",
    link: "https://unityroom.com/games/jigokuno_okuribito",
    description:
      "地獄に送るためになんとか問答して絞りだすゲームです。unity1weekで制作しました。",
    imageRef: "/images/works/hell.png",
    tags: ["Music", "Unity", "C#", "Figma", "Aseprite"],
  },
  {
    genre: "Music",
    title: "Songs",
    link: "https://www.youtube.com/playlist?list=PL-cydTzyfRl83vy7VTp5JmSoUCKKzcnua",
    description: "その他楽曲です。",
    imageRef: "/images/works/nobs.gif",
    tags: ["Music", "Aseprite"],
  },
];

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filteredWorkCards = workCards.filter((workCard) => {
    if (selectedTag === "All") return true;
    else return selectedTag === "" || workCard.genre === selectedTag;
  });

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
          <Select onValueChange={(value) => setSelectedTag(value)}>
            <SelectTrigger className="w-[180px] mx-auto">
              <SelectValue placeholder="ジャンルを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tag</SelectLabel>
                <SelectItem value="All">すべて</SelectItem>
                <SelectItem value="Music">Music</SelectItem>
                <SelectItem value="Web">Web</SelectItem>
                <SelectItem value="Game">Game</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="pt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto space-x-2">
            {filteredWorkCards.map((workCard, index) => (
              <WorkCard
                genre={workCard.genre}
                key={index}
                title={workCard.title}
                link={workCard.link}
                description={workCard.description}
                imageRef={workCard.imageRef}
                tags={workCard.tags}
              />
            ))}
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
