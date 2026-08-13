import { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { useI18n } from '../../../commons/i18n'

function ErrorState({ onRetry }) {
    const { t } = useI18n()

    return (
        <Card>
            <CardContent>
                <Typography component="p" gutterBottom>{t('errorMsg')}</Typography>
                <Button variant="contained" color="primary" onClick={onRetry}>
                    {t('retry')}
                </Button>
            </CardContent>
        </Card>
    )
}

ErrorState.propTypes = {
    onRetry: PropTypes.func.isRequired,
}

export default memo(ErrorState)
