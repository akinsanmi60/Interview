import { ReactComponent as SettingLogo } from "../assets/setting.svg";
import { ReactComponent as DiskLogo } from "../assets/disk.svg";
import { ReactComponent as RoundLogo } from "../assets/rounddisk.svg";
import { ReactComponent as HomeLogo } from "../assets/🦆 icon _Home with Roof Made of Palm Branches_.svg";
import { ReactComponent as DisLogo } from "../assets/🦆 icon _xfce4 eyes_.svg";
import { ReactComponent as LikeLogo } from "../assets/🦆 icon _love france heart national culture paris_.svg";

export const NavigationA = [
  {
    component: <HomeLogo />,
    path: "/",
    title: "Home",
  },
  {
    component: <DisLogo />,
    path: "discovery",
    title: "Discover",
  },
];
export const NavigationB = [
  {
    component: <RoundLogo />,
    path: "library",
    title: "Your Library",
  },
  {
    component: <LikeLogo />,
    path: "likesong",
    title: "Liked Songs",
  },
  {
    component: <DiskLogo />,
    path: "recent",
    title: "Recently Played",
  },
  {
    component: <SettingLogo />,
    path: "playlist",
    title: "Create Playlist",
  },
];

export const FootNavigation = [
  {
    component: <HomeLogo />,
    path: "/",
    title: "Home",
  },
  {
    component: <DisLogo />,
    path: "discovery",
    title: "Discover",
  },
  {
    component: <RoundLogo />,
    path: "library",
    title: "Your Library",
  },
  {
    component: <SettingLogo />,
    path: "playlist",
    title: "Create Playlist",
  },
];
