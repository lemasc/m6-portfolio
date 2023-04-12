export const classNames = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(" ");
