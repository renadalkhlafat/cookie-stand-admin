import { hours } from "../data";
export default function ReportTable({ cookiesArray, deleteResource }) {
  const sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const total = 0
  const totalOfTotals = 0
  console.log(cookiesArray);
  if (!cookiesArray) {
    return <h2 className="mt-4 md:text-2xl">No Cookie Stands Available</h2>
  } else {
    return (
      <table className="mt-4 bg-green-500 border border-separate border-green-800 rounded-md table-fixed ">
        <thead>
          <tr >
            <td className="w-1/6 font-bold border border-separate border-green-800">Location</td>
            {hours.map((hour, index) =>
              <td key={index} className="w-12 font-bold border border-separate border-green-800">{hour}</td>
            )}
            <td className="w-1/6 font-bold border border-separate border-green-800">Totals</td>
          </tr>
        </thead>
        <tbody>
          {cookiesArray.map((cookie, index) => {
            total = 0
            return (
              <tr >
                <td key={index} className="border border-separate border-green-800 ">{cookie.location}  <a onClick={() => deleteResource(cookie.id)}>❌</a></td>
                {cookie.hourly_sales.map((item, index) => {
                  sales[index] += item
                  total += item
                  return (<td key={index} className="border border-separate border-green-800 ">{item}</td>)
                }
                )}

                <td key={index} className="border border-separate border-green-800 ">{total}</td>
                <span hidden>{totalOfTotals += total}</span>
              </tr>
            );
          }
          )}
        </tbody>
        <tfoot >
          <tr >
            <td className="font-bold border-green-800">Total</td>
            {sales.map((item, index) => {
              return (<td key={index} className="font-bold border-green-700 ">{item}</td>)
            })}
            <td className="font-bold border-green-800" >{totalOfTotals ? totalOfTotals : 0}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
}