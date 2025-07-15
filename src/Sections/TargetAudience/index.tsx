import styles from '@/Sections/TargetAudience/TargetAudience.module.css';
import { FaMicrophone, FaChalkboardTeacher, FaWallet, FaClock, FaLightbulb, FaHandsHelping, FaPlane, FaBriefcase, FaUsers } from 'react-icons/fa';

export default function TargetAudience(): React.ReactElement {
    return (
        <section className={styles.courseContainer} id='objetivos'>
            <h2 className={styles.courseTitle} data-aos="fade-up">Minhas aulas são para <span>você</span> que...</h2>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem} data-aos="fade-up">
                    <FaMicrophone className={styles.icon} />
                    <p>Já travou na hora de falar e sentiu aquele medo de não ser entendido?</p>
                </div>
                <div className={styles.gridItem} data-aos="fade-up-right">
                    <FaChalkboardTeacher className={styles.icon} />
                    <p>Está cansado de métodos que empilham regras gramaticais sem praticar a conversação?</p>
                </div>
                <div className={styles.gridItem} data-aos="fade-right">
                    <FaWallet className={styles.icon} />
                    <p>Acha que aprender inglês exige um investimento alto demais?</p>
                </div>
                <div className={styles.gridItem} data-aos="fade-down-right">
                    <FaClock className={styles.icon} />
                    <p>Não consegue encaixar horários rígidos na sua rotina corrida?</p>
                </div>
                <div className={styles.gridItem} data-aos="fade-down">
                    <FaLightbulb className={styles.icon} />
                    <p>Precisa de aulas 100% práticas e cheias de dicas que você já usa no dia a dia?</p>
                </div>
                <div className={styles.gridItem} data-aos="fade-down-left">
                    <FaHandsHelping className={styles.icon} />
                    <p>Quer feedback personalizado e suporte contínuo para acelerar seu progresso?</p>
                </div>
                <div className={styles.gridItem} data-aos="fade-left">
                    <FaPlane className={styles.icon} />
                    <p>Planeja viajar ou morar fora e quer estar pronto para viver novas experiências?</p>
                </div>
                <div className={styles.gridItem} data-aos="fade-up-left">
                    <FaBriefcase className={styles.icon} />
                    <p>Deseja se destacar no mercado de trabalho e conquistar oportunidades internacionais?</p>
                </div>
                <div className={styles.gridItem} data-aos="zoom-in">
                    <FaUsers className={styles.icon} />
                    <p>Quer ampliar seu networking global e se conectar com pessoas de diferentes culturas?</p>
                </div>
            </div>
        </section>
    );
}
