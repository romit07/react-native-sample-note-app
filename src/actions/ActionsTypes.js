export const SAVE_NOTE = "SAVE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export function saveNote(data) {
  return {
    type: SAVE_NOTE,
    data
  };
}

export function deleteNote(data) {
  return {
    type: SAVE_NOTE,
    data
  };
}
