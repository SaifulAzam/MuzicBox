import * as types from "actions/action_types";
import initialState from "constants/initial_state";

export const playlist = (state = initialState.playlist, action) => {
  switch (action.type) {
    case types.SET_PLAYLIST:
      return action.payload;
    case types.MERGE_PLAYLIST:
      action.playlist_object.results = action.old_playlist_object.results.concat(action.playlist_object.results);
      return action.playlist_object;
    default:
      return state;
  }
};

export const search_song_value = (state = initialState.search_song_value, action) => {
  switch (action.type) {
    case types.SET_SEARCH_SONG_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export const filter_tag_value = (state = initialState.filter_tag_value, action) => {
  switch (action.type) {
    case types.SET_FILTER_TAG_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export const is_author_search = (state = initialState.is_author_search, action) => {
  switch (action.type) {
    case types.IS_AUTHOR_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export const ordering_type = (state = initialState.ordering_type, action) => {
  switch (action.type) {
    case types.SET_ORDER_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export const is_search_song_loading = (state = initialState.is_search_song_loading, action) => {
  switch (action.type) {
    case types.TOGGLE_SEARCH_SONG_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export const play_next_list = (state = initialState.play_next_list, action) => {
  switch (action.type) {
    case types.TOGGLE_PLAYNEXT_ITEM: {
      let new_play_next = [...action.old_play_next];
      let song_in_playlist_id = new_play_next.findIndex(song => song.id == action.song.id);
      if (song_in_playlist_id !== -1) {
        // removing item if it present in play_next_list
        new_play_next.splice(song_in_playlist_id, 1);
      } else {
        // if no such item in play_next_list then adding it
        new_play_next.push(action.song);
      }
      return new_play_next;
    }
    default:
      return state;
  }
};

export const scroll_to_song = (state = initialState.scroll_to_song, action) => {
  switch (action.type) {
    case types.SCROLL_TO_SONG:
      return action.payload;
    default:
      return state;
  }
};
