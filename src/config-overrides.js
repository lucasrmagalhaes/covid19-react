const { useBabelRc, overrider } = required('customize-cra')
module.exports = overrider(useBabelRc()) // pegar as configurações e utilizar o Babel.