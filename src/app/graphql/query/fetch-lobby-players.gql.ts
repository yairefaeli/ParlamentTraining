import gql from 'graphql-tag';

export const fetchLobbyPlayers = gql`
    query getPlayers {
        getPlayers{
           name,
           status,
           createdAt
       }
    }
`;