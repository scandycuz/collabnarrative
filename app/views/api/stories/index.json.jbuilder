@stories.each do |story|
  json.set! story.id do
    json.extract! story, :title
    json.partial! 'api/stories/fragments', fragments: story.fragments.where("published = ?", true)
    json.partial! 'api/stories/users', users: story.users
  end
end
