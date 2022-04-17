import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from 'miragejs'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Menu } from "./types/Menu";
import { ToastContainer } from 'react-toastify';

// cria api de fornecimento de mock's com miragejs
createServer({
  models: {
    company: Model,
    supplier: Model
  },
  seeds(server) {
    server.db.loadData({
      companies: [
        {
          id: 1,
          fantasyName: 'Empresa exemplo 1',
          uf: 'SANTA CATARINA',
          cnpj: '86000305000119',
          createdAt: new Date()
        },
        {
          id: 2,
          fantasyName: 'Empresa exemplo 2',
          uf: 'SÃO PAULO',
          cnpj: '72987673000198',
          createdAt: new Date()
        }
      ],
      suppliers: [
        {
          id: 1,
          name: 'Fornecedor exemplo 1',
          document: '39238370000105',
          phone: '47997011323',
          createdAt: new Date(),
          companyId: 1
        },
        {
          id: 2,
          name: 'Fornecedor exemplo 2',
          document: '76344927000100',
          phone: '47997011323',
          createdAt: new Date(),
          companyId: 2
        },
        {
          id: 3,
          name: 'Fornecedor exemplo 3',
          document: '62516816000120',
          phone: '47997011323',
          createdAt: new Date(),
          companyId: 1
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/companies', () => {
      return this.schema.all('company')
    })

    this.get('/suppliers', () => {
      return this.schema.all('supplier')
    })

    this.post('/companies', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('company', data)
    })

    this.post('/suppliers', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('supplier', data)
    })
  }
})

// inclui o HTML da modal dentro da div root
Modal.setAppElement('#root')

export function App() {

  const [selectedMenuId, setSelectedMenuId] = useState(1)
  const [menus, setMenu] = useState<Menu[]>([
    {
      id: 1,
      name: "company",
      title: "Empresa"
    },
    {
      id: 2,
      name: "supplier",
      title: "Fornecedor"
    }
  ])


  const handleClickButton = (id: number) => {
    setSelectedMenuId(id)
  }

  useEffect(() => {

  }, [selectedMenuId])

  return (
    <>
      <Header selectedMenuId={selectedMenuId} menus={menus} handleClickButton={handleClickButton} />
      <Dashboard listType={selectedMenuId} />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}
