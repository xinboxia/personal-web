export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
/*   token: "BQBjDG-DMdFvuAuzz8zbaM5MYHf4IDxljL_5CkqmEVNw0RuvNipfjBCAJCohem77OMeUPx3wPomNFfilTeBjBWCcN46YM5kDNHRZ84LqP7-u_zG4OrksnWyQN5koWXNJsmyaF05pmcW2OCcozSislpKd9nKxVsk"
 */};

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        
        case "SET_USER": 
            return {
                ...state, 
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_SAVEDTRACKS":
            return {
                ...state,
                savedTracks: action.savedTracks,
            }

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
}

export default reducer;