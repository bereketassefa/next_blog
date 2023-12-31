import { create } from 'zustand'
interface status  {
    status: number,
    setStatus: (newval: number ) => void
}
const useStatus = create<status>((set) => ({
  status: 0,
  setStatus: (newval: number) => set((state) => ({ status: (state.status >=   100) ? 0 : state.status + newval })),
}))

export default useStatus