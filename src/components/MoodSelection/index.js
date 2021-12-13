import { useState } from 'react'
import moodOptions from '../../moodOptions'
import styles from './MoodSelection.module.css'

const MoodSelection = ({ setMoodHistory }) => {
    const [selectedMood, setSelectedMood] = useState('')
    const [saving, setSaving] = useState(false)
    const handleMoodSelection = (mood) => {
        setSelectedMood(mood)
    }
    const handleMoodSave = (mood) => {
        setSaving(true)
        const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || []
        Object.assign(mood, { time: new Date() })
        if (moodHistory.length < 4) {
            moodHistory.unshift(mood)
        } else {
            moodHistory.splice(moodHistory.length - 1, 1);
            moodHistory.unshift(mood)
        }
        localStorage.setItem('moodHistory', JSON.stringify(moodHistory))
        setTimeout(() => {
            setSaving(false)
            setMoodHistory(moodHistory)
            handleMoodSelection('')
        }, 2000);
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <img src={'./mood-task/logo.png'} alt='cat' className={styles.img} width={94} height={79} />
                <h1 className={styles.heading}>
                    What is your cat’s current mood?
                </h1>
                <div className={styles.selections}>
                    {moodOptions.map(mood => (
                        <div
                            className={`${styles.selection} ${mood.name.toLowerCase()} ${selectedMood?.id === mood.id && mood.name.toLowerCase() + '--active'}`}
                            key={mood.id}
                            title={mood.name}
                            onClick={() => handleMoodSelection(mood)}
                            role={'button'}
                            aria-label={`Select ${mood.name.toLowerCase()} as your cat's mood`}
                        >
                            {mood.emoji}
                        </div>
                    ))}
                </div>
                <div className={styles.desc}>
                    {selectedMood &&
                        <p className={`${selectedMood?.name?.toLowerCase()}`}>
                            {selectedMood.description}
                        </p>
                    }
                </div>
                <button
                    onClick={() => handleMoodSave(selectedMood)}
                    disabled={!selectedMood ? true : false}
                    className={`${styles.btn} ${selectedMood ? 'bg-purple' : 'bg-gray'}`}
                >
                    {saving ?
                        'Saving...' : 'Save mood'
                    }
                </button>
            </div>
        </section>
    )
}

export default MoodSelection
