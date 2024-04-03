export function getInitialLettersOfName(name: string) {
  if (!name || name.length === 0) return

  const uppercaseName = name.toUpperCase()

  if (uppercaseName.length === 1) {
    return uppercaseName + uppercaseName
  } else if (uppercaseName.length === 2) {
    return uppercaseName
  }

  const [firstName, lastName] = uppercaseName.split(' ')

  if (!lastName) {
    return firstName.slice(0, 2)
  }

  return firstName.slice(0, 1) + lastName.slice(0, 1)
}
