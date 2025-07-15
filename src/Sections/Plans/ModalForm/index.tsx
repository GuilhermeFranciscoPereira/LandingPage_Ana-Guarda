'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import styles from '@/Sections/Plans/ModalForm/ModalForm.module.css';

type ModalFormProps = {
    planName: string;
    onClose: () => void;
};

type YesNo = 'Sim' | 'Não';
type EnglishLevel = 'Iniciante' | 'Intermediário' | 'Avançado';
type Duration = '1 - 3 meses' | '3 - 6 meses' | '6 - 12 meses' | '1 ano' | '2 anos' | '3 anos' | '4 anos' | '5 ou + anos';

type FormData = {
    plan: string;
    name: string;
    email: string;
    phone: string;
    englishLevel: EnglishLevel;
    pronunciationLevel: EnglishLevel;
    studiedEnglish: YesNo;
    studyDuration?: Duration;
    understandsSpoken: YesNo;
    speaksWithConfidence: YesNo;
    readsTexts: YesNo;
    writesMessages: YesNo;
    vocabularyRange: 'Básico' | 'Intermediário' | 'Avançado';
}

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
};

function determineLevel(data: FormData): EnglishLevel {
    let score = 0;
    if (data.studiedEnglish === 'Sim') score += 1;
    if (data.understandsSpoken === 'Sim') score += 1;
    if (data.speaksWithConfidence === 'Sim') score += 1;
    if (data.readsTexts === 'Sim') score += 1;
    if (data.writesMessages === 'Sim') score += 1;
    if (data.vocabularyRange === 'Intermediário') score += 1;
    if (data.vocabularyRange === 'Avançado') score += 2;

    if (score <= 3) return 'Iniciante';
    if (score <= 5) return 'Intermediário';
    return 'Avançado';
}

