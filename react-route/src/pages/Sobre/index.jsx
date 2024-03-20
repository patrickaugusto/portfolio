
function Avatar({
    nome,
    sobre
  }) {
    return (
      <>
        <h1>{nome}</h1>
        <p>{sobre}</p>
      </>

    );
  }
  

function Sobre(){
    return(
        <Avatar
            nome="Igor"
            sobre="Estudante e cabosse"
        />
    )
}

export default Sobre
