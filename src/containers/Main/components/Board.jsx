import { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Card from './Card'
import { formatNumber, formatPercent } from '../../../commons/utils/number'
import { useI18n } from '../../../commons/i18n'

function Board({ data }) { // Cards sobre o Covid-19 irão ficar aqui
    const { t, intlLocale } = useI18n()
    const theme = useTheme()
    const palette = theme.vars?.palette ?? theme.palette

    // Dados que a API retorna
    const { cases, casesPerOneMillion, active, deaths, recovered, critical } = data
    const fatality = cases && deaths != null ? deaths / cases : undefined

/*
 * Formata o valor ou mostra uma barra cinza (Skeleton) enquanto carrega.
 */
    const getValue = (value, format = formatNumber) =>
        value != null ? format(value, intlLocale) : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={1}>

            <Grid size={{ xs: 12, md: 4 }}>
                <Card value={getValue(cases)} label={t('cases')} color={palette.text.primary} />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <Card value={getValue(casesPerOneMillion)} label={t('casesPerMillion')} color={palette.text.primary} />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <Card value={getValue(active)} label={t('active')} color={palette.text.primary} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Card value={getValue(deaths)} label={t('deaths')} color={palette.error.main} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Card value={getValue(fatality, formatPercent)} label={t('fatality')} color={palette.error.main} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Card value={getValue(recovered)} label={t('recovered')} color={palette.success.main} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Card value={getValue(critical)} label={t('critical')} color={palette.warning.main} />
            </Grid>
        </Grid>
    )
}

Board.propTypes = {
    data: PropTypes.shape({
        cases: PropTypes.number,
        casesPerOneMillion: PropTypes.number,
        active: PropTypes.number,
        deaths: PropTypes.number,
        recovered: PropTypes.number,
        critical: PropTypes.number,
    }).isRequired,
}

export default memo(Board)
