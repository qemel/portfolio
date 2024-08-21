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
  iframe?: string;
  githubLink?: string;
}

export interface SkillProps {
  genre: string;
  skills: string;
}

export const genreBegins: GenreBeginProps[] = [
  {
    genre: "作曲(DTM)",
    beginAt: "2020年4月",
    note: "音ゲー楽曲などに憧れてゆるくスタート",
  },
  {
    genre: "イラスト",
    beginAt: "2021年1月",
    note: "曲のサムネイルを描けた方がいい気がしてスタート",
  },
  {
    genre: "プログラミング全般",
    beginAt: "2022年3月",
    note: "競技プログラミング(AtCoder)きっかけでC++からスタート",
  },
  {
    genre: "ゲーム制作",
    beginAt: "2023年3月",
    note: "ゲームを個人でも作れると知ってUnityを使い始める",
  },
  {
    genre: "初ゲーム完成",
    beginAt: "2023年3月",
    note: "パズルゲームを作成",
  },
  {
    genre: "デザイン",
    beginAt: "2023年4月",
    note: "ゲーム・MVに必要なデザインをFigmaでスタート",
  },
  {
    genre: "Web制作",
    beginAt: "2023年11月",
    note: "ポートフォリオ作成",
  },
  {
    genre: "インターン",
    beginAt: "2024年2月",
    note: "ハイパーカジュアルゲーム制作、配信を経験",
  },
  {
    genre: "アルバイト",
    beginAt: "2024年5月",
    note: "コンシューマ向けゲームの実装を担当中（現在進行形）",
  },
];

export const workCards: WorkCardProps[] = [
  {
    genre: "Game",
    title: "帰路",
    date: "2024-08",
    link: "https://unityroom.com/games/kaerimichi",
    description:
      "少女を家に帰してあげるリバースパズルゲーム。unity1weekにて2人で共同開発。サウンド・デザイン（ドット絵、UI等）・クラス設計（一部）を担当。",
    imageRef: "/images/works/kiro.gif",
    tags: ["Unity", "C#"],
  },
  {
    genre: "Game",
    title: "こなつのえにっき",
    date: "2024-08",
    link: "https://unityroom.com/games/konatsu_enikki",
    description:
      "夏休みの絵日記を追うクリッカー・ビジュアルノベル風ゲーム。2日で2人で共同開発。実装を担当。",
    imageRef: "/images/works/konatsu-enikki.gif",
    tags: ["Unity", "C#"],
    githubLink: "https://github.com/qemel/unity2days-konatsu-no-enikki",
  },
  {
    genre: "Game",
    title: "やまのぼり",
    date: "2024-05",
    link: "https://unityroom.com/games/yamanobori",
    description:
      "操作感を求めた3Dアクションゲーム。タイムアタックがしやすい設計を目指した。1週間程度で作成。",
    imageRef: "/images/works/yamanobori.png",
    iframe: "rLAVu3EoR8Q",
    tags: ["Unity", "C#", "Music"],
  },
  {
    genre: "Game",
    title: "White / Black",
    date: "2024-03",
    link: "https://unityroom.com/games/worb",
    description:
      "白黒の世界を行き来するパズルゲーム。unity1weekで制作(総合ランキング8位)。",
    imageRef: "/images/works/white-or-black.png",
    tags: ["Unity", "C#", "Music"],
    iframe: "a3tNhyBH8Pw",
    githubLink: "https://github.com/qemel/unity1week_White_or_Black",
  },
  {
    genre: "Web",
    title: "けめるのインターネット",
    date: "2023-11",
    link: "https://qemel-blog-nextjs.vercel.app/",
    description: "自分用のサイト",
    imageRef: "/images/works/qemel-blog-nextjs.png",
    tags: ["Next.js", "daisyUI", "TailWindCSS"],
  },
  {
    genre: "Game",
    title: "Here is ONE Button!",
    date: "2023-09",
    link: "https://unityroom.com/games/here_is_one_button",
    description:
      "ルールが説明されないパズルゲーム。インタラクティブ音楽を採用。unity1weekで制作。",
    imageRef: "/images/works/here-is-one-button.png",
    tags: ["Music", "Unity", "C#", "Aseprite"],
    iframe: "UlbnRByVPQw",
    githubLink: "https://github.com/qemel/unity1week-Here-is-ONE-Button",
  },
  {
    genre: "Game",
    title: "Circla",
    date: "2023-08",
    link: "https://unityroom.com/games/circla",
    description:
      "視覚的に難しいリズムゲーム。UniRxを利用し、MVPパターンを意識して作成。1カ月程度で作成。",
    imageRef: "/images/works/circla.gif",
    tags: ["Music", "Unity", "C#", "Figma"],
    iframe: "bG0ll0R3adY",
    githubLink: "https://github.com/qemel/Circla_Scripts",
  },
  {
    genre: "Music",
    title: "Circla Album",
    date: "2023-08",
    link: "https://qemel-blog-nextjs.vercel.app/",
    description: "自作ゲームCirclaの楽曲をまとめたアルバム",
    imageRef: "/images/works/circla-album.png",
    tags: ["Music", "Figma"],
  },
  {
    genre: "Game",
    title: "地獄のおくりびと",
    date: "2023-12",
    link: "https://unityroom.com/games/jigokuno_okuribito",
    description:
      "地獄に送るためになんとか問答して絞りだすストーリーゲーム。unity1weekで制作。",
    imageRef: "/images/works/hell.png",
    tags: ["Music", "Unity", "C#", "Aseprite"],
    iframe: "B0zKSR3FhrI",
  },
  {
    genre: "Music",
    title: "Songs",
    date: "2020-09~",
    link: "https://www.youtube.com/playlist?list=PL-cydTzyfRl83vy7VTp5JmSoUCKKzcnua",
    description: "その他楽曲",
    imageRef: "/images/works/nobs.gif",
    tags: ["Music", "Aseprite"],
  },
];

export const Skills: SkillProps[] = [
  {
    genre: "ゲーム制作",
    skills: "Unity(UniRx/R3, UniTask, VContainer, MessagePipe, etc...), Godot",
  },
  {
    genre: "Web制作",
    skills: "Next.js, TailwindCSS, Vercel, Prisma, Supabase, etc...",
  },
  {
    genre: "DTM",
    skills: "Bitwig Studio, FL Studio",
  },
  {
    genre: "デザイン/イラスト",
    skills: "Figma, Aseprite, Affinity Designer, Clip Studio Paint",
  },
  {
    genre: "アルゴリズム",
    skills: "AtCoder Rating 900~ (緑)",
  },
  {
    genre: "その他",
    skills: "基本情報技術者, TOEIC 895点",
  },
];
