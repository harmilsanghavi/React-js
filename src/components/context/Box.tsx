import { useContext } from "react"
import { themeContext } from "./themeContext"

export const Box = () => {
    const theme=useContext(themeContext)
  return (
    <div style={{backgroundColor:theme.primary.main ,color:theme.primary.text}}>Box</div>
  )
}
