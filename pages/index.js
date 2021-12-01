import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/RepostTable'
import { hours } from "../data"
export default function Home() {

  const [cookiesArray, setCoookiesArray] = useState([])
  const [randCust, setRandCust] = useState([])

  function submitHandler(e) {

    e.preventDefault();
    console.log();
    const cookiesdata = {
      maxCustomer: e.target.maxCustomer.value,
      minCustomer: e.target.minCustomer.value,
      avg: e.target.avg.value,
      location: e.target.location.value,
    }
    randCustPerHour()
    console.log(cookiesArray);
    setCoookiesArray(x => [...x, cookiesdata])
    
    }
    
    function randCustPerHour() {
    
      if  (cookiesArray.length == 1){
        const customer = Math.floor(Math.random()* (Math.floor(~cookiesArray[0].maxCustomer)-Math.ceil(~cookiesArray[0].minCustomer)+1)-Math.ceil(~cookiesArray[0].minCustomer))
        console.log(customer);
        setRandCust(x=>[...x,customer])
      }
      else if (cookiesArray.length >= 1) {
      for (var i = 1; i < hours.length; i++){
        const customer = Math.floor(Math.random()* (Math.floor(~cookiesArray[cookiesArray.length-1].maxCustomer)-Math.ceil(~cookiesArray[cookiesArray.length-1].minCustomer)+1)-Math.ceil(~cookiesArray[cookiesArray.length-1].minCustomer))
        console.log(customer);
        setRandCust(x=>[...x,customer])
      }
      }    
     
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
