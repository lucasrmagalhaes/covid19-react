// Card para receber os dados

import { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '@mui/material'
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function Card({ value, label, color }) {
    return (
        <CardUI>
            <CardContentStyled $color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

Card.propTypes = {
    value: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default memo(Card)
