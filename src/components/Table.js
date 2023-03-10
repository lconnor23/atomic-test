import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useEffect, useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import Axios from "axios"

export default function Table() {
    // const[inputData, setData] = useState("");
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS}
    });
    // const fetchData = async() => {
    //   await Axios.get('https://paper-dragonfly.ue.r.appspot.com/athlete', {
    //     method: 'GET',
    //     mode: 'no-cors',
    //     crossorigin: true,
    //     headers:{"Content-Type": "application/json", 
    //       "Access-Control-Allow-Origin": "http://localhost:3000/"}
    //   })
    //     .then((res) => {
    //       res.json()
    //       setData(res.data)
    //       console.log(data)        
    //     }
    //     )
    // }
    // fetchData()
     const players = [
          {
            "name": "Bob",
            "team": "blue",
            "id": 1
          },
          {
            "name": "Lucy",
            "team": "green",
            "id": 2
          },
          {
            "name": "Jen",
            "team": "red",
            "id": 3
          },
          {
            "name": "Linda",
            "team": "blue",
            "id": 4
          },
          {
            "name": "Louise",
            "team": "purple",
            "id": 5
          },
          {
            "name": "Tina",
            "team": "green",
            "id": 6
          },
          {
            "name": "Gene",
            "team": "purple",
            "id": 7
          }
        ]
      
    const url = 'https://paper-dragonfly.ue.r.appspot.com/athlete'

    const fetchData = async() => {
      await fetch(url, {
      method: 'GET',
      crossorigin: true,
      headers:{ "Content-Type": "application/json"}
    }).then((res) => {
      console.log('success')})
        .then(res => {
          res.json()
        console.log(res.body.athletes)
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error${err}`)
        });
      }
      fetchData()
  return (
    <div>
        <InputText
        onInput={(e) =>
            setFilters({
                global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
            })}
        ></InputText>
        <DataTable value = {players} filters = {filters}>
            <Column field = "name" header ="Name" sortable></Column>
            <Column field = "team" header = "Team" sortable></Column>
            <Column field = "id" header = "ID" sortable></Column>
        </DataTable>
    </div>
  )
}