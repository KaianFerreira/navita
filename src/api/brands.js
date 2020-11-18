import api from '../libs/api'

const getAll = async () => {
  const { data } = await api.get('carros/marcas')
  return data
}

export {
  getAll
}
