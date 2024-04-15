export interface GenreBeginProps {
  genre: string;
  beginAt: string;
  // 備考
  note: string;
}

export interface WorkCardProps {
  genre: string;
  title: string;
  date: string;
  link: string;
  description: string;
  imageRef: string;
  tags: string[];
}

export interface SkillProps {
  genre: string;
  skills: string;
}

export const genreBegins: GenreBeginProps[] = [
  {
    genre: "作曲(DTM)",
    beginAt: "2020年4月",
    note: "音ゲー楽曲に憧れて開始。",
  },
  {
    genre: "プログラミング全般",
    beginAt: "2022年3月",
    note: "競技プログラミング(AtCoder)きっかけでC++を開始。今はC#が中心。",
  },
  {
    genre: "ゲーム制作",
    beginAt: "2023年3月",
    note: "ゲームを作れるという発想がなかったが、作れると知って開始。主にUnity。",
  },
  {
    genre: "デザイン",
    beginAt: "2023年3月",
    note: "ゲーム・MVに必要なデザインを開始。",
  },
  {
    genre: "Web制作",
    beginAt: "2023年11月",
    note: "ポートフォリオ作成をきっかけに開始。",
  },
];

export const workCards: WorkCardProps[] = [
  {
    genre: "Game",
    title: "White / Black",
    date: "2024-03",
    link: "https://unityroom.com/games/worb",
    description:
      "白黒の世界を行き来するパズルゲームです。unity1weekで制作しました(総合ランキング8位獲得)。",
    imageRef: "/images/works/white-or-black.png",
    tags: ["Unity", "C#", "Music"],
  },
  {
    genre: "Web",
    title: "けめるのインターネット",
    date: "2023-11",
    link: "https://qemel-blog-nextjs.vercel.app/",
    description: "自分用のサイトです。",
    imageRef: "/images/works/qemel-blog-nextjs.png",
    tags: ["Next.js", "daisyUI", "TailWindCSS"],
  },
  {
    genre: "Game",
    title: "Here is ONE Button!",
    date: "2023-09",
    link: "https://unityroom.com/games/here_is_one_button",
    description:
      "ルールが説明されないパズルゲームです。インタラクティブ音楽を採用。unity1weekで制作しました。",
    imageRef: "/images/works/here-is-one-button.png",
    tags: ["Music", "Unity", "C#", "Aseprite"],
  },
  {
    genre: "Game",
    title: "Circla",
    date: "2023-08",
    link: "https://unityroom.com/games/circla",
    description:
      "2レーンなのに高難易度なリズムゲームです。UniRxを利用し、MVPパターンを意識して作成しました。",
    imageRef: "/images/works/circla.gif",
    tags: ["Music", "Unity", "C#", "Figma"],
  },
  {
    genre: "Music",
    title: "Circla Album",
    date: "2023-08",
    link: "https://qemel-blog-nextjs.vercel.app/",
    description: "Circlaの楽曲をまとめたアルバムです。",
    imageRef: "/images/works/circla-album.png",
    tags: ["Music", "Figma"],
  },
  {
    genre: "Game",
    title: "地獄のおくりびと",
    date: "2023-12",
    link: "https://unityroom.com/games/jigokuno_okuribito",
    description:
      "地獄に送るためになんとか問答して絞りだすゲームです。unity1weekで制作しました。",
    imageRef: "/images/works/hell.png",
    tags: ["Music", "Unity", "C#", "Aseprite"],
  },
  {
    genre: "Music",
    title: "Songs",
    date: "2020-09から",
    link: "https://www.youtube.com/playlist?list=PL-cydTzyfRl83vy7VTp5JmSoUCKKzcnua",
    description: "その他楽曲です。",
    imageRef: "/images/works/nobs.gif",
    tags: ["Music", "Aseprite"],
  },
];

export const Skills: SkillProps[] = [
  {
    genre: "Web制作",
    skills: "Next.js, TailwindCSS, Vercel, Prisma, Supabase, etc...",
  },
  {
    genre: "ゲーム制作",
    skills: "Unity(UniRx/R3, UniTask, VContainer, MessagePipe, etc...), Godot",
  },
  {
    genre: "DTM",
    skills: "Bitwig Studio, FL Studio",
  },
  {
    genre: "デザイン",
    skills: "Figma, Aseprite, Affinity Designer",
  },
  {
    genre: "アルゴリズム",
    skills: "AtCoder rating 900~ (緑)",
  },
  {
    genre: "その他",
    skills: "基本情報技術者, TOEIC 895点",
  },
];
