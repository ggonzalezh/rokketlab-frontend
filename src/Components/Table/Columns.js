const Columns = [
    {
      title: "Titulo",
      field: "title",
      validate: (rowData) =>
        rowData.title === ""
          ? { isValid: false, helperText: "El campo no puede estar vacio" }
          : true && rowData.title === undefined
          ? { isValid: false, helperText: "" }
          : true,
    },
    {
      title: "Año de lanzamiento",
      field: "launchYear",
      type: "numeric",
      validate: (rowData) =>
        rowData.launchYear === ""
          ? { isValid: false, helperText: "El campo no puede estar vacio" }
          : true && rowData.launchYear === undefined
          ? { isValid: false, helperText: "" }
          : true && rowData.launchYear < 1900
          ? { isValid: false, helperText: "El año tiene que ser mayor a 1900" }
          : true,
    },
    {
      title: "Tipo",
      field: "typeMovie",
      validate: (rowData) =>
        rowData.typeMovie === ""
          ? { isValid: false, helperText: "El campo no puede estar vacio" }
          : true && rowData.typeMovie === undefined
          ? { isValid: false, helperText: "" }
          : true,
    },
    {
      title: "Género",
      field: "gender",
      validate: (rowData) =>
        rowData.gender === ""
          ? { isValid: false, helperText: "El campo no puede estar vacio" }
          : true && rowData.gender === undefined
          ? { isValid: false, helperText: "" }
          : true,
    },
    {
      title: "Director",
      field: "director",
      validate: (rowData) =>
        rowData.director === ""
          ? { isValid: false, helperText: "El campo no puede estar vacio" }
          : true && rowData.director === undefined
          ? { isValid: false, helperText: "" }
          : true,
    },
    {
      title: "País de origen",
      field: "country",
      validate: (rowData) =>
        rowData.country === ""
          ? { isValid: false, helperText: "El campo no puede estar vacio" }
          : true && rowData.country === undefined
          ? { isValid: false, helperText: "" }
          : true,
    },
  ];
  
  export default Columns;