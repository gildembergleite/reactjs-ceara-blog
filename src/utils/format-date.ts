export function formatDate(date: string) {
  const newDate = new Date(date)
  return newDate.toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
