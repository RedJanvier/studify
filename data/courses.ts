
export const settingsLinks = [
  {
    id: 1,
    text: 'Settings',
    link: '/settings',
    icon: 'mdi:settings-outline',
  },
  {
    id: 2,
    text: 'Logout',
    link: '/inbox',
    icon: 'mdi:logout',
    danger: true
  },
]

export const overviewLinks = [
  {
    id: 1,
    text: 'Dashboard',
    link: '/',
    icon: 'mdi:view-dashboard',
    active: true
  },
  {
    id: 2,
    text: 'Inbox',
    link: '/inbox',
    icon: 'mdi:inbox-outline'
  },
  {
    id: 3,
    text: 'Courses',
    link: '/courses',
    icon: 'mdi:book-education-outline'
  },
  {
    id: 4,
    text: 'Task',
    link: '/task',
    icon: 'mdi:subtasks'
  },
  {
    id: 5,
    text: 'Groups',
    link: '/groups',
    icon: 'mdi:account-group-outline'
  },
]

export const friendsList = [
  {
    id: 1,
    name: 'Magas Paphie',
    friendship: 'Friend',
    image: 'https://api.dicebear.com/7.x/open-peeps/webp'
  },
  {
    id: 2,
    name: 'John Doe',
    friendship: 'Old Friend',
    image: 'https://api.dicebear.com/7.x/open-peeps/webp'
  },
  {
    id: 3,
    name: 'Jhon Tosan',
    friendship: 'Friend',
    image: 'https://api.dicebear.com/7.x/open-peeps/webp'
  },
]

export type Friend = (typeof friendsList)[number]
export type Overview = (typeof overviewLinks)[number]
export type Setting = (typeof settingsLinks)[number]

export const user = {
  firstName: 'Jason',
  lastName: 'Ranti',
  progress: 32,
  image: 'https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=Jason',
}

export type IUser = (typeof user);
