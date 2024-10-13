import { gql } from '@apollo/client';

export const GET_CAMERAS = gql`
  query {
    getCameras {
      id
      placeID
      userID
    }
  }
`;