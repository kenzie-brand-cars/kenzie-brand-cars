import { StyledCircleInitials } from "./style"

interface ICircleInitials {
    first: string
    second?: string
    size?: number
    color?: string
}

export const CircleInitials = ({ first, second, size, color }: ICircleInitials) => {
    return (
        <StyledCircleInitials size={size} color={color}>
            {first}{second}
        </StyledCircleInitials>
    )
}