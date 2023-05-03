import { Footer } from "../footer"
import { StyledContainer } from "./style"


interface IContainerProps {
    children: React.ReactNode,
}

export const Container = ({ children }: IContainerProps) => {
    return (
        <StyledContainer>
            <div className="content">
                <div className="content-children">
                    {children}
                </div>
                <Footer />
            </div>
        </StyledContainer>
    )

}