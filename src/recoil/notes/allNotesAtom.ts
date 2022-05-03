import { atom } from "recoil"
import { Note } from "../../types"

export const allNotesAtom = atom({
  key: "allNotesAtom",
  default: [] as Note[],
})
