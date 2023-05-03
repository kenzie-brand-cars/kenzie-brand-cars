import { Footer } from "../footer"
import { StyledContainer } from "./style"


interface IContainerProps{
    children: React.ReactNode,
}

export const Container= ({children}: IContainerProps) => {
    return(
    <StyledContainer>
        <div className="content">
        {children}
        </div>
    </StyledContainer>
    )

}