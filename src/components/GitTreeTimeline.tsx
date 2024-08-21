import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Palette, Activity, SquareCode } from "lucide-react";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: "project" | "music" | "art" | "work";
}

interface TimelineItemProps extends TimelineEvent {
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  icon,
  isLast,
}) => {
  const IconComponent =
    icon === "project"
      ? SquareCode
      : icon === "music"
      ? Music
      : icon === "art"
      ? Palette
      : Activity;

  return (
    <div className="flex items-start mb-12 relative">
      <div className="flex-shrink-0 w-24 text-right mr-4">
        <span className="text-sm font-semibold">{year}</span>
      </div>
      <div className="flex-grow flex items-start">
        <div className="flex flex-col items-center mr-4 relative">
          <div
            className={`w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center z-10 ${
              isLast ? "" : "mb-4"
            }`}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          {!isLast && (
            <div className="w-0.5 bg-gray-300 absolute top-10 -bottom-14 left-1/2 transform -translate-x-1/2"></div>
          )}
        </div>
        <div className="flex-grow">
          <div>
            <CardTitle>{title}</CardTitle>
          </div>
          <div className="pt-4">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GitTreeTimelineProps {
  events: TimelineEvent[];
}

const GitTreeTimeline: React.FC<GitTreeTimelineProps> = ({ events }) => {
  return (
    <div className="p-4">
      <div className="relative">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            {...event}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default GitTreeTimeline;
