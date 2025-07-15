import styles from '@/Sections/RealClassVideo/RealClassVideo.module.css';

export default function RealClassVideo(): React.ReactElement {
    return (
        <section className={styles.RealClassVideoSection} id='videoReal'>
            <div className={styles.headlineRealClassVideo}>
                <h2 data-aos="fade-up">Aula Real !</h2>
                <p data-aos="fade-up">
                    Neste trecho você me vê conduzindo uma conversa verdadeira com um aluno, focada em temas do dia a dia:
                    observamos situações reais, corrigimos pronúncia na hora e aplicamos vocabulário útil para comunicação imediata.
                    Aqui, cada diálogo é uma oportunidade de imersão total: você acompanha minha orientação passo a passo,
                    experimenta falar sem medo e ganha a confiança necessária para usar o inglês daqui para a vida.
                </p>
            </div>
            <div className={styles.videoDiv} data-aos="fade-up">
                <iframe
                    className={styles.videoPlayer}
                    src={process.env.URL_VIDEO_YOUTUBE}
                    title="Aula real com a Ana Flávia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </section>
    )
}