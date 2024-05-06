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

export const WorkCard = ({
  genre,
  title,
  date,
  link,
  description,
  imageRef,
  tags,
  iframe,
}: {
  genre: string;
  title: string;
  date: string;
  link: string;
  description: string;
  imageRef: string;
  tags: string[];
  iframe: string;
}) => {
  return (
    <Card className="grid w-[350px] bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <form>
          <div className="pb-4">
            <Badge variant={"outline"} className="left-2 font-bold text-base">
              {genre}
            </Badge>
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
        {iframe !== "" && (
          <>
            <div className="youtube-wrap">
              <YouTube videoId={iframe} />
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <div className="flex space-x-2 pt-2">
            {tags.sort().map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
