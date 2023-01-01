import {
  createContext,
  useEffect,
  useReducer,
  Dispatch,
  ReactNode,
} from "react"
import Page from "../models/page"
import { Actions } from "./actions"
import appReducer from "./reducers"

export interface AppContextState {
  pages: Page[]
}

const initialState = {
  pages: [],
}

const AppContext = createContext<{
  state: AppContextState
  dispatch: Dispatch<Actions>
  getPage: (pageId: string) => Page | null
}>({ state: initialState, dispatch: () => null, getPage: () => null })

function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    appReducer,
    getLocalStorage(initialState)
  )

  useEffect(() => {
    setLocalStorage(state)
  }, [state])

  function getPage(pageId: string) {
    const pageIndex = state.pages.findIndex((page) => page.id === pageId)
    return pageIndex === -1 ? null : state.pages[pageIndex]
  }

  return (
    <AppContext.Provider value={{ state, dispatch, getPage }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }

function setLocalStorage(value: AppContextState) {
  try {
    window.localStorage.setItem("nolatin", JSON.stringify(value))
  } catch (e) {
    console.error(e)
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

function getLocalStorage(initialValue: AppContextState): AppContextState {
  try {
    const value = window.localStorage.getItem("nolatin")
    return value ? JSON.parse(value) : initialValue
  } catch (e) {
    // if error, return initial value
    return initialValue
  }
}
