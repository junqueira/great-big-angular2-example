export interface Note {
    text: string,
    colour: string,
    left: number,
    top: number,
    id: string
}

export interface AppState {
  notes: Note[];
}