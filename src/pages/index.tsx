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
import { Skills, careerEvents, workCards } from "@/lib/constants";
import dynamic from "next/dynamic";
import Image from "next/image";
import GitTreeTimeline, { TimelineEvent } from "@/components/GitTreeTimeline";

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
          <div className="pt-0">
            <GitTreeTimeline events={careerEvents}></GitTreeTimeline>
          </div>
        </section>

        <section id="links">

          <SectionHeaderText text="Links" />

          <h5 className="text-l py-8 text-center">
            主にzennにて技術記事をアウトプットしています。
          </h5>

          <div className="flex flex-row justify-center items-center space-x-8 mb-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 gap-4 space-y-1">
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

        <section id="others">
          <SectionHeaderText text="Others" />
          <div className="text-center py-4 text-xl">
            unity1week online共有会登壇
          </div>
          <div className="">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/d5kQajLO1Nk?si=kmmN9djqcIX5AKVR&amp;start=2977"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
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
