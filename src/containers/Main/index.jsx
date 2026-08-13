import { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import ErrorState from './components/ErrorState'
import HistoryChart from './components/HistoryChart'
import RankingChart from './components/RankingChart'
import { ContainerStyled } from './style'

function Main() {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [country, setCountry] = useState('Brazil')
  const [countries, setCountries] = useState([])
  const [timeline, setTimeline] = useState(null)
  const [timelineError, setTimelineError] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const getCovidData = useCallback((country, signal) => {
    Api.getCountry(country, signal)
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(true)
      })
  }, [])

  const getTimeline = useCallback((country, signal) => {
    Api.getHistorical(country, signal)
      .then((res) => setTimeline(res.timeline ?? res)) // /all traz a timeline na raiz
      .catch((err) => {
        if (err.name !== 'AbortError') setTimelineError(true)
      })
  }, [])

  // limpa os dados para as telas de loading; chamado nos handlers, não no effect
  const resetData = () => {
    setData({})
    setError(false)
    setTimeline(null)
    setTimelineError(false)
  }

  useEffect(() => {
    // aborta a requisição anterior ao trocar de país rápido (evita resposta fora de ordem)
    const controller = new AbortController()
    getCovidData(country, controller.signal)
    getTimeline(country, controller.signal)
    return () => controller.abort()
  }, [getCovidData, getTimeline, country, refreshKey])

  useEffect(() => {
    const controller = new AbortController()
    Api.getCountries(controller.signal)
      .then(setCountries)
      .catch(() => {}) // o seletor continua funcionando só com 'Mundo'
    return () => controller.abort()
  }, [])

  const handleChange = (value) => {
    resetData()
    setCountry(value)
  }

  // reexecuta o effect de fetch, que aborta sozinho a tentativa anterior
  const handleRetry = () => {
    resetData()
    setRefreshKey((key) => key + 1)
  }

  // fim real da série histórica (o campo `updated` da API é só a hora do cache dela)
  const lastDate = timeline?.cases ? Object.keys(timeline.cases).at(-1) : null

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel data={data} dataUpTo={lastDate} onChange={handleChange} country={country} countries={countries} />
      </div>
      <div className="mb-2">
        {error ? <ErrorState onRetry={handleRetry} /> : <Board data={data} />}
      </div>
      <div className="mb-2">
        <HistoryChart timeline={timeline} error={timelineError} />
      </div>
      <RankingChart countries={countries} selected={country} />
    </ContainerStyled>
  )
}

export default memo(Main)
