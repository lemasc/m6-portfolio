export type NavigationItem = {
  name: string;
  href: string;
};

export type MatchedNavigationItem = NavigationItem & {
  matched: boolean;
};
