const moment = require.requireActual('moment') //para ir buscar mesmo o moment, não pode ser import pois cria um erro de stack

export default (timestamp = 0) => {
    return moment(timestamp)
}
