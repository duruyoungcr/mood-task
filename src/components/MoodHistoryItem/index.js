import styles from './MoodHistoryItem.module.css';
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

const MoodHistoryItem = ({ mood }) => {
    dayjs.extend(localizedFormat)
    return (
        <div className={`${styles.container} ${mood.name.toLowerCase() + '--border'}`}>
            <div className={styles.content}>
                <div
                    className={`${styles.selection} ${mood.name.toLowerCase()} ${mood.name.toLowerCase() + '--active'}`}
                >
                    {mood.emoji}
                </div>
                <div>
                    <h4 className={`${mood.name.toLowerCase()} ${styles.desc}`}>{mood.description}</h4>
                    <p className={styles.time}>
                        {dayjs(mood.time).format('DD-MM-YYYY')} / {dayjs(mood.time).format('HH:mm')}
                    </p>
                </div>
            </div>
            <img src={'./mood-task/assets/images/cat.png'} alt='cat' className={styles.img} />
        </div>
    )
}

export default MoodHistoryItem
