export interface Language {
  country: string;
  fullName: string;
  flag1x1: string;
  flag4x3: string;
}
export const languages: Language[] = [
  {
    country: "es",
    flag1x1: "./assets/flags/1x1/es.svg",
    flag4x3: "./assets/flags/4x3/es.svg",
    fullName: "Español",
  },
  {
    country: "en",
    flag1x1: "./assets/flags/1x1/gb.svg",
    flag4x3: "./assets/flags/4x3/gb.svg",
    fullName: "English",
  },
  {
    country: "bg",
    flag1x1: "./assets/flags/1x1/bg.svg",
    flag4x3: "./assets/flags/4x3/bg.svg",
    fullName: "Български",
  },
  {
    country: "de",
    flag1x1: "./assets/flags/1x1/de.svg",
    flag4x3: "./assets/flags/4x3/de.svg",
    fullName: "Deutsch",
  },
  {
    country: "it",
    flag1x1: "./assets/flags/1x1/it.svg",
    flag4x3: "./assets/flags/4x3/it.svg",
    fullName: "Italiano",
  },
  {
    country: "ua",
    flag1x1: "./assets/flags/1x1/ua.svg",
    flag4x3: "./assets/flags/4x3/ua.svg",
    fullName: "Українська",
  },
];
