import NavigasiList from "../../elements/NavigasiList"

const Navigasi = (props) => {
  const {herobannerRef, overviewRef, speakers, videoHighLightsRef} = props
  
  return (
    <nav className="hidden w-4/5 md:block">
    <ul className="flex items-center justify-end w-full">
        <NavigasiList title="INTRO" linkRef={herobannerRef}/>
        <NavigasiList title="OVERVIEW" linkRef={overviewRef} />
        <NavigasiList title="SPEAKERS" linkRef={speakers} />
        <NavigasiList title="PROGRAMS" linkRef={videoHighLightsRef} />
        <NavigasiList title="REGISTER" linkRef="register" />
        <NavigasiList title="VENEU" linkRef="veneu" />
        <NavigasiList title="SPONSORS" linkRef="sponsors" />
        <NavigasiList title="CONTACT" linkRef="contact" />
    </ul>
  </nav>
  )
}

export default Navigasi
