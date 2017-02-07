@stories.each do |story|
  json.set! story.id do
    json.extract! story, :title
    json.partial! 'api/stories/fragments', fragments: story.fragments.where("published = ?", true)
  end
end
