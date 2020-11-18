import api from '../libs/api'

const getAll = async (brandId) => {
  const { data } = await api.get(`carros/marcas/${brandId}/modelos`)
  return data
}

export {
  getAll
}
