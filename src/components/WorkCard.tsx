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

export const WorkCard = ({
  genre,
  title,
  link,
  description,
  imageRef,
  tags,
}: {
  genre: string;
  title: string;
  link: string;
  description: string;
  imageRef: string;
  tags: string[];
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <form>
          <Badge variant={"outline"} className="mb-4 left-2 font-bold text-base">{genre}</Badge>
          <Link href={link}>
            <Image src={imageRef} alt={title} width={600} height={600} />
          </Link>
        </form>
      </CardHeader>
      <CardContent>
        <Link href={link}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <div className="py-2">
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <Label htmlFor="framework">使用した技術</Label>
          <div className="flex space-x-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
