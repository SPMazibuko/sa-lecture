import React, {useEffect, useState} from 'react';
import Sidebar from '../sidebar/Sidebar';
import './dashboard.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { collection, getDocs, query,doc, onSnapshot, deleteDoc, addDoc} from 'firebase/firestore';
import { auth,db,storage,dbs } from '../../firebase';
import { ref, set, onValue, push, remove, child} from "firebase/database";
import {uid} from 'uid';

const Dashboard = () => {
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalLectures, setTotalLectures] = useState(0);
    const [open, setOpen] = useState(false);
    const [notice, setNotice] = useState("");
    const [data, setData] = useState([]);
    const [userId, setUserId]=useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setUserId(user.uid);
            }
        })
    },[])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      //current date
      const date = new Date();
      const today = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

       /********************* ADD NOTICE ********************************/
       const handleAddNotice = async(e)=>{
        e.preventDefault();
        const uuid = uid();
        const noticeRef = ref(dbs, 'notice');
        const newNoticeRef = push(noticeRef);
            try{
                await set(newNoticeRef, {
                    date: today,
                    notice: notice,
                    userId: userId,
                    uuid
                });
              setOpen(false);
              setNotice("")
        }catch(error){
            console.log(error);
        }
      
        /*e.preventDefault();
          try{
              await addDoc(collection(db, "notice"), {
              date: today,
              notice: notice,
              userId: uid, 
            });
            setOpen(false);
      }catch(error){
          console.log(error);
      }*/
    }

    /*********************** Retrieve Notice *************************/
    useEffect(()=>{
        onValue(ref(dbs, 'notice'), (snapshot) => {
            const notice = snapshot.val();
            const noticeList = []
            for(let id in notice){
                noticeList.push(notice[id])
            }
            setData(noticeList);
        })
    },[])
  
    /*useEffect(()=>{
       const unsub = onSnapshot(collection(db, "notice"), (snapShot) =>{
           let list = [];
           snapShot.docs.forEach(doc=>{
               list.push({id: doc.id, ...doc.data()});
           });
           setData(list);
       },(error)=>{
           console.log(error)
       });
       return ()=>{
           unsub();
       }
   },[])*/

   /****************************************** Handle Delete Notice ***************************** */
   const handleDelete = (id)=>{
    try{
        if(window.confirm("are you sure that you want to delete the Notice?")){
            remove(ref(dbs, 'notice/', id))
    }}catch(e){
        console.log(e);
    }
}
   /*const handleDelete = async(id)=>{
  try {
      await deleteDoc(doc(db, "notice", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
}*/

 /****************************************** Handle Delete Notice ***************************** */
 const handleEdit = async()=>{

}


  return (
    <>
        <Sidebar />
        <div className='dashboard__container'>
            <div className='dashboard__top'>
                <h1>Dashboard</h1>
                <div className='dashboard__cards'>
                    <div className='dashboard__card'>
                        <div className='box'>
                            <h1>0</h1>
                            <h3>Students</h3>
                        </div>
                        <div className="icon-case">
                            {/*<GoBook className='card-icon'/>*/}
                        </div>
                    </div>
                    <div className='dashboard__card'>
                        <div className='box'>
                            <h1>0%</h1>
                            <h3>Attendance</h3>
                        </div>
                        <div className="icon-case">
                            {/*<MdOutlineSchool className='card-icon'/>*/}
                        </div>
                    </div>
                </div>
            </div>
             <div className='noticeboard__container'>
                <div className="noticeboard">
                    <div className="title">
                        <h2>Latest Notice Updates</h2>
                        <button className= "btn-view" onClick={handleClickOpen}>Create New Notice</button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>ADD NEW NOTICE</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Create a new notice for the facility.
                                </DialogContentText>
                                <input
                                    autoFocus
                                    margin="dense"
                                    id="notice"
                                    type="text"
                                    fullWidth
                                    onChange={(e)=>setNotice(e.target.value)}
                                    value={notice}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleAddNotice}>Add Notice</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableCell">No.</TableCell>
                                    <TableCell className="tableCell">Date</TableCell>
                                    <TableCell className="tableCell">Notice</TableCell>
                                    <TableCell className="tableCell">Options</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(data).map((id, index) =>{
                                    return(
                                        <TableRow key={id}>
                                        <TableCell className="tableCell" >{index +1}</TableCell>
                                        <TableCell className="tableCell" >{data[id].date}</TableCell>
                                        <TableCell className="tableCell">{data[id].notice}</TableCell>
                                        <TableCell className="tableCell">
                                            <div>
                                                <EditIcon className='dashboard__user-icon' onClick={()=>{handleEdit(id)}} style={{ cursor: 'pointer', color: 'green'}}/>
                                                <DeleteForeverIcon className='dashboard__user-icon' onClick={()=>{handleDelete(id)}} style={{ cursor: 'pointer', color: 'red'}}/>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    )
                                })

                                }
                                
                                {/*data.map((data)=>(
                                    <TableRow key={data.id}>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell className="tableCell">{data.notice}</TableCell>
                                        <TableCell className="tableCell">
                                            <div>
                                                <EditIcon className='dashboard__user-icon' onClick={()=>{handleEdit(data.id)}} style={{ cursor: 'pointer', color: 'blue' }}/>
                                                <DeleteForeverIcon className='dashboard__user-icon' onClick={()=>{handleDelete(data.id)}} style={{ cursor: 'pointer', color: 'red'}}/>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))*/}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
