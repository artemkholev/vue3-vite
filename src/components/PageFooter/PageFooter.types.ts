import type { IUser } from "@/views/App.types";

export interface IPropsFooter {
  user?: IUser;
  incrAge: () => void;
}

export interface IFooterEmits {
  (e: 'footerEmit', value: string): void;
}