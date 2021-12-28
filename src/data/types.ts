export interface Uni {
  id: number;
  title: string;
  description: string;
  skills: string[];
  link: string;
}

export interface Additional {
  id: number;
  title: string;
  description: string;
  skills: string[];
  link: string;
}

export interface Work {
  para1: string;
  para2: string;
  languages: string[];
}

export interface Mates {
  id: number;
  name: string;
  link: string;
}

export interface Social {
  id: number;
  name: string;
  link: string;
  element: JSX.Element;
}

export interface Snafler {
  title: string;
  description: string;
  skills: string[];
  link: string;
}
