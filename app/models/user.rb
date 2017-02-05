class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_token

  validates :password_digest, presence: true
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :fragments
  has_many :votes

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_token
    SecureRandom.urlsafe_base64
  end

  def ensure_token
    @session_token ||= User.generate_token
  end

  def reset_token!
    @session_token = User.generate_token
    self.save
    @session_token
  end

  def password=(password)
    @password = password
    @password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    BCrypt::Password.new(@password_digest).is_password?(password)
  end
end
