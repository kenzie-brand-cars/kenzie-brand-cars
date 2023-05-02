import { DivInputFormStyle } from "../../../../../styles/inputs";
import { useContext } from "react";
import { RecoveryContext } from "../../../../../providers/recoveryContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RecoveryFormStyle } from "../style";
import { CleanFiltterButtonStyle } from "../../../../../styles/buttons";
import {
  RecoveryPageContainerStyle,
  FormContainerTitleStyle,
  MainContainerStyle,
} from "../style";
import { formSchema } from "../../../../../schemas/recoverySendPasswordSchema";

export default function RecoveryChangePasswordForm() {
  return (
    <MainContainerStyle>
      <RecoveryPageContainerStyle>
        <RecoveryFormStyle>
          <FormContainerTitleStyle>
            <h2>Redefinindo a senha</h2>
          </FormContainerTitleStyle>
          <Form />
        </RecoveryFormStyle>
      </RecoveryPageContainerStyle>
    </MainContainerStyle>
  );
}

function Form() {
  const { handleButtonChangePassword, confirmRecovery } =
    useContext(RecoveryContext);

  type FormData = {
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });
  return (
    <form onSubmit={handleSubmit(handleButtonChangePassword)}>
      <DivInputFormStyle>
        <label htmlFor="">Digite uma nova senha</label>
        <input
          id="password"
          type="text"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
      </DivInputFormStyle>
      <CleanFiltterButtonStyle type="submit">Confirmar</CleanFiltterButtonStyle>
    </form>
  );
}
