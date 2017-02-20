export const retrieveStories = (featured, success, error) => {
  $.get({
    url: 'api/stories',
    data: {featured},
    success,
    error
  })
}
