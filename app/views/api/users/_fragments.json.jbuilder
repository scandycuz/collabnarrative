json.fragments do
  fragments.each do |fragment|
      json.set! fragment.id do
        json.extract! fragment, :story_id, :body
      end
  end
end
