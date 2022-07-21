import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { Import } from "./functions"

function App() {
    const [file, setFile] = useState(0)
    const parseURI = async (d) => {
        let reader = new FileReader()
        reader.readAsDataURL(d)
        return new Promise((res, _) => {
            reader.onload = (e) => {
                res(e.target.result)
            }
        })
    }
    const changeHandler = (e) => {
        let files = e.target.files[0]
        console.log(window.XLSX)
        parseURI(files)
            .then((data) => {
                setFile(data)
                Import(data)
            })
            .catch(() => {})
    }

    return (
        <div className="App">
            <div>
                <h1>Starflex Worker efficiency project</h1>
                <label htmlFor="file" className="file-label">
                    Add File
                </label>
                <p className="read-the-docs">
                    Fields to select will appear below
                </p>
                <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={changeHandler}
                    hidden
                />
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Generate Graphs
                </button>
            </div>
            <p className="read-the-docs">Created for Starflex Sealing</p>
        </div>
    )
}

export default App
