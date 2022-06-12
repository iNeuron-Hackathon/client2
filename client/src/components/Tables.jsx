import { Grid, Paper } from '@mui/material'
import React,{useRef} from 'react'
import jsPDF from 'jspdf'
import QRCode from "qrcode"

const Tables = () => {

  return (
    <div>
      <h1>Tables</h1>
      <Grid container spacing={2}>
            <Table no={3} status='occupied'/>
            <Table no={5} status='occupied'/>
            <Table no={7} />
            <Table no={13} status='occupied'/>
            <Table no={30} />
            <Table no={1} status='occupied'/>
            <Table no={2} status='occupied'/>
            <Table no={11} />
            
      </Grid>
    </div>
  )
}

const Table = ({no, status})=>{
  const downloadQrcode = useRef(null)

  const handleClick = async(e)=>{
    console.log('Clicked');
    let doc = new jsPDF('p', 'pt')

    doc.text(20, 20, 'This is the first title.')
        const response = await QRCode.toDataURL(`${process.env.REACT_APP_QR_URL}?table=${no}`)
        // setQrcode(response)

        // downloadQrcode.current.click()
        console.log(response)
        doc.addImage(response, 'png', 0, 0, 580, 580);
        doc.save(`table_${no}.pdf`)
  }
  return (
    <Grid item lg={2} display='flex' justifyContent='center'>
      <Paper 
        sx={{
          height: 140,
          width: 100,
          backgroundColor:status==='occupied' ? '#aaa' :'#00FF00',
        }}
        onClick={handleClick}
        >
          {no}
        </Paper>
    </Grid>
  )
}
const GreenTable = ()=>{
  return (
    <Grid item lg={2} display='flex' justifyContent='center'>
      <Paper 
        sx={{
          height: 140,
          width: 100,
          backgroundColor:'#00FF00',
        }}
        />
    </Grid>
  )
}
export default Tables