import NavigasiList from "../../elements/NavigasiList"

const Navigasi = () => {
  return (
    <nav className="hidden w-4/5 md:block">
    <ul className="flex items-center justify-end w-full">
        <NavigasiList title="INTRO" href="#"/>
        <NavigasiList title="OVERVIEW" href="#" />
        <NavigasiList title="SPEAKERS" href="#" />
        <NavigasiList title="PROGRAMS" href="#" />
        <NavigasiList title="REGISTER" href="#" />
        <NavigasiList title="VENEU" href="#" />
        <NavigasiList title="SPONSORS" href="#" />
        <NavigasiList title="CONTACT" href="#" />
    </ul>
  </nav>
  )
}

export default Navigasi
