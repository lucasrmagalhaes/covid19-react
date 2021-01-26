// Card para receber os dados

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import { formatNumber } from 'commons/utils/number'
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function Card({ value, label, color }) {
    return (
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{formatNumber(value)}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)