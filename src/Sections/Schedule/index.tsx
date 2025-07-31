import styles from '@/Sections/Schedule/Schedule.module.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const days = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'] as const;
const slots = [
    '08:00 – 08:50',
    '09:00 – 09:50',
    '10:00 – 10:50',
    '11:00 – 11:50',
    '14:00 – 14:50',
    '15:00 – 15:50',
    '16:00 – 16:50',
    '17:00 – 17:50',
    '18:00 – 18:50',
    '19:00 – 19:50',
    '20:00 – 20:50',
] as const;

const availability: Record<typeof slots[number], Record<typeof days[number], boolean>> = {
    '08:00 – 08:50': { SEG: false, TER: true, QUA: false, QUI: false, SEX: true },
    '09:00 – 09:50': { SEG: false, TER: true, QUA: false, QUI: false, SEX: true },
    '10:00 – 10:50': { SEG: false, TER: true, QUA: false, QUI: false, SEX: true },
    '11:00 – 11:50': { SEG: false, TER: true, QUA: false, QUI: false, SEX: true },
    '14:00 – 14:50': { SEG: true, TER: true, QUA: true, QUI: true, SEX: false },
    '15:00 – 15:50': { SEG: true, TER: true, QUA: true, QUI: true, SEX: false },
    '16:00 – 16:50': { SEG: true, TER: true, QUA: true, QUI: true, SEX: false },
    '17:00 – 17:50': { SEG: true, TER: true, QUA: true, QUI: true, SEX: false },
    '18:00 – 18:50': { SEG: true, TER: true, QUA: true, QUI: true, SEX: false },
    '19:00 – 19:50': { SEG: true, TER: true, QUA: true, QUI: true, SEX: false },
    '20:00 – 20:50': { SEG: true, TER: true, QUA: true, QUI: true, SEX: false },
};

export default function Schedule(): React.ReactElement {
    return (
        <section className={styles.scheduleSection}>
            <h2><span>Horário</span> de Aulas</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.emptyHeader}></th>
                        {days.map(day => (
                            <th key={day} className={styles.headerCell}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {slots.map(slot => (
                        <tr key={slot} className={styles.row}>
                            <td className={styles.timeCell}>{slot}</td>
                            {days.map(day => (
                                <td key={day} className={styles.statusCell}>
                                    {availability[slot][day]
                                        ? <FaCheckCircle className={styles.iconAvailable} />
                                        : <FaTimesCircle className={styles.iconUnavailable} />
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
