import { PlaceSection } from "../../components/PlaceSection";

export function Places() {
  return (
    <div className='flex flex-col w-full'>
      <PlaceSection title="Office" deviceCardProps={{
        connectedPeople: "1",
        deviceName: "camera",
        deviceType: "camera",
      }} />
      <PlaceSection title="Kitchen" deviceCardProps={{
        connectedPeople: "1",
        deviceName: "camera",
        deviceType: "camera",
      }} />
      <PlaceSection title="Living Room" deviceCardProps={{
        connectedPeople: "1",
        deviceName: "camera",
        deviceType: "camera",
      }} />
    </div>
  )
}

