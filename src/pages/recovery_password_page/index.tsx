import { Container } from "../../components/container"
import { StyledContainerReset, StyledRecoveryPasswordPage } from "./style"
import { useState } from "react"
import { redirect, useParams } from "react-router-dom"
import api from "../../service/http"

export const RecoveryPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [senhaAlterada, setSenhaAlterada] = useState(false);
  const { token } = useParams<{ token: string }>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas digitadas não coincidem.');
      return;
    }
    try {
      setLoading(true);
      await api.patch(`/user/reset_password/${token}`, { password });
      setSenhaAlterada(true);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Ocorreu um erro ao alterar sua senha.');
    } finally {
      setLoading(false);
    }
  }

  if (senhaAlterada) {
    setTimeout(() => {
      setSenhaAlterada(false);
      redirect('/login');
    }, 2000);
  }

  return(
    <StyledContainerReset>
      <Container>
        <StyledRecoveryPasswordPage>
            <h1>Resetar Senha</h1>
            {senhaAlterada ? (
              <p>Senha alterada com sucesso.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="password">Nova senha:</label>
                <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="confirmPassword">Confirme a nova senha:</label>
                <input type="text" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {error && <p>{error}</p>}
                <button type="submit" disabled={loading}>{loading ? 'Alterando senha...' : 'Alterar senha'}</button>
              </form>
            )}
        </StyledRecoveryPasswordPage>
      </Container>
    </StyledContainerReset>
  )
}