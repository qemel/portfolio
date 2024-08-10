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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skills, genreBegins, workCards } from "@/lib/constants";
import dynamic from "next/dynamic";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ScrollRevealContainer = dynamic(
  () => import("@/components/ScrollRevealContainer"),
  { ssr: false }
);

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

          <p className="text-lg text-center max-md:mx-2 pt-8 pb-12">
            ゲーム開発 / サウンド / デザイン
          </p>

          <div className="pt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>分野</TableHead>
                  <TableHead>時期</TableHead>
                  <TableHead>備考</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {genreBegins.map((genreBegin, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {genreBegin.genre}
                    </TableCell>
                    <TableCell>{genreBegin.beginAt}</TableCell>
                    <TableCell>{genreBegin.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section id="links">
          <SectionHeaderText text="Links" />
          <div className="flex flex-row items-center space-x-8">
            <a href="https://zenn.dev/qemel">
              <Image
                src="/images/social-icons/logo-only.svg"
                width={60}
                height={60}
                alt="zenn"
              />
            </a>
            <a href="https://github.com/qemel">
              <Image
                src="/images/social-icons/github-mark.svg"
                width={60}
                height={60}
                alt="github"
              />
            </a>
          </div>
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
                <SelectItem value="Game">Game</SelectItem>
                <SelectItem value="Web">Web</SelectItem>
                <SelectItem value="Music">Music</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <ScrollRevealContainer>
            <div className="grid grid-cols-3 pt-8 gap-4 space-y-1">
              {filteredWorkCards
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                .map((workCard, index) => (
                  <WorkCard
                    genre={workCard.genre}
                    key={index}
                    title={workCard.title}
                    date={workCard.date}
                    link={workCard.link}
                    description={workCard.description}
                    imageRef={workCard.imageRef}
                    tags={workCard.tags}
                    iframe={workCard.iframe || ""}
                    githubLink={workCard.githubLink || ""}
                  />
                ))}
            </div>
          </ScrollRevealContainer>
        </section>

        <section id="skills">
          <SectionHeaderText text="Skills" />
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ジャンル</TableHead>
                  <TableHead>スキルセット</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Skills.map((skill, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{skill.genre}</TableCell>
                    <TableCell>{skill.skills}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