export default function ModalForm({ planName, onClose }: ModalFormProps): React.ReactElement {
    const [form, setForm] = useState<FormData>({
        plan: planName,
        name: '',
        email: '',
        phone: '',
        englishLevel: 'Iniciante',
        pronunciationLevel: 'Iniciante',
        studiedEnglish: 'Não',
        understandsSpoken: 'Não',
        speaksWithConfidence: 'Não',
        readsTexts: 'Não',
        writesMessages: 'Não',
        vocabularyRange: 'Básico',
    });
    const [responseMsg, setResponseMsg] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<string>('');

    function handleChange<K extends keyof FormData>(key: K, value: FormData[K]): void {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        const realLevel = determineLevel(form);
        setForm(f => ({ ...f, englishLevel: realLevel }));
        if (realLevel === 'Iniciante') {
            setResponseMsg(
                `
                ✨ Obrigado por entrar em contato! ✨\n
                No momento, todas as turmas dos próximos 2 meses estão lotadas.\n
                Mas você já está na nossa fila de espera! Assim que surgir uma vaga, avisaremos imediatamente.\n
                Agradecemos muito seu interesse e sua paciência – até breve! 😊
                `
            );
            return;
        }

        try {
            setResponseMsg(`
                    🎉 Formulário enviado com sucesso! 🎉\n
                    Recebemos seus dados com sucesso e entraremos em contato em até 48 horas úteis.\n
                    Fique atento(a) ao seu WhatsApp para os próximos passos!\n
                    Obrigado por escolher estudar conosco – vamos juntos nessa jornada! 🚀
            `);

            const payload = { ...form, englishLevel: realLevel };

            const response = await fetch('/api/sendStudentEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (!data.success) throw new Error(data.message)
        } catch {
            setResponseMsg(`Ocorreu algum erro no banco de dados do servidor e sua inscrição não foi enviada, por favor, tente novamente \n Sentimos muito por isso! `);
            setErrorMsg('Falha ao enviar, tente novamente mais tarde!');
        }
    };

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button type="button" className={styles.closeButton} aria-label="Fechar" onClick={onClose}><IoClose /></button>

                {!responseMsg ? (
                    <>
                        <h2>Seus Dados</h2>
                        <p className={styles.description}>Por favor, preencha abaixo para agendarmos sua aula de acordo com sua disponibilidade.</p>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Nome</label>
                                <input id="name" type="text" required value={form.name} onChange={e => handleChange('name', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" required value={form.email} onChange={e => handleChange('email', e.target.value)} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Telefone (WhatsApp)</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="(12) 9 1234-5678"
                                    pattern="\([0-9]{2}\) [0-9] [0-9]{4}-[0-9]{4}"
                                    required
                                    value={form.phone}
                                    onChange={e => handleChange('phone', formatPhone(e.target.value) as string)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="englishLevel">Nível de Inglês</label>
                                <select id="englishLevel" value={form.englishLevel} onChange={e => handleChange('englishLevel', e.target.value as EnglishLevel)} >
                                    <option>Iniciante</option>
                                    <option>Intermediário</option>
                                    <option>Avançado</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="pronunciationLevel">Nível de Pronúncia</label>
                                <select id="pronunciationLevel" value={form.pronunciationLevel} onChange={e => handleChange('pronunciationLevel', e.target.value as EnglishLevel)}>
                                    <option>Iniciante</option>
                                    <option>Intermediário</option>
                                    <option>Avançado</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="studiedEnglish">Já estudou inglês?</label>
                                <select id="studiedEnglish" value={form.studiedEnglish} onChange={e => handleChange('studiedEnglish', e.target.value as YesNo)}>
                                    <option>Não</option>
                                    <option>Sim</option>
                                </select>
                            </div>

                            {form.studiedEnglish === 'Sim' && (
                                <div className={styles.formGroup}>
                                    <label htmlFor="studyDuration">Há quanto tempo?</label>
                                    <select id="studyDuration" required value={form.studyDuration} onChange={e => handleChange('studyDuration', e.target.value as Duration)}>
                                        <option>1 - 3 meses</option>
                                        <option>3 - 6 meses</option>
                                        <option>6 - 12 meses</option>
                                        <option>1 ano</option>
                                        <option>2 anos</option>
                                        <option>3 anos</option>
                                        <option>4 anos</option>
                                        <option>5 ou + anos</option>
                                    </select>
                                </div>
                            )}

                            <div className={styles.formGroup}>
                                <label htmlFor="understandsSpoken">Você entende inglês quando falam?</label>
                                <select
                                    id="understandsSpoken"
                                    value={form.understandsSpoken}
                                    onChange={e =>
                                        handleChange('understandsSpoken', e.target.value as YesNo)
                                    }
                                >
                                    <option>Não</option>
                                    <option>Sim</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="speaksWithConfidence">Você se sente confiante ao falar?</label>
                                <select
                                    id="speaksWithConfidence"
                                    value={form.speaksWithConfidence}
                                    onChange={e =>
                                        handleChange('speaksWithConfidence', e.target.value as YesNo)
                                    }
                                >
                                    <option>Não</option>
                                    <option>Sim</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="writesMessages">Consegue escrever email ou mensagem em inglês?</label>
                                <select
                                    id="writesMessages"
                                    value={form.writesMessages}
                                    onChange={e =>
                                        handleChange('writesMessages', e.target.value as YesNo)
                                    }
                                >
                                    <option>Não</option>
                                    <option>Sim</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="vocabularyRange">Como você avalia seu vocabulário?</label>
                                <select
                                    id="vocabularyRange"
                                    value={form.vocabularyRange}
                                    onChange={e =>
                                        handleChange('vocabularyRange', e.target.value as
                                            'Básico' | 'Intermediário' | 'Avançado')
                                    }
                                >
                                    <option>Básico</option>
                                    <option>Intermediário</option>
                                    <option>Avançado</option>
                                </select>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Enviar
                            </button>
                            {errorMsg && (<p className={styles.errorMessage}>{errorMsg}</p>)}
                        </form>
                    </>
                ) : (
                    <p className={styles.responseMessage}>{responseMsg}</p>
                )}
            </div>
        </div >,
        document.body
    );
}
