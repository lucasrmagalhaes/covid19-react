const { useBabelRc, override } = require('customize-cra')
module.exports = override(useBabelRc()) // Pegar as configurações e utilizar o Babel.