import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, Button, IconButton, Autocomplete, TextField, Tooltip } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import { useI18n, regionName } from '../../../commons/i18n'
import { formatNumber, formatPercent } from '../../../commons/utils/number'
import WorldFlag from '../../../assets/images/world.png'
import { CardPanelContentStyled, ItemStyled, ToolbarStyled } from './style'

// Alguns valores e parametros que o arquivo main vai enviar.
function Panel({ data, dataUpTo, onChange, country, countries }) {
    const { t, locale, intlLocale, toggleLocale } = useI18n()
    const { mode, setMode } = useColorScheme()
    const navigatorHasShare = typeof navigator !== 'undefined' && Boolean(navigator.share)

    const options = useMemo(() => [
        { value: 'World', label: t('world'), flag: WorldFlag },
        ...countries.map((item) => ({
            value: item.country,
            label: regionName(item.countryInfo?.iso2, locale) ?? item.country,
            flag: item.countryInfo?.flag,
        })),
    ], [countries, locale, t])

    // fallback sintético: mantém o input fiel ao país exibido enquanto a lista não chega
    const selected = options.find((option) => option.value === country) ??
        { value: country, label: country, flag: undefined }

    const { cases, deaths } = data
    const fatality = cases && deaths != null ? deaths / cases : undefined
    const textCovid19 = `${t('title')} — ${selected.label} · ${t('cases')}: ${formatNumber(cases, intlLocale)} · ` +
        `${t('deaths')}: ${formatNumber(deaths, intlLocale)} · ${t('fatality')}: ${formatPercent(fatality, intlLocale)}`

    // Documentações mais completas de JS é na Mozilla
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    /**
     * Navegadores que tiverem essa API/suporte
     * title, text e url - valores padrões da API
     */
    const shareInfo = () => {
        navigator.share({
            title: `COVID-19 - ${selected.label}`,
            text: textCovid19,
            url: 'https://covid19-pwa.netlify.app/' // Onde a aplicação está hospedada.
        })
    }

    const dataUpToLabel = dataUpTo
        ? new Date(dataUpTo).toLocaleDateString(intlLocale, { day: '2-digit', month: 'short', year: 'numeric' })
        : '…'

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="h1" color="primary">{t('title')} </Typography>
                    <Typography variant="h6" component="h2" color="primary">{t('overview')} </Typography>
                    <Typography variant="body2" component="p" color="primary">
                        {t('dataUpTo')}: {dataUpToLabel} · {t('historicalNote')}
                    </Typography>
                    <div className="pt-2">
                        <Autocomplete
                            options={options}
                            value={selected}
                            onChange={(_, option) => option && onChange(option.value)}
                            getOptionLabel={(option) => option.label}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            disableClearable
                            autoHighlight
                            sx={{ minWidth: 240, maxWidth: 320 }}
                            renderOption={({ key, ...props }, option) => (
                                <li key={key} {...props}>
                                    <ItemStyled>
                                        <div>{option.label}</div>
                                        {/* alt vazio: o nome do país já está no texto ao lado */}
                                        <img src={option.flag} alt="" width="28" loading="lazy" />
                                    </ItemStyled>
                                </li>
                            )}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard" label={t('selectCountry')} />
                            )}
                        />
                    </div>
                </div>
                <ToolbarStyled>
                    <div>
                        <Tooltip title={t('darkMode')}>
                            <IconButton
                                aria-label={t('darkMode')}
                                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                            >
                                {mode === 'dark' ? '☀️' : '🌙'}
                            </IconButton>
                        </Tooltip>
                        <Button size="small" aria-label={t('language')} onClick={toggleLocale}>
                            {locale === 'pt' ? 'EN' : 'PT'}
                        </Button>
                    </div>
                    {/* Celular compartilha nativo e Web permite copiar. */}
                    {navigatorHasShare ? (
                        <Button variant="contained" color="primary" onClick={shareInfo} disabled={cases == null}>
                            {t('share')}
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={copyInfo} disabled={cases == null}>
                            {t('copy')}
                        </Button>
                    )}
                </ToolbarStyled>
            </CardPanelContentStyled>
        </Card>
    )
}

Panel.propTypes = {
    data: PropTypes.shape({
        cases: PropTypes.number,
        deaths: PropTypes.number,
    }).isRequired,
    dataUpTo: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    country: PropTypes.string.isRequired,
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default memo(Panel)
