interface HeaderProsps {
  title: string;
}

export function Header(props: HeaderProsps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.title}</span></span>
  </header>
  )
}