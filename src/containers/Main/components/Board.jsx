import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) { // Cards sobre o Covid-19 irão ficar aqui
    
    // Dados que a API retorna
    const { cases, todayDeaths, recovered, deaths, todayCases } = data 

/* 
 * Função para retornar o valor ou uma barra cinza
 * Skeleton - melhorar a interface de loading
 */
    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de Casos" color="#5d78ff" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)