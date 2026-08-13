import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Skeleton } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'
import { useI18n } from '../../../commons/i18n'

function HistoryChart({ timeline, error }) {
    const { t } = useI18n()

    const series = useMemo(() => {
        if (!timeline?.cases) return null
        const dates = Object.keys(timeline.cases)
        return {
            x: dates.map((date) => new Date(date)),
            cases: dates.map((date) => timeline.cases[date]),
        }
    }, [timeline])

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
                        xAxis={[{ data: series.x, scaleType: 'time' }]}
                        yAxis={[{ width: 'auto' }]}
                        series={[{
                            data: series.cases,
                            label: t('cases'),
                            showMark: false,
                            area: true,
                            color: '#5d78ff',
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
