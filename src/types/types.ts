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

export type CalendarMiniProps = {
  data: monthData[];
  setData: React.Dispatch<React.SetStateAction<monthData[]>>;
}

export type CalendarProps = {
  data: monthData[];
  state: EventData;
  eventList: EventData[] | undefined;
  openedEvent: EventData | undefined;
  setEventDay: React.Dispatch<React.SetStateAction<monthData>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedEvent: React.Dispatch<React.SetStateAction<EventData | undefined>>;
}

export type DrawerProps = {
  data: monthData[];
  eventColors: string[];
  setData: React.Dispatch<React.SetStateAction<monthData[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEventDay: React.Dispatch<React.SetStateAction<monthData>>;
}

export type MainProps = {
  data: monthData[];
  state: EventData;
  eventList: EventData[] | undefined;
  openedEvent: EventData | undefined;
  drawerClosed?: boolean;
  eventColors: string[];
  setData: React.Dispatch<React.SetStateAction<monthData[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEventDay: React.Dispatch<React.SetStateAction<monthData>>;
  setOpenedEvent: React.Dispatch<React.SetStateAction<EventData | undefined>>;
}

export type EventModalType = {
  show: boolean;
  eventDay: monthData;
  state: EventData;
  eventList: EventData[] | undefined;
  openedEvent: EventData | undefined;
  dispatch: React.Dispatch<Action>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEventList: React.Dispatch<React.SetStateAction<EventData[] | undefined>>;
  setOpenedEvent: React.Dispatch<React.SetStateAction<EventData | undefined>>;
}

export type EventData = {
  title: string;
  desc: string;
  date: monthData;
  color: string;
}

export type Action =
 | { type: 'update-title', data: string }
 | { type: 'update-desc', data: string }
 | { type: 'update-date', data: monthData }
 | { type: 'update-color', data: string }
