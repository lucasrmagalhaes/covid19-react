import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Skeleton } from '@mui/material'
import { BarChart } from '@mui/x-charts/BarChart'
import { useI18n, regionName } from '../../../commons/i18n'
import { formatNumber, formatCompact } from '../../../commons/utils/number'

const TOP = 10

function RankingChart({ countries, selected }) {
    const { t, locale, intlLocale } = useI18n()

    const top = useMemo(() =>
        [...countries]
            .sort((a, b) => b.casesPerOneMillion - a.casesPerOneMillion)
            .slice(0, TOP),
        [countries])

    const labels = top.map((item) => regionName(item.countryInfo?.iso2, locale) ?? item.country)

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2" color="primary" gutterBottom>
                    {t('rankingTitle')}
                </Typography>
                {top.length === 0 ? (
                    <Skeleton variant="rounded" height={360} />
                ) : (
                    <BarChart
                        layout="horizontal"
                        height={360}
                        hideLegend
                        yAxis={[{
                            scaleType: 'band',
                            data: labels,
                            width: 'auto',
                            colorMap: {
                                type: 'ordinal',
                                values: labels,
                                // destaca o país selecionado no ranking
                                colors: top.map((item) => item.country === selected ? '#5d78ff' : '#90a4ae'),
                            },
                        }]}
                        xAxis={[{ valueFormatter: (value) => formatCompact(value, intlLocale) }]}
                        series={[{
                            data: top.map((item) => item.casesPerOneMillion),
                            label: t('casesPerMillion'),
                            valueFormatter: (value) => formatNumber(value, intlLocale),
                        }]}
                    />
                )}
            </CardContent>
        </Card>
    )
}

RankingChart.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    selected: PropTypes.string.isRequired,
}

export default memo(RankingChart)
