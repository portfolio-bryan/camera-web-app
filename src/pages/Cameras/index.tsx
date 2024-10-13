import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_CAMERAS } from '../../queries/getCameras';

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
  const { loading, error, data } = useQuery(GET_CAMERAS, { errorPolicy: "all" });


  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const cameras = data.getCameras

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] w-full place-items-center' >
      {cameras?.map((item: Camera) => (
        <Link key={item.id} to={"/cameras/" + item.id}>
          <div className="min-h-52 min-w-52 bg-black m-2">Camera</div>
        </Link>
      ))}
    </div>
  )
}

