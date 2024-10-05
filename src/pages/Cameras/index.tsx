import { Link } from 'react-router-dom'

export interface Camera {
  id: string;
  url: string;
  place: string;
  userID: string,
}

export interface CamerasProp {
  data: Camera[]
}

export function Cameras() {
  const cameras: Camera[] = [
    {
      id: "id1",
      place: "some place",
      url: "some url",
      userID: "userID"
    },
    {
      id: "id2",
      place: "some place",
      url: "some url",
      userID: "userID"
    },
    {
      id: "id3",
      place: "some place",
      url: "some url",
      userID: "userID"
    },
    {
      id: "id4",
      place: "some place",
      url: "some url",
      userID: "userID"
    },
  ]

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] w-full place-items-center' >
      {cameras.map((item: Camera) => (
        <Link key={item.id} to={"/cameras/" + item.id}>
          <div className="min-h-52 min-w-52 bg-black m-2">Camera</div>
        </Link>
      ))}
    </div>
  )
}

