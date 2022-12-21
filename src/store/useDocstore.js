import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

//main doc store
const docStore = (set) => ({
  drawerControl: false,
  toggleDrawerControl: () => {
    set((state) => ({
      drawerControl: !state.drawerControl,
    }));
  },
});

export const useDocStore = create(
  devtools(
    persist(docStore, {
      name: 'Angular-Doc-Store',
    })
  )
);

export default useDocStore;
