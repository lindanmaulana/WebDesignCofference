import NavigasiList from "../../elements/NavigasiList"

const Navigasi = (props) => {
  const {herobannerRef, overviewRef, speakers, ourProgramRef, registerRef, venueRef, sponsorsRef, contactRef} = props
  
  return (
    <nav className="hidden w-4/5 md:block">
    <ul className="flex items-center justify-end w-full">
        <NavigasiList title="INTRO" linkRef={herobannerRef}/>
        <NavigasiList title="OVERVIEW" linkRef={overviewRef} />
        <NavigasiList title="SPEAKERS" linkRef={speakers} />
        <NavigasiList title="PROGRAMS" linkRef={ourProgramRef} />
        <NavigasiList title="REGISTER" linkRef={registerRef} />
        <NavigasiList title="VENEU" linkRef={venueRef} />
        <NavigasiList title="SPONSORS" linkRef={sponsorsRef} />
        <NavigasiList title="CONTACT" linkRef={contactRef} />
    </ul>
  </nav>
  )
}

export default Navigasi
