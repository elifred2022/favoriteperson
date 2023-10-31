import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '../../../data/people';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';

export type HomeInterface = {}

const Home: React.FC<HomeInterface>  = ({}) => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]); 
	const pageSize = 5;

	

	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
  const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);

	const handleChange = (person: Person) => {
		setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person])
	};
	
	const colums = [
		{ 
			field: "actions", 
			headerName: "", 
			width: 50, 
			renderCell: (params: GridRenderCellParams) => 
			
			<>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</> 
		},
		{ 
			field: "name", 
			headerName: "Name", 
			flex: 1,
			minWidth: 150, 
			renderCell: (params: GridRenderCellParams) => <>{params.value}</> 
		},
		{ 
			field: "category", 
			headerName: "Categories", 
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</> 
		},
		{ 
			field: "company", 
			headerName: "Company", 
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</> 
		}
	]
	return (
		<DataGrid 
			rows={People}
			columns={colums}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			pageSize={[pageSize]}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any)=> row.id}
		/>
	)
	


	
	
	
	
	;
};

export default Home;

//aca usamos libreria de mui DATAGRID https://mui.com/material-ui/react-table/
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/x-data-grid 


// NO HICE NI ADD Y COMMIT POARA CORREGIR LOS ERRORES QUEDE EN MINUTO 1:29

