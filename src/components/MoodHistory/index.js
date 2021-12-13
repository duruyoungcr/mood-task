import { useEffect } from 'react'
import MoodHistoryItem from '../MoodHistoryItem'
import styles from './MoodHistory.module.css'

const MoodHistory = ({ moodHistory }) => {
    useEffect(() => {
    }, [moodHistory])
    return (
        <section className={styles.container}>
            <div className={styles.brand}>
                <img src={'./mood-task/logo.png'} alt='cat' className={styles.img} width={49} height={41} />
                <h1 className={styles.title}>Cat mood tracker™</h1>
            </div>
            <p className={styles.subtitle}>mood history</p>
            {moodHistory.length > 0 ?
                <div className={styles.history__list}>
                    {moodHistory.map(mood => (
                        <MoodHistoryItem key={mood.id + '_' + mood.time} mood={mood} />
                    ))}
                </div>
                :
                <div className={styles.empty}>
                    <div className={styles.empty__content}>
                        <img src={'./mood-task/assets/images/empty.png'} alt='cat' className={styles.empty__img} width={72} height={61} />
                        <p className={styles.empty__text}>
                            No mood history to show yet
                        </p>
                    </div>
                </div>
            }
        </section>
    )
}

export default MoodHistory
