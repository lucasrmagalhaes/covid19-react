import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Skeleton } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'
import { useI18n } from '../../../commons/i18n'
import { formatNumber, formatCompact } from '../../../commons/utils/number'

function HistoryChart({ timeline, error }) {
    const { t, intlLocale } = useI18n()

    const series = useMemo(() => {
        if (!timeline?.cases) return null
        const dates = Object.keys(timeline.cases)
        return {
            x: dates.map((date) => new Date(date)),
            cases: dates.map((date) => timeline.cases[date]),
        }
    }, [timeline])

    // eixos e tooltip no idioma da interface (o padrão do x-charts é inglês)
    const formatTickDate = (date, context) =>
        context.location === 'tick'
            ? date.toLocaleDateString(intlLocale, { month: 'short', year: '2-digit' })
            : date.toLocaleDateString(intlLocale, { day: '2-digit', month: 'long', year: 'numeric' })

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2" color="primary" gutterBottom>
                    {t('historyTitle')}
                </Typography>
                {error ? (
                    <Typography component="p">{t('historyUnavailable')}</Typography>
                ) : !series ? (
                    <Skeleton variant="rounded" height={300} />
                ) : (
                    <LineChart
                        height={300}
                        hideLegend
                        xAxis={[{ data: series.x, scaleType: 'time', valueFormatter: formatTickDate }]}
                        yAxis={[{ width: 'auto', valueFormatter: (value) => formatCompact(value, intlLocale) }]}
                        series={[{
                            data: series.cases,
                            label: t('cases'),
                            showMark: false,
                            area: true,
                            color: '#5d78ff',
                            valueFormatter: (value) => formatNumber(value, intlLocale),
                        }]}
                    />
                )}
            </CardContent>
        </Card>
    )
}

HistoryChart.propTypes = {
    timeline: PropTypes.shape({
        cases: PropTypes.object,
        deaths: PropTypes.object,
    }),
    error: PropTypes.bool,
}

export default memo(HistoryChart)
