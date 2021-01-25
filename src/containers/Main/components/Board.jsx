import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) { // Cards sobre o Covid-19 irão ficar aqui
    
    // Dados que a API retorna
    const { cases, todayDeaths, recovered, deaths, todayCases } = data 

/* 
 * Função para retornar o valor ou uma barra cinza.
 * Skeleton - Melhora a interface de loading.
 */
    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <Card value={getValue(cases)} label="TOTAL DE CASOS" color="#000" />
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(todayDeaths)} label="ÓBITOS DE HOJE" color="#FF0000" />
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(todayCases)} label="CASOS DE HOJE" color="#000" />
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(deaths)} label="TOTAL DE MORTES" color="#FF0000" />
            </Grid>
            <Grid item xs={12} md={5}>
                <Card value={getValue(recovered)} label="TOTAL DE RECUPERADOS" color="#008000" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)