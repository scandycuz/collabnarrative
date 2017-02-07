class Fragment < ActiveRecord::Base
  validates :body, length: { maximum: 250, allow_nil: true }

  belongs_to :user
  belongs_to :story
  has_many :votes
end
