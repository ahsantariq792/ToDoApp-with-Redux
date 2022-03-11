import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { AddItem, DeleteItem } from "../actions/actions"

const ToDo = () => {
    const [item, setItem] = useState()
    console.log(item)
    const myState = useSelector((state) => state.ToDo)
    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div>
                    <h1>TO DO APP</h1>
                    <TextField id="outlined-basic" label="ToDo Items" variant="outlined"
                        value={item}
                        onChange={(event) => setItem(event.target.value)} />
                    <Button variant="contained" color="success" className="fa fa-add" id="addbtn" onClick={()=> dispatch(AddItem(item))}></Button>
                </div>
            </div>
        </>
    )
}



export default ToDo;