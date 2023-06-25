function Carregando(props) {
  return (
    <>
      {!props.carregando ? (
        props.children
      ) : (
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Carregando;
