import { hours } from "../data";
export default function ReportTable(props) {
  console.log(props.cookiesArray);
  if (props.cookiesArray.length == 0) {
    return <h2 className="mt-4 md:text-2xl">No Cookie Stands Available</h2>
  } else {
    return (
      <table className="mt-4 bg-green-500 border border-separate border-green-800 rounded-md table-fixed ">
        <thead>
          <tr >
            <td className="w-1/6 font-bold border border-separate border-green-800">Location</td>
            {hours.map((hour,index) =>
              <td  key={index} className="w-12 font-bold border border-separate border-green-800">{hour}</td>
            )}
            <td className="w-1/6 font-bold border border-separate border-green-800">Totals</td>
          </tr>
        </thead>
        <tbody>
          {props.cookiesArray.map(cookie =>
            <tr >
              <td key={cookie.location} className="border border-separate border-green-800 ">{cookie.location}</td>
              {cookie.customerPerHour.map((item,index) =>
                <td key={index} className="border border-separate border-green-800 ">{item}</td>)}
                <td key={cookie.location} className="border border-separate border-green-800 ">{cookie.total}</td>
            </tr>
          )}
        </tbody>
        <tfoot >
          <tr >
            <td className="font-bold border border-separate border-green-800">Total</td>
              {props.totalTotalPerHour.map((total,index)=>
                <td key={index} className="border border-separate border-green-800 ">{total}</td>
                )}
          </tr>
        </tfoot>
      </table>
    )
  }

}