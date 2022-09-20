import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import {gql, useQuery} from '@apollo/client'
import { Persons } from './Persons'

function App() {

  // useEffect(()=> {
  //   fetch('http://localhost:4000', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({query: `
  //       query {
  //         allPersons {
  //           name
  //           phone
  //         }
  //       }
  //     `})
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res.data))
  // })

  const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`

  const {data, error, loading} = useQuery(ALL_PERSONS)
  
  if(loading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Persons persons={data?.allPersons}/>
    </div>
  )
}

export default App
