function CampoEntrada({
  id,
  label,
  tipo,
  name,
  value,
  onchange,
  requerido,
  readonly,
  maxlength,
  msgvalido,
  msginvalido,
  entrada,
}) {
  return (
    <div class="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {entrada === "textarea" && (
        <textarea
          className="form-control"
          type={tipo}
          id={id}
          name={name}
          value={value}
          onChange={onchange}
          required={requerido}
          readOnly={readonly}
          maxLength={maxlength}
        />
      )}

      {entrada === "input" && (
        <input
          className="form-control"
          type={tipo}
          id={id}
          name={name}
          value={value}
          onChange={onchange}
          required={requerido}
          readOnly={readonly}
          maxLength={maxlength}
        />
      )}
      <div class="valid-feedback">{msgvalido}</div>
      <div class="invalid-feedback">{msginvalido}</div>
    </div>
  );
}

export default CampoEntrada;
