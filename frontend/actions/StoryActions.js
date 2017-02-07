export const REQUEST_FEATURED_STORIES = "REQUEST_FEATURED_STORIES";
export const RECEIVE_STORIES = "RECEIVE_STORIES";

export const requestFeaturedStories = () => ({
  type: REQUEST_FEATURED_STORIES,
  featured: true
});

export const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories
});
