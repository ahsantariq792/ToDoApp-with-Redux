import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { AddItem, DeleteItem, RemoveItem } from "../actions/actions"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
                        <h1 className="header">TO DO APP</h1>

                        <TextField id="outlined-basic" label="ToDo Items" variant="outlined"
                            value={item}
                            onChange={(event) => setItem(event.target.value)} />
                        <Button variant="contained" color="success" className="fa fa-add" id="addbtn" onClick={() => dispatch(AddItem(item))} ></Button>

                        <Button variant="contained" color="error" id="addbtn" onClick={() => dispatch(RemoveItem())} >
                            <IconButton aria-label="delete" type="reset" id="deleteAll" size="medium">
                                <DeleteIcon id="deletebtn" />
                            </IconButton>
                        </Button>
                    </div>
                </div>

                {
                    list.map((elem) => {
                        return (

                            <div className="listContainer" key={elem.id}>
                                <div className="list" >
                                    <p className="listItem">{elem.data}</p>
                                    <IconButton aria-label="delete" type="reset" id="delbtt" size="small">
                                        <DeleteIcon id="deletebtn" onClick={() => dispatch(DeleteItem(elem.id))} />
                                    </IconButton>
                                    <IconButton aria-label="delete" type="reset" id="delbtt" size="small">
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            </div>
                        )
                    })

                }

            </div>

        </>
    )
}


export default ToDo;