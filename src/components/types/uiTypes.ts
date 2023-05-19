interface reactFC {
  children?: React.ReactNode;
  className?: string;
}

export interface ListItem extends reactFC {
  href?: string;
  title: string;
}

export interface Sidebar extends reactFC {
  title: string;
}
