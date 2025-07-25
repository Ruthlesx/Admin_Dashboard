import {type FC} from 'react';
import { Box,}  from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { tokens } from '../../theme'
import { mockDataContacts } from "../../data/mockData"

import Header from "../../components/Header"
import {useTheme} from "@mui/material"
import { GridToolbar } from '@mui/x-data-grid/internals';





 

    interface Contact {
        id: number;
        name: string;
        age: number;
        phone: string;
        email: string;
        registrarId: number;
        address: string;
        city: string;
        zipCode: string;
        
    }


const Contact: FC = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.5},
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        {field: "registrarId", headerName: "Registrar ID"},
        {field: "address", headerName:"Address", flex: 1},
         {field: "city", headerName:"City", flex: 1},
          {field: "zipCode", headerName:"Zipcode", flex: 1},
       

    ]

  return (
    <Box m="20px">

             <Header title="Contacts" subtitle="List of Contacts for future reference"/>

             <Box m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",

                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders" : {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: " none"
                    },
                    "& .MuiDataGrid-footerContainer" : {
                        borderTop: "none",
                        backgroundColor:colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    }
                }}
             >
                <DataGrid 
                    rows={mockDataContacts} columns={columns} 
                    slots={{ toolbar: GridToolbar}}
                />
             </Box>
    
        </Box>
       
  )
}

export default Contact