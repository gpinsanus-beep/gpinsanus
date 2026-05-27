export interface Friend {
  id: string;
  name: string;
  nickname: string;
  role: string;
  quote: string;
  stats: {
    benchPress: string;
    deadlift: string;
    squat: string;
  };
  bio: string;
  image: string; // fallback symbol or generative representation
}

export interface GymTokVideo {
  id: string;
  videoUrl?: string;
  thumbnail: string;
  author: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

export interface FutureProduct {
  id: string;
  name: string;
  price: string;
  category: string;
  desc: string;
  image: string;
  status: 'EM BREVE' | 'ESGOTADO' | 'PRÉ-VENDA';
  isExclusive?: boolean;
}
