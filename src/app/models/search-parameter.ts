export interface SearchParameterBase {
  order?: OrderProperty[];
  filterServer?: FitlerParameter[];
  filterClient?: FitlerParameter[];
}

export interface OrderProperty {
  property: string;
  direction?: OrderDirection;
}

export enum OrderDirection {
  Desc = 'desc',
  Asc = 'asc'
}

export interface FitlerParameter {
  filterProperty: string;
  filterValue?: any;
  type?: OperationType;
}

export enum OperationType {
  Equals = 0,
  Gt = 1,
  Lt = 2,
  Contains = 3
}
