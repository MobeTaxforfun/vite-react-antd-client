export type TResult<T> = {
  Code: number;
  Message: string;
  Status: boolean;
  ModelStateErrors?: any;
  Data?: T;
};
