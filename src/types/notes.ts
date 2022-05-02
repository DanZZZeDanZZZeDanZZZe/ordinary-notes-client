// All possible note types
export type NoteType = "todo" | "default"

// General properties for all notes
export type NoteBase<T extends NoteType = "default"> = {
  id: string
  title: string
  creationDate: Date
  changeDate: Date
  type: T
}

// Default note
export type DefaultTypeNote = NoteBase & {
  content: string
}

// Todo note
export type TodoTask = {
  text: string
  creationDate: Date
  changeDate: Date
  checked: boolean
}

export type TodoTypeNote = NoteBase<"todo"> & {
  tasks: TodoTask[]
}

// Common note type
export type Note = DefaultTypeNote | TodoTypeNote
