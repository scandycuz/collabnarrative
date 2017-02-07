class Story < ActiveRecord::Base
  has_many :fragments
  has_many :users, through: :fragments
end
