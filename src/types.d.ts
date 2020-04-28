declare module 'uuid' {
  export function v4(): string;
}

type PersonType = {
  id: string;
  name: string;
  itemIds: string[];
  total: number;
};
