import styled from 'styled-components'
import { CardContent, Typography } from '@mui/material'

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
    font-weight: 400;
    font-size: 2.2rem;
`

export const CardContentStyled = styled(CardContent)`
    border-left: 6px solid ${({ $color }) => $color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
    flex-wrap: wrap;
    gap: 16px;
`

export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    min-width: 150px;
    width: 100%;
`

export const ToolbarStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
`
