import Table from "react-bootstrap/Table";
import User from './User';
function App() {
  // const student=["awais","asad","sajjawal","noman"];
  const student = [
    { name: "awais", email: "awais@gmail.com", contact: "0307" },
    { name: "asad", email: "asad@gmail.com", contact: "0308" },
    { name: "noman", email: "noman@gmail.com", contact: "0310" },
    { name: "sajawal", email: "sajawal@gmail.com", contact: "0309" },
  ];

  const student2 = [
    {
      name: "awais",
      email: "awais@gmail.com",
      address: [
        { hn: "04", city: "faisalabad", country: "pakistan" },
        { hn: "05", city: "multan", country: "pakistan" },
        { hn: "06", city: "lahore", country: "pakistan" },
      ],
    },
    {
      name: "asad",
      email: "asad@gmail.com",
      address: [
        { hn: "04", city: "faisalabad", country: "pakistan" },
        { hn: "05", city: "multan", country: "pakistan" },
        { hn: "06", city: "lahore", country: "pakistan" },
      ],
    },
    {
      name: "noman",
      email: "noman@gmail.com",
      address: [
        { hn: "04", city: "faisalabad", country: "pakistan" },
        { hn: "05", city: "multan", country: "pakistan" },
        { hn: "06", city: "lahore", country: "pakistan" },
      ],
    },
    {
      name: "sajawal",
      email: "sajawal@gmail.com",
      address: [
        { hn: "04", city: "faisalabad", country: "pakistan" },
        { hn: "05", city: "multan", country: "pakistan" },
        { hn: "06", city: "lahore", country: "pakistan" },
      ],
    },
  ];

  return (
    <div className="App">
      <Table border={1}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Contact</th>
          </tr>
          {student.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {
        student.map((item, i)=>
        <User data={item} />
        )
      }

      <Table border={1}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Address</th>
          </tr>
          {student2.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
              <Table border={1}>
        <tbody>
          {
                item.address.map((data)=>
                <tr>
              <td>{data.hn}</td>
              <td>{data.city}</td>
              <td>{data.country}</td>
              </tr>
                )
              }
               </tbody>
        </Table>
      </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
