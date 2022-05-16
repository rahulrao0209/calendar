export type monthData = {
  day: number;
  dayName: string;
  monthName: string;
  year: number;
}

export type NavProps = {
  data: monthData[];
  setData: React.Dispatch<React.SetStateAction<monthData[]>>;
}

export type HamburgerProps = {
  drawerClosed: boolean;
  setDrawerClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

export type HeaderProps = {
  nav: NavProps;
  hamburger: HamburgerProps;
}

export type MainProps = {
  data: monthData[];
  state: EventData;
  eventList: EventData[] | undefined;
  drawerClosed?: boolean;
  setData: React.Dispatch<React.SetStateAction<monthData[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEventDay: React.Dispatch<React.SetStateAction<monthData>>;
}

export type EventModalType = {
  show: boolean;
  eventDay: monthData;
  state: EventData;
  eventList: EventData[] | undefined;
  dispatch: React.Dispatch<Action>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEventList: React.Dispatch<React.SetStateAction<EventData[] | undefined>>;
}

export type EventData = {
  title: string;
  desc: string;
  date: monthData;
}

export type Action =
 | { type: 'update-title', data: string }
 | { type: 'update-desc', data: string }
 | { type: 'update-date', data: monthData }
