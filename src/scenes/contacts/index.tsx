import {type FC} from 'react';
import { Box, Typography}  from "@mui/material";
import { DataGrid, type GridColDef, type GridRenderCellParams } from "@mui/x-data-grid";
import { tokens } from '../../theme'
import { mockDataTeam } from "../../data/mockData.js"

import Header from "../../components/Header"
import {useTheme} from "@mui/material"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";




type AccessLevel = 'admin' | "manager" | "user";

//Define type for a row of team data

    interface TeamMember {
        id: number;
        name: string;
        age: number;
        phone: string;
        email: string;
        access: AccessLevel;
    }


const Team: FC = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<TeamMember>[] = [
        { field: "id", headerName: "ID", width: 90},
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "access", headerName: "Access Level", flex: 1, 
            renderCell: ({row}: GridRenderCellParams<TeamMember>) => {

                const icon = 
                     row.access === "admin" ? (
                         <AdminPanelSettingsOutlinedIcon />
                      ) : row.access === "manager" ? (
                            <SecurityOutlinedIcon />
                    ) : (
                            <LockOpenOutlinedIcon />
                      );

                      const bgColor =
                         row.access === "admin"
                          ? colors.greenAccent[600]
                         : colors.greenAccent[700];



                return (
                    <Box width="60%" m="0 auto"
                        display="flex"
                        justifyContent="center"
                        
                        bgcolor={bgColor}
                        borderRadius="4px"
                    >
                        {/** 
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon/> }
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon/> }*/}
                        {icon}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px"}} >
                            {row.access}
                        </Typography>
                    </Box>
                )
            }
        },

    ]

  return (
    <Box m="20px">

             <Header title="TEAM" subtitle="Managing the Team Members"/>

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
                        backgroundcolor:colors.blueAccent[700]
                    }
                }}
             >
                <DataGrid 
                    rows={mockDataTeam} columns={columns}
                />
             </Box>
    
        </Box>
       
  )
}

export default Team