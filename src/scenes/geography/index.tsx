import { Box } from "@mui/material"
import Header from '../../components/Header'
import GeographyChart from '../../components/GeographyChart';
import { tokens } from '../../theme'
import { useTheme } from "@mui/material"
 const Geography = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
    
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4">
                <GeographyChart />
            </Box>
        </Box>
  )



}


export default Geography