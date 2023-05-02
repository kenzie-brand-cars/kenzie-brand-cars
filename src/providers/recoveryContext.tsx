import { useState, createContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface RecoveryProviderPropsInterface {
  children: React.ReactNode;
}

type FormData1 = {
  email: string;
};
type FormData2 = {
  password: string;
};

type IRecoveryContextTypes = {
  confirmRecovery: boolean;
  setConfirmRecovery: React.Dispatch<React.SetStateAction<boolean>>;
  handleButtonConfirmEmail: SubmitHandler<FormData1>;
  handleButtonChangePassword: SubmitHandler<FormData2>;
};

export const RecoveryContext = createContext<IRecoveryContextTypes>({
  setConfirmRecovery: () => {},
  confirmRecovery: false,
  handleButtonConfirmEmail: () => {},
  handleButtonChangePassword: () => {},
});

export default function RecoveryProvider({
  children,
}: RecoveryProviderPropsInterface) {
  const [confirmRecovery, setConfirmRecovery] = useState(false);

  function handleButtonConfirmEmail(data: FormData1) {
    const dataEmail = data.email;
    const recoveryUrl = `http://localhost:3000/recovery-confirm/${dataEmail}`;
    //mandar axios com e-mail para backend mandar email
    //user clica no link do email e é direcionado para outra pagina onde colocara senha
  }

  function handleButtonChangePassword() {
    //aqui no formulario da outra pagina recebe a senha do user
    //manda um axios com o token recebido no param do link clicado pelo user em outra rota com a senha no body
    //se ok redireciona para login
    //se nao ok manda mensagem de erro
  }

  return (
    <RecoveryContext.Provider
      value={{
        confirmRecovery,
        setConfirmRecovery,
        handleButtonConfirmEmail,
        handleButtonChangePassword,
      }}
    >
      {children}
    </RecoveryContext.Provider>
  );
}
