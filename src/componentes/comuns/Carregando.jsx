function Carregando(props) {
  return (
    <>
      {!props.carregando ? (
        props.children
      ) : (
        <div class="spinner-border text-dark" role="status" id="carregando">
          <span class="visually">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Carregando;
