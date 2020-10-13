import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
} from "../../Helper/Services";
import tableIcons from "./Icons";
import Columns from "./Columns";
import Localization from "./Localization";

export const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies().then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <MaterialTable
      icons={tableIcons}
      isLoading={isLoading}
      title="Libreria"
      columns={Columns}
      data={data}
      localization={Localization}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            addMovie(newData)
              .then((response) => {
                setData([...data, response.data]);
                resolve();
              })
              .catch((error) => {
                alert(error);
                reject();
              });
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            editMovie(newData._id, newData)
              .then(() => {
                let dataUpdate = [...data];
                let index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve();
              })
              .catch((error) => {
                alert(error);
                reject();
              });
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            deleteMovie(oldData._id)
              .then(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                resolve();
              })
              .catch((error) => {
                alert(error);
                reject();
              });
          }),
      }}
    />
  );
};
