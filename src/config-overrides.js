const { useBabelRc, override } = required('customize-cra')
module.exports = overrider(useBabelRc()) // Pegar as configurações e utilizar o Babel.