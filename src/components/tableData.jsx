import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchData from "./search";
import { useEffect, useState } from "react";

export default function TableData({ getData }) {
  const [filteredData, setFilteredData] = useState(getData ? getData : []);

  useEffect(() => {
    setFilteredData(getData ? getData : []);
  }, [getData]);
  // i have made a mehtod to access and match given user input from search component
  const onQueryChange = (s) => {
    console.log(s);
    const filterRes = getData?.filter((item) =>
      item.name.toLowerCase().includes(s.toLowerCase())
    );
    console.log("filterRes", filterRes);
    if (filterRes) {
      setFilteredData(filterRes);
      if (filterRes.length == 0) {
        console.log("No result found");
      }
    }
  };
  return (
    <>
      <div className="sticky z-0 py-2">
        // here i have sent mehtod in Search component
        <SearchData onQueryChange={onQueryChange} />
      </div>
      // here i show all data if user search than he will also see search data
      in form of table
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="bg-zinc-200 ">
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company&nbsp;Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>Zipcode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.map((row) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.website}</TableCell>
                <TableCell>{row.company.name}</TableCell>
                <TableCell>{row.address.city}</TableCell>
                <TableCell>{row.address.street}</TableCell>
                <TableCell>{row.address.zipcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
