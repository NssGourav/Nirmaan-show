export interface Member {
  name: string;
  email: string;
}

export interface Website {
  id: number;
  teamName: string;
  liveUrl: string;
  members: Member[];
}