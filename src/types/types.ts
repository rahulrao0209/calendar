export type monthData = {
  day: number,
  dayName: string,
  monthName: string,
  year: number
}

export type NavProps = {
  data: monthData[],
  setData: React.Dispatch<React.SetStateAction<monthData[]>>
}

export type HamburgerProps = {
  drawerClosed: boolean,
  setDrawerClosed: React.Dispatch<React.SetStateAction<boolean>>
}

export type HeaderProps = {
  nav: NavProps,
  hamburger: HamburgerProps
}

export type MainProps = {
  data: monthData[],
  drawerClosed: boolean 
}

