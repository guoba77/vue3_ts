export const SET_TOKEN = (token: string) => {
  localStorage.setItem('guoba_Token', token)
}
export const GET_TOKEN = () => {
  localStorage.getItem('guoba_Token')
}
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('guoba_Token')
}
