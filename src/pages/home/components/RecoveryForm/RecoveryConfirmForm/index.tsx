import { DivInputFormStyle } from "../../../../../styles/inputs";
import { useContext } from "react";
import { RecoveryContext } from "../../../../../providers/recoveryContext";
import { CleanFiltterButtonStyle } from "../../../../../styles/buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  RecoveryFormStyle,
  FormContainerTitleStyle,
  RecoveryPageContainerStyle,
  MainContainerStyle,
} from "../style";
import { formSchema } from "../../../../../schemas/recoverySendEmailSchema";

export default function RecoveryConfirmForm() {
  return (
    <MainContainerStyle>
      <RecoveryPageContainerStyle>
        <RecoveryFormStyle>
          <FormContainerTitleStyle>
            <h2>Recuperação de senha</h2>
          </FormContainerTitleStyle>
          <Form />
        </RecoveryFormStyle>
      </RecoveryPageContainerStyle>
    </MainContainerStyle>
  );
}

function Form() {
  const { handleButtonConfirmEmail } = useContext(RecoveryContext);
  type FormData = {
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });
  return (
    <form onSubmit={handleSubmit(handleButtonConfirmEmail)}>
      <DivInputFormStyle>
        <label htmlFor="">Coloque seu e-mail</label>
        <input
          id="email"
          type="text"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
      </DivInputFormStyle>
      <CleanFiltterButtonStyle type="submit">Enviar</CleanFiltterButtonStyle>
    </form>
  );
}
