export type Slide = {
  id: number;
  image: string;
  title: string;
  desc: string;

  primaryButton?: {
    label: string;
    href: string;
  };

  secondaryButton?: {
    label: string;
    href: string;
  };
};