import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { AddItem, DeleteItem } from "../actions/actions"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDo = () => {
    const [item, setItem] = useState()
    const list = useSelector((state) => state.ToDo.list)
    console.log(list)
    const dispatch = useDispatch()
    return (
        <>
            <div className="maincontainer">
                <div className="container">
                    <div>
                        <h1>TO DO APP</h1>
                        <TextField id="outlined-basic" label="ToDo Items" variant="outlined"
                            value={item}
                            onChange={(event) => setItem(event.target.value)} />
                        <Button variant="contained" color="success" className="fa fa-add" id="addbtn" onClick={() => dispatch(AddItem(item))}></Button>
                    </div>
                </div>

                {
                    list.map((elem) => {
                        return (
                            <div className="listContainer">
                                <p className="listItem">{elem.data}</p>
                                <IconButton aria-label="delete" type="reset" id="delbtt" size="large">
                                    <DeleteIcon id="deletebtn" />
                                </IconButton>
                            </div>
                        )
                    })

                }

            </div>

        </>
    )
}



export default ToDo;