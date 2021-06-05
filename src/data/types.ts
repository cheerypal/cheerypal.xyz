export interface Projects {
  university: [
    {
      id: number;
      title: string;
      description: string;
      skills: string[];
      link: string;
    }
  ];
  additional: [
    {
      id: number;
      title: string;
      description: string;
      skills: string[];
      link: string;
    }
  ];
}

export interface Work {
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
