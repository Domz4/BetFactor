export interface reactFC {
  children?: React.ReactNode;
  className?: string;
}

export interface ListItemProp extends reactFC {
  href?: string;
  title: string;
}

export enum days {
  MONDAY = "MON",
  TUESDAY = "TUE",
  WEDNESDAY = "WED",
  THURSDAY = "THU",
  FRIDAY = "FRI",
  SATURDAY = "SAT",
  SUNDAY = "SUN",
}
