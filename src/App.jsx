import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
    const [count, setCount] = useState(0)
    const changeHandler = () => {}
    const handleSubmission = () => {}

    return (
        <div className="App">
            <div>
                <label for="file" className="file-label">
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
            <h1>Vite + React</h1>
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
