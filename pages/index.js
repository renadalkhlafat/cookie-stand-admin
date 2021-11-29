import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [cookiesArray, setCoookiesArray] = useState([])

  function submitHandler(e) {
    e.preventDefault();
    console.log();
    const cookiesdata = {
      maxCustomer: e.target.maxCustomer.value,
      minCustomer: e.target.minCustomer.value,
      avg: e.target.avg.value,
      location: e.target.location.value,
    }
    setCoookiesArray(x => [...x, cookiesdata])
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <CookieForm onSubmit={submitHandler} />
        <p class="text-center"> Report Table Commig Soon ...</p>
        <Result cookiesArray={cookiesArray} />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header class="w-full bg-green-400">
      <h3 class="font-semibold text-black-100 md:text-3xl pt-4 pb-3 m-0"> Cookie Stand Admin</h3>
    </header>
  )
}

function Footer() {
  return (
    <footer className="flex flex-col  justify-center w-full bg-green-400 py-3">
      <p > &copy; 2021</p>
    </footer>
  )
}

function CookieForm(props) {
  return (
    <form class="bg-green-300 bg-green-300 rounded-md" onSubmit={props.onSubmit}>
      <div class="grid  gap-4 grid-rows-3">
        <div class="flex flex-col pt-3 w-full  text-center font-semibold md:text-xl">Create Cookie Stand</div>
        <div class="flex-2 m-3 ">
          <lable class="px-4 py-2 text-black-50 font-semibold "> Location</lable>
          <input type="text" class=" w-4/5 form-control " name="location" />
        </div>
        <div class="grid  gap-6 grid-cols-4 mb-5">
          <div class="grid  gap-2 grid-rows-2 m-3 ">
            <lable class="font-semibold"> Minimum Customers per Hour </lable>
            <input type="text" class="form-control" name='maxCustomer' />
          </div>
          <div class="grid  gap-2 grid-rows-2 m-3">
            <lable class="font-semibold" > Maximum Customers per Hour</lable>
            <input type="text" class="form-control" name="minCustomer" />
          </div>
          <div class="grid  gap-2 grid-rows-2 m-3">
            <lable class="font-semibold"> Average Cookies per Sale</lable>
            <input type="text" class="form-control" name="avg" />
          </div>
          <div class="grid  gap-2 grid-rows-1 m-3">
            <button class="font-semibold form-control bg-green-600" >Create</button>
          </div>
        </div>
      </div>
    </form>
  )
}

function Result(props) {
 console.log(props.cookiesArray);
  if (props.cookiesArray.length == 0) {
    return <p>Nothing Added</p>
  } else {
    return (
      <p>{props.cookiesArray.map(cookie=>
        <p>{`{ "Location":"${cookie.location}","minCustomers": "${cookie.minCustomer}","maxCustomers": "${cookie.minCustomer}" ,"avgCookies": "${cookie.avg}" }`}</p>
        )}</p>
     
      // <div class="grid  gap-4 grid-rows-3">
      //   {props.cookiesArray.map(cookie => {
      //     console.log(cookie);

      //    

      //   })}
      // </div>)
    )
  }

}