import { createRoot } from 'react-dom/client'

var test = "Salam Salam Salam"

createRoot(document.getElementById('root')).render(
  <div className="" style={
    {
      backgroundColor: "red",
      width: "120px"
    }
  }>
    <span>
      {/* bezaaaaaaaaaaaaaaaaaaan */}
      {test}
      hello world
      <img />
      <input />
    </span>
    <div></div>
  </div>);