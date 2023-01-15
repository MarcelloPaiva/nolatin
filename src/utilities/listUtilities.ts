export function getQuoteList(list: string) {
  const regex = /"[\s\S]*?"/g
  return list.match(regex)?.map((s) => s.substring(1, s.length - 1))
}
