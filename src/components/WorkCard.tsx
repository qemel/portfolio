import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import Image from "next/image";
import YouTube from "react-youtube";
import { Button } from "./ui/button";

export const WorkCard = ({
  genre,
  title,
  date,
  link,
  description,
  imageRef,
  tags,
  iframe,
  githubLink,
}: {
  genre: string;
  title: string;
  date: string;
  link: string;
  description: string;
  imageRef: string;
  tags: string[];
  iframe: string;
  githubLink: string;
}) => {
  return (
    <Card className="grid w-[350px] bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <form>
          <div className="pb-4 flex">
            <Badge variant={"outline"} className="left-2 font-bold text-base">
              {genre}
            </Badge>
            <div className="pl-1 flex flex-col">
              <div className="flex space-x-1 pt-1">
                {tags.sort().map((tag) => (
                  <Badge variant={"outline"} className="" key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>q
          </div>
          <Link href={link}>
            <Image src={imageRef} alt={title} width={300} height={300} />
          </Link>
          <div className="pt-4">
            <Link href={link}>
              <CardTitle>{title}</CardTitle>
            </Link>
          </div>
        </form>
        <div className="pt-2">
          <CardDescription>{date}</CardDescription>
        </div>
        <div className="pt-4">
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {iframe && iframe !== "" && (
          <>
            <div className="youtube-wrap">
              <YouTube videoId={iframe} />
            </div>
          </>
        )}
      </CardContent>
      <CardContent>
        {githubLink && githubLink !== "" && (
          <div className="">
            <Link href={githubLink}>
              <Button variant={"default"}>ソースコード(GitHub)</Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
