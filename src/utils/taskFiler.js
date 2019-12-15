export function taskFilter(task, substring) {
  return !substring || task.title.includes(substring) || task.text.includes(substring);
}
