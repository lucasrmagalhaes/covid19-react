import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) { // Cards sobre o Covid-19 irão ficar aqui
    
    // Dados que a API retorna
    const { cases, todayCases, active, deaths, todayDeaths, recovered, critical } = data 

/* 
 * Função para retornar o valor ou uma barra cinza.
 * Skeleton - Melhora a interface de loading.
 */
    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={1}>
            
            <Grid item xs={12} md={4}>
                <Card value={getValue(cases)} label="CASOS" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(todayCases)} label="HOJE" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(active)} label="ATIVO" color="#000" />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Card value={getValue(deaths)} label="ÓBITOS" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(todayDeaths)} label="HOJE" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(recovered)} label="RECUPERADOS" color="#008000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(critical)} label="CRÍTICO" color="#FF7F00" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)