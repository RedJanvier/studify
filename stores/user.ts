import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => (
      {
        settingsLinks: [
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
        ],
        user: { 
          firstName: 'Jason',
          lastName: 'Rantiii',
          progress: 32,
          image: 'https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=Jason',
        }
    }),
    getters: {
      getUser: (state) => (state.user),
      getSettings: (state) => (state.settingsLinks)
    },
    actions: {
    }
});