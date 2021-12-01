import { hours } from "../data";
export default function ReportTable(props) {
  console.log(props.cookiesArray);
  if (props.cookiesArray.length == 0) {
    return <h2 className="mt-4 md:text-2xl">No Cookie Stands Available</h2>
  } else {
    return (
      <table className="mt-4 bg-green-500 border border-separate border-green-800 rounded-md table-fixed ">
        <thead >
          <tr >
            <td className="w-1/6 font-bold border border-separate border-green-800">Location</td>
            {hours.map(hour =>
              <td  key={hour} className="w-12 font-bold border border-separate border-green-800">{hour}</td>
            )}
            <td className="w-1/6 font-bold border border-separate border-green-800">Totals</td>
          </tr>
        </thead>
        <tbody>

          {props.cookiesArray.map(cookie =>
            <tr >
              <td key={cookie.location} className="border border-separate border-green-800 ">{cookie.location}</td>
              {cookie.customerPerHour.map(item =>
                <td key={item} className="border border-separate border-green-800 ">{item}</td>)}
                <td key={cookie.location} className="border border-separate border-green-800 ">{cookie.total}</td>
            </tr>
          )}
        </tbody>
        <tfoot >
          <tr >
            <td className="font-bold border border-separate border-green-800">Total</td>
            {props.cookiesArray.map(cookie=>
              {cookie.totalPerHour.map(total=>
                <td>{total}</td>
                )}
              )}
          </tr>
        </tfoot>
      </table>
      //  <p>{props.cookiesArray.map(cookie=>
      //    <p>{`{ "Location":"${cookie.location}","minCustomers": "${cookie.minCustomer}","maxCustomers": "${cookie.minCustomer}" ,"avgCookies": "${cookie.avg}" }`}</p>
      //    )}</p>

    )
  }

}