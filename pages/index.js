import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/RepostTable'
import { hours } from "../data"
export default function Home() {
  
  // const [randCust, setRandCust] = useState([])
  const [cookiesArray, setCoookiesArray] = useState([])
  

  function submitHandler(e) {
    const randCust =[]
    const cookiesPurches =[]
    e.preventDefault();
    for (var i = 0; i < hours.length; i++){
      const customer = Math.floor(Math.random()* (Math.floor(~e.target.maxCustomer.value)-Math.ceil(~e.target.minCustomer.value)+1)-Math.ceil(~e.target.minCustomer.value))     
      randCust.push(customer)
      cookiesPurches.push(Math.ceil(customer*e.target.avg.value))
      console.log(randCust);
      console.log(cookiesPurches);
    }
    
    const cookiesdata = {
      maxCustomer: e.target.maxCustomer.value,
      minCustomer: e.target.minCustomer.value,
      avg: e.target.avg.value,
      location: e.target.location.value,
      customerPerHour:cookiesPurches,
    }
    console.log(cookiesdata);
    setCoookiesArray(x => [...x, cookiesdata])
    
    }
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <CreateForm onSubmit={submitHandler} />
        <ReportTable cookiesArray={cookiesArray} />
      </main>
      <Footer len={cookiesArray.length} />
    </div>
  )
}
