import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/RepostTable'
import { hours } from "../data"
export default function Home() {

  const [cookiesArray, setCoookiesArray] = useState()


  function submitHandler(e) {
    const randCust = []
    const cookiesPurches = []
    const totals = 0
    const totalPerHour = []
    e.preventDefault();
    for (let i = 0; i < hours.length; i++) {
      const customer = Math.floor(Math.random() * (Math.floor(~e.target.maxCustomer.value) - Math.ceil(~e.target.minCustomer.value) + 1) - Math.ceil(~e.target.minCustomer.value))
      randCust.push(customer)
      const sales = Math.ceil(customer * e.target.avg.value)
      cookiesPurches.push(sales)
      totals += sales
      console.log(randCust);
      console.log(cookiesPurches);
    }
    setPurcheses(cookiesPurches)
    const cookiesdata = {
      maxCustomer: e.target.maxCustomer.value,
      minCustomer: e.target.minCustomer.value,
      avg: e.target.avg.value,
      location: e.target.location.value,
      customerPerHour: cookiesPurches,
      total: totals,
    }
    console.log(cookiesdata);
    setCoookiesArray(x => [...x, cookiesdata])

    // for (let i = 0; i < cookiesArray.length; i++) {
    //   const total = 0
    //   for (let j = 0; j < hours.length; j++) {
    //     total += cookiesArray[i].cookiesPurches[j]
    //     totalPerHour.push(total)
    //     console.log(totalPerHour);
    //   }
    // }
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
