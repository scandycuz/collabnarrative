json.users do
  users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :username, :photo_url
      end
  end
end
