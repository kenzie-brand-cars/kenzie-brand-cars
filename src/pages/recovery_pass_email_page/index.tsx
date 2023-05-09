import { Container } from "../../components/container"
import { StyledContainerReset, StyledRecoveryPasswordPage } from "./style"
import { useState } from "react"
import axios from "axios"

export const RecoveryPassMailPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
        setError('Por favor, insira um endereço de e-mail válido.');
        return;
      }
    try {
      setLoading(true);
      await axios.post('/user/reset_password', { email });
      setSuccess(true);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Ocorreu um erro ao enviar sua solicitação.');
    } finally {
      setLoading(false);
    }
  }

  return(
    <StyledContainerReset>
        <Container>
            <StyledRecoveryPasswordPage>
                <h1>Recuperação de Senha</h1>
                {success ? (
                <p>Um link de recuperação de senha foi enviado para o seu e-mail.</p>
                ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error && <p>{error}</p>}
                    <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
                </form>
                )}
            </StyledRecoveryPasswordPage>
        </Container>
    </StyledContainerReset>
  )
}