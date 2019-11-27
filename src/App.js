import React, {useState} from  'react'

const ObjetoModelo = {
  origen: '',
  destino: ''
}

function App() {
  const [Objeto, setObjeto] = useState(ObjetoModelo)
  return (
    <div>
      <input placeholder={'Origen'} value={Objeto.origen} onChange={(e)=>setObjeto({...Objeto, origen: e.target.value})}></input>
      <input placeholder={'Destino'} value={Objeto.destino} onChange={(e)=>setObjeto({...Objeto, destino: e.target.value})}></input>
      <button onClick={()=>{console.log(Objeto)}}>Confirmar</button>
    </div>
  );
}

export default App;
