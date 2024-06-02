import VideoHighLightText from "../../components/fragments/Home/VideoHighLights/VideoHighLightText"
import VideoHighLightsItems from "../../components/fragments/Home/VideoHighLights/VideoHighLightsItems"
import SectionLayouts from "../../components/layouts/SectionLayouts"

const VideoHighLights = () => {
  return (
    <SectionLayouts flexLayouts="flex-col lg:flex-row">
      <VideoHighLightText/>
      <VideoHighLightsItems/>
    </SectionLayouts>
  )
}

export default VideoHighLights
