import { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import styles from '@/Sections/Plans/QuestionnaireModal/QuestionnaireModal.module.css';

type Props = { planName: string; onClose: () => void };

type Question1 = 'Sim' | 'Não';
type Question2 = 'Sim' | 'Mais ou menos' | 'Não';
type Question3 = 'Sim' | 'Com dificuldade' | 'Não';
type Question4 = 'Sim' | 'Não';
type Question5 = 'Sim' | 'Com alguma dificuldade' | 'Não';
type Question6 = '1' | '2' | '3' | '4' | '5';

function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    const ddd = digits.slice(0, 2);
    const first = digits.slice(2, 3);
    const mid = digits.slice(3, 7);
    const last = digits.slice(7, 11);
    if (digits.length <= 2) return `(${ddd}`;
    if (digits.length <= 3) return `(${ddd}) ${first}`;
    if (digits.length <= 7) return `(${ddd}) ${first} ${mid}`;
    return `(${ddd}) ${first} ${mid}-${last}`;
}

export default function QuestionnaireModal({ planName, onClose }: Props): React.ReactElement {
    const [step, setStep] = useState<number>(1);
    const [errorStarts, setErrorStars] = useState<string>('');
    const [form, setForm] = useState<{
        plan: string;
        question1?: Question1;
        question2?: Question2;
        question3?: Question3;
        question4?: Question4;
        question5?: Question5;
        question6?: Question6;
        name?: string;
        age?: string;
        phone?: string;
    }>({ plan: planName });

    const handleChange = <K extends keyof typeof form>(key: K, value: typeof form[K]): void => {
        setForm(prev => ({ ...prev, [key]: value }));
        if (key === 'question6') setErrorStars('');
    };

    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.question6) {
            setErrorStars('Por favor, responda a pergunta 6 selecionando seu nível de conforto');
            return;
        }
        setStep(2);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setStep(3);
            const response = await fetch('/api/sendStudentEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const data = await response.json();
            if (data.success) {
                console.log(`Dados enviados com sucesso!` + data);
            } else {
                console.log('Falha ao enviar os dados e caiu no else: ' + data);
            }
        } catch (err) {
            console.log(`'Ocorreu um erro ao enviar e caiu no catch: ${err}`);
        }
    };

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button type="button" className={styles.closeButton} aria-label="Fechar" onClick={onClose}>
                    <IoClose />
                </button>
                {step === 1 && (
                    <div className={styles.step}>
                        <h2 className={styles.title}>Oi! Que bom te ver por aqui! ✨</h2>
                        <p className={styles.description}>
                            Antes de começar, conte um pouco sobre você para eu entender como posso ajudar com o inglês.
                            <br />
                            <br />
                            Responde rapidinho essas perguntinhas? Prometo que é super leve — é só pra eu ter uma ideia de como você se sente falando inglês hoje.
                        </p>
                        <form onSubmit={handleContinue}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>1️⃣ Você consegue se apresentar em inglês sem ajuda?</label>
                                <select
                                    className={styles.select}
                                    required
                                    value={form.question1 ?? ''}
                                    onChange={e => handleChange('question1', e.target.value as Question1)}
                                >
                                    <option value="" disabled>Escolha...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>2️⃣ Se alguém perguntasse “How was your day?”, você saberia como responder?</label>
                                <select
                                    className={styles.select}
                                    required
                                    value={form.question2 ?? ''}
                                    onChange={e => handleChange('question2', e.target.value as Question2)}
                                >
                                    <option value="" disabled>Escolha...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Mais ou menos">Mais ou menos</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>3️⃣ Imagina que você está numa cafeteria fora do Brasil e precisa pedir um café em inglês. Você conseguiria?</label>
                                <select
                                    className={styles.select}
                                    required
                                    value={form.question3 ?? ''}
                                    onChange={e => handleChange('question3', e.target.value as Question3)}
                                >
                                    <option value="" disabled>Escolha...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Com dificuldade">Com dificuldade</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>4️⃣ Você já tentou manter uma conversa em inglês?</label>
                                <select
                                    className={styles.select}
                                    required
                                    value={form.question4 ?? ''}
                                    onChange={e => handleChange('question4', e.target.value as Question4)}
                                >
                                    <option value="" disabled>Escolha...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>5️⃣ Se a aula fosse toda em inglês, você conseguiria acompanhar?</label>
                                <select
                                    className={styles.select}
                                    required
                                    value={form.question5 ?? ''}
                                    onChange={e => handleChange('question5', e.target.value as Question5)}
                                >
                                    <option value="" disabled>Escolha...</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Com alguma dificuldade">Com alguma dificuldade</option>
                                    <option value="Não">Não</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>6️⃣ De 1 a 5, quão confortável você se sente falando inglês outra pessoa? (1 = Nada confortável / 5 = Super tranquilo)</label>
                                <div className={styles.rating}>
                                    <input type="radio" id="star-5" name="question6" value="5" checked={form.question6 === '5'} onChange={() => handleChange('question6', '5')} />
                                    <label htmlFor="star-5">
                                        <svg viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                                    </label>

                                    <input type="radio" id="star-4" name="question6" value="4" checked={form.question6 === '4'} onChange={() => handleChange('question6', '4')} />
                                    <label htmlFor="star-4">
                                        <svg viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                                    </label>

                                    <input type="radio" id="star-3" name="question6" value="3" checked={form.question6 === '3'} onChange={() => handleChange('question6', '3')} />

                                    <label htmlFor="star-3">
                                        <svg viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                                    </label>

                                    <input type="radio" id="star-2" name="question6" value="2" checked={form.question6 === '2'} onChange={() => handleChange('question6', '2')} />
                                    <label htmlFor="star-2">
                                        <svg viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                                    </label>

                                    <input type="radio" id="star-1" name="question6" value="1" checked={form.question6 === '1'} onChange={() => handleChange('question6', '1')} />
                                    <label htmlFor="star-1">
                                        <svg viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                                    </label>
                                </div>
                                {errorStarts && <p className={styles.errorMessage} style={{fontSize: '1.1rem'}}>{errorStarts}</p>}
                            </div>
                            <button type="submit" className={styles.submitButton}>Continuar</button>
                        </form>
                    </div>
                )}
                {step === 2 && (
                    <div className={styles.step}>
                        <h2 className={styles.title}>Perfeito! Obrigada por responder 💙</h2>
                        <p className={styles.description}>
                            Agora só mais um passinho para agendar suas aulas 🗓✨
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>📍 Seu nome:</label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    required
                                    value={form.name ?? ''}
                                    onChange={e => handleChange('name', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>🎂 Sua idade:</label>
                                <input
                                    className={styles.input}
                                    type="number"
                                    min="1"
                                    max="99"
                                    required
                                    value={form.age ?? ''}
                                    onChange={e => handleChange('age', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>📱 Seu WhatsApp (com DDD):</label>
                                <input
                                    className={styles.input}
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="(99) 9 9999-9999"
                                    pattern="\([0-9]{2}\) [0-9] [0-9]{4}-[0-9]{4}"
                                    required
                                    value={form.phone ?? ''}
                                    onChange={e => handleChange('phone', formatPhone(e.target.value))}
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>Enviar dados</button>
                        </form>
                    </div>
                )}
                {step === 3 && (
                    <div className={styles.step}>
                        <h2 className={styles.title}>🎉 Obrigada!</h2>
                        <p className={styles.description}>
                            Seus dados foram enviados com sucesso! Em até 48 horas úteis entrarei em contato no seu WhatsApp para já agendarmos o início da sua fluência!
                        </p>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}
