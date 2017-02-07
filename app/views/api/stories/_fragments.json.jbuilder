json.fragments do
  fragments.each do |fragment|
      json.set! fragment.id do
        json.extract! fragment, :user_id, :body
      end
  end
end
