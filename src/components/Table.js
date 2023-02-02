import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"


export default function Table() {
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS}
    })
    
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
      
    // const url = 'https://paper-dragonfly.ue.r.appspot.com/athlete'

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.body.athletes[0].username)
    //     })
    //     .catch(err => {
    //         console.log(`error${err}`)
    //     });
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