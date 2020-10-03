const { useBabelRc, overrider } = required('customize-cra')
module.exports = overrider(useBabelRc()) // Pegar as configurações e utilizar o Babel.