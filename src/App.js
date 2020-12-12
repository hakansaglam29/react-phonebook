import React, { useState } from 'react';
const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
      marginTop: 50,
    },
    inputs: {
      marginBottom: '10px',
      width: '200px',
      height: '20px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
      color: "white",
      fontWeight: 'bold',
    }
  }
}
function PhoneBookForm({ name, lastName, phone, handleNameChange, handleLastNameChange, handlePhoneChange, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        placeholder='Cooder'
        onChange={handleNameChange}
        value={name}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        placeholder='Byte'
        onChange={handleLastNameChange}
        value = {lastName}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        placeholder='8885559999'
        onChange={handlePhoneChange}
        value = {phone}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User'
      />
    </form>
  )
}
function InformationTable({info}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {info?.map(
        (table, index) => (
          <tr key={index} >
            <td style={style.tableCell}>{table.name}</td>
            <td style={style.tableCell}>{table.lastName}</td>
            <td style={style.tableCell}>{table.phone}</td>
        </tr>
        )
      )}
      </thead> 
    </table>
  );
};

function App(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState([]);


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = info.concat({ name, lastName, phone });
    function compare( a, b ) {
      let first = (a.lastName).toLowerCase();
      let second = (b.lastName).toLowerCase();
      if ( first < second ){
        return -1;
      }
      if ( first > second ){
        return 1;
      }
      return 0;
    }
    newInfo.sort( compare );
    setInfo(newInfo);
    setName("");
    setLastName("");
    setPhone("");
  };

  return (
    <section style={style.section}>
      <PhoneBookForm 
        handleNameChange={handleNameChange}
        handleLastNameChange={handleLastNameChange}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={handleSubmit}
        name = {name}
        lastName = {lastName}
        phone = {phone}

      />
      <InformationTable info={info} />
    </section>
  );
};
export default App;