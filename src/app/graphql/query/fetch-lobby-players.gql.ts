import gql from 'graphql-tag';

export const fetchLobbyPlayers = gql`
    mutation fetchLobbyPlayers($player-token: String!) {
        fetchLobbyPlayers(input: {
           token: $player-token
       })
    }
`;