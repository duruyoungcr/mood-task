import MoodSelection from "../MoodSelection"
import MoodHistory from "../MoodHistory"
import { useState } from "react"



const Main = () => {
    const [moodHistory, setMoodHistory] = useState(JSON.parse(localStorage.getItem('moodHistory')) || [])
    return (
        <main className="px-4 xs:px-12 xl:px-20 py-12 grid grid-cols-1 lg:grid-cols-2">
            <MoodSelection setMoodHistory={setMoodHistory} />
            <MoodHistory moodHistory={moodHistory} />
        </main>
    )
}

export default Main
